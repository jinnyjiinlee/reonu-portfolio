import type { Dictionary } from "@/types/dictionary";
import { StudioHero } from "./StudioHero";
import { StudioBio } from "./StudioBio";
import { Cofounders } from "./Cofounders";

interface StudioContentProps {
  locale: string;
  dict: Dictionary;
}

export function StudioContent({ locale, dict }: StudioContentProps) {
  const lang = locale as "ko" | "en";

  return (
    <div className="pt-32 md:pt-44">
      <StudioHero />
      <StudioBio lang={lang} dict={dict} />
      <Cofounders lang={lang} />
    </div>
  );
}
