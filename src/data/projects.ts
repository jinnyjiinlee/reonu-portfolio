import type { Project, Category, ProjectStatus } from "@/types/project";
import { CATEGORY_LABEL } from "@/types/project";

const placeholderColors = [
  "#323adc", "#1a1a2e", "#16213e", "#0f3460", "#533483",
  "#e94560", "#2c3e50", "#34495e", "#1abc9c", "#2980b9",
  "#8e44ad", "#c0392b", "#d35400", "#27ae60", "#16a085",
];

interface RawProject {
  id: number;
  slug: string;
  titleKo: string;
  titleEn: string;
  subtitleKo: string;
  subtitleEn: string;
  tagsKo: string;
  tagsEn: string;
  category: Category;
  folderName: string;
  thumbnailFile: string;
  detailCount: number;
  displayOrder: number;
  status: ProjectStatus;
}

const rawProjects: RawProject[] = [
  {
    id: 1,
    slug: "kt-momo",
    titleKo: "KT New Platform (momo)",
    titleEn: "KT New Platform (momo)",
    subtitleKo: "플랫폼 구조와 사용자 흐름을 중심으로 서비스 경험을 정리한 UX/UI 구축 프로젝트입니다.",
    subtitleEn: "This UX/UI project focused on organizing service experience through platform structure and user flow.",
    tagsKo: "플랫폼 디자인, UX/UI, 서비스 구조, 인터페이스 디자인",
    tagsEn: "Platform Design, UX/UI, Service Structure, Interface Design",
    category: "ux-ui",
    folderName: "p01_kt_momo",
    thumbnailFile: "detail-01.jpg",
    detailCount: 5,
    displayOrder: 1,
    status: "live",
  },
  {
    id: 2,
    slug: "lotte-wonder",
    titleKo: "롯데손해보험 Wonder",
    titleEn: "Lotte Insurance Wonder",
    subtitleKo: "보험 서비스의 정보 구조와 화면 흐름을 사용자 친화적으로 설계한 UX/UI 구축 프로젝트입니다.",
    subtitleEn: "This UX/UI project was designed to make insurance service structure and screen flow more user-friendly.",
    tagsKo: "UX/UI, 플랫폼 디자인, 인터페이스 디자인, 서비스 플로우",
    tagsEn: "UX/UI, Platform Design, Interface Design, Service Flow",
    category: "ux-ui",
    folderName: "p02_lotte_wonder",
    thumbnailFile: "detail-01.jpg",
    detailCount: 4,
    displayOrder: 2,
    status: "live",
  },
  {
    id: 3,
    slug: "shinhan-sol",
    titleKo: "신한카드 SOL",
    titleEn: "Shinhan Card SOL",
    subtitleKo: "서비스 구축과 운영 흐름 안에서 UI 일관성과 사용자 경험을 함께 정리한 금융 플랫폼 프로젝트입니다.",
    subtitleEn: "This financial platform project refined UI consistency and user experience across both build and operation phases.",
    tagsKo: "UX/UI, 금융 플랫폼, UI 시스템, 서비스 운영",
    tagsEn: "UX/UI, Financial Platform, UI System, Service Operation",
    category: "ux-ui",
    folderName: "p03_shinhan_sol",
    thumbnailFile: "detail-01.jpg",
    detailCount: 2,
    displayOrder: 3,
    status: "live",
  },
  {
    id: 4,
    slug: "shinhan-asset",
    titleKo: "신한자산운용 플랫폼 운영",
    titleEn: "Shinhan Asset Management Platform Operation",
    subtitleKo: "기존 플랫폼의 운영성과 사용성을 함께 고려하며 안정적으로 화면을 관리·개선한 프로젝트입니다.",
    subtitleEn: "This project focused on maintaining and improving platform usability while supporting stable operation.",
    tagsKo: "UX/UI, 플랫폼 운영, 인터페이스 유지보수, 서비스 디자인",
    tagsEn: "UX/UI, Platform Operation, Interface Maintenance, Service Design",
    category: "ux-ui",
    folderName: "p04_shinhan_asset",
    thumbnailFile: "detail-01.jpg",
    detailCount: 4,
    displayOrder: 4,
    status: "live",
  },
  {
    id: 5,
    slug: "kb-securities",
    titleKo: "KB증권 플랫폼 운영",
    titleEn: "KB Securities Platform Operation",
    subtitleKo: "운영 단계에서 필요한 정보 위계와 화면 체계를 유지하며 서비스 경험을 정돈한 프로젝트입니다.",
    subtitleEn: "This project maintained clear information hierarchy and screen structure to support a stable service experience during operation.",
    tagsKo: "플랫폼 운영, UX/UI, 금융 서비스, UI 유지보수",
    tagsEn: "Platform Operation, UX/UI, Financial Service, UI Maintenance",
    category: "ux-ui",
    folderName: "p05_kb_securities",
    thumbnailFile: "detail-01.jpg",
    detailCount: 3,
    displayOrder: 5,
    status: "live",
  },
  {
    id: 7,
    slug: "cj-onstyle",
    titleKo: "CJ온스타일 운영 디자인",
    titleEn: "CJ OnStyle Operation Design",
    subtitleKo: "운영 중심의 서비스 화면을 브랜드 톤과 사용자 흐름에 맞게 조율한 디지털 디자인 프로젝트입니다.",
    subtitleEn: "This digital design project aligned operational screens with brand tone and user flow.",
    tagsKo: "운영 디자인, UX/UI, 커머스, 인터페이스 디자인",
    tagsEn: "Operation Design, UX/UI, Commerce, Interface Design",
    category: "ux-ui",
    folderName: "p07_cj_onstyle",
    thumbnailFile: "detail-01.jpg",
    detailCount: 2,
    displayOrder: 7,
    status: "live",
  },
  {
    id: 8,
    slug: "lash",
    titleKo: "LASH 웹사이트 리디자인",
    titleEn: "LASH Website Redesign",
    subtitleKo: "기존 웹사이트를 재구성해 브랜드 인상과 사용 경험을 동시에 개선한 반응형 웹 리디자인 프로젝트입니다.",
    subtitleEn: "This responsive website redesign project improved both brand presence and user experience.",
    tagsKo: "웹사이트 리디자인, 반응형 웹, UX/UI, 비주얼 디렉션",
    tagsEn: "Website Redesign, Responsive Web, UX/UI, Visual Direction",
    category: "ux-ui",
    folderName: "p08_lash",
    thumbnailFile: "detail-01.jpg",
    detailCount: 3,
    displayOrder: 8,
    status: "live",
  },
  {
    id: 9,
    slug: "goyang",
    titleKo: "고양문화재단 브랜딩",
    titleEn: "Goyang Cultural Foundation Branding",
    subtitleKo: "지역 문화재단의 인상과 메시지를 정리해 시각적 체계와 응용물로 확장한 브랜딩 프로젝트입니다.",
    subtitleEn: "This branding project organized the foundation's impression and message into a visual system and applied collateral.",
    tagsKo: "브랜드 아이덴티티, 공공 브랜딩, 비주얼 시스템, 응용 디자인",
    tagsEn: "Brand Identity, Public Branding, Visual System, Applied Design",
    category: "branding",
    folderName: "p09_goyang",
    thumbnailFile: "detail-01.jpg",
    detailCount: 1,
    displayOrder: 9,
    status: "live",
  },
  {
    id: 10,
    slug: "reonu",
    titleKo: "REONU 브랜딩",
    titleEn: "REONU Branding",
    subtitleKo: "브랜드의 방향성과 인상을 정리하고, 로고·앱 아이콘·타이포그래피·컬러 시스템까지 확장한 아이덴티티 디자인 프로젝트입니다.",
    subtitleEn: "This identity project defined the brand's direction and impression, expanding across logo, app icon, typography, and color system.",
    tagsKo: "시각 아이덴티티, 로고 디자인, 앱 아이콘, 타이포그래피 및 컬러, 브랜드 응용 디자인",
    tagsEn: "Visual Identity, Logo Design, App Icon, Typography & Color, Brand Applications",
    category: "branding",
    folderName: "p10_reonu",
    thumbnailFile: "detail-01.jpg",
    detailCount: 4,
    displayOrder: 10,
    status: "live",
  },
  {
    id: 11,
    slug: "dayfocuslab",
    titleKo: "DayFocusLab 브랜딩",
    titleEn: "DayFocusLab Branding",
    subtitleKo: "로고, 앱 아이콘, 컬러 시스템, 가이드라인과 응용물까지 연결해 브랜드의 기준을 정리한 아이덴티티 프로젝트입니다.",
    subtitleEn: "This identity project established a clear brand foundation through logo, app icon, color system, guidelines, and collateral.",
    tagsKo: "브랜드 아이덴티티, 로고 및 앱 아이콘, 컬러 시스템, 가이드라인, 브랜드 응용물",
    tagsEn: "Brand Identity, Logo & App Icon, Color System, Guidelines, Brand Collateral",
    category: "branding",
    folderName: "p11_dayfocuslab",
    thumbnailFile: "detail-01.jpg",
    detailCount: 2,
    displayOrder: 11,
    status: "live",
  },
  {
    id: 13,
    slug: "tripick",
    titleKo: "Tripick 캐릭터 · 명함 디자인",
    titleEn: "Tripick Character & Business Card Design",
    subtitleKo: "브랜드 캐릭터와 명함 디자인을 함께 구성해 작고 명확한 브랜드 인상을 만드는 방향으로 전개한 프로젝트입니다.",
    subtitleEn: "This project developed a small but memorable brand presence through character and business card design.",
    tagsKo: "캐릭터 디자인, 명함 디자인, 브랜드 응용, 아이덴티티 디자인",
    tagsEn: "Character Design, Business Card, Brand Applications, Identity Design",
    category: "branding",
    folderName: "p13_tripick",
    thumbnailFile: "detail-01.jpg",
    detailCount: 3,
    displayOrder: 13,
    status: "live",
  },
  {
    id: 14,
    slug: "onsemiro",
    titleKo: "Onsaemiro Agency 브랜딩",
    titleEn: "Onsaemiro Agency Branding",
    subtitleKo: "브랜드의 기본 인상을 선명하게 정리하고 다양한 접점에서 일관되게 확장될 수 있도록 아이덴티티를 디자인한 프로젝트입니다.",
    subtitleEn: "This branding project clarified the agency's core identity and built a system that could extend consistently across touchpoints.",
    tagsKo: "브랜드 아이덴티티, 로고 디자인, 타이포그래피 시스템, 컬러 시스템, 브랜드 응용물",
    tagsEn: "Brand Identity, Logo Design, Typography System, Color System, Brand Collateral",
    category: "branding",
    folderName: "p14_onsemiro",
    thumbnailFile: "detail-01.jpg",
    detailCount: 4,
    displayOrder: 14,
    status: "live",
  },
  {
    id: 15,
    slug: "moe-mental",
    titleKo: "교육부 정신건강 가이드북",
    titleEn: "Ministry of Education Mental Health Guidebook",
    subtitleKo: "정보량이 많은 내용을 체계적으로 정리해 읽기 쉽고 안정감 있게 전달한 가이드북 디자인 프로젝트입니다.",
    subtitleEn: "This guidebook project organized complex information into a clear and stable editorial structure.",
    tagsKo: "가이드북, 편집 디자인, 정보 위계, 공공 디자인",
    tagsEn: "Guidebook, Editorial Design, Information Hierarchy, Public Design",
    category: "editorial",
    folderName: "p15_moe_mental",
    thumbnailFile: "detail-01.jpg",
    detailCount: 3,
    displayOrder: 15,
    status: "live",
  },
  {
    id: 16,
    slug: "mountain-film",
    titleKo: "국제산악영화제 게스트 가이드북",
    titleEn: "International Mountain Film Festival Guest Guidebook",
    subtitleKo: "행사 운영에 필요한 정보를 한눈에 이해할 수 있도록 체계적으로 구성한 게스트 가이드북 프로젝트입니다.",
    subtitleEn: "This guest guidebook project structured operational information so it could be understood at a glance.",
    tagsKo: "가이드북, 페스티벌 디자인, 편집 디자인, 정보 구조",
    tagsEn: "Guidebook, Festival Design, Editorial Design, Information Structure",
    category: "editorial",
    folderName: "p16_mountain_film",
    thumbnailFile: "detail-01.jpg",
    detailCount: 3,
    displayOrder: 16,
    status: "live",
  },
  {
    id: 17,
    slug: "kookmin-gsd",
    titleKo: "국민대학교 디자인대학원 홍보물",
    titleEn: "Kookmin University Graduate School of Design Promotional Materials",
    subtitleKo: "교육기관의 이미지를 안정적으로 전달할 수 있도록 브로슈어와 리플렛 중심으로 정리한 프로젝트입니다.",
    subtitleEn: "This project organized brochures and leaflets to communicate the institution's image in a stable and refined way.",
    tagsKo: "편집 디자인, 브로슈어, 리플렛, 교육기관 홍보",
    tagsEn: "Editorial Design, Brochure, Leaflet, Educational Promotion",
    category: "editorial",
    folderName: "p17_kookmin_gsd",
    thumbnailFile: "detail-01.jpg",
    detailCount: 5,
    displayOrder: 17,
    status: "live",
  },
];

