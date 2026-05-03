"use client";

import { motion, type MotionValue } from "framer-motion";
import { easeOut } from "@/lib/motion";

interface HeroWordmarkProps {
  titleY: MotionValue<number>;
}

export function HeroWordmark({ titleY }: HeroWordmarkProps) {
  return (
    <motion.div
      style={{ y: titleY }}
      className="relative max-w-[1400px] w-full mx-auto mt-6 lg:mt-0 z-0"
    >
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-[clamp(72px,22vw,300px)] font-black leading-[0.82] tracking-[-0.04em] text-foreground flex">
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

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden md:block text-sm font-medium text-foreground pb-4 lg:pb-6 shrink-0"
        >
          &copy; 2017&ndash;26
        </motion.span>
      </div>
    </motion.div>
  );
}
