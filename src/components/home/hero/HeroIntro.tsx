"use client";

import Link from "next/link";
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
  locale?: string;
}

export function HeroIntro({ intro, activeIdx, locale = "en" }: HeroIntroProps) {
  // Split the intro at the first period to surface a punchy lead and a softer
  // body. Falls back to the whole string if no period is found.
  const periodIdx = intro.indexOf(".");
  const lead = periodIdx > 0 ? intro.slice(0, periodIdx + 1) : intro;
  const body = periodIdx > 0 ? intro.slice(periodIdx + 1).trim() : "";
  const keyword = keywords[activeIdx % keywords.length];

  return (
    <div className="lg:w-[420px] pt-4 lg:pt-8 flex flex-col gap-7">
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-2xs uppercase tracking-[0.3em] text-text-muted flex items-center gap-3"
      >
        <span className="inline-block h-1 w-6 bg-foreground/40" />
        Design Studio · Seoul · Est 2017
      </motion.span>

      <motion.p
        initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
        className="text-xl md:text-2xl leading-[1.35] tracking-tight font-semibold text-foreground"
      >
        {lead}
      </motion.p>

      {body && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
          className="text-sm md:text-base leading-relaxed text-text-secondary"
        >
          {body}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="flex items-center gap-3"
      >
        <span className="text-2xs uppercase tracking-[0.3em] text-text-muted">
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <Link
          href={`/${locale}/work`}
          data-cursor-label="WORK"
          className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-foreground"
        >
          <span className="relative">
            View selected work
            <span className="absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] scale-x-100 group-hover:scale-x-0" />
          </span>
          <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
            →
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
