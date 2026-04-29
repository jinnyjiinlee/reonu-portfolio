"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("cursor-custom");

    const onMove = (e: MouseEvent) => {
      const el = dotRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const labelEl = target.closest<HTMLElement>("[data-cursor-label]");
      if (labelEl) {
        setLabel(labelEl.dataset.cursorLabel || "");
        setHovering(true);
        return;
      }
      setLabel(null);
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']",
      );
      setHovering(!!interactive);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("cursor-custom");
    };
  }, []);

  const sizeClass = label
    ? "w-24 h-24 bg-foreground"
    : hovering
      ? "w-16 h-16 bg-white"
      : pressed
        ? "w-5 h-5 bg-white"
        : "w-6 h-6 bg-white";

  return (
    <div
      ref={dotRef}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[100] rounded-full mix-blend-difference flex items-center justify-center text-white text-[11px] font-medium uppercase tracking-[0.18em] transition-[width,height,opacity,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${sizeClass} ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ willChange: "transform" }}
    >
      <span
        className={`transition-opacity duration-200 ${label ? "opacity-100 delay-100" : "opacity-0"}`}
      >
        {label}
      </span>
    </div>
  );
}
