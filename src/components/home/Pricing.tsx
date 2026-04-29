"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { pricingContent, type PricingKey } from "@/data/pricing";
import { PricingTierPanel } from "./PricingTier";

interface PricingProps {
  locale: string;
}

export function Pricing({ locale }: PricingProps) {
  const lang = locale as "ko" | "en";
  const [activeKey, setActiveKey] = useState<PricingKey>("bx");
  const { left, labels, tiers } = pricingContent;
  const activeTier = tiers.find((t) => t.key === activeKey) ?? tiers[0];

  return (
    <section className="py-24 md:py-40 px-5 md:px-10 border-t border-border">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {left.title}
          </h2>
          <div className="mt-6 text-sm md:text-base text-text-secondary leading-relaxed">
            {left.description[lang].map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="mt-8 text-xs md:text-sm text-text-muted leading-relaxed">
            {left.note[lang].map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-foreground group"
          >
            {left.cta}
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </motion.div>

        <div>
          <div className="flex gap-2 mb-10 border-b border-border">
            {tiers.map((tier) => {
              const isActive = activeKey === tier.key;
              return (
                <button
                  key={tier.key}
                  onClick={() => setActiveKey(tier.key)}
                  className={`relative px-4 md:px-6 py-3 text-sm md:text-base font-semibold tracking-wide transition-colors ${
                    isActive ? "text-foreground" : "text-text-muted"
                  }`}
                >
                  {tier.tabLabel}
                  {isActive && (
                    <motion.span
                      layoutId="pricing-tab-indicator"
                      className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-foreground"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <PricingTierPanel tier={activeTier} labels={labels} lang={lang} />
        </div>
      </div>
    </section>
  );
}
