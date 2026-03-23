export type Category = "ux-ui" | "bx" | "edit";

export interface Project {
  id: number;
  slug: string;
  title: { ko: string; en: string };
  client: string;
  category: Category;
  categoryLabel: { ko: string; en: string };
  year: string;
  description: { ko: string; en: string };
  role: { ko: string; en: string };
  thumbnail: string;
  images: string[];
  color: string;
}
