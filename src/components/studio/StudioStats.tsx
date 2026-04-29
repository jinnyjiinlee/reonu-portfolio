"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { liveProjects } from "@/data/projects";
import type { Dictionary } from "@/types/dictionary";
import { easeOut } from "@/lib/motion";

interface StudioStatsProps {
  dict: Dictionary;
}

export function StudioStats({ dict }: StudioStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-border pt-8">
      <Stat value={9} suffix="+" label={dict.studio.yearsExp} delay={0} />
      <Stat
        value={liveProjects.length}
        suffix="+"
        label={dict.studio.projectsDone}
        delay={0.1}
      />
      <Stat value={3} label={dict.studio.categories} delay={0.2} />
    </div>
  );
}

function Stat({
  value,
  suffix = "",
  label,
  delay,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.4,
      delay,
      ease: easeOut,
    });
    return controls.stop;
  }, [inView, value, delay, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: easeOut }}
    >
      <div className="flex items-baseline">
        <motion.span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight tabular-nums">
          {rounded}
        </motion.span>
        <span className="text-2xl md:text-3xl font-bold text-accent ml-0.5">
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-text-muted">
        {label}
      </div>
    </motion.div>
  );
}
