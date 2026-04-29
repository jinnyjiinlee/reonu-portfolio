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

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 border-t border-border pt-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-text-muted">
            {labels.mainLabel}
          </p>
          <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            {tier.mainPrice}
            <span className="text-sm font-medium text-text-muted ml-1">
              {labels.priceUnit}
            </span>
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-text-muted">
            {labels.secondaryLabel}
          </p>
          <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-text-secondary">
            {tier.secondaryPrice}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
