import { getDictionary } from "@/lib/getDictionary";
import { StudioContent } from "@/components/studio/StudioContent";

export default async function StudioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <StudioContent locale={locale} dict={dict} />;
}
