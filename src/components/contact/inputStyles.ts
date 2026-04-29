import type { FormFieldDef } from "@/data/contactForm";

// Shared form typography — match the conversation line size & leading exactly
// so pills, selects, and the textarea all read at the same scale.
const FORM_TEXT = "text-base md:text-lg leading-[1.7]";

export const PILL = `peer/field inline-flex items-center ${FORM_TEXT} bg-foreground/[0.04] hover:bg-foreground/[0.07] rounded-md px-4 py-2 align-baseline text-foreground placeholder:text-text-muted/80 focus:outline-none focus:bg-foreground/[0.08] focus:shadow-[inset_0_-2px_0_0] focus:shadow-accent transition-all duration-200`;

export const TEXTAREA_BASE = `peer/textarea w-full ${FORM_TEXT} bg-foreground/[0.04] hover:bg-foreground/[0.07] rounded-xl px-5 py-4 text-foreground placeholder:text-text-muted/80 focus:outline-none focus:bg-foreground/[0.08] focus:shadow-[inset_0_-2px_0_0] focus:shadow-accent resize-none transition-all duration-200`;

export function inputWidth(field: FormFieldDef, value: string): string {
  const placeholder = field.placeholder?.en ?? field.label.en;
  const len = Math.max(value.length, placeholder.length, 8);
  return `${Math.min(len + 2, 32)}ch`;
}
