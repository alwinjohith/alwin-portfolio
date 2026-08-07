"use client";

import { useEffect, useRef } from "react";

const CODE_SYMBOLS = "01<>{}[]();:=*/+-_$#@%^&|~.,";
const SNIPPETS = ["const", "let", "fn", "return", "void", "main", "int", "loop", "if", "else", "import"];
const CHARS = "01" + CODE_SYMBOLS + SNIPPETS.join(" ");

const FONT_SIZE = 14;
const BG = [249, 249, 246] as const;

type Column = {
  x: number;
  headY: number;
  speed: number;
  chars: string[];
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const randInt = (min: number, max: number) => Math.floor(rand(min, max + 1));
const randomChar = () => CHARS[randInt(0, CHARS.length - 1)];

function createColumn(x: number, height: number): Column {
  return {
    x,
    headY: randInt(-60, height / FONT_SIZE) * FONT_SIZE,
    speed: rand(0.25, 0.9),
    chars: Array.from({ length: randInt(7, 14) }, () => randomChar()),
  };
}

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion =
      typeof window.matchMedia !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let width = 0;
    let height = 0;
    let columns: Column[] = [];
    const dpr = Math.min(typeof window.devicePixelRatio !== "undefined" ? window.devicePixelRatio : 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = `rgb(${BG[0]}, ${BG[1]}, ${BG[2]})`;
      ctx.fillRect(0, 0, width, height);
      columns = Array.from({ length: Math.ceil(width / FONT_SIZE) }, (_, i) =>
        createColumn(i * FONT_SIZE, height)
      );
    };

    const draw = () => {
      ctx.fillStyle = `rgba(${BG[0]}, ${BG[1]}, ${BG[2]}, 0.09)`;
      ctx.fillRect(0, 0, width, height);

      ctx.textAlign = "center";
      ctx.font = `${FONT_SIZE}px monospace`;

      for (const col of columns) {
        const trailLen = col.chars.length;
        for (let i = 0; i < trailLen; i++) {
          const y = col.headY - i * FONT_SIZE;
          if (y < -FONT_SIZE) break;
          if (y > height) continue;

          const depth = (trailLen - i) / trailLen;
          if (Math.random() < 0.008) col.chars[i] = randomChar();

          ctx.globalAlpha = 0.02 + depth * 0.07;
          ctx.fillStyle = "#111111";
          ctx.fillText(col.chars[i], col.x, y);
        }

        ctx.globalAlpha = 1;
        col.headY += col.speed;
        if (col.headY - trailLen * FONT_SIZE > height) {
          const idx = columns.indexOf(col);
          columns[idx] = createColumn(col.x, height);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-60"
    />
  );
}
