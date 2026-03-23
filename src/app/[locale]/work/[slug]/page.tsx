import { notFound } from "next/navigation";
import { getDictionary, locales } from "@/lib/getDictionary";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { ProjectDetail } from "@/components/work/ProjectDetail";

export async function generateStaticParams() {
  return projects.flatMap((p) =>
    locales.map((locale) => ({ locale, slug: p.slug }))
  );
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const dict = await getDictionary(locale);
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <ProjectDetail
      project={project}
      locale={locale}
      dict={dict}
      prevProject={prev}
      nextProject={next}
    />
  );
}
