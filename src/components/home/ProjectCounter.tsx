"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { liveProjects } from "@/data/projects";
import { easeOut } from "@/lib/motion";

interface ProjectCounterProps {
  locale: string;
}

export function ProjectCounter({ locale }: ProjectCounterProps) {
  return (
    <section className="py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center">
        <Link
          href={`/${locale}/work`}
          className="group inline-flex flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-8xl md:text-9xl lg:text-display font-black leading-none tracking-tighter text-foreground group-hover:text-accent transition-colors duration-500"
          >
            {liveProjects.length}
          </motion.span>
        </Link>
      </div>
    </section>
  );
}
