"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface FeaturedWorkCardProps {
  project: Project;
  index: number;
  total: number;
  locale: string;
  lang: "ko" | "en";
}

export function FeaturedWorkCard({
  project,
  index,
  total,
  locale,
  lang,
}: FeaturedWorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      className={index % 2 === 1 ? "md:translate-y-16" : ""}
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
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

          <span className="absolute top-5 left-5 text-white text-xs font-medium tabular-nums uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>

          <div className="absolute top-5 right-5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <p className="text-white text-sm md:text-base leading-snug line-clamp-2">
              {project.subtitle[lang]}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="text-base md:text-lg font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
            {project.title[lang]}
          </h3>
          <span className="text-xs uppercase tracking-[0.2em] text-text-muted shrink-0">
            {project.categoryLabel?.[lang] ?? ""}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
