import { useEffect, useState } from "react";
import paw from "@/assets/paw.png";

export function PawCursor() {
  const [prints, setPrints] = useState<{ id: number; x: number; y: number; rot: number }[]>([]);

  useEffect(() => {
    let id = 0;
    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - last < 120) return;
      last = now;
      const print = { id: id++, x: e.clientX, y: e.clientY, rot: Math.random() * 60 - 30 };
      setPrints((p) => [...p.slice(-12), print]);
      setTimeout(() => setPrints((p) => p.filter((x) => x.id !== print.id)), 1400);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      {prints.map((p) => (
        <img
          key={p.id}
          src={paw}
          alt=""
          aria-hidden
          className="absolute w-6 h-6 transition-opacity duration-1000"
          style={{
            left: p.x - 12,
            top: p.y - 12,
            transform: `rotate(${p.rot}deg)`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
