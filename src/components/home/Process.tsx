"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processContent } from "@/data/process";

interface ProcessProps {
  locale: string;
}

const labels = {
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
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-accent" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                Process
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
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
          {/* Desktop: horizontal progress line */}
          <div className="hidden md:block absolute top-[2.75rem] left-0 right-0 h-px bg-border pointer-events-none">
            <motion.div
              style={{ scaleX: lineScale, originX: 0 }}
              className="h-full bg-accent"
            />
          </div>

          {/* Mobile: vertical progress line */}
          <div className="md:hidden absolute top-0 bottom-0 left-[1.375rem] w-px bg-border pointer-events-none">
            <motion.div
              style={{ scaleY: lineScale, originY: 0 }}
              className="w-full h-full bg-accent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14 md:pl-0 group"
              >
                {/* Dot on the timeline */}
                <div className="absolute md:relative left-4 md:left-auto top-1 md:top-auto md:mb-8 z-10">
                  <div className="relative w-5 h-5 md:w-6 md:h-6 rounded-full bg-surface border-2 border-border group-hover:border-accent transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-accent"
                    />
                  </div>
                </div>

                <div className="md:pr-4">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-text-muted font-medium">
                      Step {String(step.number).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-accent font-semibold">
                      · {labels[lang][i]}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold tracking-tight leading-snug mb-3">
                    {step.title[lang]}
                  </h3>

                  <div className="text-sm text-text-secondary leading-relaxed">
                    {step.body[lang].map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
