"use client";

import { motion } from "framer-motion";

interface SuccessViewProps {
  message: string;
}

export function SuccessView({ message }: SuccessViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 text-center"
    >
      <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center text-2xl">
        &#10003;
      </div>
      <p className="text-lg md:text-xl font-medium">{message}</p>
    </motion.div>
  );
}
