"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";

interface NavigationProps {
  locale: string;
  dict: Dictionary;
}

export function Navigation({ locale, dict }: NavigationProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchedLocale = locale === "ko" ? "en" : "ko";
  const switchedPath = pathname.replace(`/${locale}`, `/${switchedLocale}`);

  const navLinks = [
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-28 md:h-40 bg-white/90 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} aria-label="REONU Home" className="flex items-center">
          {/* Wordmark-only logo (mobile + desktop) */}
          <Image
            src="/images/logo/logo-01.png"
            alt="REONU"
            width={1200}
            height={300}
            priority
            className="h-14 sm:h-16 md:h-20 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Toggle */}
          <Link
            href={switchedPath}
            className="text-xs font-medium text-text-muted hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {switchedLocale === "ko" ? "KR" : "EN"}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-foreground origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[1.5px] bg-foreground"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="block w-5 h-[1.5px] bg-foreground origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border"
          >
            <nav className="flex flex-col px-5 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={switchedPath}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-text-muted hover:text-accent transition-colors uppercase tracking-widest"
              >
                {switchedLocale === "ko" ? "한국어" : "English"}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
