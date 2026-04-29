"use client";

import { AnimatePresence, motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import type { Project } from "@/types/project";

interface HeroCardMetaProps {
  active: Project | undefined;
  activeIdx: number;
  total: number;
}

export function HeroCardMeta({ active, activeIdx, total }: HeroCardMetaProps) {
  return (
    <div className="mt-5 flex items-end justify-between gap-4">
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={`meta-${active.slug}`}
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -6, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="flex flex-col gap-1.5 min-w-0"
          >
            <span className="text-2xs uppercase tracking-[0.25em] text-text-muted">
              {active.categoryLabel?.en ?? active.category}
            </span>
            <span className="text-sm md:text-base font-medium leading-tight text-foreground truncate">
              {active.title.en}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="text-2xs tabular-nums text-text-muted shrink-0">
        {String(activeIdx + 1).padStart(2, "0")} /
        {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}
