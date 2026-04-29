"use client";

import type { Category } from "@/types/project";

export type FilterKey = "all" | Category;

const filters: { key: FilterKey }[] = [
  { key: "all" },
  { key: "ux-ui" },
  { key: "branding" },
  { key: "editorial" },
];

interface WorkFiltersProps {
  active: FilterKey;
  onChange: (key: FilterKey) => void;
  labels: Record<FilterKey, string>;
  counts: Record<FilterKey, number>;
}

export function WorkFilters({
  active,
  onChange,
  labels,
  counts,
}: WorkFiltersProps) {
  return (
    <div className="flex gap-2 md:gap-3 mb-10 md:mb-14 flex-wrap">
      {filters.map((f) => {
        const isActive = active === f.key;
        return (
          <button
            key={f.key}
            onClick={() => onChange(f.key)}
            className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors duration-200 inline-flex items-center gap-2 ${
              isActive
                ? "bg-foreground text-white border-foreground"
                : "bg-transparent text-text-secondary border-border hover:border-foreground hover:text-foreground"
            }`}
          >
            {labels[f.key]}
            <span
              className={`text-xs tabular-nums ${
                isActive ? "text-white/70" : "text-text-muted"
              }`}
            >
              {String(counts[f.key]).padStart(2, "0")}
            </span>
          </button>
        );
      })}
    </div>
  );
}
