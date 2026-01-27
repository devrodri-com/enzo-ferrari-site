import { getTranslations } from 'next-intl/server';
import Page from '@/components/ui/Page';
import Section from '@/components/ui/Section';

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('pages.methodology');

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

      <Section title={t('sections.diagnostic.title')}>
        <p className="text-gray-700">
          {t('sections.diagnostic.description')}
        </p>
      </Section>

      <Section title={t('sections.video.title')}>
        <p className="text-gray-700">
          {t('sections.video.description')}
        </p>
      </Section>

      <Section title={t('sections.cognitive.title')}>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>{t('sections.cognitive.perception')}</li>
          <li>{t('sections.cognitive.decision')}</li>
          <li>{t('sections.cognitive.execution')}</li>
        </ul>
      </Section>

      <Section title={t('sections.integration.title')}>
        <p className="text-gray-700">
          {t('sections.integration.description')}
        </p>
      </Section>
    </Page>
  );
}
