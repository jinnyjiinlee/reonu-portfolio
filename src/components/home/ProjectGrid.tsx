"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import type { Dictionary } from "@/types/dictionary";
import type { Category } from "@/types/project";

interface ProjectGridProps {
  locale: string;
  dict: Dictionary;
}

const filters: { key: string; category: string | null }[] = [
  { key: "all", category: null },
  { key: "uxui", category: "ux-ui" },
  { key: "bx", category: "bx" },
  { key: "edit", category: "edit" },
];

export function ProjectGrid({ locale, dict }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filterLabels: Record<string, string> = {
    all: dict.projects.all,
    "ux-ui": dict.projects.uxui,
    bx: dict.projects.bx,
    edit: dict.projects.edit,
  };

  return (
    <section id="work" className="py-24 md:py-40 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-text-muted font-medium">
            02
          </span>
          <div className="mt-2 w-12 h-[1px] bg-border" />
          <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {dict.projects.title}
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {filters.map((f) => {
            const isActive =
              activeFilter === (f.category ?? "all");
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.category ?? "all")}
                className={`relative text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "bg-foreground text-white border-foreground"
                    : "bg-transparent text-text-secondary border-border hover:border-foreground"
                }`}
              >
                {filterLabels[f.category ?? "all"]}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/${locale}/work/${project.slug}`}
                  className="group block relative overflow-hidden rounded-sm aspect-[4/3]"
                >
                  {/* Placeholder color block */}
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundColor: project.color }}
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-4 md:p-5">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[10px] uppercase tracking-widest text-white/60">
                        {project.categoryLabel[locale as "ko" | "en"]}
                      </span>
                      <h3 className="mt-1 text-sm font-semibold text-white leading-tight">
                        {project.title[locale as "ko" | "en"]}
                      </h3>
                      <p className="mt-1 text-[11px] text-white/60">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-3 right-3 text-[10px] font-medium text-white/80 bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    {project.year}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
