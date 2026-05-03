"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import { easeOut } from "@/lib/motion";
import { liveProjects } from "@/data/projects";
import { CATEGORY_LABEL } from "@/types/project";
import { HeroWordmark } from "./hero/HeroWordmark";

interface HeroProps {
  dict: Dictionary;
  locale?: string;
}

const focusKeywords = [
  "UX·UI",
  "BRANDING",
  "EDITORIAL",
  "IDENTITY",
  "SYSTEM",
  "MOTION",
];

const ROTATE_MS = 4600;
const PLACEHOLDER = "/images/placeholder.svg";

const heroProjects = liveProjects
  .filter((p) => p.thumbnail && p.thumbnail !== PLACEHOLDER)
  .slice(0, 6);

const ACCENT_BASES = [
  "imagination",
  "clarity",
  "beauty",
  "connection",
  "craft",
  "상상",
  "명확함",
  "연결",
  "아름다움",
];

const HANGUL_RE = /[㄰-㆏가-힯]/;

const stripPunct = (w: string) => w.replace(/[^\p{L}\p{N}]/gu, "");

function accentClass(word: string): string {
  const lower = stripPunct(word).toLowerCase();
  const stripped = stripPunct(word);
  const hit = ACCENT_BASES.some(
    (base) => lower.includes(base) || stripped.includes(base),
  );
  if (!hit) return "";
  return HANGUL_RE.test(word)
    ? "font-medium text-foreground"
    : "italic font-serif font-normal tracking-normal text-foreground";
}

export function Hero({ dict, locale = "en" }: HeroProps) {
  const lang = (locale === "ko" ? "ko" : "en") as "ko" | "en";
  const [activeIdx, setActiveIdx] = useState(0);
  const [projectIdx, setProjectIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % focusKeywords.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (heroProjects.length <= 1) return;
    const id = setInterval(() => {
      setProjectIdx((i) => (i + 1) % heroProjects.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const headlineWords = dict.statement.text.split(/\s+/);
  const focus = focusKeywords[activeIdx % focusKeywords.length];
  const project = heroProjects[projectIdx];
  const projectCategory = project
    ? project.categoryLabel?.[lang] ?? CATEGORY_LABEL[project.category][lang]
    : "";

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: heroOpacity }}
      className="relative min-h-screen flex flex-col justify-between px-5 md:px-10 pt-28 md:pt-32 pb-10"
    >
      <div className="relative max-w-[1400px] w-full mx-auto flex-1 flex flex-col">
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xs uppercase tracking-[0.3em] text-text-muted"
        >
          Design Studio · Seoul · Est 2017
        </motion.span>

        <div className="flex-1 mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] gap-12 lg:gap-14 items-center">
          <div className="flex flex-col gap-10 md:gap-12">
            <h1
              className={`${
                lang === "ko"
                  ? "max-w-[14ch] text-[26px] sm:text-3xl md:text-[34px] lg:text-[40px] xl:text-[48px] leading-[1.3]"
                  : "max-w-[15ch] text-[30px] sm:text-4xl md:text-5xl lg:text-[52px] xl:text-6xl leading-[1.15]"
              } tracking-[-0.015em] font-normal text-foreground`}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.35 + i * 0.05,
                    ease: easeOut,
                  }}
                  className={`inline-block mr-[0.22em] ${accentClass(word)}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex items-center gap-2 text-2xs uppercase tracking-[0.3em] text-text-muted"
              >
                <span>Currently</span>
                <span aria-hidden>·</span>
                <div className="relative h-4 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={focus}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ duration: 0.5, ease: easeOut }}
                      className="block text-foreground"
                    >
                      {focus}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <Link
                  href={`/${locale}/work`}
                  data-cursor-label="WORK"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-foreground"
                >
                  <span className="relative">
                    View selected work
                    <span className="absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] scale-x-100 group-hover:scale-x-0" />
                  </span>
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>

          {project && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: easeOut }}
              className="w-full max-w-[440px] mx-auto lg:ml-auto lg:mr-0 flex flex-col gap-4"
            >
              <Link
                href={`/${locale}/work/${project.slug}`}
                data-cursor-label="VIEW"
                className="group block relative aspect-square overflow-hidden bg-surface"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: easeOut }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title[lang]}
                      fill
                      sizes="(min-width: 1024px) 440px, (min-width: 640px) 60vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </Link>

              <div className="flex items-end justify-between gap-4">
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-2xs uppercase tracking-[0.25em] text-text-muted">
                    {projectCategory}
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`title-${project.slug}`}
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      transition={{ duration: 0.4, ease: easeOut }}
                      className="text-sm md:text-[15px] font-medium text-foreground truncate"
                    >
                      {project.title[lang]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="text-2xs tabular-nums text-text-muted shrink-0">
                  {String(projectIdx + 1).padStart(2, "0")} / {String(heroProjects.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex gap-1">
                {heroProjects.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show project ${i + 1}`}
                    onClick={() => setProjectIdx(i)}
                    className={`h-px flex-1 transition-colors duration-500 ${
                      i === projectIdx ? "bg-foreground" : "bg-foreground/15"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <HeroWordmark titleY={titleY} />
    </motion.section>
  );
}
