export type PricingKey = "bx" | "uxui" | "edit";

export interface PricingTier {
  key: PricingKey;
  tabLabel: string;
  title: string;
  description: { ko: string[]; en: string[] };
  tags: string[];
  mainPrice: string;
  secondaryPrice: string;
}

export interface PricingContent {
  left: {
    title: string;
    description: { ko: string[]; en: string[] };
    note: { ko: string[]; en: string[] };
    cta: string;
  };
  labels: {
    mainLabel: string;
    priceUnit: string;
    secondaryLabel: string;
  };
  tiers: PricingTier[];
}

export const pricingContent: PricingContent = {
  left: {
    title: "Price Guide",
    description: {
      ko: [
        "프로젝트의 성격과 필요한 범위에 따라",
        "대표 작업의 시작가를 안내드립니다.",
        "브랜드 구축부터 디지털 경험, 편집 홍보물까지",
        "목적에 맞는 디자인 서비스를 제안합니다.",
      ],
      en: [
        "We share starting prices for each representative service",
        "based on project scope and direction.",
        "From brand identity to digital experience and editorial materials,",
        "we propose a design service that fits your goal.",
      ],
    },
    note: {
      ko: [
        "어떤 작업부터 시작해야 할지 고민되시나요?",
        "상담을 통해 가장 적절한 방향을 함께 정리해드립니다.",
      ],
      en: [
        "Not sure where to start?",
        "We'll help define the most suitable direction through consultation.",
      ],
    },
    cta: "Project Inquiry",
  },
  labels: {
    mainLabel: "STARTING FROM",
    priceUnit: "/project",
    secondaryLabel: "Expanded scope from",
  },
  tiers: [
    {
      key: "bx",
      tabLabel: "BX",
      title: "BX Design",
      description: {
        ko: [
          "브랜드가 모든 접점에서 명확하고 일관되게 인식될 수 있도록",
          "아이덴티티 시스템을 디자인합니다.",
        ],
        en: [
          "We design identity systems that make the brand recognized",
          "clearly and consistently across every touchpoint.",
        ],
      },
      tags: [
        "Visual Identity System",
        "Logo & Mark Development",
        "Typography & Color System",
        "Guidelines & Asset Library",
        "Business Card Design",
        "Brand Collateral",
      ],
      mainPrice: "₩490,000",
      secondaryPrice: "₩890,000+",
    },
    {
      key: "uxui",
      tabLabel: "UXUI",
      title: "UXUI Design",
      description: {
        ko: [
          "구조적인 설계와 반응형 시스템을 바탕으로",
          "직관적이고 완성도 있는 디지털 경험을 디자인합니다.",
        ],
        en: [
          "Built on structured architecture and responsive systems,",
          "we design intuitive, polished digital experiences.",
        ],
      },
      tags: [
        "Website & Platform Design",
        "User Interface Design",
        "Responsive Layouts",
        "UI Systems",
        "Landing Page Design",
        "Service Flow Design",
      ],
      mainPrice: "₩790,000",
      secondaryPrice: "₩1,290,000+",
    },
    {
      key: "edit",
      tabLabel: "EDIT",
      title: "EDIT Design",
      description: {
        ko: [
          "명확한 구조와 일관된 비주얼을 바탕으로",
          "인쇄물과 홍보물을 효과적으로 디자인합니다.",
        ],
        en: [
          "Grounded in clear structure and consistent visuals,",
          "we design printed and promotional materials effectively.",
        ],
      },
      tags: [
        "Editorial Design",
        "Brochure & Guidebook",
        "Poster & Promotional Design",
        "Campaign Visuals",
        "Printed Materials",
        "Promotional Collateral",
      ],
      mainPrice: "₩250,000",
      secondaryPrice: "₩550,000+",
    },
  ],
};
