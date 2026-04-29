"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { easeOut } from "@/lib/motion";

const keywords = [
  {
    text: "creativity",
    speed: -80,
    className:
      "left-[4%] md:left-[2%] top-[8%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  },
  {
    text: "imagination",
    speed: 60,
    className:
      "right-[4%] md:right-[2%] top-[22%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  },
  {
    text: "beauty",
    speed: -120,
    className:
      "left-[6%] md:left-[8%] top-[44%] md:top-[52%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
  },
  {
    text: "design",
    speed: 100,
    className:
      "left-[20%] md:left-[22%] top-[62%] md:top-[68%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
  },
  {
    text: "turning",
    speed: -50,
    className:
      "right-[6%] md:right-[10%] top-[46%] md:top-[48%] text-4xl sm:text-5xl md:text-6xl",
  },
  {
    text: "clarity",
    speed: 80,
    className:
      "left-[36%] md:left-[44%] top-[78%] text-4xl sm:text-5xl md:text-6xl",
  },
];

function MarqueeWord({
  text,
  className,
  delay,
  y,
}: {
  text: string;
  className: string;
  delay: number;
  y: MotionValue<number>;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay, ease: easeOut }}
      style={{ y }}
      className={`absolute font-black tracking-tight text-foreground select-none whitespace-nowrap will-change-transform ${className}`}
    >
      {text}
    </motion.span>
  );
}

export function KeywordMarquee() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      className="relative h-[70vh] md:h-screen overflow-hidden"
    >
      {keywords.map((kw, i) => {
        // Each word gets its own parallax speed via the closure.
        // useTransform must be called consistently — extract to a child component.
        return (
          <ParallaxWord
            key={kw.text}
            text={kw.text}
            className={kw.className}
            speed={kw.speed}
            progress={scrollYProgress}
            delay={i * 0.08}
          />
        );
      })}
    </section>
  );
}

function ParallaxWord({
  text,
  className,
  speed,
  progress,
  delay,
}: {
  text: string;
  className: string;
  speed: number;
  progress: MotionValue<number>;
  delay: number;
}) {
  const y = useTransform(progress, [0, 1], [0, speed]);
  return <MarqueeWord text={text} className={className} delay={delay} y={y} />;
}
