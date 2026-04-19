export interface ProcessStep {
  number: number;
  title: { ko: string; en: string };
  body: { ko: string[]; en: string[] };
}

export interface ProcessContent {
  header: {
    title: { ko: string; en: string };
    description: { ko: string[]; en: string[] };
  };
  steps: ProcessStep[];
}

export const processContent: ProcessContent = {
  header: {
    title: { ko: "작업 프로세스", en: "Process" },
    description: {
      ko: [
        "프로젝트는 상담부터 최종 전달까지",
        "명확한 단계에 따라 진행됩니다.",
        "자료가 아직 정리되지 않았더라도",
        "상담을 통해 함께 방향을 정리할 수 있습니다.",
      ],
      en: [
        "Projects move through a clear process",
        "from consultation to final delivery.",
        "Even if your materials are not fully prepared,",
        "we can help define the direction through consultation.",
      ],
    },
  },
  steps: [
    {
      number: 1,
      title: { ko: "상담 및 범위 확인", en: "Consultation & Scope" },
      body: {
        ko: [
          "프로젝트 목적과 필요한 작업 범위를 확인합니다.",
          "준비된 자료나 기획안을 바탕으로",
          "견적과 일정을 함께 조율합니다.",
        ],
        en: [
          "We begin by reviewing the project goals",
          "and confirming the scope of work.",
          "Based on your materials or brief, we align schedule and estimate.",
        ],
      },
    },
    {
      number: 2,
      title: { ko: "자료 확인 및 작업 준비", en: "Preparation & Planning" },
      body: {
        ko: [
          "작업에 필요한 자료와 리소스를 전달받고",
          "프로젝트 방향을 구체화합니다.",
          "자료 준비가 어려운 경우 상담을 통해 도와드립니다.",
        ],
        en: [
          "We review the necessary materials and resources",
          "and refine the project direction.",
          "If preparing materials is difficult, we can help through consultation.",
        ],
      },
    },
    {
      number: 3,
      title: { ko: "시안 제작 및 수정", en: "Design & Revision" },
      body: {
        ko: [
          "1차 시안을 전달드린 후",
          "피드백을 반영하여 수정 작업을 진행합니다.",
          "프로젝트 범위에 맞춰 완성도를 높여갑니다.",
        ],
        en: [
          "After sharing the initial draft,",
          "we refine the work based on your feedback.",
          "The design is adjusted within the agreed project scope.",
        ],
      },
    },
    {
      number: 4,
      title: { ko: "최종 전달 및 후속 지원", en: "Final Delivery & Support" },
      body: {
        ko: [
          "최종 시안 확정 후 원본 파일을 전달드립니다.",
          "작업 완료 이후에도 필요한 문의나",
          "추가 지원이 있으면 이어서 도와드립니다.",
        ],
        en: [
          "Once the final design is approved,",
          "we deliver the source files.",
          "Post-project support is available for follow-up needs and questions.",
        ],
      },
    },
  ],
};
