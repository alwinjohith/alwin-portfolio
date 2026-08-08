"use client";

import { useEffect, useState } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]<>/\\|=+-*&^%$#@!";

function MatrixRain() {
  const [columns, setColumns] = useState<Array<{ id: number; left: string; duration: string; delay: string; chars: string }>>([]);

  useEffect(() => {
    const numColumns = Math.floor(window.innerWidth / 40);
    const newColumns = Array.from({ length: numColumns }, (_, i) => ({
      id: i,
      left: `${(i / numColumns) * 100}%`,
      duration: `${15 + Math.random() * 25}s`,
      delay: `${-Math.random() * 20}s`,
      chars: Array.from({ length: 20 + Math.floor(Math.random() * 30) }, () =>
        characters[Math.floor(Math.random() * characters.length)]
      ).join("\n"),
    }));
    setColumns(newColumns);
  }, []);

  return (
    <div className="matrix-rain">
      {columns.map((col) => (
        <div
          key={col.id}
          className="matrix-column"
          style={{
            left: col.left,
            "--duration": col.duration,
            "--delay": col.delay,
          } as React.CSSProperties}
        >
          {col.chars}
        </div>
      ))}
    </div>
  );
}

export default MatrixRain;
