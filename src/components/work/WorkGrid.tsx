"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { liveProjects } from "@/data/projects";
import type { Dictionary } from "@/types/dictionary";
import { WorkFilters, type FilterKey } from "./WorkFilters";
import { WorkCard } from "./WorkCard";

interface WorkGridProps {
  locale: string;
  dict: Dictionary;
}

export function WorkGrid({ locale, dict }: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const lang = locale as "ko" | "en";

  const sorted = useMemo(
    () => [...liveProjects].sort((a, b) => a.displayOrder - b.displayOrder),
    [],
  );

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? sorted
        : sorted.filter((p) => p.category === activeFilter),
    [activeFilter, sorted],
  );

  const filterLabels: Record<FilterKey, string> = {
    all: dict.projects.all,
    "ux-ui": dict.projects.uxui,
    branding: dict.projects.branding,
    editorial: dict.projects.editorial,
  };

  const counts: Record<FilterKey, number> = useMemo(
    () => ({
      all: sorted.length,
      "ux-ui": sorted.filter((p) => p.category === "ux-ui").length,
      branding: sorted.filter((p) => p.category === "branding").length,
      editorial: sorted.filter((p) => p.category === "editorial").length,
    }),
    [sorted],
  );

  return (
    <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-44 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 md:mb-14"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          {dict.work.title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-text-secondary max-w-xl">
          {dict.work.intro}
        </p>
      </motion.div>

      <WorkFilters
        active={activeFilter}
        onChange={setActiveFilter}
        labels={filterLabels}
        counts={counts}
      />

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <WorkCard
              key={project.id}
              project={project}
              locale={locale}
              lang={lang}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
