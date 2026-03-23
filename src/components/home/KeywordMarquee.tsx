"use client";

import { motion } from "framer-motion";

const keywords = [
  { text: "creativity", x: "-5%", y: "8%", size: "text-[3rem] md:text-[5rem] lg:text-[7rem]" },
  { text: "imagination", x: "55%", y: "22%", size: "text-[3rem] md:text-[5rem] lg:text-[7rem]" },
  { text: "beauty", x: "2%", y: "52%", size: "text-[4rem] md:text-[6rem] lg:text-[8rem]" },
  { text: "design", x: "12%", y: "68%", size: "text-[4rem] md:text-[6rem] lg:text-[8rem]" },
  { text: "turning", x: "65%", y: "48%", size: "text-[3rem] md:text-[5rem] lg:text-[6rem]" },
  { text: "clarity", x: "40%", y: "78%", size: "text-[3rem] md:text-[4rem] lg:text-[6rem]" },
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
          className={`absolute font-black tracking-tight text-foreground select-none ${kw.size}`}
          style={{ left: kw.x, top: kw.y }}
        >
          {kw.text}
        </motion.span>
      ))}
    </section>
  );
}
