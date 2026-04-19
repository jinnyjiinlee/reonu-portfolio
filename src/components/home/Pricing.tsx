"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { pricingContent, type PricingKey } from "@/data/pricing";

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
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
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

          <motion.div
            key={activeTier.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              {activeTier.title}
            </h3>
            <div className="mt-4 text-sm md:text-base text-text-secondary leading-relaxed max-w-xl">
              {activeTier.description[lang].map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {activeTier.tags.map((tag) => (
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
                  {activeTier.mainPrice}
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
                  {activeTier.secondaryPrice}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
