import type { FormFieldDef } from "./types";
import {
  budgetOptions,
  serviceTypeOptions,
  timelineOptions,
} from "./options";

export const fields: FormFieldDef[] = [
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
];
