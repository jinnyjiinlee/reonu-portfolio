"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import { liveProjects } from "@/data/projects";

interface HeroProps {
  dict: Dictionary;
  locale?: string;
}

const PLACEHOLDER = "/images/placeholder.svg";
const rotatingProjects = liveProjects.filter(
  (p) => p.thumbnail && p.thumbnail !== PLACEHOLDER,
);

const ROTATE_MS = 3800;

const keywords = [
  "UX·UI",
  "BRANDING",
  "EDITORIAL",
  "IDENTITY",
  "SYSTEM",
  "MOTION",
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero({ dict, locale = "en" }: HeroProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Crossfade cycle — single image slot, predictable 3:4 box.
  useEffect(() => {
    if (rotatingProjects.length <= 1) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % rotatingProjects.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  // Scroll-linked parallax on the hero region.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Mouse-tracking parallax for the image + CTA ring.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springMx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.8 });
  const springMy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.8 });
  const imgTranslateX = useTransform(springMx, (v) => v * 14);
  const imgTranslateY = useTransform(springMy, (v) => v * 14);
  const imgRotate = useTransform(springMx, (v) => v * 2);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };
  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const active = rotatingProjects[activeIdx];
  const introWords = dict.hero.intro.split(/\s+/);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: heroOpacity, y: heroY }}
      className="relative min-h-screen flex flex-col justify-between px-5 md:px-10 pt-32 md:pt-44 pb-10 overflow-hidden"
    >
      {/* Ambient gradient orbs — soft depth */}
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
        {/* Left: intro — kinetic word stagger + keyword marquee */}
        <div className="lg:w-[380px] pt-4 lg:pt-8 flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: easeOut }}
              className="block h-px w-10 bg-foreground origin-left"
            />
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[11px] uppercase tracking-[0.22em] text-text-muted"
            >
              Design Studio · Seoul
            </motion.span>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-text-secondary">
            {introWords.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + i * 0.025,
                  ease: easeOut,
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* Rotating keyword — swap on a cadence */}
          <div className="flex items-center gap-3 h-6 overflow-hidden">
            <span className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
              Focus
            </span>
            <div className="relative h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={keywords[activeIdx % keywords.length]}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className="block text-sm font-semibold tracking-wide text-foreground"
                >
                  {keywords[activeIdx % keywords.length]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right: crossfade image, fixed 3:4 — mouse parallax + magnetic CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: easeOut }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="flex-1 flex items-center justify-center relative"
        >
          <Link
            href={active ? `/${locale}/work/${active.slug}` : `/${locale}/work`}
            className="group relative w-[60%] sm:w-[55%] md:w-[48%] lg:w-[46%] aspect-[3/4]"
            aria-label={active?.title.en ?? "View work"}
          >
            {/* Decorative frame + corner marks */}
            <motion.span
              aria-hidden
              style={{ x: useTransform(springMx, (v) => v * -10), y: useTransform(springMy, (v) => v * -10) }}
              className="pointer-events-none absolute -inset-3 md:-inset-5 border border-foreground/10"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -top-2 -left-2 w-3 h-3 border-t border-l border-foreground/60"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -top-2 -right-2 w-3 h-3 border-t border-r border-foreground/60"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-2 -left-2 w-3 h-3 border-b border-l border-foreground/60"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-2 -right-2 w-3 h-3 border-b border-r border-foreground/60"
            />

            {/* Image slot — crossfade */}
            <motion.div
              style={{
                x: imgTranslateX,
                y: imgTranslateY,
                rotate: imgRotate,
                scale: imageScale,
              }}
              className="absolute inset-0 overflow-hidden bg-surface rounded-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]"
            >
              <AnimatePresence mode="sync">
                {active && (
                  <motion.div
                    key={active.slug}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 1.1, ease: easeOut }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active.thumbnail}
                      alt={active.title.en}
                      fill
                      sizes="(min-width: 1024px) 40vw, 60vw"
                      className="object-cover"
                      priority
                    />
                    {/* subtle top-to-bottom gradient to anchor label */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating meta label (bottom-left of card) */}
              <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between text-white mix-blend-difference">
                <AnimatePresence mode="wait">
                  {active && (
                    <motion.div
                      key={`meta-${active.slug}`}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.5, ease: easeOut }}
                      className="flex flex-col gap-1"
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">
                        {active.categoryLabel?.en ?? active.category}
                      </span>
                      <span className="text-xs md:text-sm font-medium leading-tight max-w-[20ch]">
                        {active.title.en}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="text-[10px] tabular-nums opacity-80">
                  {String(activeIdx + 1).padStart(2, "0")}/
                  {String(rotatingProjects.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>

            {/* Progress tick bar beneath the frame */}
            <div className="absolute -bottom-5 left-0 right-0 flex gap-1">
              {rotatingProjects.map((_, i) => (
                <span
                  key={i}
                  className={`h-px flex-1 transition-colors duration-500 ${
                    i === activeIdx ? "bg-foreground" : "bg-foreground/15"
                  }`}
                />
              ))}
            </div>

            {/* Magnetic CTA */}
            <motion.div
              style={{
                x: useTransform(springMx, (v) => v * 28),
                y: useTransform(springMy, (v) => v * 28),
              }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-foreground text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl relative"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-foreground/40 animate-[ping_1.6s_ease-out_infinite]"
                />
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="relative"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Bottom: REONU wordmark with kinetic stagger + scroll parallax */}
      <motion.div
        style={{ y: titleY, scale: titleScale }}
        className="relative max-w-[1400px] w-full mx-auto mt-10 lg:mt-0"
      >
        <div className="flex items-end justify-between gap-4">
          <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[11.5rem] font-black leading-[0.85] tracking-tighter text-foreground flex">
            {"REONU".split("").map((ch, i) => (
              <motion.span
                key={ch + i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.5 + i * 0.06,
                  ease: easeOut,
                }}
                className="inline-block overflow-hidden"
              >
                {ch}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hidden md:flex flex-col items-end gap-1 pb-2"
          >
            <span className="text-[10px] uppercase tracking-[0.22em] text-text-muted">
              Est. 2017
            </span>
            <span className="text-sm font-medium text-foreground">
              &copy; 2017&ndash;26
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute right-0 -top-10 hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-text-muted"
        >
          <span>{dict.hero.scroll}</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block w-px h-5 bg-foreground/40"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
