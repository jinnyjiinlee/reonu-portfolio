"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";

interface StatementProps {
  dict: Dictionary;
}

export function Statement({ dict }: StatementProps) {
  return (
    <section className="py-32 md:py-48 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Large statement text */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-bold leading-[1.05] tracking-tight text-foreground"
        >
          {dict.statement.text}
        </motion.h2>

        {/* Body paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-24 max-w-2xl ml-auto text-base md:text-lg text-text-secondary leading-relaxed"
        >
          {dict.statement.body}
        </motion.p>
      </div>
    </section>
  );
}
