"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Dictionary } from "@/types/dictionary";

interface FeaturedWorkProps {
  locale: string;
  dict: Dictionary;
}

export function FeaturedWork({ locale, dict }: FeaturedWorkProps) {
  // Show top 4 featured projects as visual showcase
  const featured = projects.slice(0, 4);

  return (
    <section id="work" className="py-24 md:py-40 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header with project count */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {dict.projects.title}
          </h2>
          <span className="text-sm text-text-muted">
            {projects.length} Projects
          </span>
        </motion.div>

        {/* Visual project showcase */}
        <div className="space-y-24 md:space-y-32">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href={`/${locale}/work/${project.slug}`}
                className="group block relative"
              >
                {/* Background repeating text */}
                <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none -z-10">
                  <div className="flex whitespace-nowrap gap-8">
                    {[...Array(3)].map((_, j) => (
                      <span
                        key={j}
                        className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-black text-surface tracking-tighter select-none"
                      >
                        {project.categoryLabel[locale as "ko" | "en"]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project image area */}
                <div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-sm">
                  <div
                    className="absolute inset-0 group-hover:scale-[1.03] transition-transform duration-700"
                    style={{ backgroundColor: project.color }}
                  />
                  {/* Overlay info */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-white/60">
                          {project.categoryLabel[locale as "ko" | "en"]} &mdash; {project.year}
                        </span>
                        <h3 className="mt-2 text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                          {project.title[locale as "ko" | "en"]}
                        </h3>
                        <p className="mt-1 text-sm text-white/60">
                          {project.client}
                        </p>
                      </div>
                      {/* Arrow */}
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Remaining projects as minimal list */}
        <div className="mt-24 md:mt-32">
          <div className="space-y-0">
            {projects.slice(4).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <Link
                  href={`/${locale}/work/${project.slug}`}
                  className="group block border-t border-border py-5 md:py-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="flex items-center gap-6">
                      <span className="text-xs text-text-muted w-6">
                        {String(i + 5).padStart(2, "0")}
                      </span>
                      <h3 className="text-base md:text-lg font-semibold tracking-tight group-hover:text-accent transition-colors duration-200">
                        {project.title[locale as "ko" | "en"]}
                      </h3>
                    </div>
                    <div className="flex items-center gap-6 pl-12 md:pl-0">
                      <span className="text-xs uppercase tracking-widest text-text-muted">
                        {project.categoryLabel[locale as "ko" | "en"]}
                      </span>
                      <span className="text-xs text-text-muted">{project.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
