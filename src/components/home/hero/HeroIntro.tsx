"use client";

import { AnimatePresence, motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

const keywords = [
  "UX·UI",
  "BRANDING",
  "EDITORIAL",
  "IDENTITY",
  "SYSTEM",
  "MOTION",
];

interface HeroIntroProps {
  intro: string;
  activeIdx: number;
}

export function HeroIntro({ intro, activeIdx }: HeroIntroProps) {
  const introWords = intro.split(/\s+/);
  const keyword = keywords[activeIdx % keywords.length];

  return (
    <div className="lg:w-[380px] pt-4 lg:pt-8 flex flex-col gap-8">
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-xs uppercase tracking-[0.22em] text-text-muted"
      >
        Design Studio · Seoul
      </motion.span>

      <p className="text-sm md:text-base leading-relaxed text-text-secondary">
        {introWords.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              delay: 0.25 + i * 0.025,
              ease: easeOut,
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </p>

      <div className="flex items-center gap-3 h-6 overflow-hidden">
        <span className="text-xs uppercase tracking-[0.22em] text-text-muted">
          Focus
        </span>
        <div className="relative h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={keyword}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="block text-sm font-semibold tracking-wide text-foreground"
            >
              {keyword}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
