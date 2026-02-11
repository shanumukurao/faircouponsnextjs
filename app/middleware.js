import { NextResponse } from "next/server";

const invalidOutboundPathPattern = /^\/+https?:[\/\\]/i;

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  let decodedPathname = pathname;

  try {
    decodedPathname = decodeURIComponent(pathname);
  } catch (error) {
    decodedPathname = pathname;
  }

  if (invalidOutboundPathPattern.test(decodedPathname)) {
    const redirectUrl = new URL("/", request.url);
    return NextResponse.redirect(redirectUrl, 308);
  }

  const response = NextResponse.next();

  // Only set headers for specific paths if needed
  if (
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api") &&
    !pathname.includes(".") &&
    !pathname.endsWith("/categorysitemap.xml")
  ) {
    response.headers.set("x-metadata-pathname", pathname);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};