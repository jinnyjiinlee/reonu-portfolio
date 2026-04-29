"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { contactContent, type FormFieldDef } from "@/data/contactForm";
import type { Dictionary } from "@/types/dictionary";
import { useContactForm } from "./useContactForm";
import { FieldInput } from "./FieldInput";
import { SuccessView } from "./SuccessView";
import { SubmitBar } from "./SubmitBar";

interface ConversationFormProps {
  locale: "ko" | "en";
  dict: Dictionary;
}

export function ConversationForm({ locale, dict }: ConversationFormProps) {
  const fieldMap = useMemo(() => {
    const map = new Map<string, FormFieldDef>();
    for (const f of contactContent.fields) map.set(f.id, f);
    return map;
  }, []);

  const {
    values,
    set,
    submitted,
    loading,
    errorMsg,
    handleSubmit,
    isFilled,
    filledCount,
    totalRequired,
  } = useContactForm(dict);

  if (submitted) return <SuccessView message={dict.contact.success} />;

  const template = contactContent.template[locale];
  const agreement = fieldMap.get("agreement");

  function renderField(id: string) {
    const field = fieldMap.get(id);
    if (!field) return null;
    return (
      <FieldInput
        field={field}
        value={values[id]}
        onChange={set}
        locale={locale}
        filled={isFilled(values[id])}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12 md:space-y-16">
      <div className="space-y-10 md:space-y-12">
        {template.map((line, i) => {
          const isTextareaLine =
            line.length === 1 &&
            line[0].kind === "field" &&
            fieldMap.get(line[0].id)?.type === "textarea";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative pl-10 md:pl-14"
            >
              <span className="absolute left-0 top-3 text-xs font-medium tabular-nums tracking-[0.2em] text-text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>

              {isTextareaLine ? (
                renderField((line[0] as { id: string }).id)
              ) : (
                <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-lg md:text-xl leading-[1.9] text-foreground">
                  {line.map((seg, j) =>
                    seg.kind === "text" ? (
                      <span key={j}>{seg.value}</span>
                    ) : (
                      <span key={j}>{renderField(seg.id)}</span>
                    ),
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {agreement && (
        <label className="flex items-start gap-3 cursor-pointer select-none pl-10 md:pl-14">
          <input
            type="checkbox"
            name={agreement.id}
            checked={Boolean(values[agreement.id])}
            onChange={(e) => set(agreement.id, e.target.checked)}
            className="mt-1 size-4 accent-accent"
            required={agreement.required}
          />
          <span className="text-sm text-text-secondary leading-relaxed">
            {agreement.label[locale]}
            {agreement.required && (
              <span className="text-accent ml-1">*</span>
            )}
          </span>
        </label>
      )}

      {errorMsg && (
        <p className="text-sm text-accent pl-10 md:pl-14">{errorMsg}</p>
      )}

      <SubmitBar
        loading={loading}
        label={contactContent.submit[locale]}
        filledCount={filledCount}
        totalRequired={totalRequired}
        locale={locale}
      />
    </form>
  );
}
