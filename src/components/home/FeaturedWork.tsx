"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";
import type { Dictionary } from "@/types/dictionary";

interface FeaturedWorkProps {
  locale: string;
  dict: Dictionary;
}

export function FeaturedWork({ locale, dict }: FeaturedWorkProps) {
  const lang = locale as "ko" | "en";
  const featured = getFeaturedProjects(4);

  return (
    <section id="work" className="py-24 md:py-40 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 md:mb-24"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-accent" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {dict.projects.title}
            </h2>
          </div>
          <Link
            href={`/${locale}/work`}
            className="hidden md:inline-flex text-sm font-medium text-foreground items-center gap-2 group"
          >
            {dict.projects.viewAll}
            <span className="inline-block w-6 h-px bg-foreground origin-left scale-x-100 group-hover:scale-x-[1.8] transition-transform" />
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14 md:gap-x-8 md:gap-y-20">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              className={i % 2 === 1 ? "md:translate-y-16" : ""}
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
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  {/* Darkening overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

                  {/* Index number */}
                  <span className="absolute top-5 left-5 text-white text-[11px] font-medium tabular-nums uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    {String(i + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
                  </span>

                  {/* Arrow badge */}
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

                  {/* Subtitle peek — bottom reveal */}
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
                  <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted shrink-0">
                    {project.categoryLabel?.[lang] ?? ""}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile "view all" */}
        <div className="md:hidden mt-14 flex justify-center">
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-3 px-6 py-3 border border-foreground rounded-full text-sm font-medium uppercase tracking-widest"
          >
            {dict.projects.viewAll}
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
