"use client";

import { motion, type MotionValue } from "framer-motion";

interface HeroFrameProps {
  frameX: MotionValue<number>;
  frameY: MotionValue<number>;
}

export function HeroFrame({ frameX, frameY }: HeroFrameProps) {
  return (
    <>
      <motion.span
        aria-hidden
        style={{ x: frameX, y: frameY }}
        className="pointer-events-none absolute -inset-3 md:-inset-5 border border-foreground/10"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 -left-2 w-3 h-3 border-t border-l border-foreground/60"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 -right-2 w-3 h-3 border-t border-r border-foreground/60"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-2 -left-2 w-3 h-3 border-b border-l border-foreground/60"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-2 -right-2 w-3 h-3 border-b border-r border-foreground/60"
      />
    </>
  );
}
