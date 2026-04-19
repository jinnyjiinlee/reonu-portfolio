"use client";

import { motion } from "framer-motion";
import { processContent } from "@/data/process";

interface ProcessProps {
  locale: string;
}

export function Process({ locale }: ProcessProps) {
  const lang = locale as "ko" | "en";
  const { header, steps } = processContent;

  return (
    <section className="py-24 md:py-40 px-5 md:px-10 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {header.title[lang]}
          </h2>
          <div className="mt-6 text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
            {header.description[lang].map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-5xl md:text-6xl font-black text-text-muted/30 leading-none">
                {String(step.number).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl md:text-2xl font-bold tracking-tight">
                {step.title[lang]}
              </h3>
              <div className="mt-4 text-sm md:text-base text-text-secondary leading-relaxed">
                {step.body[lang].map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
