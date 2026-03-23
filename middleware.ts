import { NextRequest, NextResponse } from "next/server";

const locales = ["ko", "en"];
const defaultLocale = "ko";

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang) {
    const preferred = acceptLang.split(",")[0].split("-")[0].toLowerCase();
    if (locales.includes(preferred)) return preferred;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasLocale) return;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/resume") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|api|images|resume|favicon.ico|.*\\..*).*)"],
};
