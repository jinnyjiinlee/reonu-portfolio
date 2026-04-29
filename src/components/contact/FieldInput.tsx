"use client";

import type { ChangeEvent } from "react";
import type { FormFieldDef } from "@/data/contactForm";
import { PILL, TEXTAREA_BASE, inputWidth } from "./inputStyles";

interface FieldInputProps {
  field: FormFieldDef;
  value: string | boolean;
  onChange: (id: string, v: string | boolean) => void;
  locale: "ko" | "en";
  filled: boolean;
}

export function FieldInput({
  field,
  value,
  onChange,
  locale,
  filled,
}: FieldInputProps) {
  const placeholder = field.placeholder?.[locale];

  if (field.type === "textarea") {
    return (
      <div className="relative group/textarea">
        <textarea
          id={field.id}
          name={field.id}
          value={String(value)}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            onChange(field.id, e.target.value)
          }
          placeholder={placeholder}
          required={field.required}
          rows={6}
          className={TEXTAREA_BASE}
        />
        <span
          aria-hidden
          className={`pointer-events-none absolute right-5 top-5 w-2 h-2 rounded-full transition-colors duration-300 ${
            filled ? "bg-accent" : "bg-foreground/30"
          }`}
        />
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <span className="relative inline-block align-baseline">
        <select
          id={field.id}
          name={field.id}
          value={String(value)}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onChange(field.id, e.target.value)
          }
          required={field.required}
          className={`${PILL} pr-10 appearance-none cursor-pointer`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {field.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label[locale]}
            </option>
          ))}
        </select>
        <svg
          aria-hidden
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  return (
    <input
      id={field.id}
      type={field.type}
      name={field.id}
      value={String(value)}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onChange(field.id, e.target.value)
      }
      placeholder={placeholder}
      required={field.required}
      style={{ width: inputWidth(field, String(value)) }}
      className={PILL}
    />
  );
}
