import type { Project, Category, ProjectStatus } from "@/types/project";
import { CATEGORY_LABEL } from "@/types/project";

const placeholderColors = [
  "#323adc", "#1a1a2e", "#16213e", "#0f3460", "#533483",
  "#e94560", "#2c3e50", "#34495e", "#1abc9c", "#2980b9",
  "#8e44ad", "#c0392b", "#d35400", "#27ae60", "#2c3e50",
  "#7f8c8d", "#95a5a6", "#f39c12", "#e74c3c", "#3498db",
  "#9b59b6", "#1abc9c", "#e67e22", "#2ecc71", "#16a085",
  "#d35400",
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
    folderName: "project01_KT New Platform (momo)",
    thumbnailFile: "cover-01.jpg",
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
    folderName: "project02_롯데손해보험 Wonder",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 2,
    status: "live",
  },
  {
    id: 3,
    slug: "shinhan-card-sol",
    titleKo: "신한카드 SOL",
    titleEn: "Shinhan Card SOL",
    subtitleKo: "서비스 구축과 운영 흐름 안에서 UI 일관성과 사용자 경험을 함께 정리한 금융 플랫폼 프로젝트입니다.",
    subtitleEn: "This financial platform project refined UI consistency and user experience across both build and operation phases.",
    tagsKo: "UX/UI, 금융 플랫폼, UI 시스템, 서비스 운영",
    tagsEn: "UX/UI, Financial Platform, UI System, Service Operation",
    category: "ux-ui",
    folderName: "project03_신한카드 SOL",
    thumbnailFile: "cover-01.jpg",
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
    folderName: "project04_신한자산운용 플랫폼 운영",
    thumbnailFile: "cover-01.jpg",
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
    folderName: "project05_KB증권 플랫폼 운영",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 5,
    status: "live",
  },
  {
    id: 6,
    slug: "kb-asset",
    titleKo: "KB자산운용 플랫폼 운영",
    titleEn: "KB Asset Management Platform Operation",
    subtitleKo: "플랫폼 운영 과정에서 브랜드 일관성과 사용성을 함께 고려하며 화면을 관리한 프로젝트입니다.",
    subtitleEn: "This platform operation project balanced brand consistency and usability across service screens.",
    tagsKo: "플랫폼 운영, UX/UI, 자산운용, 인터페이스 디자인",
    tagsEn: "Platform Operation, UX/UI, Asset Management, Interface Design",
    category: "ux-ui",
    folderName: "project06_KB자산운용 플랫폼 운영",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 6,
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
    folderName: "project07_CJ온스타일 운영 디자인",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 7,
    status: "live",
  },
  {
    id: 8,
    slug: "lash-website",
    titleKo: "LASH 웹사이트 리디자인",
    titleEn: "LASH Website Redesign",
    subtitleKo: "기존 웹사이트를 재구성해 브랜드 인상과 사용 경험을 동시에 개선한 반응형 웹 리디자인 프로젝트입니다.",
    subtitleEn: "This responsive website redesign project improved both brand presence and user experience.",
    tagsKo: "웹사이트 리디자인, 반응형 웹, UX/UI, 비주얼 디렉션",
    tagsEn: "Website Redesign, Responsive Web, UX/UI, Visual Direction",
    category: "ux-ui",
    folderName: "project08_LASH 웹사이트 리디자인",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 8,
    status: "live",
  },
  {
    id: 9,
    slug: "ttareungyi",
    titleKo: "따릉이 모바일 리디자인",
    titleEn: "Ttareungyi Mobile Redesign",
    subtitleKo: "모바일 사용성을 중심으로 기능 접근성과 시각적 흐름을 재정리한 리디자인 프로젝트입니다.",
    subtitleEn: "This redesign project restructured mobile usability, feature accessibility, and visual flow.",
    tagsKo: "모바일 리디자인, UX/UI, 앱 경험, 인터페이스 디자인",
    tagsEn: "Mobile Redesign, UX/UI, App Experience, Interface Design",
    category: "ux-ui",
    folderName: "project09_따릉이 모바일 리디자인",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 9,
    status: "live",
  },
  {
    id: 10,
    slug: "soram-hospital",
    titleKo: "소람한방병원 웹사이트 리디자인",
    titleEn: "Soram Korean Medicine Hospital Website Redesign",
    subtitleKo: "정보 전달의 명확성과 브랜드 신뢰감을 함께 고려해 의료 웹사이트 경험을 재구성한 프로젝트입니다.",
    subtitleEn: "This medical website redesign project focused on clear information delivery and a trustworthy brand experience.",
    tagsKo: "웹사이트 리디자인, UX/UI, 의료 웹사이트, 반응형 레이아웃",
    tagsEn: "Website Redesign, UX/UI, Medical Website, Responsive Layout",
    category: "ux-ui",
    folderName: "project10_소람한방병원 웹사이트 리디자인",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 10,
    status: "live",
  },
  {
    id: 11,
    slug: "reonu-branding",
    titleKo: "REONU 브랜딩",
    titleEn: "REONU Branding",
    subtitleKo: "브랜드의 방향성과 인상을 정리하고, 로고·앱 아이콘·타이포그래피·컬러 시스템까지 확장한 아이덴티티 디자인 프로젝트입니다.",
    subtitleEn: "This identity project defined the brand's direction and impression, expanding across logo, app icon, typography, and color system.",
    tagsKo: "시각 아이덴티티, 로고 디자인, 앱 아이콘, 타이포그래피 및 컬러, 브랜드 응용 디자인",
    tagsEn: "Visual Identity, Logo Design, App Icon, Typography & Color, Brand Applications",
    category: "branding",
    folderName: "project11_REONU 브랜딩",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 11,
    status: "live",
  },
  {
    id: 12,
    slug: "dayfocus-lab",
    titleKo: "DayFocusLab 브랜딩",
    titleEn: "DayFocusLab Branding",
    subtitleKo: "로고, 앱 아이콘, 컬러 시스템, 가이드라인과 응용물까지 연결해 브랜드의 기준을 정리한 아이덴티티 프로젝트입니다.",
    subtitleEn: "This identity project established a clear brand foundation through logo, app icon, color system, guidelines, and collateral.",
    tagsKo: "브랜드 아이덴티티, 로고 및 앱 아이콘, 컬러 시스템, 가이드라인, 브랜드 응용물",
    tagsEn: "Brand Identity, Logo & App Icon, Color System, Guidelines, Brand Collateral",
    category: "branding",
    folderName: "project12_DayFocusLab 브랜딩",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 12,
    status: "live",
  },
  {
    id: 13,
    slug: "onsaemiro",
    titleKo: "Onsaemiro Agency 브랜딩",
    titleEn: "Onsaemiro Agency Branding",
    subtitleKo: "브랜드의 기본 인상을 선명하게 정리하고 다양한 접점에서 일관되게 확장될 수 있도록 아이덴티티를 디자인한 프로젝트입니다.",
    subtitleEn: "This branding project clarified the agency's core identity and built a system that could extend consistently across touchpoints.",
    tagsKo: "브랜드 아이덴티티, 로고 디자인, 타이포그래피 시스템, 컬러 시스템, 브랜드 응용물",
    tagsEn: "Brand Identity, Logo Design, Typography System, Color System, Brand Collateral",
    category: "branding",
    folderName: "project13_Onsaemiro Agency 브랜딩",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 13,
    status: "live",
  },
  {
    id: 14,
    slug: "icion",
    titleKo: "아이시온 서비스 디자인 및 브랜딩",
    titleEn: "ICION Service Design & Branding",
    subtitleKo: "서비스 기획과 MVP 앱 디자인, 브랜드 아이덴티티와 콘텐츠 디자인까지 함께 전개한 스타트업 브랜딩 프로젝트입니다.",
    subtitleEn: "This startup branding project combined service planning, MVP app design, visual identity, and content design.",
    tagsKo: "서비스 브랜딩, 앱 디자인, 시각 아이덴티티, 콘텐츠 디자인, 스타트업 프로젝트",
    tagsEn: "Service Branding, App Design, Visual Identity, Content Design, Startup Project",
    category: "branding",
    folderName: "project14_아이시온 서비스 디자인 및 브랜딩",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 14,
    status: "live",
  },
  {
    id: 15,
    slug: "tripick",
    titleKo: "Tripick 캐릭터 · 명함 디자인",
    titleEn: "Tripick Character & Business Card Design",
    subtitleKo: "브랜드 캐릭터와 명함 디자인을 함께 구성해 작고 명확한 브랜드 인상을 만드는 방향으로 전개한 프로젝트입니다.",
    subtitleEn: "This project developed a small but memorable brand presence through character and business card design.",
    tagsKo: "캐릭터 디자인, 명함 디자인, 브랜드 응용, 아이덴티티 디자인",
    tagsEn: "Character Design, Business Card, Brand Applications, Identity Design",
    category: "branding",
    folderName: "project15_Tripick 캐릭터 · 명함 디자인",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 15,
    status: "live",
  },
  {
    id: 16,
    slug: "moe-mental-health",
    titleKo: "교육부 정신건강 가이드북",
    titleEn: "Ministry of Education Mental Health Guidebook",
    subtitleKo: "정보량이 많은 내용을 체계적으로 정리해 읽기 쉽고 안정감 있게 전달한 가이드북 디자인 프로젝트입니다.",
    subtitleEn: "This guidebook project organized complex information into a clear and stable editorial structure.",
    tagsKo: "가이드북, 편집 디자인, 정보 위계, 공공 디자인",
    tagsEn: "Guidebook, Editorial Design, Information Hierarchy, Public Design",
    category: "editorial",
    folderName: "project16_교육부 정신건강 가이드북",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 16,
    status: "live",
  },
  {
    id: 17,
    slug: "mountain-film-festival",
    titleKo: "국제산악영화제 게스트 가이드북",
    titleEn: "International Mountain Film Festival Guest Guidebook",
    subtitleKo: "행사 운영에 필요한 정보를 한눈에 이해할 수 있도록 체계적으로 구성한 게스트 가이드북 프로젝트입니다.",
    subtitleEn: "This guest guidebook project structured operational information so it could be understood at a glance.",
    tagsKo: "가이드북, 페스티벌 디자인, 편집 디자인, 정보 구조",
    tagsEn: "Guidebook, Festival Design, Editorial Design, Information Structure",
    category: "editorial",
    folderName: "project17_국제산악영화제 게스트 가이드북",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 17,
    status: "live",
  },
  {
    id: 18,
    slug: "kookmin-gsd",
    titleKo: "국민대학교 디자인대학원 홍보물",
    titleEn: "Kookmin University Graduate School of Design Promotional Materials",
    subtitleKo: "교육기관의 이미지를 안정적으로 전달할 수 있도록 브로슈어와 리플렛 중심으로 정리한 프로젝트입니다.",
    subtitleEn: "This project organized brochures and leaflets to communicate the institution's image in a stable and refined way.",
    tagsKo: "편집 디자인, 브로슈어, 리플렛, 교육기관 홍보",
    tagsEn: "Editorial Design, Brochure, Leaflet, Educational Promotion",
    category: "editorial",
    folderName: "project18_국민대학교 디자인대학원 홍보물",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 18,
    status: "live",
  },
  {
    id: 19,
    slug: "recital-leaflet-poster",
    titleKo: "리사이틀 리플렛 및 포스터 디자인",
    titleEn: "Recital Leaflet & Poster Design",
    subtitleKo: "공연의 분위기와 연주자의 인상을 시각적으로 정리해 리플렛과 포스터로 확장한 프로젝트입니다.",
    subtitleEn: "This project translated the mood of the performance and the performer's identity into leaflets and posters.",
    tagsKo: "리플렛 디자인, 포스터 디자인, 편집 디자인, 공연 홍보",
    tagsEn: "Leaflet Design, Poster Design, Editorial Design, Performance Promotion",
    category: "editorial",
    folderName: "project19_리사이틀 리플렛 및 포스터 디자인",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 19,
    status: "live",
  },
  {
    id: 20,
    slug: "songpa-new-business",
    titleKo: "송파구청 신사업 홍보물",
    titleEn: "Songpa-gu New Business Promotional Materials",
    subtitleKo: "공공사업의 핵심 메시지를 명확하게 전달할 수 있도록 다양한 홍보물로 확장한 프로젝트입니다.",
    subtitleEn: "This public promotion project expanded core messages into multiple communication materials.",
    tagsKo: "홍보물 디자인, 공공 디자인, 캠페인 비주얼, 정보 디자인",
    tagsEn: "Promotional Materials, Public Design, Campaign Visual, Information Design",
    category: "editorial",
    folderName: "project20_송파구청 신사업 홍보물",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 20,
    status: "live",
  },
  {
    id: 21,
    slug: "wee-center-dubee",
    titleKo: "Wee센터 두비교실 홍보물",
    titleEn: "WEE Center Dubee Classroom Promotional Materials",
    subtitleKo: "포스터, 리플렛, 안내물 등을 하나의 흐름으로 정리해 프로그램 인지도를 높인 홍보물 디자인 프로젝트입니다.",
    subtitleEn: "This project organized posters, leaflets, and information materials into one consistent promotional flow.",
    tagsKo: "홍보물 디자인, 편집 디자인, 교육 프로그램, 인쇄물 디자인",
    tagsEn: "Promotional Design, Editorial Design, Educational Program, Printed Materials",
    category: "editorial",
    folderName: "project21_Wee센터 두비교실 홍보물",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 21,
    status: "live",
  },
  {
    id: 22,
    slug: "art-factory-seongnam",
    titleKo: "예술공장성남 홍보물",
    titleEn: "Art Factory Seongnam Promotional Materials",
    subtitleKo: "행사와 공간의 성격이 잘 드러나도록 포스터, 배너, 홍보물 전반을 정리한 프로젝트입니다.",
    subtitleEn: "This project designed posters, banners, and promotional materials to reflect the character of the event and space.",
    tagsKo: "홍보물 디자인, 편집 디자인, 캠페인 비주얼, 문화 프로그램",
    tagsEn: "Promotional Materials, Editorial Design, Campaign Visual, Cultural Program",
    category: "editorial",
    folderName: "project22_예술공장성남 홍보물",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 22,
    status: "live",
  },
  {
    id: 23,
    slug: "dankook-culture-arts",
    titleKo: "단국대학교 문화예술대학원 홍보 포스터",
    titleEn: "Dankook University Graduate School of Culture and Arts Promotional Poster",
    subtitleKo: "문화예술대학원의 분위기와 프로그램 성격이 잘 드러나도록 구성한 홍보 포스터 프로젝트입니다.",
    subtitleEn: "This promotional poster project highlighted the mood and program identity of the graduate school.",
    tagsKo: "포스터 디자인, 교육기관 홍보, 편집 디자인, 캠페인 비주얼",
    tagsEn: "Poster Design, Educational Promotion, Editorial Design, Campaign Visual",
    category: "editorial",
    folderName: "project23_단국대학교 문화예술대학원 홍보 포스터",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 23,
    status: "live",
  },
  {
    id: 24,
    slug: "korean-language-poster",
    titleKo: "국어문화원 홍보 포스터",
    titleEn: "Korean Language Institute Promotional Poster",
    subtitleKo: "행사와 프로그램 정보를 직관적으로 전달할 수 있도록 구성한 홍보 포스터 디자인 프로젝트입니다.",
    subtitleEn: "This poster project presented program information in a direct and accessible way.",
    tagsKo: "포스터 디자인, 홍보물 디자인, 캠페인 비주얼, 공공 디자인",
    tagsEn: "Poster Design, Promotional Design, Campaign Visual, Public Design",
    category: "editorial",
    folderName: "project24_국어문화원 홍보 포스터",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 24,
    status: "live",
  },
  {
    id: 25,
    slug: "humanities-lecture",
    titleKo: "지역인문학센터 강연 웹포스터",
    titleEn: "Local Humanities Center Lecture Web Poster",
    subtitleKo: "강연 정보를 온라인 환경에서 빠르게 인지할 수 있도록 정리한 웹포스터 디자인 프로젝트입니다.",
    subtitleEn: "This web poster project was designed for quick recognition of lecture information in digital environments.",
    tagsKo: "웹포스터, 홍보물 디자인, 편집 레이아웃, 교육 프로그램",
    tagsEn: "Web Poster, Promotional Design, Editorial Layout, Education Program",
    category: "editorial",
    folderName: "project25_지역인문학센터 강연 웹포스터",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 25,
    status: "live",
  },
  {
    id: 26,
    slug: "korean-language-cardnews",
    titleKo: "국어문화원 카드뉴스",
    titleEn: "Korean Language Institute Card News",
    subtitleKo: "짧은 정보 단위를 명확하게 전달할 수 있도록 시각적 흐름과 콘텐츠 구조를 정리한 카드뉴스 프로젝트입니다.",
    subtitleEn: "This card news project organized content and visual flow to communicate short information clearly.",
    tagsKo: "카드뉴스, 콘텐츠 디자인, 편집 레이아웃, 공공 커뮤니케이션",
    tagsEn: "Card News, Content Design, Editorial Layout, Public Communication",
    category: "editorial",
    folderName: "project26_국어문화원 카드뉴스",
    thumbnailFile: "cover-01.jpg",
    displayOrder: 26,
    status: "live",
  },
];

