"use client";

import { motion } from "framer-motion";

const partners = [
  "KT",
  "Lotte Insurance",
  "Shinhan Card",
  "Shinhan Asset",
  "KB Securities",
  "KB Asset",
  "CJ Onstyle",
  "DAYFOCUS LAB",
];

export function Partners() {
  return (
    <section className="py-24 md:py-40 px-5 md:px-10 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold tracking-tight mb-16 md:mb-20"
        >
          Our Partners
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center h-20 md:h-24 border border-border rounded-sm"
            >
              <span className="text-sm md:text-base font-semibold text-text-secondary tracking-tight">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
