"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import { liveProjects } from "@/data/projects";
import { HeroIntro } from "./hero/HeroIntro";
import { HeroCarousel } from "./hero/HeroCarousel";
import { HeroWordmark } from "./hero/HeroWordmark";

interface HeroProps {
  dict: Dictionary;
  locale?: string;
}

const PLACEHOLDER = "/images/placeholder.svg";
const ROTATE_MS = 3800;

const rotatingProjects = liveProjects.filter(
  (p) => p.thumbnail && p.thumbnail !== PLACEHOLDER,
);

export function Hero({ dict, locale = "en" }: HeroProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (rotatingProjects.length <= 1) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % rotatingProjects.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: heroOpacity, y: heroY }}
      className="relative min-h-screen flex flex-col justify-between px-5 md:px-10 pt-28 md:pt-36 pb-10 overflow-hidden"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="pointer-events-none absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full blur-[140px] bg-accent/10"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
        className="pointer-events-none absolute -bottom-40 -right-40 w-[55vw] h-[55vw] rounded-full blur-[140px] bg-foreground/[0.04]"
      />

      <div className="relative max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 flex-1">
        <HeroIntro intro={dict.hero.intro} activeIdx={activeIdx} locale={locale} />
        <HeroCarousel
          projects={rotatingProjects}
          activeIdx={activeIdx}
          locale={locale}
          imageScale={imageScale}
        />
      </div>

      <HeroWordmark titleY={titleY} titleScale={titleScale} />
    </motion.section>
  );
}
