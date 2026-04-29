"use client";

import { motion } from "framer-motion";

interface Partner {
  name: string;
  logo?: string;
}

const partners: Partner[] = [
  { name: "KT", logo: "/images/partners/kt.svg" },
  { name: "Lotte Insurance", logo: "/images/partners/lotte.svg" },
  { name: "Shinhan Card", logo: "/images/partners/shinhan.svg" },
  { name: "Shinhan Asset", logo: "/images/partners/shinhan-asset.svg" },
  { name: "KB Securities", logo: "/images/partners/kb.svg" },
  { name: "KB Asset", logo: "/images/partners/kb.svg" },
  { name: "CJ Onstyle", logo: "/images/partners/cj.svg" },
  { name: "DayFocusLab", logo: "/images/partners/dayfocuslab.png" },
];

export function Partners() {
  return (
    <section className="py-24 md:py-40 px-5 md:px-10 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Our Partners
            </h2>
          </div>
          <p className="text-sm md:text-base text-text-secondary max-w-xs">
            함께 일한 브랜드와 파트너사입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {partners.map((partner, i) => (
            <motion.div
              key={`${partner.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative h-24 md:h-32 flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center px-4 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-7 md:h-9 w-auto max-w-full object-contain grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
              <span className="absolute inset-0 flex items-center justify-center text-sm md:text-base font-semibold tracking-tight text-foreground opacity-0 translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
