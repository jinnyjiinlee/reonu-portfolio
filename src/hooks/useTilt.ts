"use client";

import { useEffect, useRef } from "react";

interface Options {
  max?: number; // max rotation in deg
  perspective?: number;
  scale?: number;
}

// 3D tilt that follows the cursor. Applies to the ref element.
// Pointer-coarse devices are skipped.
export function useTilt<T extends HTMLElement>({
  max = 4,
  perspective = 900,
  scale = 1.02,
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
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      const ry = (px - 0.5) * 2 * max;
      const rx = -(py - 0.5) * 2 * max;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [max, perspective, scale]);

  return ref;
}
