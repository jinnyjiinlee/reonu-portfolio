"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { liveProjects } from "@/data/projects";
import type { Dictionary } from "@/types/dictionary";
import type { Category } from "@/types/project";

interface WorkGridProps {
  locale: string;
  dict: Dictionary;
}

type FilterKey = "all" | Category;

const filters: { key: FilterKey }[] = [
  { key: "all" },
  { key: "ux-ui" },
  { key: "branding" },
  { key: "editorial" },
];

export function WorkGrid({ locale, dict }: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const lang = locale as "ko" | "en";

  const sorted = useMemo(
    () => [...liveProjects].sort((a, b) => a.displayOrder - b.displayOrder),
    []
  );

  const filtered = useMemo(
    () => (activeFilter === "all" ? sorted : sorted.filter((p) => p.category === activeFilter)),
    [activeFilter, sorted]
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

      <div className="flex gap-2 md:gap-3 mb-10 md:mb-14 flex-wrap">
        {filters.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors duration-200 inline-flex items-center gap-2 ${
                isActive
                  ? "bg-foreground text-white border-foreground"
                  : "bg-transparent text-text-secondary border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {filterLabels[f.key]}
              <span
                className={`text-[9px] tabular-nums ${
                  isActive ? "text-white/70" : "text-text-muted"
                }`}
              >
                {String(counts[f.key]).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35 }}
            >
              <Link
                href={`/${locale}/work/${project.slug}`}
                className="group block"
              >
                <div
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-sm"
                  style={{ backgroundColor: project.color }}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title[lang]}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
                  <div className="absolute top-3 right-3 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H9M17 7V15"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="text-sm md:text-base font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                    {project.title[lang]}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-text-muted shrink-0">
                    {project.categoryLabel?.[lang] ?? ""}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
