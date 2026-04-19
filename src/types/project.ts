export type Category = "ux-ui" | "branding" | "editorial";

export type ProjectStatus = "live" | "draft";

export interface Project {
  id: number;
  slug: string;
  title: { ko: string; en: string };
  subtitle: { ko: string; en: string };
  tags: { ko: string[]; en: string[] };
  category: Category;
  folderName: string;
  thumbnail: string;
  images: string[];
  displayOrder: number;
  status: ProjectStatus;

  categoryLabel?: { ko: string; en: string };
  client?: string;
  year?: string;
  description?: { ko: string; en: string };
  role?: { ko: string; en: string };
  color?: string;
}

export const CATEGORY_LABEL: Record<Category, { ko: string; en: string }> = {
  "ux-ui": { ko: "UX·UI", en: "UX/UI" },
  branding: { ko: "브랜딩", en: "Branding" },
  editorial: { ko: "편집", en: "Editorial" },
};
