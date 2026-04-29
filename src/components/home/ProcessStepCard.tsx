"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/data/process";

interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
  lang: "ko" | "en";
  shortLabel: string;
}

export function ProcessStepCard({
  step,
  index,
  lang,
  shortLabel,
}: ProcessStepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-14 md:pl-0 group"
    >
      <div className="absolute md:relative left-4 md:left-auto top-1 md:top-auto md:mb-8 z-10">
        <div className="relative w-5 h-5 md:w-6 md:h-6 rounded-full bg-surface border-2 border-border group-hover:border-accent transition-colors duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-accent"
          />
        </div>
      </div>

      <div className="md:pr-4">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-xs uppercase tracking-[0.2em] text-text-muted font-medium">
            Step {String(step.number).padStart(2, "0")}
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-accent font-semibold">
            · {shortLabel}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold tracking-tight leading-snug mb-3">
          {step.title[lang]}
        </h3>

        <div className="text-sm text-text-secondary leading-relaxed">
          {step.body[lang].map((line, j) => (
            <p key={j}>{line}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
