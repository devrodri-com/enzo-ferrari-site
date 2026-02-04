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
    <Page className="space-y-12 py-10">
      {/* Entrada editorial: micro-línea + kicker + título */}
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[#2C3A44]" />
        <span className="text-xs uppercase tracking-[0.22em] text-[#1d1d1f]/55">
          {t('title')}
        </span>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-[#1d1d1f]">
        {t('title')}
      </h1>

      <Section>
        <p className="text-base sm:text-lg text-[#1d1d1f]/80 leading-relaxed">
          {t('intro')}
        </p>
      </Section>

      <Section title={t('sections.diagnostic.title')}>
        <div className="flex items-start gap-3">
          <div className="w-1 h-1 rounded-full bg-[#2C3A44] mt-2 flex-shrink-0" />
          <p className="text-[#1d1d1f]/80 leading-relaxed">
            {t('sections.diagnostic.description')}
          </p>
        </div>
      </Section>

      <Section title={t('sections.video.title')}>
        <div className="flex items-start gap-3">
          <div className="w-1 h-1 rounded-full bg-[#2C3A44] mt-2 flex-shrink-0" />
          <p className="text-[#1d1d1f]/80 leading-relaxed">
            {t('sections.video.description')}
          </p>
        </div>
      </Section>

      <Section title={t('sections.cognitive.title')}>
        <ul className="list-none space-y-2 text-[#1d1d1f]/80 leading-relaxed">
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
          <p className="text-[#1d1d1f]/80 leading-relaxed">
            {t('sections.integration.description')}
          </p>
        </div>
      </Section>
    </Page>
  );
}
