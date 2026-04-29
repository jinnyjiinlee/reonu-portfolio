"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { easeOut } from "@/lib/motion";
import type { Project } from "@/types/project";
import { HeroFrame } from "./HeroFrame";
import { HeroMagneticCTA } from "./HeroMagneticCTA";
import { HeroCardMeta } from "./HeroCardMeta";

interface HeroCarouselProps {
  projects: Project[];
  activeIdx: number;
  locale: string;
  imageScale: MotionValue<number>;
}

export function HeroCarousel({
  projects,
  activeIdx,
  locale,
  imageScale,
}: HeroCarouselProps) {
  const active = projects[activeIdx];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springMx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.8 });
  const springMy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.8 });
  const imgTranslateX = useTransform(springMx, (v) => v * 14);
  const imgTranslateY = useTransform(springMy, (v) => v * 14);
  const imgRotate = useTransform(springMx, (v) => v * 2);
  const frameX = useTransform(springMx, (v) => v * -10);
  const frameY = useTransform(springMy, (v) => v * -10);
  const ctaX = useTransform(springMx, (v) => v * 28);
  const ctaY = useTransform(springMy, (v) => v * 28);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: easeOut }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="flex-1 flex items-center justify-center relative"
    >
      <Link
        href={active ? `/${locale}/work/${active.slug}` : `/${locale}/work`}
        className="group relative w-[60%] sm:w-[55%] md:w-[48%] lg:w-[46%] aspect-[3/4]"
        aria-label={active?.title.en ?? "View work"}
        data-cursor-label="VIEW"
      >
        <HeroFrame frameX={frameX} frameY={frameY} />

        <motion.div
          style={{
            x: imgTranslateX,
            y: imgTranslateY,
            rotate: imgRotate,
            scale: imageScale,
          }}
          className="absolute inset-0 overflow-hidden bg-surface rounded-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]"
        >
          <AnimatePresence mode="sync">
            {active && (
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1.1, ease: easeOut }}
                className="absolute inset-0"
              >
                <Image
                  src={active.thumbnail}
                  alt={active.title.en}
                  fill
                  sizes="(min-width: 1024px) 40vw, 60vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>

          <HeroCardMeta
            active={active}
            activeIdx={activeIdx}
            total={projects.length}
          />
        </motion.div>

        <div className="absolute -bottom-5 left-0 right-0 flex gap-1">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`h-px flex-1 transition-colors duration-500 ${
                i === activeIdx ? "bg-foreground" : "bg-foreground/15"
              }`}
            />
          ))}
        </div>

        <HeroMagneticCTA ctaX={ctaX} ctaY={ctaY} />
      </Link>
    </motion.div>
  );
}
