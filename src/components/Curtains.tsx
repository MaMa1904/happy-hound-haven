import { useState } from "react";

export function Curtains({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    onOpen();
    setTimeout(() => setHidden(true), 1700);
  };

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Top valance */}
      <div
        className={`absolute top-0 left-0 right-0 h-16 bg-gradient-curtain shadow-soft pointer-events-auto ${opening ? "opacity-0 transition-opacity duration-700" : ""}`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--blush-deep) 0 30px, var(--blush) 30px 60px)",
          clipPath: "polygon(0 0, 100% 0, 100% 60%, 95% 100%, 90% 60%, 85% 100%, 80% 60%, 75% 100%, 70% 60%, 65% 100%, 60% 60%, 55% 100%, 50% 60%, 45% 100%, 40% 60%, 35% 100%, 30% 60%, 25% 100%, 20% 60%, 15% 100%, 10% 60%, 5% 100%, 0 60%)",
        }}
      />
      {/* Left curtain */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 pointer-events-auto ${opening ? "animate-curtain-l" : ""}`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--blush-deep) 0 22px, color-mix(in oklab, var(--blush) 80%, white) 22px 44px, var(--blush) 44px 66px)",
          boxShadow: "inset -30px 0 60px rgba(0,0,0,0.25)",
        }}
      />
      {/* Right curtain */}
      <div
        className={`absolute top-0 right-0 h-full w-1/2 pointer-events-auto ${opening ? "animate-curtain-r" : ""}`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--blush) 0 22px, color-mix(in oklab, var(--blush) 80%, white) 22px 44px, var(--blush-deep) 44px 66px)",
          boxShadow: "inset 30px 0 60px rgba(0,0,0,0.25)",
        }}
      />

      {!opening && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          <div className="text-center">
            <p className="font-script text-5xl md:text-7xl text-cream mb-6" style={{ color: "var(--cream)" }}>
              A surprise awaits...
            </p>
            <button
              onClick={handleOpen}
              className="px-10 py-4 rounded-full bg-cream text-primary font-display text-xl shadow-soft hover:scale-105 transition-transform"
              style={{ background: "var(--cream)", color: "var(--blush-deep)" }}
            >
              ✨ Open the curtains ✨
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
