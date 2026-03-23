import type { Dictionary } from "@/types/dictionary";

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  ko: () => import("@/dictionaries/ko.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

export const getDictionary = (locale: string): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries.ko();
};

export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
