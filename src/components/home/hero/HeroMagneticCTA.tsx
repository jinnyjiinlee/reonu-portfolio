"use client";

import { motion, type MotionValue } from "framer-motion";
import { easeOut } from "@/lib/motion";

interface HeroMagneticCTAProps {
  ctaX: MotionValue<number>;
  ctaY: MotionValue<number>;
}

export function HeroMagneticCTA({ ctaX, ctaY }: HeroMagneticCTAProps) {
  return (
    <motion.div
      style={{ x: ctaX, y: ctaY }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-foreground text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl relative"
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full border border-foreground/40 animate-[ping_1.6s_ease-out_infinite]"
        />
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="relative"
        >
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
