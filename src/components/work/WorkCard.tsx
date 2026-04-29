"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";
import type { Project } from "@/types/project";

interface WorkCardProps {
  project: Project;
  locale: string;
  lang: "ko" | "en";
  hoveredId: number | null;
  onHoverStart: (id: number) => void;
  onHoverEnd: () => void;
}

export function WorkCard({
  project,
  locale,
  lang,
  hoveredId,
  onHoverStart,
  onHoverEnd,
}: WorkCardProps) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 3, scale: 1.01 });
  const dimmed = hoveredId !== null && hoveredId !== project.id;

  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35 }}
      onMouseEnter={() => onHoverStart(project.id)}
      onMouseLeave={onHoverEnd}
      style={{ perspective: 1000 }}
    >
      <Link
        href={`/${locale}/work/${project.slug}`}
        className="group block"
        data-cursor-label="VIEW"
      >
        <motion.div
          animate={{
            opacity: dimmed ? 0.35 : 1,
            filter: dimmed ? "saturate(0.7)" : "saturate(1)",
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            ref={tiltRef}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-sm transition-[transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{
              backgroundColor: project.color,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title[lang]}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.04] [background-image:url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22120%22%20height=%22120%22><filter%20id=%22n%22><feTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%222%22/></filter><rect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/></svg>')]" />
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-3">
            <h3 className="text-sm md:text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">
              <span className="relative inline-block">
                {project.title[lang]}
                <span className="absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </span>
            </h3>
            <span className="text-xs uppercase tracking-widest text-text-muted shrink-0">
              {project.categoryLabel?.[lang] ?? ""}
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
