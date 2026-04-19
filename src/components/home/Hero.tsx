"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import type { Project } from "@/types/project";
import { liveProjects } from "@/data/projects";

interface HeroProps {
  dict: Dictionary;
  locale?: string;
}

const PLACEHOLDER = "/images/placeholder.svg";
const rotatingProjects = liveProjects.filter(
  (p) => p.thumbnail && p.thumbnail !== PLACEHOLDER,
);

const MAX_STACK = 5;

// Deterministic per-depth offsets — bottom of stack is most rotated, top sits flat.
// Depth 0 = topmost (newest, face-up). Higher depth = deeper in the pile.
const stackOffsets = [
  { rotate: 0, x: 0, y: 0 },
  { rotate: 1.5, x: 6, y: -4 },
  { rotate: -3, x: -10, y: 6 },
  { rotate: 5, x: 10, y: 4 },
  { rotate: 8, x: 16, y: -6 },
];

type Card = { id: number; project: Project };

export function Hero({ dict, locale = "en" }: HeroProps) {
  const [stack, setStack] = useState<Card[]>([]);
  const cardIdRef = useRef(0);
  const projectIdxRef = useRef(0);

  useEffect(() => {
    if (!rotatingProjects.length) return;

    const addCard = () => {
      const project =
        rotatingProjects[projectIdxRef.current % rotatingProjects.length];
      projectIdxRef.current += 1;
      cardIdRef.current += 1;
      const card: Card = { id: cardIdRef.current, project };
      setStack((prev) => {
        const next = [...prev, card];
        return next.length > MAX_STACK
          ? next.slice(next.length - MAX_STACK)
          : next;
      });
    };

    addCard(); // seed immediately
    const interval = setInterval(addCard, 2500);
    return () => clearInterval(interval);
  }, []);

  const topCard = stack[stack.length - 1];

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-5 md:px-10 pt-32 md:pt-44 pb-10">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 flex-1">
        {/* Left: Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-[360px] pt-4 lg:pt-8"
        >
          <p className="text-sm md:text-base leading-relaxed text-text-secondary">
            {dict.hero.intro}
          </p>
        </motion.div>

        {/* Right: Portfolio stack — cards pile up every few seconds */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex items-center justify-center relative"
        >
          <Link
            href={
              topCard
                ? `/${locale}/work/${topCard.project.slug}`
                : `/${locale}/work`
            }
            className="group relative w-[55%] md:w-[50%] aspect-[3/4]"
          >
            <AnimatePresence initial={false}>
              {stack.map((card, idx) => {
                // depth 0 = topmost, growing downward into the pile
                const depth = stack.length - 1 - idx;
                const offset =
                  stackOffsets[Math.min(depth, stackOffsets.length - 1)];
                return (
                  <motion.div
                    key={card.id}
                    initial={{
                      opacity: 0,
                      y: -120,
                      x: offset.x,
                      rotate: offset.rotate + 12,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: offset.y,
                      x: offset.x,
                      rotate: offset.rotate,
                      scale: 1,
                    }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 140,
                      damping: 18,
                      mass: 0.9,
                    }}
                    style={{ zIndex: idx }}
                    className="absolute inset-0 rounded-sm overflow-hidden bg-surface shadow-lg"
                  >
                    <Image
                      src={card.project.thumbnail}
                      alt={card.project.title.en}
                      fill
                      sizes="(min-width: 1024px) 30vw, 55vw"
                      className="object-cover"
                      priority={depth === 0}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Hover: circular arrow button (always above the stack) */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ zIndex: MAX_STACK + 1 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Bottom: Giant studio name + copyright */}
      <div className="max-w-[1400px] w-full mx-auto mt-8 lg:mt-0">
        <div className="flex items-end justify-between gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[3.5rem] sm:text-[5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[11.5rem] font-black leading-[0.85] tracking-tighter text-foreground"
          >
            REONU<span className="text-accent">®</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden md:flex flex-col items-end gap-1 pb-2"
          >
            <span className="text-sm font-medium text-foreground">
              &copy; 2017&ndash;26
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
