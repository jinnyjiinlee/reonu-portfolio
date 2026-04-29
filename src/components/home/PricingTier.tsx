"use client";

import { motion } from "framer-motion";
import type { PricingLabels, PricingTier } from "@/data/pricing";

interface PricingTierProps {
  tier: PricingTier;
  labels: PricingLabels;
  lang: "ko" | "en";
}

export function PricingTierPanel({ tier, labels, lang }: PricingTierProps) {
  return (
    <motion.div
      key={tier.key}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
        {tier.title}
      </h3>
      <div className="mt-4 text-sm md:text-base text-text-secondary leading-relaxed max-w-xl">
        {tier.description[lang].map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {tier.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 text-xs border border-border rounded-full text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-10 border-t border-border pt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 md:gap-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-text-muted">
            {labels.mainLabel}
          </p>
          <p className="mt-2 flex items-baseline gap-1.5 text-3xl md:text-5xl font-bold tracking-tight leading-none">
            <span>{tier.mainPrice}</span>
            <span className="text-sm md:text-base font-medium text-text-muted">
              {labels.priceUnit}
            </span>
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-xs uppercase tracking-widest text-text-muted">
            {labels.secondaryLabel}
          </p>
          <p className="mt-2 text-lg md:text-xl font-semibold tracking-tight text-text-secondary leading-none">
            {tier.secondaryPrice}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
