import type { TemplateLine } from "./types";

export const koTemplate: TemplateLine[] = [
  [
    { kind: "text", value: "저는" },
    { kind: "field", id: "name" },
    { kind: "text", value: "이고," },
    { kind: "field", id: "company" },
    { kind: "text", value: "에서 연락드립니다." },
  ],
  [
    { kind: "field", id: "service_type" },
    { kind: "text", value: "작업을 의뢰하고 싶어요." },
  ],
  [{ kind: "field", id: "message" }],
  [
    { kind: "text", value: "예산은" },
    { kind: "field", id: "budget" },
    { kind: "text", value: "정도이고," },
    { kind: "field", id: "timeline" },
    { kind: "text", value: "시작하고 싶어요." },
  ],
  [
    { kind: "text", value: "연락은" },
    { kind: "field", id: "email" },
    { kind: "text", value: "로 부탁드려요." },
  ],
];

export const enTemplate: TemplateLine[] = [
  [
    { kind: "text", value: "My name is" },
    { kind: "field", id: "name" },
    { kind: "text", value: "and I'm writing from" },
    { kind: "field", id: "company" },
    { kind: "text", value: "." },
  ],
  [
    { kind: "text", value: "I'd like to work on" },
    { kind: "field", id: "service_type" },
    { kind: "text", value: "." },
  ],
  [{ kind: "field", id: "message" }],
  [
    { kind: "text", value: "My budget is roughly" },
    { kind: "field", id: "budget" },
    { kind: "text", value: "and I'd like to start" },
    { kind: "field", id: "timeline" },
    { kind: "text", value: "." },
  ],
  [
    { kind: "text", value: "You can reach me at" },
    { kind: "field", id: "email" },
    { kind: "text", value: "." },
  ],
];
