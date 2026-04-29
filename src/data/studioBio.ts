type Bilingual = { ko: string; en: string };
type BilingualList = { ko: string[]; en: string[] };

export interface Founder {
  src: string;
  name: string;
  role: Bilingual;
}

export interface CareerGroup {
  heading: Bilingual;
  items: BilingualList;
}

export const founders: Founder[] = [
  {
    src: "/images/profile/profile-01.jpg",
    name: "HYERI GWON",
    role: { ko: "공동대표 · 디자이너", en: "Founder · Designer" },
  },
  {
    src: "/images/profile/profile-02.jpg",
    name: "SINJUN PARK",
    role: { ko: "공동대표 · 운영", en: "Founder · Operations" },
  },
];

export const philosophy: Bilingual = {
  ko: "최소한의 그러나 더 나은 디자인을 지향합니다.",
  en: "Designing less, but better.",
};

export const careerGroups: CareerGroup[] = [
  {
    heading: { ko: "UXUI DESIGN", en: "UXUI DESIGN" },
    items: {
      ko: [
        "KT New Platform (momo) 구축",
        "롯데손해보험 (wonder) 구축",
        "신한자산운용 구축 및 운영",
        "신한카드 SOL 구축 및 운영",
        "KB증권 구축 및 운영",
        "KB자산운용 구축 및 운영",
        "CJ 온스타일 운영",
      ],
      en: [
        "KT New Platform (momo) — build",
        "Lotte Insurance (wonder) — build",
        "Shinhan Asset Management — build & operate",
        "Shinhan Card SOL — build & operate",
        "KB Securities — build & operate",
        "KB Asset Management — build & operate",
        "CJ Onstyle — operate",
      ],
    },
  },
  {
    heading: { ko: "EDIT / BX DESIGN", en: "EDIT / BX DESIGN" },
    items: {
      ko: [
        "교육청 교육용 책자 제작",
        "송파구청 일자리 정책담당과 신사업 홍보물 디자인",
        "국어문화원, HK인문학센터 웹포스터 디자인",
        "문체부 홍보 포스터 / SNS 카드뉴스 디자인",
        "국제산악영화제 책자 디자인",
        "국민대학교 디자인대학원 홍보물 디자인",
        "(주)트립픽 브랜딩 / 서비스 캐릭터 디자인",
        "등 다수 관공서, 교육기관, 기업 홍보물 / 브랜딩",
      ],
      en: [
        "Office of Education — educational booklets",
        "Songpa-gu Office Employment Policy — new-business promotional design",
        "Korean Language & Culture Institute, HK Humanities Center — web posters",
        "Ministry of Culture, Sports and Tourism — promotional posters / SNS card news",
        "International Mountain Film Festival — booklet design",
        "Kookmin University Graduate School of Design — promotional design",
        "Trippick Inc. — branding / service character design",
        "And many other public, educational, and corporate branding projects",
      ],
    },
  },
];

export const ictStartup: CareerGroup = {
  heading: { ko: "ICT START-UP", en: "ICT START-UP" },
  items: {
    ko: [
      "ICT 스타트업 아이시온 운영 및 디자인 총괄",
      "SK C&C 협업 Vitality Summit 서비스 노출",
      "ICT TECH SUMMIT 온라인 전시, 체험관",
      "스마트미디어 X캠프 우수상 수상",
      "안구운동 놀이APP서비스 BM특허 등록 완료",
      "시선추적기반 안구운동놀이APP 출시",
      "송파 청년창업도전프로젝트 최종 기업 선정",
      "고려대학교 안암병원 재활의학 컨소시엄",
      "미국 실리콘밸리 최종 피칭 선정",
      "미국 스탠퍼드 디자인스쿨 수료",
      "성장기 어린이 안구운동 놀이APP 디자인 논문",
    ],
    en: [
      "Co-founded ICT startup ISION — operations & design lead",
      "SK C&C collaboration — Vitality Summit service showcase",
      "ICT TECH SUMMIT — online exhibition & experience zone",
      "Smart Media X Camp — Excellence Award",
      "Eye-movement play app — BM patent registered",
      "Gaze-tracking eye-movement play app — launched",
      "Songpa Youth Startup Challenge — final selection",
      "Korea University Anam Hospital — rehabilitation medicine consortium",
      "US Silicon Valley — final pitch selection",
      "Stanford d.school — completed program",
      "Published paper on eye-movement play app design for children",
    ],
  },
};

export const education: CareerGroup = {
  heading: {
    ko: "국민대학교 디자인대학원",
    en: "Kookmin University Graduate School of Design",
  },
  items: {
    ko: ["인클루시브 디자인 전공 석사"],
    en: ["M.A. in Inclusive Design"],
  },
};

export const teamLabel: Bilingual = { ko: "공동대표", en: "Co-Founders" };
