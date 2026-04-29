"use client";

import { useEffect, useRef } from "react";

interface Options {
  strength?: number; // px translate at edge
  radius?: number; // activation radius
}

// Subtle magnetic pull toward cursor. Disabled on touch devices.
export function useMagnetic<T extends HTMLElement>({
  strength = 14,
  radius = 90,
}: Options = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = "translate3d(0,0,0)";
        });
        return;
      }
      const factor = (1 - dist / radius) * strength;
      const tx = (dx / dist) * factor;
      const ty = (dy / dist) * factor;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = "translate3d(0,0,0)";
      });
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength, radius]);

  return ref;
}
