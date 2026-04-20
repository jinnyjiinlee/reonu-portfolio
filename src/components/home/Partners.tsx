"use client";

import { motion } from "framer-motion";

interface Partner {
  name: string;
  logo?: string;
  heightClass: string; // tailwind class for logo height to normalize visual weight
}

const partners: Partner[] = [
  { name: "KT", logo: "/images/partners/kt.svg", heightClass: "h-10 md:h-12" },
  {
    name: "Lotte Insurance",
    logo: "/images/partners/lotte.svg",
    heightClass: "h-6 md:h-7",
  },
  {
    name: "Shinhan Card",
    logo: "/images/partners/shinhan.svg",
    heightClass: "h-5 md:h-6",
  },
  {
    name: "Shinhan Asset",
    logo: "/images/partners/shinhan-asset.svg",
    heightClass: "h-8 md:h-10",
  },
  {
    name: "KB Securities",
    logo: "/images/partners/kb.svg",
    heightClass: "h-7 md:h-9",
  },
  {
    name: "KB Asset",
    logo: "/images/partners/kb.svg",
    heightClass: "h-7 md:h-9",
  },
  {
    name: "CJ Onstyle",
    logo: "/images/partners/cj.svg",
    heightClass: "h-10 md:h-12",
  },
  { name: "DAYFOCUS LAB", heightClass: "h-10 md:h-12" },
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
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-accent" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                Partners
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Our Partners
            </h2>
          </div>
          <p className="text-sm md:text-base text-text-secondary max-w-xs">
            함께 일한 브랜드와 파트너사입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border overflow-hidden rounded-sm">
          {partners.map((partner, i) => (
            <motion.div
              key={`${partner.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative bg-background h-28 md:h-36 flex items-center justify-center overflow-hidden"
            >
              {partner.logo ? (
                <>
                  <div className="absolute inset-0 flex items-center justify-center px-6 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={`${partner.heightClass} w-auto max-w-[70%] object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100`}
                    />
                  </div>
                  <span className="absolute inset-0 flex items-center justify-center text-sm md:text-base font-semibold tracking-tight text-foreground opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {partner.name}
                  </span>
                </>
              ) : (
                <span className="text-sm md:text-base font-semibold tracking-tight text-text-secondary transition-colors duration-300 group-hover:text-foreground">
                  {partner.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
