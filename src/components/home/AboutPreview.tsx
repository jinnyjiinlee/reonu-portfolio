"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";

interface AboutPreviewProps {
  locale: string;
  dict: Dictionary;
}

export function AboutPreview({ locale, dict }: AboutPreviewProps) {
  const stats = [
    { value: "9+", label: dict.about.yearsExp },
    { value: "24+", label: dict.about.projectsDone },
    { value: "3", label: dict.about.categories },
  ];

  return (
    <section className="py-24 md:py-40 px-5 md:px-10 bg-surface">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-text-muted font-medium">
              03
            </span>
            <div className="mt-2 w-12 h-[1px] bg-border" />
            <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight">
              {dict.about.title}
            </h2>
            <p className="mt-6 text-text-secondary leading-relaxed">
              {dict.about.bio}
            </p>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-foreground hover:text-accent transition-colors group"
            >
              {dict.about.viewMore}
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
