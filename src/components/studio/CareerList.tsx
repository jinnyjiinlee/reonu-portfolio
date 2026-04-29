interface CareerListProps {
  label?: string;
  heading?: string;
  items: string[];
}

export function CareerList({ label, heading, items }: CareerListProps) {
  return (
    <div>
      {label && (
        <span className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-6">
          {label}
        </span>
      )}
      {heading && (
        <h3 className="text-lg md:text-xl font-bold tracking-tight mb-6">
          {heading}
        </h3>
      )}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-sm md:text-base text-text-secondary leading-relaxed flex gap-3"
          >
            <span className="text-accent shrink-0">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
