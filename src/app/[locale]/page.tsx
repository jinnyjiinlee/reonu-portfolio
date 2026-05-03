import { getDictionary } from "@/lib/getDictionary";
import { Hero } from "@/components/home/Hero";
import { ProjectCounter } from "@/components/home/ProjectCounter";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Pricing } from "@/components/home/Pricing";
import { Partners } from "@/components/home/Partners";
import { HomeContact } from "@/components/home/HomeContact";

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
      <ProjectCounter locale={locale} />
      <FeaturedWork locale={locale} dict={dict} />
      <Services locale={locale} dict={dict} />
      <Process locale={locale} />
      <Pricing locale={locale} />
      <Partners />
      <HomeContact locale={locale} dict={dict} />
    </>
  );
}
