import { Inter } from "next/font/google";
import { locales } from "@/lib/getDictionary";
import { getDictionary } from "@/lib/getDictionary";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
          <Navigation locale={locale} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} dict={dict} />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
