"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { Dictionary } from "@/types/dictionary";

interface StatementProps {
  dict: Dictionary;
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [12, 0]);
  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.2em]"
    >
      {word}
    </motion.span>
  );
}

export function Statement({ dict }: StatementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 50%"],
  });

  const words = dict.statement.text.split(/\s+/);

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-5 md:px-10 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-foreground">
          {words.map((word, i) => {
            const start = (i / words.length) * 0.9;
            const end = ((i + 1) / words.length) * 0.9;
            return (
              <Word
                key={`${word}-${i}`}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-24 max-w-2xl ml-auto text-base md:text-lg text-text-secondary leading-relaxed"
        >
          {dict.statement.body}
        </motion.p>
      </div>
    </section>
  );
}
