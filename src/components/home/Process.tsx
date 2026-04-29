"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processContent } from "@/data/process";
import { ProcessStepCard } from "./ProcessStepCard";

interface ProcessProps {
  locale: string;
}

const shortLabels = {
  ko: ["상담", "준비", "제작", "전달"],
  en: ["Scope", "Plan", "Design", "Deliver"],
} as const;

export function Process({ locale }: ProcessProps) {
  const lang = locale as "ko" | "en";
  const { header, steps } = processContent;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 md:py-40 px-5 md:px-10 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {header.title[lang]}
            </h2>
          </div>
          <div className="text-base md:text-lg text-text-secondary leading-relaxed max-w-md">
            {header.description[lang].map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </motion.div>

        <div ref={containerRef} className="relative">
          <div className="hidden md:block absolute top-[2.75rem] left-0 right-0 h-px bg-border pointer-events-none">
            <motion.div
              style={{ scaleX: lineScale, originX: 0 }}
              className="h-full bg-accent"
            />
          </div>

          <div className="md:hidden absolute top-0 bottom-0 left-[1.375rem] w-px bg-border pointer-events-none">
            <motion.div
              style={{ scaleY: lineScale, originY: 0 }}
              className="w-full h-full bg-accent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8">
            {steps.map((step, i) => (
              <ProcessStepCard
                key={step.number}
                step={step}
                index={i}
                lang={lang}
                shortLabel={shortLabels[lang][i]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
