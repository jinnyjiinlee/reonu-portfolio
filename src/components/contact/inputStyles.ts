import type { FormFieldDef } from "@/data/contactForm";

export const PILL =
  "peer/field inline-flex items-center bg-foreground/[0.04] hover:bg-foreground/[0.07] rounded-md px-4 py-2.5 align-baseline text-foreground placeholder:text-text-muted/80 focus:outline-none focus:bg-foreground/[0.08] focus:shadow-[inset_0_-2px_0_0] focus:shadow-accent transition-all duration-200";

export const TEXTAREA_BASE =
  "peer/textarea w-full bg-foreground/[0.04] hover:bg-foreground/[0.07] rounded-xl px-6 py-5 text-base md:text-lg leading-relaxed text-foreground placeholder:text-text-muted/80 focus:outline-none focus:bg-foreground/[0.08] focus:shadow-[inset_0_-2px_0_0] focus:shadow-accent resize-none transition-all duration-200";

export function inputWidth(field: FormFieldDef, value: string): string {
  const placeholder = field.placeholder?.en ?? field.label.en;
  const len = Math.max(value.length, placeholder.length, 8);
  return `${Math.min(len + 2, 32)}ch`;
}
