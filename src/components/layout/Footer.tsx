import Link from "next/link";
import type { Dictionary } from "@/types/dictionary";

interface FooterProps {
  locale: string;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-8">
        {/* Top: columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted mb-3">
              Studio
            </p>
            <p className="text-base md:text-lg text-foreground max-w-md leading-relaxed">
              REONU는 브랜드와 디지털 경험을 설계하는 서울 기반 디자인 스튜디오입니다.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted mb-1">
              Navigate
            </p>
            <Link href={`/${locale}/work`} className="text-sm text-foreground hover:text-accent transition-colors">
              {dict.nav.work}
            </Link>
            <Link href={`/${locale}/studio`} className="text-sm text-foreground hover:text-accent transition-colors">
              {dict.nav.studio}
            </Link>
            <Link href={`/${locale}/contact`} className="text-sm text-foreground hover:text-accent transition-colors">
              {dict.nav.contact}
            </Link>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted mb-1">
              Contact
            </p>
            <a
              href="mailto:reonustudio@gmail.com"
              className="text-sm text-foreground hover:text-accent transition-colors break-all"
            >
              reonustudio@gmail.com
            </a>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-14 md:mt-20 -mb-4 md:-mb-8 select-none pointer-events-none">
          <h2
            aria-hidden
            className="text-[22vw] md:text-[18vw] lg:text-[16vw] font-black leading-[0.82] tracking-tighter text-foreground/[0.08]"
          >
            REONU
          </h2>
        </div>

        {/* Bottom bar */}
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
