import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // disable on mobile
    const check = () => setIsDesktop(window.innerWidth > 768);
    check();
    window.addEventListener("resize", check);

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", check);
    };
  }, []);

  if (!isDesktop) return null;

  return (
  <div
  className="
    pointer-events-none fixed z-50
    w-[80px] h-[80px]
    rounded-full
    bg-cyan-200/12
    blur-[45px]
    transition-transform duration-200 ease-out
  "
  style={{
    transform: `translate(${pos.x - 40}px, ${pos.y - 40}px)`,
  }}
/>
    
  );
}