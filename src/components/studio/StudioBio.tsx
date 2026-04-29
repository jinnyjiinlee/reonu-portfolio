"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import {
  careerGroups,
  education,
  ictStartup,
  philosophy,
} from "@/data/studioBio";
import { CareerList } from "./CareerList";
import { StudioStats } from "./StudioStats";
import { DownloadProfileButton } from "./DownloadProfileButton";
import { useTilt } from "@/hooks/useTilt";
import { easeOut } from "@/lib/motion";

interface StudioBioProps {
  lang: "ko" | "en";
  dict: Dictionary;
}

export function StudioBio({ lang, dict }: StudioBioProps) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 5, scale: 1.02 });

  return (
    <section className="py-16 md:py-28 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[minmax(320px,420px)_1fr] gap-12 md:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="md:sticky md:top-36"
          style={{ perspective: 1000 }}
        >
          <div
            ref={tiltRef}
            className="group relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-surface transition-[transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="/images/profile/profile-03.jpg"
              alt="Hyeri Gwon"
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              className="object-cover grayscale-[60%] group-hover:grayscale-0 scale-[1.02] group-hover:scale-100 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
            <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.04] [background-image:url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22120%22%20height=%22120%22><filter%20id=%22n%22><feTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%222%22/></filter><rect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/></svg>')]" />

            <div className="absolute top-4 left-4 right-4 flex justify-between items-start text-white text-[10px] uppercase tracking-[0.3em] tabular-nums opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
              <span>HG / 2026</span>
              <span>Seoul, KR</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center text-[11px] uppercase tracking-[0.25em] text-text-muted tabular-nums">
            <span>Founder</span>
            <span className="h-px flex-1 mx-3 bg-border" />
            <span>Designer</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="space-y-16 md:space-y-24"
        >
          <div>
            <span className="block text-xs uppercase tracking-[0.25em] text-text-muted mb-5">
              About
            </span>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              {dict.studio.bio}
            </p>
            <div className="mt-12">
              <StudioStats dict={dict} />
            </div>
            <DownloadProfileButton label={dict.studio.downloadResume} />
          </div>

          <PhilosophyBlock text={philosophy[lang]} />

          <div>
            <SectionLabel index="03" label="Career" />
            <div className="space-y-14 mt-8">
              {careerGroups.map((group) => (
                <CareerList
                  key={group.heading.en}
                  heading={group.heading[lang]}
                  items={group.items[lang]}
                />
              ))}
            </div>
          </div>

          <div>
            <SectionLabel index="04" label="Experience" />
            <div className="mt-8">
              <CareerList
                heading={ictStartup.heading[lang]}
                items={ictStartup.items[lang]}
              />
            </div>
          </div>

          <div>
            <SectionLabel index="05" label="Education" />
            <div className="mt-8">
              <CareerList
                heading={education.heading[lang]}
                items={education.items[lang]}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs uppercase tracking-[0.3em] text-text-muted tabular-nums">
        {index}
      </span>
      <span className="h-px w-10 bg-border" />
      <span className="text-xs uppercase tracking-[0.3em] text-foreground">
        {label}
      </span>
    </div>
  );
}

function PhilosophyBlock({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="relative pl-8 md:pl-10 border-l border-foreground"
    >
      <span className="block text-xs uppercase tracking-[0.25em] text-text-muted mb-5">
        Design Philosophy
      </span>
      <p className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15] break-keep">
        <span className="text-accent">“</span>
        {text}
        <span className="text-accent">”</span>
      </p>
    </motion.div>
  );
}
