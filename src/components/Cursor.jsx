import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.slice(0, 8),
      ]);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* main cursor glow */}
      <div
        className="fixed z-[9999] pointer-events-none w-4 h-4 rounded-full
        bg-cyan-400 blur-md"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* trail */}
      {trail.map((t, i) => (
        <div
          key={t.id}
          className="fixed z-[9998] pointer-events-none rounded-full
          bg-cyan-400/30 blur-lg"
          style={{
            left: t.x,
            top: t.y,
            width: 20 - i * 2,
            height: 20 - i * 2,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  );
}