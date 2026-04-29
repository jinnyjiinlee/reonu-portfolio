"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { easeOut } from "@/lib/motion";

// 6 단어가 6개의 가로 row 밴드를 차지한다. 좌/우/중앙으로 번갈아 두고
// 인접 단어는 반대 방향으로 parallax — 차선 침범 없음.
const keywords = [
  {
    text: "creativity",
    speed: -30,
    className:
      "left-[4%] md:left-[3%] top-[8%] text-4xl sm:text-5xl md:text-6xl",
  },
  {
    text: "imagination",
    speed: 40,
    className:
      "right-[4%] md:right-[3%] top-[24%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  },
  {
    text: "beauty",
    speed: -45,
    className:
      "left-[6%] md:left-[6%] top-[42%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
  },
  {
    text: "turning",
    speed: 30,
    className:
      "right-[6%] md:right-[8%] top-[58%] text-4xl sm:text-5xl md:text-6xl",
  },
  {
    text: "design",
    speed: -40,
    className:
      "left-[16%] md:left-[20%] top-[72%] text-5xl sm:text-6xl md:text-7xl",
  },
  {
    text: "clarity",
    speed: 35,
    className:
      "right-[12%] md:right-[18%] top-[88%] text-4xl sm:text-5xl md:text-6xl",
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
      className={`pointer-events-none absolute font-black tracking-tight text-foreground select-none whitespace-nowrap will-change-transform leading-[0.95] ${className}`}
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
      className="relative h-[80vh] md:h-screen overflow-hidden"
    >
      {keywords.map((kw, i) => (
        <ParallaxWord
          key={kw.text}
          text={kw.text}
          className={kw.className}
          speed={kw.speed}
          progress={scrollYProgress}
          delay={i * 0.08}
        />
      ))}
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
