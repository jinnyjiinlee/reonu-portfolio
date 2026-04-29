"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";
import { contactContent } from "@/data/contactForm";
import { ConversationForm } from "@/components/contact/ConversationForm";

interface HomeContactProps {
  locale: string;
  dict: Dictionary;
}

export function HomeContact({ locale, dict }: HomeContactProps) {
  const lang = locale as "ko" | "en";

  return (
    <section
      id="contact"
      className="py-24 md:py-40 px-5 md:px-10 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
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
                className="group/email relative inline-block text-base font-medium transition-colors hover:text-accent"
                data-cursor-label="MAIL"
              >
                <span>reonustudio@gmail.com</span>
                <span className="absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left scale-x-0 group-hover/email:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ConversationForm locale={lang} dict={dict} />
        </motion.div>
      </div>
    </section>
  );
}
