'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Nav() {
  const t = useTranslations('nav');
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as 'es' | 'en';
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const navClasses = isHome
    ? `w-full fixed top-0 left-0 z-50 relative transition-colors duration-300 ${
        isScrolled
          ? 'bg-white/75 backdrop-blur-md border-b border-black/10'
          : 'bg-[color:var(--darkband)]/55 backdrop-blur-md'
      }`
    : 'w-full bg-white/75 backdrop-blur-md border-b border-black/10';

  const linkClasses = isHome
    ? isScrolled
      ? 'text-sm font-medium text-black/80 hover:text-black transition-colors'
      : 'text-sm font-medium text-white hover:text-white transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]'
    : 'text-sm font-medium text-black/80 hover:text-black transition-colors';

  return (
    <nav className={navClasses}>
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 h-16 md:h-20 flex items-center">
        <div className="flex items-center justify-between flex-wrap gap-5 w-full">
          <div className="flex gap-5 flex-wrap">
            <Link 
              href={`/${locale}`} 
              className={linkClasses}
            >
              {t('home')}
            </Link>
            <Link 
              href={`/${locale}/profile`} 
              className={linkClasses}
            >
              {t('profile')}
            </Link>
            <Link 
              href={`/${locale}/career`} 
              className={linkClasses}
            >
              {t('career')}
            </Link>
            <Link 
              href={`/${locale}/methodology`} 
              className={linkClasses}
            >
              {t('methodology')}
            </Link>
            <Link 
              href={`/${locale}/cv`} 
              className={linkClasses}
            >
              {t('cv')}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className={linkClasses}
            >
              {t('contact')}
            </Link>
          </div>
          <LanguageSwitcher
            buttonClassName={
              isHome && !isScrolled
                ? 'focus-visible:ring-white/40'
                : 'focus-visible:ring-black/20'
            }
            activeButtonClassName={
              isHome && !isScrolled
                ? 'bg-white/15 text-white border border-white/25'
                : 'bg-black/5 text-black border border-black/10'
            }
            inactiveButtonClassName={
              isHome && !isScrolled
                ? 'text-white/80 hover:text-white'
                : 'text-black/70 hover:text-black'
            }
          />
        </div>
      </div>
    </nav>
  );
}
