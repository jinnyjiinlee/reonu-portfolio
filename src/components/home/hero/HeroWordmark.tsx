"use client";

import { motion, type MotionValue } from "framer-motion";
import { easeOut } from "@/lib/motion";

interface HeroWordmarkProps {
  scrollLabel: string;
  titleY: MotionValue<number>;
  titleScale: MotionValue<number>;
}

export function HeroWordmark({
  scrollLabel,
  titleY,
  titleScale,
}: HeroWordmarkProps) {
  return (
    <motion.div
      style={{ y: titleY, scale: titleScale }}
      className="relative max-w-[1400px] w-full mx-auto mt-10 lg:mt-0"
    >
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter text-foreground flex">
          {"REONU".split("").map((ch, i) => (
            <span
              key={ch + i}
              className="inline-block overflow-hidden pb-[0.05em]"
            >
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.5 + i * 0.06,
                  ease: easeOut,
                }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden md:flex flex-col items-end gap-1 pb-2"
        >
          <span className="text-xs uppercase tracking-[0.22em] text-text-muted">
            Est. 2017
          </span>
          <span className="text-sm font-medium text-foreground">
            &copy; 2017&ndash;26
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute right-0 -top-10 hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-text-muted"
      >
        <span>{scrollLabel}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-5 bg-foreground/40"
        />
      </motion.div>
    </motion.div>
  );
}
