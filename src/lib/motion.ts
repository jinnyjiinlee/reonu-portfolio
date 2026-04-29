// Shared motion constants used across animated components.
export const easeOut = [0.16, 1, 0.3, 1] as const; // expo-out — primary
export const easeOutQuart = [0.25, 1, 0.5, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;

// Stagger helper for word/char reveals.
export const staggerChildren = (delay = 0, stagger = 0.04) => ({
  delay,
  staggerChildren: stagger,
});

// Common variants
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

export const maskReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: { clipPath: "inset(0% 0 0 0)" },
} as const;
