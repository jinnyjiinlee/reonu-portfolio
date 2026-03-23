import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REONU DESIGN STUDIO",
  description:
    "Brand & Product Designer with 9 years of experience designing brands and digital products across diverse industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
