import { getDictionary } from "@/lib/getDictionary";
import { ContactContent } from "@/components/contact/ContactContent";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <ContactContent locale={locale} dict={dict} />;
}
