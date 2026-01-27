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
    <nav className="w-full border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex gap-6">
          <Link href={`/${locale}`} className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">
            {t('home')}
          </Link>
          <Link href={`/${locale}/profile`} className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">
            {t('profile')}
          </Link>
          <Link href={`/${locale}/career`} className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">
            {t('career')}
          </Link>
          <Link href={`/${locale}/methodology`} className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">
            {t('methodology')}
          </Link>
          <Link href={`/${locale}/contact`} className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">
            {t('contact')}
          </Link>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
