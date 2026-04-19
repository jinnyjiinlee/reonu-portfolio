import { getDictionary } from "@/lib/getDictionary";
import { Hero } from "@/components/home/Hero";
import { KeywordMarquee } from "@/components/home/KeywordMarquee";
import { Statement } from "@/components/home/Statement";
import { ProjectCounter } from "@/components/home/ProjectCounter";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Pricing } from "@/components/home/Pricing";
import { Partners } from "@/components/home/Partners";
import { ContactCTA } from "@/components/home/ContactCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <KeywordMarquee />
      <Statement dict={dict} />
      <ProjectCounter />
      <FeaturedWork locale={locale} dict={dict} />
      <Services locale={locale} dict={dict} />
      <Process locale={locale} />
      <Pricing locale={locale} />
      <Partners />
      <ContactCTA locale={locale} dict={dict} />
    </>
  );
}
