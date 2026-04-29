"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import { pricingContent } from "@/data/pricing";
import { easeOut } from "@/lib/motion";

interface ServicesProps {
  locale: string;
  dict: Dictionary;
}

const categoryLabels = ["A", "B", "C"] as const;

export function Services({ locale, dict }: ServicesProps) {
  const lang = locale as "ko" | "en";
  const tiers = pricingContent.tiers;

  return (
    <section className="py-24 md:py-40 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold tracking-tight mb-16 md:mb-24"
        >
          {dict.services.title}
        </motion.h2>

        <div className="space-y-24 md:space-y-32">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="group/tier"
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl md:text-5xl font-bold text-text-muted/30 transition-colors duration-500 group-hover/tier:text-accent/40">
                  {categoryLabels[i]}/
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
                {tier.description[lang].map((word, idx) => (
                  <motion.span
                    key={`${tier.key}-${idx}`}
                    initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.04,
                      ease: easeOut,
                    }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h3>

              <p className="mt-4 text-sm text-text-muted uppercase tracking-widest">
                {tier.title}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {tier.tags.map((tag, idx) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + idx * 0.04,
                      ease: easeOut,
                    }}
                    className="px-5 py-2.5 text-sm bg-text-muted/30 text-foreground rounded-full transition-all duration-300 hover:bg-foreground hover:text-background hover:-translate-y-0.5 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
