"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface WorkCardProps {
  project: Project;
  locale: string;
  lang: "ko" | "en";
}

export function WorkCard({ project, locale, lang }: WorkCardProps) {
  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35 }}
    >
      <Link href={`/${locale}/work/${project.slug}`} className="group block">
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
          <span className="text-xs uppercase tracking-widest text-text-muted shrink-0">
            {project.categoryLabel?.[lang] ?? ""}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
