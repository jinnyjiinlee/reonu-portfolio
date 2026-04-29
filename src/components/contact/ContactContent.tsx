"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import { contactContent } from "@/data/contactForm";
import { ConversationForm } from "./ConversationForm";

interface ContactContentProps {
  locale: string;
  dict: Dictionary;
}

export function ContactContent({ locale, dict }: ContactContentProps) {
  const lang = locale as "ko" | "en";

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
            <ConversationForm locale={lang} dict={dict} />
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
