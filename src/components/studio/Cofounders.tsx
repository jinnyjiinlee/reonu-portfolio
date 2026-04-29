"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { founders, teamLabel } from "@/data/studioBio";
import { easeOut } from "@/lib/motion";

interface CofoundersProps {
  lang: "ko" | "en";
}

export function Cofounders({ lang }: CofoundersProps) {
  return (
    <section className="py-20 md:py-32 px-5 md:px-10 bg-surface">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.3em] text-text-muted tabular-nums">
                06
              </span>
              <span className="h-px w-10 bg-border" />
              <span className="text-xs uppercase tracking-[0.3em] text-foreground">
                {teamLabel[lang]}
              </span>
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-text-muted tabular-nums">
              02 / 02
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-12 md:mb-20 max-w-3xl">
            Two minds,
            <br />
            <span className="text-text-muted">one studio.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-14">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: easeOut,
                }}
                className="group"
              >
                <div className="relative aspect-[2250/3583] overflow-hidden rounded-sm bg-white">
                  <Image
                    src={f.src}
                    alt={`${f.name} — ${f.role[lang]}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.03] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.05] [background-image:url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22120%22%20height=%22120%22><filter%20id=%22n%22><feTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%222%22/></filter><rect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/></svg>')]" />
                  <span className="absolute top-4 left-4 text-2xs uppercase tracking-[0.3em] tabular-nums text-foreground/60">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <p className="text-lg md:text-xl font-semibold tracking-tight">
                    <span className="relative inline-block">
                      {f.name}
                      <span className="absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </span>
                  </p>
                  <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-text-muted shrink-0">
                    {f.role[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
