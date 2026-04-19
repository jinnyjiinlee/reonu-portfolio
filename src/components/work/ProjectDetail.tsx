"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import { CATEGORY_LABEL } from "@/types/project";
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
  const categoryLabel = CATEGORY_LABEL[project.category][lang];

  return (
    <div className="pt-20">
      {/* Hero */}
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

      {/* Tags */}
      <section className="py-10 md:py-14 px-5 md:px-10 border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {project.tags[lang].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs border border-border rounded-full text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-20 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto space-y-6 md:space-y-8">
          {project.images.length > 0 ? (
            project.images.map((src, i) => (
              <motion.div
                key={`${src}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-sm bg-surface"
              >
                <Image
                  src={src}
                  alt={`${project.title[lang]} ${i + 1}`}
                  fill
                  sizes="(min-width: 1200px) 1200px, 100vw"
                  className="object-cover"
                />
              </motion.div>
            ))
          ) : (
            [0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="w-full aspect-video rounded-sm bg-surface"
              />
            ))
          )}
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
              href={`/${locale}/work`}
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