const splitTags = (raw: string): string[] =>
  raw.split(/\s*,\s*/).map((t) => t.trim()).filter(Boolean);

const imagePath = (folderName: string, file: string) =>
  `/images/projects/${folderName}/${file}`;

export const projects: Project[] = rawProjects.map((p, idx) => {
  const cover = imagePath(p.folderName, p.thumbnailFile);
  const gallery = Array.from({ length: p.detailCount }, (_, i) =>
    imagePath(p.folderName, `detail-0${i + 1}.jpg`),
  );
  return {
    id: p.id,
    slug: p.slug,
    title: { ko: p.titleKo, en: p.titleEn },
    subtitle: { ko: p.subtitleKo, en: p.subtitleEn },
    tags: { ko: splitTags(p.tagsKo), en: splitTags(p.tagsEn) },
    category: p.category,
    categoryLabel: CATEGORY_LABEL[p.category],
    folderName: p.folderName,
    thumbnail: cover,
    images: gallery,
    displayOrder: p.displayOrder,
    status: p.status,
    description: { ko: p.subtitleKo, en: p.subtitleEn },
    color: placeholderColors[idx % placeholderColors.length],
  };
});

export const liveProjects = projects.filter((p) => p.status === "live");

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const sorted = [...liveProjects].sort((a, b) => a.displayOrder - b.displayOrder);
  const idx = sorted.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}

export function getProjectsByCategory(category?: Category | "all") {
  const source = liveProjects;
  if (!category || category === "all") return source;
  return source.filter((p) => p.category === category);
}

export function getFeaturedProjects(limit = 4): Project[] {
  return [...liveProjects]
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .slice(0, limit);
}
