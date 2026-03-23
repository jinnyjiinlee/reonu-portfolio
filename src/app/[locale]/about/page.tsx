import { getDictionary } from "@/lib/getDictionary";
import { AboutContent } from "@/components/about/AboutContent";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <AboutContent locale={locale} dict={dict} />;
}
