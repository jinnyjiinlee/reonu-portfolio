"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";

interface ServicesProps {
  locale: string;
  dict: Dictionary;
}

const categories = ["uxui", "bx", "edit"] as const;
const categoryLabels = ["A", "B", "C"] as const;

export function Services({ locale, dict }: ServicesProps) {
  return (
    <section className="py-24 md:py-40 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Sticky title + CTA */}
          <div className="lg:w-[280px] lg:flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold tracking-tight"
              >
                {dict.services.title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-12"
              >
                <p className="text-sm text-text-muted leading-relaxed">
                  {dict.services.ctaDesc}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-3 mt-6 text-lg font-bold text-foreground hover:text-accent transition-colors group"
                >
                  {dict.services.cta}
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right: Service categories */}
          <div className="flex-1 space-y-24 md:space-y-32">
            {categories.map((cat, i) => {
              const service = dict.services[cat];
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Category label */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-text-muted/30">
                      {categoryLabels[i]}/
                    </span>
                  </div>

                  {/* Large title */}
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
                    {service.title}
                  </h3>

                  {/* Category name */}
                  <p className="mt-4 text-sm text-text-muted uppercase tracking-widest">
                    {service.desc}
                  </p>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2.5 text-sm bg-foreground text-white rounded-full hover:bg-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
