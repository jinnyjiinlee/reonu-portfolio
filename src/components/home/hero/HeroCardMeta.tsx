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
    <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between text-white mix-blend-difference">
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={`meta-${active.slug}`}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="flex flex-col gap-1"
          >
            <span className="text-xs uppercase tracking-[0.2em] opacity-80">
              {active.categoryLabel?.en ?? active.category}
            </span>
            <span className="text-sm font-medium leading-tight max-w-[20ch]">
              {active.title.en}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="text-xs tabular-nums opacity-80">
        {String(activeIdx + 1).padStart(2, "0")}/
        {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}
