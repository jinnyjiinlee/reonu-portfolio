"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import { pricingContent } from "@/data/pricing";

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
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl md:text-5xl font-bold text-text-muted/30">
                  {categoryLabels[i]}/
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
                {tier.description[lang].join(" ")}
              </h3>

              <p className="mt-4 text-sm text-text-muted uppercase tracking-widest">
                {tier.title}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {tier.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2.5 text-sm bg-foreground text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
