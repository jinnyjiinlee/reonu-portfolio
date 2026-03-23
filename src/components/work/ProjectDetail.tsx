"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import type { Dictionary } from "@/types/dictionary";

interface ProjectDetailProps {
  project: Project;
  locale: string;
  dict: Dictionary;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectDetail({
  project,
  locale,
  dict,
  prevProject,
  nextProject,
}: ProjectDetailProps) {
  const lang = locale as "ko" | "en";

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: project.color }}
        />
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-5 md:px-10 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-widest text-white/60">
              {project.categoryLabel[lang]}
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {project.title[lang]}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-12 md:py-20 px-5 md:px-10 border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-text-muted">
                {dict.work.client}
              </span>
              <p className="mt-2 text-sm font-medium">{project.client}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-text-muted">
                {dict.work.category}
              </span>
              <p className="mt-2 text-sm font-medium">
                {project.categoryLabel[lang]}
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-text-muted">
                {dict.work.year}
              </span>
              <p className="mt-2 text-sm font-medium">{project.year}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-text-muted">
                {dict.work.role}
              </span>
              <p className="mt-2 text-sm font-medium">{project.role[lang]}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 md:py-20 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl"
          >
            {project.description[lang]}
          </motion.p>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-8 md:py-12 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto space-y-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full aspect-video rounded-sm"
              style={{
                backgroundColor: project.color,
                opacity: 1 - i * 0.15,
              }}
            />
          ))}
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-16">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link
                href={`/${locale}/work/${prevProject.slug}`}
                className="group flex flex-col"
              >
                <span className="text-xs uppercase tracking-widest text-text-muted">
                  {dict.work.prev}
                </span>
                <span className="mt-1 text-sm md:text-base font-medium group-hover:text-accent transition-colors">
                  {prevProject.title[lang]}
                </span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href={`/${locale}#work`}
              className="text-xs uppercase tracking-widest text-text-muted hover:text-foreground transition-colors"
            >
              {dict.work.backToList}
            </Link>

            {nextProject ? (
              <Link
                href={`/${locale}/work/${nextProject.slug}`}
                className="group flex flex-col text-right"
              >
                <span className="text-xs uppercase tracking-widest text-text-muted">
                  {dict.work.next}
                </span>
                <span className="mt-1 text-sm md:text-base font-medium group-hover:text-accent transition-colors">
                  {nextProject.title[lang]}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
