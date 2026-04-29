"use client";

import { motion } from "framer-motion";

export function StudioHero() {
  return (
    <section className="min-h-[40vh] flex items-end px-5 md:px-10 pb-10 md:pb-16">
      <div className="max-w-[1200px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            HYERI GWON
          </h1>
          <p className="mt-2 text-lg md:text-xl text-text-secondary">
            Brand & Product Designer
          </p>
        </motion.div>
      </div>
    </section>
  );
}
