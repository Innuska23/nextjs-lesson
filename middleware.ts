import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18nConfig } from './config/i18n';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const pathnameHasLocale = i18nConfig.locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    const isApiRoute = pathname.startsWith('/api');
    const isStaticFile = /\.(jpg|jpeg|png|gif|svg|ico|css|js)$/.test(pathname);

    if (pathname === '/') {
        return NextResponse.redirect(
            new URL(`/${i18nConfig.defaultLocale}`, request.url)
        );
    }

    if (!pathnameHasLocale && !isApiRoute && !isStaticFile) {
        return NextResponse.redirect(
            new URL(`/${i18nConfig.defaultLocale}${pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)']
};