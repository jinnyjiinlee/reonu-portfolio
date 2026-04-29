import type { Project, Category } from "@/types/project";
import { CATEGORY_LABEL } from "@/types/project";
import { brandingProjects } from "./branding";
import { editorialProjects } from "./editorial";
import { uxuiProjects } from "./uxui";
import { placeholderColors } from "./types";

const rawProjects = [...uxuiProjects, ...brandingProjects, ...editorialProjects];

const PLACEHOLDER = "/images/placeholder.svg";

const splitTags = (raw: string): string[] =>
  raw
    .split(/\s*,\s*/)
    .map((t) => t.trim())
    .filter(Boolean);

const imagePath = (folderName: string, file: string) =>
  `/images/projects/${folderName}/${file}`;

export const projects: Project[] = rawProjects.map((p, idx) => {
  // Projects with no images yet (detailCount === 0) fall back to a placeholder.
  const hasImages = p.detailCount > 0;
  const cover = hasImages ? imagePath(p.folderName, p.thumbnailFile) : PLACEHOLDER;
  const gallery = hasImages
    ? Array.from({ length: p.detailCount }, (_, i) =>
        imagePath(p.folderName, `detail-0${i + 1}.jpg`),
      )
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
  const sorted = [...liveProjects].sort(
    (a, b) => a.displayOrder - b.displayOrder,
  );
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
