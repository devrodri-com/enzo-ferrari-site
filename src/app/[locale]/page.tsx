import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import EditorialTransition from '@/components/EditorialTransition';
import HomeSynthesis from '@/components/HomeSynthesis';
import HomeHighlights from '@/components/HomeHighlights';
import HomeCTA from '@/components/HomeCTA';
import SiteFooter from '@/components/SiteFooter';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('home');
  const footerT = await getTranslations('footer');

  const technicalHighlights = [
    {
      title: t('highlights.1.title'),
      text: t('highlights.1.text'),
    },
    {
      title: t('highlights.2.title'),
      text: t('highlights.2.text'),
    },
    {
      title: t('highlights.3.title'),
      text: t('highlights.3.text'),
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
      
      <EditorialTransition
        text={t('transition.text')}
        kicker={t('transition.kicker')}
        microline={t('transition.microline')}
      />
      
      <HomeSynthesis
        title={t('synthesis.title')}
        text={t('synthesis.text')}
        kicker={t('synthesis.kicker')}
        microline={t('synthesis.microline')}
      />
      
      <HomeHighlights highlights={technicalHighlights} />
      
      <HomeCTA
        title={t('cta.title')}
        text={t('cta.text')}
        primary={{
          href: `/${locale}/cv`,
          label: t('cta.primary'),
        }}
        secondary={{
          href: `/${locale}/contact`,
          label: t('cta.secondary'),
        }}
      />
      
      <SiteFooter
        name={footerT('name')}
        role={footerT('role')}
        context={footerT('context')}
        location={footerT('location')}
        copyright={footerT('copyright', { year: new Date().getFullYear() })}
        madeByPrefix={footerT('madeByPrefix')}
        madeByName={footerT('madeByName')}
      />
    </>
  );
}
