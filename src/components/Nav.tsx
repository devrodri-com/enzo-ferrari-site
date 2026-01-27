'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Nav() {
  const t = useTranslations('nav');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <nav className="w-full border-b border-black/10">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 py-5">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex gap-5 flex-wrap">
            <Link 
              href={`/${locale}`} 
              className="text-sm font-medium text-black/80 hover:text-black transition-colors"
            >
              {t('home')}
            </Link>
            <Link 
              href={`/${locale}/profile`} 
              className="text-sm font-medium text-black/80 hover:text-black transition-colors"
            >
              {t('profile')}
            </Link>
            <Link 
              href={`/${locale}/career`} 
              className="text-sm font-medium text-black/80 hover:text-black transition-colors"
            >
              {t('career')}
            </Link>
            <Link 
              href={`/${locale}/methodology`} 
              className="text-sm font-medium text-black/80 hover:text-black transition-colors"
            >
              {t('methodology')}
            </Link>
            <Link 
              href={`/${locale}/cv`} 
              className="text-sm font-medium text-black/80 hover:text-black transition-colors"
            >
              {t('cv')}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="text-sm font-medium text-black/80 hover:text-black transition-colors"
            >
              {t('contact')}
            </Link>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
