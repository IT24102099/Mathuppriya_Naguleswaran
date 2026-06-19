"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Set variables directly on the body for globally accessible CSS coordinates
      document.body.style.setProperty("--x", `${e.clientX}px`);
      document.body.style.setProperty("--y", `${e.clientY}px`);
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    // Add custom cursor class to body
    document.body.classList.add("custom-cursor-enabled");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Global Mouse Glow Layer */}
      <div className="fixed inset-0 pointer-events-none z-30 cursor-glow-bg opacity-100 transition-opacity duration-300" />

      {/* Modern Cursor Pointer (Desktop only) */}
      <div
        className="hidden lg:block fixed w-8 h-8 rounded-full border border-purple-500/30 bg-purple-500/5 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out"
        style={{ left: coords.x, top: coords.y }}
      />
      <div
        className="hidden lg:block fixed w-1.5 h-1.5 rounded-full bg-purple-400 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{ left: coords.x, top: coords.y }}
      />
    </>
  );
}
