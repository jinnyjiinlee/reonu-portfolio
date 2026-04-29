"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

const keywords = [
  {
    text: "creativity",
    className:
      "left-[4%] md:left-[2%] top-[8%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  },
  {
    text: "imagination",
    className:
      "right-[4%] md:right-[2%] top-[22%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  },
  {
    text: "beauty",
    className:
      "left-[6%] md:left-[8%] top-[44%] md:top-[52%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
  },
  {
    text: "design",
    className:
      "left-[20%] md:left-[22%] top-[62%] md:top-[68%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
  },
  {
    text: "turning",
    className:
      "right-[6%] md:right-[10%] top-[46%] md:top-[48%] text-4xl sm:text-5xl md:text-6xl",
  },
  {
    text: "clarity",
    className:
      "left-[36%] md:left-[44%] top-[78%] text-4xl sm:text-5xl md:text-6xl",
  },
];

export function KeywordMarquee() {
  return (
    <section className="relative h-[70vh] md:h-screen overflow-hidden">
      {keywords.map((kw, i) => (
        <motion.span
          key={kw.text}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: easeOut }}
          className={`absolute font-black tracking-tight text-foreground select-none whitespace-nowrap ${kw.className}`}
        >
          {kw.text}
        </motion.span>
      ))}
    </section>
  );
}
