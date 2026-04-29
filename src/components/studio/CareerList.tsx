"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

interface CareerListProps {
  label?: string;
  heading?: string;
  items: string[];
}

export function CareerList({ label, heading, items }: CareerListProps) {
  return (
    <div>
      {label && (
        <span className="block text-xs uppercase tracking-[0.25em] text-text-muted mb-6">
          {label}
        </span>
      )}
      {heading && (
        <h3 className="text-base md:text-lg font-semibold tracking-[0.05em] uppercase text-foreground mb-4">
          {heading}
        </h3>
      )}
      <ul className="border-t border-border">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.04,
              ease: easeOut,
            }}
            className="group relative flex items-center gap-4 py-3.5 border-b border-border text-sm md:text-base text-text-secondary leading-relaxed transition-colors duration-300 hover:text-foreground"
          >
            <span className="relative flex items-center w-3 h-3 shrink-0">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-text-muted transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-accent group-hover:w-3 group-hover:h-px group-hover:rounded-none" />
            </span>
            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
