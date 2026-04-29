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

interface StudioBioProps {
  lang: "ko" | "en";
  dict: Dictionary;
}

export function StudioBio({ lang, dict }: StudioBioProps) {
  return (
    <section className="py-12 md:py-20 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[minmax(320px,420px)_1fr] gap-10 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:sticky md:top-36"
        >
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-surface">
            <Image
              src="/images/profile/profile-03.jpg"
              alt="Hyeri Gwon"
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-14 md:space-y-20"
        >
          <div>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              {dict.studio.bio}
            </p>
            <div className="mt-10">
              <StudioStats dict={dict} />
            </div>
            <DownloadProfileButton label={dict.studio.downloadResume} />
          </div>

          <div>
            <span className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-4">
              Design Philosophy
            </span>
            <p className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">
              {philosophy[lang]}
            </p>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-6">
              Career
            </span>
            <div className="space-y-12">
              {careerGroups.map((group) => (
                <CareerList
                  key={group.heading.en}
                  heading={group.heading[lang]}
                  items={group.items[lang]}
                />
              ))}
            </div>
          </div>

          <CareerList
            label="Experience"
            heading={ictStartup.heading[lang]}
            items={ictStartup.items[lang]}
          />

          <CareerList
            label="Education"
            heading={education.heading[lang]}
            items={education.items[lang]}
          />
        </motion.div>
      </div>
    </section>
  );
}
