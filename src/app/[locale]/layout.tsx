import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { locales } from "@/lib/getDictionary";
import { getDictionary } from "@/lib/getDictionary";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";

  const title = isKo
    ? "REONU® 디자인 스튜디오"
    : "REONU® Design Studio";
  const description = isKo
    ? "REONU®는 브랜드와 디지털 경험을 설계하는 디자인 스튜디오입니다. 브랜딩, UX·UI, 편집 디자인을 아우릅니다."
    : "REONU® is a design studio shaping brand and digital experiences across identity, UX/UI, and editorial design.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ko: "/ko",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      locale: isKo ? "ko_KR" : "en_US",
      url: `/${locale}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className={`${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          <Navigation locale={locale} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} dict={dict} />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
