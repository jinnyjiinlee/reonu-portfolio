"use client";

import { useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import { contactContent } from "@/data/contactForm";
import { FormField } from "@/components/contact/FormField";

interface HomeContactProps {
  locale: string;
  dict: Dictionary;
}

type FormValues = Record<string, string | boolean>;

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function HomeContact({ locale, dict }: HomeContactProps) {
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
    <section
      id="contact"
      className="py-24 md:py-40 px-5 md:px-10 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24">
        {/* Left: title + intro + contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              Inquiry
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            {contactContent.header.title[lang]}
          </h2>

          <div className="mt-6 text-base md:text-lg text-text-secondary leading-relaxed max-w-md">
            {contactContent.header.description[lang].map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="mt-12 space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-text-muted mb-2">
                {dict.contact.email}
              </h3>
              <a
                href="mailto:reonustudio@gmail.com"
                className="text-base font-medium hover:text-accent transition-colors"
              >
                reonustudio@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {submitted ? (
            <div className="py-16 border-t border-border">
              <div className="text-4xl mb-4">&#10003;</div>
              <p className="text-lg font-medium">{dict.contact.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {contactContent.fields.map((field) => (
                <FormField
                  key={field.id}
                  field={field}
                  value={values[field.id]}
                  onChange={handleChange}
                  locale={lang}
                />
              ))}

              {errorMsg && <p className="text-sm text-accent">{errorMsg}</p>}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white text-sm font-medium uppercase tracking-widest rounded-full disabled:opacity-50 hover:bg-accent transition-colors group"
              >
                {loading ? "..." : contactContent.submit[lang]}
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
