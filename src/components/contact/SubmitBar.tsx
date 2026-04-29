interface SubmitBarProps {
  loading: boolean;
  label: string;
  filledCount: number;
  totalRequired: number;
  locale: "ko" | "en";
}

export function SubmitBar({
  loading,
  label,
  filledCount,
  totalRequired,
  locale,
}: SubmitBarProps) {
  return (
    <div className="pl-10 md:pl-14 flex flex-wrap items-center gap-5">
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white text-sm font-medium uppercase tracking-widest rounded-full disabled:opacity-50 hover:bg-accent transition-colors group"
      >
        {loading ? "..." : label}
        <span className="group-hover:translate-x-1 transition-transform">
          &rarr;
        </span>
      </button>

      <span className="text-xs uppercase tracking-[0.2em] text-text-muted tabular-nums">
        {filledCount}/{totalRequired} {locale === "ko" ? "완성" : "complete"}
      </span>
    </div>
  );
}
