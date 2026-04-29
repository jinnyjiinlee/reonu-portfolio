import type { ContactContent } from "./types";
import { fields } from "./fields";
import { enTemplate, koTemplate } from "./templates";

export * from "./types";

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
        "We’ll guide you based on your budget and timeline.",
      ],
    },
  },
  submit: { ko: "문의 보내기", en: "Send Inquiry" },
  fields,
  template: { ko: koTemplate, en: enTemplate },
};
