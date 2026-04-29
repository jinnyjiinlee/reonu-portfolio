"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface ProjectHeroProps {
  project: Project;
  lang: "ko" | "en";
  categoryLabel: string;
}

export function ProjectHero({ project, lang, categoryLabel }: ProjectHeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden bg-surface">
      {project.thumbnail && (
        <Image
          src={project.thumbnail}
          alt={project.title[lang]}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-5 md:px-10 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-white/70">
            {categoryLabel}
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {project.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
            {project.subtitle[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
