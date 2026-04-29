"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";
import type { Dictionary } from "@/types/dictionary";
import { FeaturedWorkCard } from "./FeaturedWorkCard";

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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
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
            <FeaturedWorkCard
              key={project.id}
              project={project}
              index={i}
              total={featured.length}
              locale={locale}
              lang={lang}
            />
          ))}
        </div>

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
