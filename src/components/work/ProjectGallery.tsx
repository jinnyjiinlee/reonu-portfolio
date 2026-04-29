"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import type { Project } from "@/types/project";

interface ProjectGalleryProps {
  project: Project;
  lang: "ko" | "en";
}

export function ProjectGallery({ project, lang }: ProjectGalleryProps) {
  return (
    <section className="py-12 md:py-20 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto space-y-6 md:space-y-8">
        {project.images.length > 0
          ? project.images.map((src, i) => (
              <motion.div
                key={`${src}-${i}`}
                initial={{ clipPath: "inset(8% 0 8% 0)", opacity: 0 }}
                whileInView={{ clipPath: "inset(0% 0 0% 0)", opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, ease: easeOut }}
                className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-sm bg-surface"
              >
                <motion.div
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.4, ease: easeOut }}
                  className="absolute inset-0"
                >
                  <Image
                    src={src}
                    alt={`${project.title[lang]} ${i + 1}`}
                    fill
                    sizes="(min-width: 1200px) 1200px, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            ))
          : [0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="w-full aspect-video rounded-sm bg-surface"
              />
            ))}
      </div>
    </section>
  );
}
