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
    <Page className="space-y-8 py-10">
      <h1 className="text-4xl font-bold tracking-tight">
        {t('title')}
      </h1>
      
      <Section>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t('intro')}
        </p>
      </Section>

      <Section title={t('sections.diagnostic.title')}>
        <div className="flex items-start gap-3">
          <div className="w-1 h-1 rounded-full bg-[#2C3A44] mt-2 flex-shrink-0" />
          <p className="text-gray-700">
            {t('sections.diagnostic.description')}
          </p>
        </div>
      </Section>

      <Section title={t('sections.video.title')}>
        <div className="flex items-start gap-3">
          <div className="w-1 h-1 rounded-full bg-[#2C3A44] mt-2 flex-shrink-0" />
          <p className="text-gray-700">
            {t('sections.video.description')}
          </p>
        </div>
      </Section>

      <Section title={t('sections.cognitive.title')}>
        <ul className="list-none space-y-2 text-gray-700">
          <li className="flex items-start gap-3">
            <div className="w-1 h-1 rounded-full bg-[#2C3A44] mt-2 flex-shrink-0" />
            <span>{t('sections.cognitive.perception')}</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1 h-1 rounded-full bg-[#2C3A44] mt-2 flex-shrink-0" />
            <span>{t('sections.cognitive.decision')}</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1 h-1 rounded-full bg-[#2C3A44] mt-2 flex-shrink-0" />
            <span>{t('sections.cognitive.execution')}</span>
          </li>
        </ul>
      </Section>

      <Section title={t('sections.integration.title')}>
        <div className="flex items-start gap-3">
          <div className="w-1 h-1 rounded-full bg-[#2C3A44] mt-2 flex-shrink-0" />
          <p className="text-gray-700">
            {t('sections.integration.description')}
          </p>
        </div>
      </Section>
    </Page>
  );
}
