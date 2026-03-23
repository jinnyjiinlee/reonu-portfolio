"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";

interface ContactCTAProps {
  locale: string;
  dict: Dictionary;
}

export function ContactCTA({ locale, dict }: ContactCTAProps) {
  return (
    <section className="py-24 md:py-40 px-5 md:px-10 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              {dict.contact.ctaDesc}
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {dict.contact.cta}
            </h2>
          </div>

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-3 text-lg font-bold text-foreground hover:text-accent transition-colors group"
          >
            {dict.services.cta}
            <span className="text-2xl group-hover:translate-x-2 transition-transform">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
