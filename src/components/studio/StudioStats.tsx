import { liveProjects } from "@/data/projects";
import type { Dictionary } from "@/types/dictionary";

interface StudioStatsProps {
  dict: Dictionary;
}

export function StudioStats({ dict }: StudioStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Stat value="9+" label={dict.studio.yearsExp} />
      <Stat
        value={`${liveProjects.length}+`}
        label={dict.studio.projectsDone}
      />
      <Stat value="3" label={dict.studio.categories} />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-accent">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-text-muted">
        {label}
      </div>
    </div>
  );
}
