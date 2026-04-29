"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import { CATEGORY_LABEL } from "@/types/project";
import type { Dictionary } from "@/types/dictionary";
import { ProjectHero } from "./ProjectHero";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectNavigation } from "./ProjectNavigation";

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
    <div className="pt-32 md:pt-44">
      <ProjectHero project={project} lang={lang} categoryLabel={categoryLabel} />

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

      <ProjectGallery project={project} lang={lang} />

      <ProjectNavigation
        prevProject={prevProject}
        nextProject={nextProject}
        locale={locale}
        lang={lang}
        dict={dict}
      />
    </div>
  );
}
