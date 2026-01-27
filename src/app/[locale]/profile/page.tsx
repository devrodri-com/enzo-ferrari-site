import { getTranslations } from 'next-intl/server';
import Page from '@/components/ui/Page';
import Section from '@/components/ui/Section';

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('pages.profile');

  return (
    <Page className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">
        {t('title')}
      </h1>
      
      <Section>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t('intro')}
        </p>
      </Section>

      <Section title={t('sections.experience')}>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>{t('sections.experienceItem1')}</li>
          <li>{t('sections.experienceItem2')}</li>
          <li>{t('sections.experienceItem3')}</li>
        </ul>
      </Section>

      <Section title={t('sections.approach')}>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>{t('sections.approachItem1')}</li>
          <li>{t('sections.approachItem2')}</li>
          <li>{t('sections.approachItem3')}</li>
          <li>{t('sections.approachItem4')}</li>
        </ul>
      </Section>
    </Page>
  );
}
