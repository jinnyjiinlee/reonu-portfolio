import type { Category, ProjectStatus } from "@/types/project";

export interface RawProject {
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

export const placeholderColors = [
  "#323adc", "#1a1a2e", "#16213e", "#0f3460", "#533483",
  "#e94560", "#2c3e50", "#34495e", "#1abc9c", "#2980b9",
  "#8e44ad", "#c0392b", "#d35400", "#27ae60", "#16a085",
];
