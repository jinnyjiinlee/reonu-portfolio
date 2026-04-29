"use client";

import { useMemo, useState, type FormEvent } from "react";
import { contactContent } from "@/data/contactForm";
import type { Dictionary } from "@/types/dictionary";

type FormValues = Record<string, string | boolean>;

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

function isFilled(value: string | boolean | undefined): boolean {
  if (typeof value === "boolean") return value;
  return Boolean(value && value.toString().trim().length > 0);
}

export function useContactForm(dict: Dictionary) {
  const initialValues = useMemo<FormValues>(() => {
    const v: FormValues = {};
    for (const f of contactContent.fields) {
      v[f.id] = f.type === "checkbox" ? false : "";
    }
    return v;
  }, []);

  const [values, setValues] = useState<FormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function set(id: string, value: string | boolean) {
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

  const requiredFields = contactContent.fields.filter(
    (f) => f.required && f.id !== "agreement",
  );
  const filledCount = requiredFields.filter((f) => isFilled(values[f.id])).length;

  return {
    values,
    set,
    submitted,
    loading,
    errorMsg,
    handleSubmit,
    isFilled,
    filledCount,
    totalRequired: requiredFields.length,
  };
}
