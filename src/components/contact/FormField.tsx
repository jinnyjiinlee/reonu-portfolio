"use client";

import type { ChangeEvent } from "react";
import type { FormFieldDef } from "@/data/contactForm";

interface FormFieldProps {
  field: FormFieldDef;
  value: string | boolean;
  onChange: (id: string, value: string | boolean) => void;
  locale: "ko" | "en";
  error?: string;
}

export function FormField({ field, value, onChange, locale, error }: FormFieldProps) {
  const label = field.label[locale];
  const placeholder = field.placeholder?.[locale];

  if (field.type === "checkbox") {
    return (
      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          name={field.id}
          checked={Boolean(value)}
          onChange={(e) => onChange(field.id, e.target.checked)}
          className="mt-1 size-4 accent-foreground"
          required={field.required}
        />
        <span className="text-sm text-text-secondary leading-relaxed">
          {label}
          {field.required && <span className="text-accent ml-1">*</span>}
        </span>
      </label>
    );
  }

  const commonLabel = (
    <label htmlFor={field.id} className="block text-xs uppercase tracking-widest text-text-muted mb-2">
      {label}
      {field.required && <span className="text-accent ml-1">*</span>}
    </label>
  );

  const inputClass =
    "w-full border-b border-border bg-transparent py-3 text-base focus:outline-none focus:border-foreground transition-colors";

  if (field.type === "textarea") {
    return (
      <div>
        {commonLabel}
        <textarea
          id={field.id}
          name={field.id}
          value={String(value)}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(field.id, e.target.value)}
          placeholder={placeholder}
          required={field.required}
          rows={5}
          className={`${inputClass} resize-none`}
        />
        {error && <p className="mt-2 text-xs text-accent">{error}</p>}
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div>
        {commonLabel}
        <select
          id={field.id}
          name={field.id}
          value={String(value)}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(field.id, e.target.value)}
          required={field.required}
          className={`${inputClass} appearance-none`}
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
        {error && <p className="mt-2 text-xs text-accent">{error}</p>}
      </div>
    );
  }

  return (
    <div>
      {commonLabel}
      <input
        id={field.id}
        type={field.type}
        name={field.id}
        value={String(value)}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(field.id, e.target.value)}
        placeholder={placeholder}
        required={field.required}
        className={inputClass}
      />
      {error && <p className="mt-2 text-xs text-accent">{error}</p>}
    </div>
  );
}
