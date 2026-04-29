"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/types/dictionary";
import { MenuButton, MobileMenu, type NavLink } from "./MobileMenu";

interface NavigationProps {
  locale: string;
  dict: Dictionary;
}

export function Navigation({ locale, dict }: NavigationProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchedLocale = locale === "ko" ? "en" : "ko";
  const switchedPath = pathname.replace(`/${locale}`, `/${switchedLocale}`);

  const navLinks: NavLink[] = [
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/studio`, label: dict.nav.studio },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "h-16 md:h-20 border-b border-border/60"
          : "h-28 md:h-40 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-full flex items-center justify-between">
        <Link
          href={`/${locale}`}
          aria-label="REONU Home"
          className="flex items-center"
        >
          <Image
            src="/images/logo/logo-01.png"
            alt="REONU"
            width={1200}
            height={300}
            priority
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-8 md:h-10" : "h-14 sm:h-16 md:h-20"
            }`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wider group"
              >
                {link.label}
                <span
                  className={`pointer-events-none absolute left-0 -bottom-1 h-px bg-foreground origin-left transition-transform duration-300 ${
                    active
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href={switchedPath}
            className="text-xs font-medium text-text-muted hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {switchedLocale === "ko" ? "KR" : "EN"}
          </Link>
        </nav>

        <MenuButton
          open={mobileOpen}
          onToggle={() => setMobileOpen((v) => !v)}
        />
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        isActive={isActive}
        switchedPath={switchedPath}
        switchedLocale={switchedLocale as "ko" | "en"}
      />
    </header>
  );
}
