export type FieldType = "text" | "email" | "select" | "textarea" | "checkbox";

export interface FieldOption {
  value: string;
  label: { ko: string; en: string };
}

export interface FormFieldDef {
  id: string;
  type: FieldType;
  required: boolean;
  label: { ko: string; en: string };
  placeholder?: { ko: string; en: string };
  options?: FieldOption[];
}

export interface ContactContent {
  header: {
    title: { ko: string; en: string };
    description: { ko: string[]; en: string[] };
  };
  submit: { ko: string; en: string };
  fields: FormFieldDef[];
}

const serviceTypeOptions: FieldOption[] = [
  { value: "bx", label: { ko: "BX 디자인", en: "BX Design" } },
  { value: "uxui", label: { ko: "UXUI 디자인", en: "UXUI Design" } },
  { value: "edit", label: { ko: "EDIT 디자인", en: "EDIT Design" } },
  { value: "unsure", label: { ko: "아직 잘 모르겠어요", en: "Not sure yet" } },
];

const budgetOptions: FieldOption[] = [
  { value: "under-500k", label: { ko: "50만 원 이하", en: "Under ₩500,000" } },
  { value: "500k-1m", label: { ko: "50만 원 ~ 100만 원", en: "₩500,000 – ₩1,000,000" } },
  { value: "1m-2m", label: { ko: "100만 원 ~ 200만 원", en: "₩1,000,000 – ₩2,000,000" } },
  { value: "2m-4m", label: { ko: "200만 원 ~ 400만 원", en: "₩2,000,000 – ₩4,000,000" } },
  { value: "over-4m", label: { ko: "400만 원 이상", en: "Over ₩4,000,000" } },
  { value: "tbd", label: { ko: "예산은 아직 미정", en: "Not sure yet" } },
];

const timelineOptions: FieldOption[] = [
  { value: "asap", label: { ko: "가능한 한 빠르게", en: "As soon as possible" } },
  { value: "within-2w", label: { ko: "2주 이내", en: "Within 2 weeks" } },
  { value: "within-4w", label: { ko: "3~4주 이내", en: "Within 3–4 weeks" } },
  { value: "within-2m", label: { ko: "1~2개월 이내", en: "Within 1–2 months" } },
  { value: "flexible", label: { ko: "일정 협의 가능", en: "Flexible" } },
];

export const contactContent: ContactContent = {
  header: {
    title: { ko: "문의하기", en: "Get in Touch" },
    description: {
      ko: [
        "프로젝트에 대해 간단히 알려주시면",
        "예산과 일정에 맞는 방향으로 안내드립니다.",
      ],
      en: [
        "Tell us a little about your project.",
        "We'll guide you based on your budget and timeline.",
      ],
    },
  },
  submit: { ko: "문의 보내기", en: "Send Inquiry" },
  fields: [
    {
      id: "name",
      type: "text",
      required: true,
      label: { ko: "이름", en: "Your Name" },
      placeholder: { ko: "이름을 입력해주세요", en: "Enter your name" },
    },
    {
      id: "company",
      type: "text",
      required: false,
      label: { ko: "브랜드명 또는 회사명", en: "Brand or Company" },
      placeholder: {
        ko: "브랜드명 또는 회사명을 입력해주세요",
        en: "Enter your brand or company name",
      },
    },
    {
      id: "service_type",
      type: "select",
      required: true,
      label: { ko: "의뢰 분야", en: "Service Type" },
      placeholder: { ko: "의뢰 분야를 선택해주세요", en: "Select a service" },
      options: serviceTypeOptions,
    },
    {
      id: "message",
      type: "textarea",
      required: true,
      label: { ko: "어떤 작업이 필요하신가요?", en: "What would you like to work on?" },
      placeholder: {
        ko: "프로젝트 내용, 필요한 작업, 참고사항 등을 자유롭게 작성해주세요",
        en: "Tell us about your project, required deliverables, or any references",
      },
    },
    {
      id: "budget",
      type: "select",
      required: true,
      label: { ko: "예산은 어느 정도로 생각하고 계신가요?", en: "What is your estimated budget?" },
      placeholder: { ko: "예산을 선택해주세요", en: "Select a budget" },
      options: budgetOptions,
    },
    {
      id: "timeline",
      type: "select",
      required: true,
      label: { ko: "언제쯤 시작하고 싶으신가요?", en: "When would you like to start?" },
      placeholder: { ko: "진행 희망 시기를 선택해주세요", en: "Select a timeframe" },
      options: timelineOptions,
    },
    {
      id: "email",
      type: "email",
      required: true,
      label: { ko: "연락 가능한 이메일", en: "Your Contact Email" },
      placeholder: { ko: "이메일을 입력해주세요", en: "Enter your email address" },
    },
    {
      id: "agreement",
      type: "checkbox",
      required: true,
      label: {
        ko: "개인정보 처리 및 문의 내용 확인에 동의합니다.",
        en: "I agree to the privacy policy and inquiry terms.",
      },
    },
  ],
};
