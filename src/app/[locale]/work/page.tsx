import { getDictionary } from "@/lib/getDictionary";
import { WorkGrid } from "@/components/work/WorkGrid";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return <WorkGrid locale={locale} dict={dict} />;
}
