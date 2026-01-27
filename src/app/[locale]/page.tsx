import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('home');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t('subtitle')}
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link
            href={`/${locale}/contact`}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {t('ctaContact')}
          </Link>
          <a
            href="#"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:bg-gray-900"
          >
            {t('ctaCv')}
          </a>
        </div>
      </div>
    </div>
  );
}
