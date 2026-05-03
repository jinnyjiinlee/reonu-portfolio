"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import { easeOut } from "@/lib/motion";
import { liveProjects } from "@/data/projects";
import { HeroWordmark } from "./hero/HeroWordmark";

interface HeroProps {
  dict: Dictionary;
  locale?: string;
}

const PLACEHOLDER = "/images/placeholder.svg";
const ROTATE_MS = 4400;

const stackProjects = liveProjects
  .filter((p) => p.thumbnail && p.thumbnail !== PLACEHOLDER)
  .slice(0, 5);

// Position/rotation for each card in the stack. Last entry is the front-most
// card (highest z-index, no rotation, fully visible).
const STACK_LAYOUT = [
  { x: "-26%", y: "-7%", rotate: -11, scale: 0.84 },
  { x: "20%", y: "-3%", rotate: -4, scale: 0.91 },
  { x: "-14%", y: "8%", rotate: 6, scale: 0.93 },
  { x: "22%", y: "12%", rotate: 10, scale: 0.86 },
  { x: "0%", y: "0%", rotate: 0, scale: 1 },
];

export function Hero({ dict, locale = "en" }: HeroProps) {
  const lang = (locale === "ko" ? "ko" : "en") as "ko" | "en";
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (stackProjects.length <= 1) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % stackProjects.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const stackY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const wordmarkY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const intro = dict.hero.intro.replace(/^\s*REONU®?\s*[—–-]\s*/i, "");
  const front = stackProjects[activeIdx];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: heroOpacity }}
      className="relative min-h-screen flex flex-col justify-between px-5 md:px-10 pt-36 md:pt-48 pb-6 overflow-hidden"
    >
      <div className="relative max-w-[1400px] w-full mx-auto flex-1 flex flex-col">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
          className="max-w-[420px] text-sm md:text-[15px] leading-[1.6] text-text-secondary"
        >
          {intro}
        </motion.p>

        <motion.div
          style={{ y: stackY }}
          className="flex-1 flex items-center justify-center relative py-8 md:py-12"
        >
          <Link
            href={front ? `/${locale}/work/${front.slug}` : `/${locale}/work`}
            data-cursor-label="VIEW"
            className="group relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-[3/4] z-10"
            aria-label={front?.title[lang] ?? "View work"}
          >
            {stackProjects.map((p, i) => {
              const layoutIdx = (i - activeIdx + stackProjects.length) % stackProjects.length;
              const layout = STACK_LAYOUT[layoutIdx] ?? STACK_LAYOUT[0];
              const isFront = layoutIdx === STACK_LAYOUT.length - 1;
              return (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 30, scale: 0.85 }}
                  animate={{
                    opacity: 1,
                    x: layout.x,
                    y: layout.y,
                    rotate: layout.rotate,
                    scale: layout.scale,
                  }}
                  transition={{
                    duration: isFront ? 0.9 : 1.1,
                    delay: isFront ? 0.3 : 0.4 + layoutIdx * 0.08,
                    ease: easeOut,
                  }}
                  style={{ zIndex: layoutIdx + 1 }}
                  className={`absolute inset-0 origin-center overflow-hidden bg-surface ${
                    isFront
                      ? "shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]"
                      : "shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]"
                  } transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isFront ? "group-hover:scale-[1.02]" : ""
                  }`}
                >
                  <Image
                    src={p.thumbnail}
                    alt={p.title[lang]}
                    fill
                    sizes="(min-width: 1024px) 420px, 60vw"
                    className="object-cover"
                    priority={isFront}
                  />
                </motion.div>
              );
            })}

            <AnimatePresence mode="wait">
              {front && (
                <motion.div
                  key={`caption-${front.slug}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  className="absolute -bottom-10 md:-bottom-12 left-0 right-0 flex items-center justify-center gap-2 text-2xs uppercase tracking-[0.25em] text-text-muted"
                  style={{ zIndex: 20 }}
                >
                  <span>{front.title[lang]}</span>
                  <span aria-hidden>·</span>
                  <span className="tabular-nums">
                    {String(activeIdx + 1).padStart(2, "0")} /
                    {String(stackProjects.length).padStart(2, "0")}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        </motion.div>
      </div>

      <HeroWordmark titleY={wordmarkY} />
    </motion.section>
  );
}
