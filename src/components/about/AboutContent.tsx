"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import { liveProjects } from "@/data/projects";

interface AboutContentProps {
  locale: string;
  dict: Dictionary;
}

const founders = [
  {
    src: "/images/profile/profile-01.jpg",
    name: "HYERI GWON",
    role: { ko: "공동대표 · 디자이너", en: "Founder · Designer" },
  },
  {
    src: "/images/profile/profile-02.jpg",
    name: "SINJUN PARK",
    role: { ko: "공동대표 · 운영", en: "Founder · Operations" },
  },
];

const philosophy = {
  ko: "최소한의 그러나 더 나은 디자인을 지향합니다.",
  en: "Designing less, but better.",
};

const careerGroups = [
  {
    heading: { ko: "UXUI DESIGN", en: "UXUI DESIGN" },
    items: {
      ko: [
        "KT New Platform (momo) 구축",
        "롯데손해보험 (wonder) 구축",
        "신한자산운용 구축 및 운영",
        "신한카드 SOL 구축 및 운영",
        "KB증권 구축 및 운영",
        "KB자산운용 구축 및 운영",
        "CJ 온스타일 운영",
      ],
      en: [
        "KT New Platform (momo) — build",
        "Lotte Insurance (wonder) — build",
        "Shinhan Asset Management — build & operate",
        "Shinhan Card SOL — build & operate",
        "KB Securities — build & operate",
        "KB Asset Management — build & operate",
        "CJ Onstyle — operate",
      ],
    },
  },
  {
    heading: { ko: "EDIT / BX DESIGN", en: "EDIT / BX DESIGN" },
    items: {
      ko: [
        "교육청 교육용 책자 제작",
        "송파구청 일자리 정책담당과 신사업 홍보물 디자인",
        "국어문화원, HK인문학센터 웹포스터 디자인",
        "문체부 홍보 포스터 / SNS 카드뉴스 디자인",
        "국제산악영화제 책자 디자인",
        "국민대학교 디자인대학원 홍보물 디자인",
        "(주)트립픽 브랜딩 / 서비스 캐릭터 디자인",
        "등 다수 관공서, 교육기관, 기업 홍보물 / 브랜딩",
      ],
      en: [
        "Office of Education — educational booklets",
        "Songpa-gu Office Employment Policy — new-business promotional design",
        "Korean Language & Culture Institute, HK Humanities Center — web posters",
        "Ministry of Culture, Sports and Tourism — promotional posters / SNS card news",
        "International Mountain Film Festival — booklet design",
        "Kookmin University Graduate School of Design — promotional design",
        "Trippick Inc. — branding / service character design",
        "And many other public, educational, and corporate branding projects",
      ],
    },
  },
];

const ictStartup = {
  heading: { ko: "ICT START-UP", en: "ICT START-UP" },
  items: {
    ko: [
      "ICT 스타트업 아이시온 운영 및 디자인 총괄",
      "SK C&C 협업 Vitality Summit 서비스 노출",
      "ICT TECH SUMMIT 온라인 전시, 체험관",
      "스마트미디어 X캠프 우수상 수상",
      "안구운동 놀이APP서비스 BM특허 등록 완료",
      "시선추적기반 안구운동놀이APP 출시",
      "송파 청년창업도전프로젝트 최종 기업 선정",
      "고려대학교 안암병원 재활의학 컨소시엄",
      "미국 실리콘밸리 최종 피칭 선정",
      "미국 스탠퍼드 디자인스쿨 수료",
      "성장기 어린이 안구운동 놀이APP 디자인 논문",
    ],
    en: [
      "Co-founded ICT startup ISION — operations & design lead",
      "SK C&C collaboration — Vitality Summit service showcase",
      "ICT TECH SUMMIT — online exhibition & experience zone",
      "Smart Media X Camp — Excellence Award",
      "Eye-movement play app — BM patent registered",
      "Gaze-tracking eye-movement play app — launched",
      "Songpa Youth Startup Challenge — final selection",
      "Korea University Anam Hospital — rehabilitation medicine consortium",
      "US Silicon Valley — final pitch selection",
      "Stanford d.school — completed program",
      "Published paper on eye-movement play app design for children",
    ],
  },
};

const education = {
  heading: {
    ko: "국민대학교 디자인대학원",
    en: "Kookmin University Graduate School of Design",
  },
  items: {
    ko: ["인클루시브 디자인 전공 석사"],
    en: ["M.A. in Inclusive Design"],
  },
};

const teamLabel = { ko: "공동대표", en: "Co-Founders" };

export function AboutContent({ locale, dict }: AboutContentProps) {
  const lang = locale as "ko" | "en";

  return (
    <div className="pt-32 md:pt-44">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-end px-5 md:px-10 pb-10 md:pb-16">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              HYERI GWON
            </h1>
            <p className="mt-2 text-lg md:text-xl text-text-secondary">
              Brand & Product Designer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile spread: sticky portrait ↔ career */}
      <section className="py-12 md:py-20 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[minmax(320px,420px)_1fr] gap-10 md:gap-20 items-start">
          {/* Left: sticky portrait */}
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

          {/* Right: bio → stats → CTA → philosophy → career → experience → education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-14 md:space-y-20"
          >
            {/* Bio + Stats + CTA */}
            <div>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                {dict.about.bio}
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-accent">9+</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                    {dict.about.yearsExp}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">
                    {liveProjects.length}+
                  </div>
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

              <a
                href="/profile/reonu-company-profile.pdf"
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
            </div>

            {/* Design Philosophy */}
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-4">
                Design Philosophy
              </span>
              <p className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">
                {philosophy[lang]}
              </p>
            </div>

            {/* Career */}
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-6">
                Career
              </span>
              <div className="space-y-12">
                {careerGroups.map((group) => (
                  <div key={group.heading.en}>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight mb-6">
                      {group.heading[lang]}
                    </h3>
                    <ul className="space-y-3">
                      {group.items[lang].map((item, i) => (
                        <li
                          key={i}
                          className="text-sm md:text-base text-text-secondary leading-relaxed flex gap-3"
                        >
                          <span className="text-accent shrink-0">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-6">
                Experience
              </span>
              <h3 className="text-lg md:text-xl font-bold tracking-tight mb-6">
                {ictStartup.heading[lang]}
              </h3>
              <ul className="space-y-3">
                {ictStartup.items[lang].map((item, i) => (
                  <li
                    key={i}
                    className="text-sm md:text-base text-text-secondary leading-relaxed flex gap-3"
                  >
                    <span className="text-accent shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-6">
                Education
              </span>
              <h3 className="text-lg md:text-xl font-bold tracking-tight mb-6">
                {education.heading[lang]}
              </h3>
              <ul className="space-y-3">
                {education.items[lang].map((item, i) => (
                  <li
                    key={i}
                    className="text-sm md:text-base text-text-secondary leading-relaxed flex gap-3"
                  >
                    <span className="text-accent shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Co-Founders — placed after Hyeri's deep dive */}
      <section className="py-16 md:py-24 px-5 md:px-10 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-10">
              {teamLabel[lang]}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
              {founders.map((f) => (
                <div key={f.name}>
                  <div className="relative aspect-[2250/3583] overflow-hidden rounded-sm bg-white">
                    <Image
                      src={f.src}
                      alt={`${f.name} — ${f.role[lang]}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-base font-semibold tracking-tight">
                      {f.name}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">
                      {f.role[lang]}
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
