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
    ? `w-full fixed top-0 left-0 z-50 relative transition-colors duration-300 bg-[color:var(--darkband)]/32 backdrop-blur-md border-b border-[#2C3A44]/70`
    : 'w-full fixed top-0 left-0 z-40 relative bg-[color:var(--darkband)]/32 backdrop-blur-md border-b border-[#2C3A44]/70';

  const linkClasses = 'text-sm font-medium text-white hover:text-white transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.75)]';

  const isActive = (href: string) => pathname === href || pathname === `${href}/`;

  const linkUnderlineClasses = (href: string) => {
    const active = isActive(href);  
    if (isHome && !isScrolled) {
      // Home top: underline blanco
      return active
        ? 'border-b-2 border-white/80'
        : 'border-b-2 border-transparent hover:border-white/70';
    } else {
      // Scrolled + internas: underline blanco
      return active
        ? 'border-b-2 border-white/80'
        : 'border-b-2 border-transparent hover:border-white/70';
    }
  };

  return (
    <nav className={navClasses}>
      <div className="absolute inset-x-0 top-0 h-14 md:h-16 bg-[color:var(--darkband)] -z-10" />
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 h-14 md:h-16 flex items-center">
        <div className="flex items-center justify-between flex-wrap gap-5 w-full">
          <div className="flex gap-5 flex-wrap">
            <Link 
              href={`/${locale}`} 
              className={`${linkClasses} ${linkUnderlineClasses(`/${locale}`)}`}
              aria-current={isActive(`/${locale}`) ? 'page' : undefined}
            >
              {t('home')}
            </Link>
            <Link 
              href={`/${locale}/profile`} 
              className={`${linkClasses} ${linkUnderlineClasses(`/${locale}/profile`)}`}
              aria-current={isActive(`/${locale}/profile`) ? 'page' : undefined}
            >
              {t('profile')}
            </Link>
            <Link 
              href={`/${locale}/career`} 
              className={`${linkClasses} ${linkUnderlineClasses(`/${locale}/career`)}`}
              aria-current={isActive(`/${locale}/career`) ? 'page' : undefined}
            >
              {t('career')}
            </Link>
            <Link 
              href={`/${locale}/methodology`} 
              className={`${linkClasses} ${linkUnderlineClasses(`/${locale}/methodology`)}`}
              aria-current={isActive(`/${locale}/methodology`) ? 'page' : undefined}
            >
              {t('methodology')}
            </Link>
            <Link 
              href={`/${locale}/cv`} 
              className={`${linkClasses} ${linkUnderlineClasses(`/${locale}/cv`)}`}
              aria-current={isActive(`/${locale}/cv`) ? 'page' : undefined}
            >
              {t('cv')}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className={`${linkClasses} ${linkUnderlineClasses(`/${locale}/contact`)}`}
              aria-current={isActive(`/${locale}/contact`) ? 'page' : undefined}
            >
              {t('contact')}
            </Link>
          </div>
          <LanguageSwitcher
            buttonClassName={
              isHome && !isScrolled
                ? 'focus-visible:ring-white/40 border border-transparent'
                : 'focus-visible:ring-white/40 border border-transparent'
            }
            activeButtonClassName={
              isHome && !isScrolled
                ? 'text-white border-white/80'
                : 'text-white border-white/80'
            }
            inactiveButtonClassName={
              isHome && !isScrolled
                ? 'text-white/70 hover:text-white hover:border-white/70'
                : 'text-white/70 hover:text-white hover:border-white/70'
            }
          />
        </div>
      </div>
    </nav>
  );
}
