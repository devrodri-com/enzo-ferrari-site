import { getTranslations } from 'next-intl/server';
import SiteFooter from '@/components/SiteFooter';
import ButtonLink from '@/components/ui/ButtonLink';

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('pages.methodology');
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
        <div className="mx-auto max-w-6xl px-6 sm:px-10 pt-14 sm:pt-20 pb-6 sm:pb-8 space-y-16">
          {/* Pilares */}
          <section>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#2C3A44]" />
            </div>
            <h2 className="mt-4 text-xl sm:text-2xl font-medium text-[#1d1d1f]">
              {t('pillars.title')}
            </h2>
            <div className="mt-8 space-y-10">
              {/* Pilar principal: Análisis del juego (eje) */}
              <div className="max-w-prose">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#2C3A44]" />
                </div>
                <h3 className="mt-3 text-lg sm:text-xl font-medium text-[#1d1d1f]">
                  {t('pillars.1.title')}
                </h3>
                <p className="mt-3 text-base sm:text-lg text-[#1d1d1f]/80 leading-relaxed">
                  {t('pillars.1.text')}
                </p>
                <div className="mt-10 border-t border-[#1d1d1f]/10" />
              </div>

              {/* Pilares secundarios (2x2 en desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="max-w-prose">
                  <h3 className="text-base sm:text-lg font-medium text-[#1d1d1f]">
                    {t('pillars.2.title')}
                  </h3>
                  <p className="mt-3 text-base text-[#1d1d1f]/75 leading-relaxed">
                    {t('pillars.2.text')}
                  </p>
                </div>

                <div className="max-w-prose">
                  <h3 className="text-base sm:text-lg font-medium text-[#1d1d1f]">
                    {t('pillars.3.title')}
                  </h3>
                  <p className="mt-3 text-base text-[#1d1d1f]/75 leading-relaxed">
                    {t('pillars.3.text')}
                  </p>
                </div>

                <div className="max-w-prose">
                  <h3 className="text-base sm:text-lg font-medium text-[#1d1d1f]">
                    {t('pillars.4.title')}
                  </h3>
                  <p className="mt-3 text-base text-[#1d1d1f]/75 leading-relaxed">
                    {t('pillars.4.text')}
                  </p>
                </div>

                <div className="max-w-prose">
                  <h3 className="text-base sm:text-lg font-medium text-[#1d1d1f]">
                    {t('pillars.5.title')}
                  </h3>
                  <p className="mt-3 text-base text-[#1d1d1f]/75 leading-relaxed">
                    {t('pillars.5.text')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Proceso */}
          <section>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#2C3A44]" />
            </div>
            <h2 className="mt-4 text-xl sm:text-2xl font-medium text-[#1d1d1f]">
              {t('process.title')}
            </h2>
            <div className="mt-8 flex flex-col gap-4 md:gap-0 md:flex-row md:items-center">
              <span className="block md:inline text-base font-medium text-[#1d1d1f]/90">
                {t('process.1')}
              </span>
              <span
                className="hidden md:block mx-8 h-4 w-px bg-[#1d1d1f]/15 shrink-0"
                aria-hidden
              />
              <span className="block md:inline text-base font-medium text-[#1d1d1f]/90">
                {t('process.2')}
              </span>
              <span
                className="hidden md:block mx-8 h-4 w-px bg-[#1d1d1f]/15 shrink-0"
                aria-hidden
              />
              <span className="block md:inline text-base font-medium text-[#1d1d1f]/90">
                {t('process.3')}
              </span>
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
                href={`/${locale}/cv`}
                className="bg-white text-black hover:bg-white/95 border border-white/20 no-underline hover:no-underline px-6 py-3"
              >
                {t('cta.primary')}
              </ButtonLink>
              <ButtonLink
                href={`/${locale}/contact`}
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
