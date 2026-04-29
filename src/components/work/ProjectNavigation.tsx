import Link from "next/link";
import type { Project } from "@/types/project";
import type { Dictionary } from "@/types/dictionary";

interface ProjectNavigationProps {
  prevProject: Project | null;
  nextProject: Project | null;
  locale: string;
  lang: "ko" | "en";
  dict: Dictionary;
}

export function ProjectNavigation({
  prevProject,
  nextProject,
  locale,
  lang,
  dict,
}: ProjectNavigationProps) {
  return (
    <section className="border-t border-border">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="flex items-center justify-between">
          {prevProject ? (
            <Link
              href={`/${locale}/work/${prevProject.slug}`}
              className="group flex flex-col"
            >
              <span className="text-xs uppercase tracking-widest text-text-muted">
                {dict.work.prev}
              </span>
              <span className="mt-1 text-sm md:text-base font-medium group-hover:text-accent transition-colors">
                {prevProject.title[lang]}
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href={`/${locale}/work`}
            className="text-xs uppercase tracking-widest text-text-muted hover:text-foreground transition-colors"
          >
            {dict.work.backToList}
          </Link>

          {nextProject ? (
            <Link
              href={`/${locale}/work/${nextProject.slug}`}
              className="group flex flex-col text-right"
            >
              <span className="text-xs uppercase tracking-widest text-text-muted">
                {dict.work.next}
              </span>
              <span className="mt-1 text-sm md:text-base font-medium group-hover:text-accent transition-colors">
                {nextProject.title[lang]}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
