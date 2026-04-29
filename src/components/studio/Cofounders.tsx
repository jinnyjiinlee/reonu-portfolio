"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { founders, teamLabel } from "@/data/studioBio";

interface CofoundersProps {
  lang: "ko" | "en";
}

export function Cofounders({ lang }: CofoundersProps) {
  return (
    <section className="py-16 md:py-24 px-5 md:px-10 bg-surface">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-10">
            {teamLabel[lang]}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {founders.map((f) => (
              <div key={f.name}>
                <div className="relative aspect-[2250/3583] overflow-hidden rounded-sm bg-white">
                  <Image
                    src={f.src}
                    alt={`${f.name} — ${f.role[lang]}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-base font-semibold tracking-tight">
                    {f.name}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {f.role[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
