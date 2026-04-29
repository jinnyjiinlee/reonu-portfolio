"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

const FIRST = "HYERI";
const LAST = "GWON";

export function StudioHero() {
  return (
    <section className="relative min-h-[55vh] md:min-h-[70vh] flex items-end px-5 md:px-10 pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex items-center gap-4 mb-8 md:mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-text-muted tabular-nums">
            01 — Studio
          </span>
          <span className="h-px w-16 md:w-24 bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-text-muted tabular-nums">
            2026
          </span>
        </motion.div>

        <h1 className="font-bold tracking-tight leading-[0.88]">
          <DisplayLine text={FIRST} delay={0.05} />
          <DisplayLine text={LAST} delay={0.18} indent />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8"
        >
          <p className="text-lg md:text-xl text-text-secondary max-w-md">
            Brand &amp; Product Designer
            <span className="block text-text-muted text-sm md:text-base mt-1">
              Seoul · Independent practice
            </span>
          </p>

          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.7, ease: easeOut }}
            className="hidden sm:block h-px bg-foreground origin-left flex-1 max-w-[280px] mb-2"
          />
        </motion.div>
      </div>
    </section>
  );
}

function DisplayLine({
  text,
  delay,
  indent,
}: {
  text: string;
  delay: number;
  indent?: boolean;
}) {
  return (
    <span
      className={`block overflow-hidden ${indent ? "md:pl-[12vw]" : ""}`}
      aria-label={text}
    >
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, delay, ease: easeOut }}
        className="block text-[18vw] md:text-[15vw] lg:text-[13vw] leading-[0.88]"
      >
        {text}
      </motion.span>
    </span>
  );
}
