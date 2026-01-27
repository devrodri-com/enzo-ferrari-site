import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import Page from '@/components/ui/Page';
import ButtonLink from '@/components/ui/ButtonLink';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('home');

  const highlights = [
    {
      title: t('highlights.highlight1.title'),
      description: t('highlights.highlight1.description'),
    },
    {
      title: t('highlights.highlight2.title'),
      description: t('highlights.highlight2.description'),
    },
    {
      title: t('highlights.highlight3.title'),
      description: t('highlights.highlight3.description'),
    },
  ];

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        context={t('context')}
        ctaPrimary={{
          href: `/${locale}/cv`,
          label: t('ctaCv'),
        }}
        ctaSecondary={{
          href: `/${locale}/methodology`,
          label: t('ctaMethodology'),
        }}
      />
      
      <Page className="space-y-10 py-10">
        {/* Descripción */}
        <p className="text-lg text-black/70 leading-relaxed max-w-2xl">
          {t('description')}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-black/10">
          {highlights.map((highlight, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-sm font-semibold text-black/90">
                {highlight.title}
              </h3>
              <p className="text-sm text-black/70">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Contacto */}
        <div className="pt-4">
          <ButtonLink href={`/${locale}/contact`} variant="primary">
            {t('ctaContact')}
          </ButtonLink>
        </div>
      </Page>
    </>
  );
}
