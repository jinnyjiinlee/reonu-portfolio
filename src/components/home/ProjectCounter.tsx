"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function ProjectCounter() {
  return (
    <section className="py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black leading-none tracking-tighter text-foreground">
            {projects.length}
          </span>
          <p className="text-sm md:text-base text-text-muted uppercase tracking-[0.3em] mt-2">
            Projects Completed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
