"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  radius: number;
  pulseSpeed: number;
  pulseOffset: number;
  layer: number;
}

interface CircuitPath {
  points: { x: number; y: number }[];
  layer: number;
}

interface FlowCurve {
  cp1: { x: number; y: number };
  cp2: { x: number; y: number };
  end: { x: number; y: number };
  layer: number;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateScene(w: number, h: number) {
  const rand = seededRandom(42);
  const nodes: Node[] = [];
  const circuits: CircuitPath[] = [];
  const curves: FlowCurve[] = [];

  const gridSize = 80;
  const cols = Math.ceil(w / gridSize) + 2;
  const rows = Math.ceil(h / gridSize) + 2;

  for (let i = 0; i < 35; i++) {
    nodes.push({
      x: rand() * w,
      y: rand() * h,
      radius: 1.5 + rand() * 2.5,
      pulseSpeed: 0.3 + rand() * 0.5,
      pulseOffset: rand() * Math.PI * 2,
      layer: rand() < 0.5 ? 0 : 1,
    });
  }

  for (let i = 0; i < 18; i++) {
    const startCol = Math.floor(rand() * cols);
    const startRow = Math.floor(rand() * rows);
    const segments = 3 + Math.floor(rand() * 5);
    const points: { x: number; y: number }[] = [
      { x: startCol * gridSize, y: startRow * gridSize },
    ];

    for (let j = 0; j < segments; j++) {
      const prev = points[points.length - 1];
      if (rand() > 0.5) {
        points.push({ x: prev.x + (rand() > 0.5 ? 1 : -1) * gridSize * (1 + Math.floor(rand() * 3)), y: prev.y });
      } else {
        points.push({ x: prev.x, y: prev.y + (rand() > 0.5 ? 1 : -1) * gridSize * (1 + Math.floor(rand() * 3)) });
      }
    }
    circuits.push({ points, layer: rand() < 0.6 ? 0 : 1 });
  }

  for (let i = 0; i < 12; i++) {
    const startX = rand() * w;
    const startY = rand() * h;
    curves.push({
      cp1: { x: startX + (rand() - 0.5) * w * 0.4, y: startY + (rand() - 0.5) * h * 0.3 },
      cp2: { x: startX + (rand() - 0.5) * w * 0.5, y: startY + (rand() - 0.5) * h * 0.4 },
      end: { x: startX + (rand() - 0.5) * w * 0.6, y: startY + (rand() - 0.5) * h * 0.5 },
      layer: rand() < 0.5 ? 0 : 1,
    });
  }

  return { nodes, circuits, curves };
}

export default function SkillsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let scene = generateScene(1, 1);

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      scene = generateScene(w, h);
    }

    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const speed = 0.0003;

    function draw() {
      t += speed;
      ctx!.clearRect(0, 0, w, h);

      const driftX = Math.sin(t * 0.7) * 12;
      const driftY = Math.cos(t * 0.5) * 8;
      const driftX2 = Math.sin(t * 0.4 + 1) * 6;
      const driftY2 = Math.cos(t * 0.3 + 2) * 4;

      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";

      scene.circuits.forEach((path) => {
        if (path.points.length < 2) return;
        const dx = path.layer === 0 ? driftX : driftX2;
        const dy = path.layer === 0 ? driftY : driftY2;
        const opacity = path.layer === 0 ? 0.12 : 0.07;
        const lineWidth = path.layer === 0 ? 1 : 0.7;

        ctx!.beginPath();
        ctx!.moveTo(path.points[0].x + dx, path.points[0].y + dy);
        for (let i = 1; i < path.points.length; i++) {
          ctx!.lineTo(path.points[i].x + dx, path.points[i].y + dy);
        }
        ctx!.strokeStyle = `rgba(180, 180, 180, ${opacity})`;
        ctx!.lineWidth = lineWidth;
        ctx!.stroke();
      });

      scene.curves.forEach((curve) => {
        const dx = curve.layer === 0 ? driftX * 1.2 : driftX2 * 0.8;
        const dy = curve.layer === 0 ? driftY * 1.2 : driftY2 * 0.8;
        const opacity = curve.layer === 0 ? 0.08 : 0.05;

        ctx!.beginPath();
        ctx!.moveTo(0, curve.cp1.y + dy);
        ctx!.bezierCurveTo(
          curve.cp1.x + dx, curve.cp1.y + dy,
          curve.cp2.x + dx, curve.cp2.y + dy,
          curve.end.x + dx, curve.end.y + dy
        );
        ctx!.strokeStyle = `rgba(170, 170, 175, ${opacity})`;
        ctx!.lineWidth = 0.8;
        ctx!.stroke();
      });

      scene.nodes.forEach((node) => {
        const dx = node.layer === 0 ? driftX : driftX2;
        const dy = node.layer === 0 ? driftY : driftY2;
        const x = node.x + dx;
        const y = node.y + dy;
        const pulse = 0.5 + 0.5 * Math.sin(t * node.pulseSpeed * 6 + node.pulseOffset);
        const baseOpacity = node.layer === 0 ? 0.15 : 0.09;
        const opacity = baseOpacity * (0.6 + pulse * 0.4);
        const r = node.radius * (0.9 + pulse * 0.2);

        const grad = ctx!.createRadialGradient(x, y, 0, x, y, r * 4);
        grad.addColorStop(0, `rgba(160, 160, 165, ${opacity})`);
        grad.addColorStop(1, `rgba(160, 160, 165, 0)`);
        ctx!.beginPath();
        ctx!.arc(x, y, r * 4, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(x, y, r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(190, 190, 195, ${opacity * 1.5})`;
        ctx!.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className="skills-bg">
      <canvas ref={canvasRef} className="skills-bg-canvas" />
    </div>
  );
}
