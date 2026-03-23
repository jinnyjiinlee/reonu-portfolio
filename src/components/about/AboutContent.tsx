"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";

interface AboutContentProps {
  locale: string;
  dict: Dictionary;
}

const skills = [
  "UI/UX Design",
  "Brand Identity",
  "Editorial Design",
  "Web/App Design",
  "Design System",
  "Prototyping",
  "Figma",
  "Adobe Creative Suite",
];

const experience = [
  {
    period: "2025 - Present",
    role: { ko: "REONU DESIGN STUDIO 대표", en: "REONU DESIGN STUDIO Founder" },
    desc: { ko: "브랜드 & 프로덕트 디자인 스튜디오 운영", en: "Brand & Product Design Studio" },
  },
  {
    period: "2017 - 2025",
    role: { ko: "시니어 디자이너", en: "Senior Designer" },
    desc: { ko: "다양한 기업 및 기관 프로젝트 수행", en: "Various corporate and institutional projects" },
  },
];

export function AboutContent({ locale, dict }: AboutContentProps) {
  const lang = locale as "ko" | "en";

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[50vh] flex items-end px-5 md:px-10 pb-12 md:pb-20">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-text-muted font-medium">
              {dict.about.title}
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              HYERI GWON
            </h1>
            <p className="mt-2 text-lg md:text-xl text-text-secondary">
              Brand & Product Designer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24 px-5 md:px-10 bg-surface">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile placeholder */}
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-accent/20 to-accent/5 rounded-sm" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              {dict.about.bio}
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-accent">9+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                  {dict.about.yearsExp}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                  {dict.about.projectsDone}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">3</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                  {dict.about.categories}
                </div>
              </div>
            </div>

            {/* Resume download */}
            <a
              href="/resume/resume-hyeri-gwon.pdf"
              download
              className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-foreground text-white text-sm font-medium uppercase tracking-widest rounded-full hover:bg-accent transition-colors duration-300 w-fit"
            >
              {dict.about.downloadResume}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              {dict.about.skills}
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-border rounded-full text-sm text-text-secondary hover:border-accent hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 md:py-24 px-5 md:px-10 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              {dict.about.experience}
            </h2>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 pb-8 border-b border-border last:border-0"
                >
                  <span className="text-sm text-text-muted font-medium md:w-48 shrink-0">
                    {exp.period}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">
                      {exp.role[lang]}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {exp.desc[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
