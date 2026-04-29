import type { FieldOption } from "./types";

export const serviceTypeOptions: FieldOption[] = [
  { value: "bx", label: { ko: "BX 디자인", en: "BX Design" } },
  { value: "uxui", label: { ko: "UXUI 디자인", en: "UXUI Design" } },
  { value: "edit", label: { ko: "EDIT 디자인", en: "EDIT Design" } },
  { value: "unsure", label: { ko: "아직 잘 모르겠어요", en: "Not sure yet" } },
];

export const budgetOptions: FieldOption[] = [
  { value: "under-500k", label: { ko: "50만 원 이하", en: "Under ₩500,000" } },
  { value: "500k-1m", label: { ko: "50만 원 ~ 100만 원", en: "₩500,000 – ₩1,000,000" } },
  { value: "1m-2m", label: { ko: "100만 원 ~ 200만 원", en: "₩1,000,000 – ₩2,000,000" } },
  { value: "2m-4m", label: { ko: "200만 원 ~ 400만 원", en: "₩2,000,000 – ₩4,000,000" } },
  { value: "over-4m", label: { ko: "400만 원 이상", en: "Over ₩4,000,000" } },
  { value: "tbd", label: { ko: "예산은 아직 미정", en: "Not sure yet" } },
];

export const timelineOptions: FieldOption[] = [
  { value: "asap", label: { ko: "가능한 한 빠르게", en: "As soon as possible" } },
  { value: "within-2w", label: { ko: "2주 이내", en: "Within 2 weeks" } },
  { value: "within-4w", label: { ko: "3~4주 이내", en: "Within 3–4 weeks" } },
  { value: "within-2m", label: { ko: "1~2개월 이내", en: "Within 1–2 months" } },
  { value: "flexible", label: { ko: "일정 협의 가능", en: "Flexible" } },
];
