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
    <div className="pt-28 md:pt-36">
      <section className="px-5 md:px-10 pb-10 md:pb-14">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {contactContent.header.title[lang]}
            </h1>
            <div className="mt-4 text-base md:text-lg text-text-secondary max-w-lg leading-relaxed">
              {contactContent.header.description[lang].map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pt-6 md:pt-10 pb-20 md:pb-28 px-5 md:px-10">
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
