"use client";

import { useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import { contactContent } from "@/data/contactForm";
import { FormField } from "./FormField";

interface ContactContentProps {
  locale: string;
  dict: Dictionary;
}

type FormValues = Record<string, string | boolean>;

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function ContactContent({ locale, dict }: ContactContentProps) {
  const lang = locale as "ko" | "en";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const initialValues = useMemo<FormValues>(() => {
    const v: FormValues = {};
    for (const f of contactContent.fields) {
      v[f.id] = f.type === "checkbox" ? false : "";
    }
    return v;
  }, []);

  const [values, setValues] = useState<FormValues>(initialValues);

  function handleChange(id: string, value: string | boolean) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const body = new FormData();
    for (const [k, v] of Object.entries(values)) {
      body.append(k, typeof v === "boolean" ? String(v) : v);
    }

    try {
      if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          body,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("submit failed");
      } else {
        await new Promise((r) => setTimeout(r, 400));
      }
      setSubmitted(true);
      setValues(initialValues);
    } catch {
      setErrorMsg(dict.contact.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-32 md:pt-44">
      <section className="min-h-[40vh] flex items-end px-5 md:px-10 pb-12 md:pb-20">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {contactContent.header.title[lang]}
            </h1>
            <div className="mt-4 text-lg text-text-secondary max-w-lg">
              {contactContent.header.description[lang].map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_320px] gap-16 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="py-12">
                <div className="text-4xl mb-4">&#10003;</div>
                <p className="text-lg font-medium">{dict.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {contactContent.fields.map((field) => (
                  <FormField
                    key={field.id}
                    field={field}
                    value={values[field.id]}
                    onChange={handleChange}
                    locale={lang}
                  />
                ))}

                {errorMsg && (
                  <p className="text-sm text-accent">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white text-sm font-medium uppercase tracking-widest rounded-full disabled:opacity-50"
                >
                  {loading ? "..." : contactContent.submit[lang]}
                  <span>&rarr;</span>
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xs uppercase tracking-widest text-text-muted mb-3">
                {dict.contact.email}
              </h3>
              <a
                href="mailto:reonustudio@gmail.com"
                className="text-base font-medium"
              >
                reonustudio@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
