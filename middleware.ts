import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale, isValidLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') // static files
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a valid locale
  const segments = pathname.split('/');
  const maybeLocale = segments[1];

  if (isValidLocale(maybeLocale)) {
    // Valid locale in URL — set x-locale header and continue
    const response = NextResponse.next();
    response.headers.set('x-locale', maybeLocale);
    return response;
  }

  // No locale in URL — detect preferred locale and redirect
  const acceptLanguage = request.headers.get('accept-language') || '';
  const cookieLocale = request.cookies.get('locale')?.value;

  let locale = defaultLocale;

  if (cookieLocale && isValidLocale(cookieLocale)) {
    locale = cookieLocale;
  } else if (acceptLanguage.toLowerCase().includes('es')) {
    locale = 'es';
  }

  // Redirect to locale-prefixed URL
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|images|.*\\..*).*)'],
};
