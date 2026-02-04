import { getTranslations } from 'next-intl/server';
import SiteFooter from '@/components/SiteFooter';
import ButtonLink from '@/components/ui/ButtonLink';

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('pages.cv');
  const footerT = await getTranslations('footer');

  return (
    <>
      {/* Page Header (dark) */}
      <header className="w-full bg-[#141615] pt-20 pb-14 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#2C3A44]" />
            <span className="text-xs uppercase tracking-[0.22em] text-white/60">
              {t('kicker')}
            </span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] text-white">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg text-white/80 leading-relaxed">
            {t('intro')}
          </p>
        </div>
      </header>

      {/* Main content (light) */}
      <main className="bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-14 sm:py-20 space-y-14">
          {/* Bloque de descargas */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Español */}
              <div className="border-t border-[#1d1d1f]/10 pt-6">
                <h2 className="text-lg font-medium text-[#1d1d1f]">
                  {t('blocks.es.title')}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#1d1d1f]/55">
                  {t('blocks.es.meta')}
                </p>
                <a
                  href="/cv/cv-es.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-[#1d1d1f] text-white border border-[#1d1d1f] px-6 py-3 font-medium no-underline hover:bg-[#1d1d1f]/90 transition-colors"
                >
                  {t('blocks.es.cta')}
                </a>
              </div>
              {/* Inglés */}
              <div className="border-t border-[#1d1d1f]/10 pt-6">
                <h2 className="text-lg font-medium text-[#1d1d1f]">
                  {t('blocks.en.title')}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#1d1d1f]/55">
                  {t('blocks.en.meta')}
                </p>
                <a
                  href="/cv/cv-en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-[#1d1d1f] text-white border border-[#1d1d1f] px-6 py-3 font-medium no-underline hover:bg-[#1d1d1f]/90 transition-colors"
                >
                  {t('blocks.en.cta')}
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* CTA (dark) */}
        <div className="mt-16 sm:mt-20 w-full border-y border-white/10 bg-[#141615] py-12 sm:py-14 pb-10 sm:pb-12">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#2C3A44]" />
              <span className="text-xs uppercase tracking-[0.22em] text-white/60">
                {t('cta.title')}
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-white/80 leading-relaxed">
              {t('cta.text')}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <ButtonLink
                href={`/${locale}/contact`}
                className="bg-white text-black hover:bg-white/95 border border-white/20 no-underline hover:no-underline px-6 py-3"
              >
                {t('cta.primary')}
              </ButtonLink>
              <ButtonLink
                href={`/${locale}`}
                className="border border-white/70 text-white hover:bg-white/10 hover:border-white/85 no-underline hover:no-underline px-6 py-3"
              >
                {t('cta.secondary')}
              </ButtonLink>
            </div>
          </div>
        </div>
      </main>

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
