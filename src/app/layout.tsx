import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://reonu.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "REONU DESIGN STUDIO",
    template: "%s — REONU",
  },
  description:
    "REONU® — a design studio shaping brand and digital experiences across identity, UX/UI, and editorial design.",
  openGraph: {
    type: "website",
    siteName: "REONU DESIGN STUDIO",
    images: ["/images/og/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
