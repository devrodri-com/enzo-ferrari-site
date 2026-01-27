import { getTranslations } from 'next-intl/server';

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('pages.methodology');

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
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">
              {t('sections.diagnostic.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t('sections.diagnostic.description')}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">
              {t('sections.video.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t('sections.video.description')}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">
              {t('sections.cognitive.title')}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>{t('sections.cognitive.perception')}</li>
              <li>{t('sections.cognitive.decision')}</li>
              <li>{t('sections.cognitive.execution')}</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">
              {t('sections.integration.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t('sections.integration.description')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
