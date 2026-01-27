import { getTranslations } from 'next-intl/server';

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('pages.profile');

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">
          {t('title')}
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {t('intro')}
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">
            {t('sections.experience')}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>{t('sections.experienceItem1')}</li>
            <li>{t('sections.experienceItem2')}</li>
            <li>{t('sections.experienceItem3')}</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">
            {t('sections.approach')}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>{t('sections.approachItem1')}</li>
            <li>{t('sections.approachItem2')}</li>
            <li>{t('sections.approachItem3')}</li>
            <li>{t('sections.approachItem4')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
