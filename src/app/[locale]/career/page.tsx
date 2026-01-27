import { getTranslations } from 'next-intl/server';

export default async function CareerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('pages.career');

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">
          {t('title')}
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {t('intro')}
        </p>

        <div className="space-y-6 mt-8">
          <h2 className="text-2xl font-semibold">
            {t('timeline.title')}
          </h2>
          <ul className="space-y-4">
            <li className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-2">
              <p className="text-gray-500 dark:text-gray-400 text-sm">TBD</p>
              <p className="text-gray-700 dark:text-gray-300">{t('timeline.item1')}</p>
            </li>
            <li className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-2">
              <p className="text-gray-500 dark:text-gray-400 text-sm">TBD</p>
              <p className="text-gray-700 dark:text-gray-300">{t('timeline.item2')}</p>
            </li>
            <li className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-2">
              <p className="text-gray-500 dark:text-gray-400 text-sm">TBD</p>
              <p className="text-gray-700 dark:text-gray-300">{t('timeline.item3')}</p>
            </li>
            <li className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-2">
              <p className="text-gray-500 dark:text-gray-400 text-sm">TBD</p>
              <p className="text-gray-700 dark:text-gray-300">{t('timeline.item4')}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
