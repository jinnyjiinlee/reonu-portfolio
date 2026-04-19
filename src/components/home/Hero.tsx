"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";

interface HeroProps {
  dict: Dictionary;
  locale?: string;
}

export function Hero({ dict, locale = "en" }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-5 md:px-10 pt-24 pb-10">
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

        {/* Right: Stacked images with hover CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex items-center justify-center relative"
        >
          <Link
            href={`/${locale}/work`}
            className="group relative w-[55%] md:w-[50%] aspect-[3/4] cursor-pointer"
          >
            {/* Layer 5 (back) - dark */}
            <div className="absolute inset-0 bg-foreground rotate-[8deg] translate-x-4 -translate-y-2 rounded-sm shadow-lg" />

            {/* Layer 4 - wood/brown tone */}
            <div className="absolute inset-0 bg-[#8B7355] rotate-[5deg] translate-x-2 translate-y-1 rounded-sm shadow-md" />

            {/* Layer 3 - yellow */}
            <div className="absolute inset-0 bg-[#F5C842] -rotate-[3deg] -translate-x-2 translate-y-2 rounded-sm shadow-md" />

            {/* Layer 2 - light yellow */}
            <div className="absolute inset-0 bg-[#FADA5E] rotate-[1deg] translate-x-1 -translate-y-1 rounded-sm shadow-sm" />

            {/* Layer 1 (front) - main accent/orange */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF8C00] to-[#FF6B00] rounded-sm overflow-hidden flex items-center justify-center">
              <span className="text-white/30 text-xs uppercase tracking-widest">
                Portfolio Image
              </span>
            </div>

            {/* Hover: circular arrow button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
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
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black leading-[0.85] tracking-tighter text-foreground"
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
