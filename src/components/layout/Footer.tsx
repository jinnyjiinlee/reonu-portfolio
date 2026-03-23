import Link from "next/link";
import type { Dictionary } from "@/types/dictionary";

interface FooterProps {
  locale: string;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-5 md:px-10 py-8 border-t border-border">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <p className="text-xs text-text-muted">
          &copy; {currentYear} {dict.footer.copyright}
        </p>

        {/* Center: Nav links */}
        <nav className="flex gap-6">
          <Link
            href={`/${locale}#work`}
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

        {/* Right: Social */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com/reonustudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-muted hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://behance.net/reonustudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-muted hover:text-foreground transition-colors"
          >
            Behance
          </a>
          <a
            href="https://linkedin.com/in/reonustudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-muted hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
