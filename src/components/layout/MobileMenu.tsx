"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  isActive: (href: string) => boolean;
  switchedPath: string;
  switchedLocale: "ko" | "en";
}

export function MobileMenu({
  open,
  onClose,
  navLinks,
  isActive,
  switchedPath,
  switchedLocale,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border"
        >
          <nav className="flex flex-col px-5 py-6 gap-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`text-base font-medium transition-colors uppercase tracking-wider ${
                    active
                      ? "text-foreground"
                      : "text-text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={switchedPath}
              onClick={onClose}
              className="text-sm font-medium text-text-muted hover:text-accent transition-colors uppercase tracking-widest"
            >
              {switchedLocale === "ko" ? "한국어" : "English"}
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface MenuButtonProps {
  open: boolean;
  onToggle: () => void;
}

export function MenuButton({ open, onToggle }: MenuButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden flex flex-col gap-1.5 p-2"
      aria-label="Toggle menu"
    >
      <motion.span
        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        className="block w-5 h-[1.5px] bg-foreground origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        className="block w-5 h-[1.5px] bg-foreground"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        className="block w-5 h-[1.5px] bg-foreground origin-center"
      />
    </button>
  );
}