const splitTags = (raw: string): string[] =>
  raw.split(/\s*,\s*/).map((t) => t.trim()).filter(Boolean);

const imagePath = (folderName: string, file: string) =>
  `/images/projects/${folderName}/${file}`;

const PLACEHOLDER = "/images/placeholder.svg";

// Count of extra gallery details (detail-02.jpg ... detail-0N.jpg) per slug.
// 0 means cover-only. Slugs absent from this map render a placeholder.
const galleryDetailCount: Record<string, number> = {
  "kt-momo": 4,
  "lotte-wonder": 3,
  "shinhan-card-sol": 1,
  "shinhan-asset": 3,
  "kb-securities": 2,
  "cj-onstyle": 1,
  "lash-website": 2,
  "reonu-branding": 3,
  "dayfocus-lab": 1,
  "onsaemiro": 3,
  "tripick": 2,
  "moe-mental-health": 2,
  "mountain-film-festival": 0,
  "kookmin-gsd": 4,
};

export const projects: Project[] = rawProjects.map((p, idx) => {
  const extras = galleryDetailCount[p.slug];
  const ready = extras !== undefined;
  const cover = imagePath(p.folderName, p.thumbnailFile);
  const gallery = ready
    ? [
        cover,
        ...Array.from({ length: extras }, (_, i) =>
          imagePath(p.folderName, `detail-0${i + 2}.jpg`),
        ),
      ]
    : [];
  return {
    id: p.id,
    slug: p.slug,
    title: { ko: p.titleKo, en: p.titleEn },
    subtitle: { ko: p.subtitleKo, en: p.subtitleEn },
    tags: { ko: splitTags(p.tagsKo), en: splitTags(p.tagsEn) },
    category: p.category,
    categoryLabel: CATEGORY_LABEL[p.category],
    folderName: p.folderName,
    thumbnail: ready ? cover : PLACEHOLDER,
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
