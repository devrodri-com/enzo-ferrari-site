import { getTranslations } from 'next-intl/server';

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('pages.cv');
  const cvT = await getTranslations('cv');

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">
          {t('title')}
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {t('intro')}
        </p>

        <div className="space-y-4 mt-8">
          <a
            href="/cv/cv-es.pdf"
            download
            className="block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-center dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {cvT('downloadEs')}
          </a>
          
          <a
            href="/cv/cv-en.pdf"
            download
            className="block px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center dark:border-gray-700 dark:hover:bg-gray-900"
          >
            {cvT('downloadEn')}
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
          {t('note')}
        </p>
      </div>
    </div>
  );
}
