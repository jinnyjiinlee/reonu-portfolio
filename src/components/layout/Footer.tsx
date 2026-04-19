import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/types/dictionary";

interface FooterProps {
  locale: string;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-5 md:px-10 py-10 md:py-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-6">
        {/* Left: Logo + copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href={`/${locale}`} aria-label="REONU Home">
            <Image
              src="/images/logo/logo-02.png"
              alt="REONU"
              width={600}
              height={150}
              className="h-6 md:h-7 w-auto"
            />
          </Link>
          <p className="text-[11px] text-text-muted text-center md:text-left">
            &copy; {currentYear} {dict.footer.copyright}
          </p>
          <p className="text-[11px] text-text-muted text-center md:text-left">
            사업자등록번호 510-56-00862
          </p>
        </div>

        {/* Center: Nav links */}
        <nav className="flex flex-wrap justify-center gap-5 md:gap-6">
          <Link
            href={`/${locale}/work`}
            className="text-xs text-text-muted hover:text-foreground transition-colors uppercase tracking-wider"
          >
            {dict.nav.work}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="text-xs text-text-muted hover:text-foreground transition-colors uppercase tracking-wider"
          >
            {dict.nav.about}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="text-xs text-text-muted hover:text-foreground transition-colors uppercase tracking-wider"
          >
            {dict.nav.contact}
          </Link>
        </nav>

      </div>
    </footer>
  );
}
