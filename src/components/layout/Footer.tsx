"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";

interface FooterProps {
  locale: string;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const wordmarkY = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const wordmarkOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0.04, 0.1, 0.16],
  );

  const linkClass =
    "group/fl relative inline-block self-start text-sm text-foreground transition-colors hover:text-accent";
  const underline =
    "absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left scale-x-0 group-hover/fl:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <footer
      ref={ref}
      className="relative border-t border-border overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted mb-3">
              Studio
            </p>
            <p className="text-base md:text-lg text-foreground max-w-md leading-relaxed">
              REONU®는 브랜드와 디지털 경험을 설계하는 디자인 스튜디오입니다.
              브랜딩, UX·UI, 편집 디자인을 아우릅니다.
            </p>
          </div>

          <nav className="flex flex-col gap-3 items-start">
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted mb-1">
              Navigate
            </p>
            <Link href={`/${locale}/work`} className={linkClass}>
              <span>{dict.nav.work}</span>
              <span className={underline} />
            </Link>
            <Link href={`/${locale}/studio`} className={linkClass}>
              <span>{dict.nav.studio}</span>
              <span className={underline} />
            </Link>
            <Link href={`/${locale}/contact`} className={linkClass}>
              <span>{dict.nav.contact}</span>
              <span className={underline} />
            </Link>
          </nav>

          <div className="flex flex-col gap-3 items-start">
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted mb-1">
              Contact
            </p>
            <a
              href="mailto:reonustudio@gmail.com"
              className={`${linkClass} break-all`}
              data-cursor-label="MAIL"
            >
              <span>reonustudio@gmail.com</span>
              <span className={underline} />
            </a>
          </div>
        </div>

        <motion.div
          style={{ y: wordmarkY }}
          className="mt-14 md:mt-20 -mb-4 md:-mb-8 select-none pointer-events-none will-change-transform"
        >
          <motion.h2
            aria-hidden
            style={{ opacity: wordmarkOpacity }}
            className="text-[22vw] md:text-[18vw] lg:text-[16vw] font-black leading-[0.82] tracking-tighter text-foreground"
          >
            REONU
          </motion.h2>
        </motion.div>

        <div className="mt-10 md:mt-12 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-text-muted">
          <p>
            &copy; {currentYear} {dict.footer.copyright}
          </p>
          <p>사업자등록번호 510-56-00862</p>
        </div>
      </div>
    </footer>
  );
}
