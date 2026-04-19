"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProjects, liveProjects } from "@/data/projects";
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {dict.projects.title}
          </h2>
          <Link
            href={`/${locale}/work`}
            className="text-sm font-medium text-foreground inline-flex items-center gap-2 group"
          >
            {dict.projects.viewAll}
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
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
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">
                    {project.title[lang]}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-text-muted shrink-0">
                    {project.categoryLabel?.[lang] ?? ""}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-xs uppercase tracking-widest text-text-muted text-center">
          {liveProjects.length}&nbsp;Projects
        </p>
      </div>
    </section>
  );
}
