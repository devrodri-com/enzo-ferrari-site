import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Si es la raíz "/", detectar idioma y redirigir
  if (request.nextUrl.pathname === '/') {
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    
    if (cookieLocale && routing.locales.includes(cookieLocale as any)) {
      return NextResponse.redirect(
        new URL(`/${cookieLocale}`, request.url)
      );
    }
    
    // Detectar idioma del navegador
    const acceptLanguage = request.headers.get('accept-language') || '';
    let detectedLocale = routing.defaultLocale;
    
    // Priorizar español si está en Accept-Language
    if (acceptLanguage.includes('es')) {
      detectedLocale = 'es';
    } else if (acceptLanguage.includes('en')) {
      detectedLocale = 'en';
    }
    
    return NextResponse.redirect(
      new URL(`/${detectedLocale}`, request.url)
    );
  }
  
  // Para todas las demás rutas, usar el middleware de next-intl
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Ignorar archivos estáticos y rutas de Next.js
    '/((?!_next|api|_vercel|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};
