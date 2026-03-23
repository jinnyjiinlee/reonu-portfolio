"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";

interface ContactContentProps {
  locale: string;
  dict: Dictionary;
}

export function ContactContent({ locale, dict }: ContactContentProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      // Silently handle - Formspree ID needs to be configured
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-end px-5 md:px-10 pb-12 md:pb-20">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-text-muted font-medium">
              {dict.contact.title}
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {dict.contact.cta}
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-lg">
              {dict.contact.ctaDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="text-4xl mb-4">&#10003;</div>
                <p className="text-lg font-medium">{dict.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                    {dict.contact.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border-b border-border bg-transparent py-3 text-base focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                    {dict.contact.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border-b border-border bg-transparent py-3 text-base focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                    {dict.contact.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full border-b border-border bg-transparent py-3 text-base focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                    {dict.contact.message}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full border-b border-border bg-transparent py-3 text-base focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white text-sm font-medium uppercase tracking-widest rounded-full hover:bg-accent transition-colors duration-300 disabled:opacity-50"
                >
                  {loading ? "..." : dict.contact.send}
                  <span>&rarr;</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xs uppercase tracking-widest text-text-muted mb-3">
                Email
              </h3>
              <a
                href="mailto:reonustudio@gmail.com"
                className="text-base font-medium hover:text-accent transition-colors"
              >
                reonustudio@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-text-muted mb-3">
                {dict.contact.phone}
              </h3>
              <div className="space-y-1">
                <p className="text-base font-medium">+1 682 272 2007</p>
                <p className="text-base font-medium">+82 10 7709 7124</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-text-muted mb-3">
                Social
              </h3>
              <div className="space-y-2">
                <a
                  href="https://instagram.com/reonustudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-medium hover:text-accent transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://behance.net/reonustudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-medium hover:text-accent transition-colors"
                >
                  Behance
                </a>
                <a
                  href="https://linkedin.com/in/reonustudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-medium hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
