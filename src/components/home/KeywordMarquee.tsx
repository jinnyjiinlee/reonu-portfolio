"use client";

import { motion } from "framer-motion";

const keywords = [
  {
    text: "creativity",
    className:
      "left-[2%] md:left-[-5%] top-[6%] md:top-[8%] text-[2.25rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem]",
  },
  {
    text: "imagination",
    className:
      "left-[38%] md:left-[55%] top-[22%] text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem]",
  },
  {
    text: "beauty",
    className:
      "left-[4%] md:left-[2%] top-[44%] md:top-[52%] text-[2.75rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]",
  },
  {
    text: "design",
    className:
      "left-[14%] md:left-[12%] top-[62%] md:top-[68%] text-[2.75rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]",
  },
  {
    text: "turning",
    className:
      "left-[46%] md:left-[65%] top-[46%] md:top-[48%] text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem]",
  },
  {
    text: "clarity",
    className:
      "left-[30%] md:left-[40%] top-[78%] text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem]",
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
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute font-black tracking-tight text-foreground select-none whitespace-nowrap ${kw.className}`}
        >
          {kw.text}
        </motion.span>
      ))}
    </section>
  );
}
