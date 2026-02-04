import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import SiteFooter from '@/components/SiteFooter';
import ButtonLink from '@/components/ui/ButtonLink';

const experienceLogoSrc = (i: number): string => {
  if (i <= 3) return '/brands/auf.svg';
  if (i === 4) return '/brands/liverpool.svg';
  return '/brands/paysandu.svg';
};

function TrophyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-[#1d1d1f]/50"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export default async function CareerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('pages.career');
  const footerT = await getTranslations('footer');

  return (
    <>
      {/* Page Header */}
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

      {/* Main content */}
      <main className="bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-14 sm:py-20 space-y-16">
          {/* Experiencia profesional */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#2C3A44]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-medium text-[#1d1d1f]">
              {t('experience.title')}
            </h2>
            <ul className="relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#2C3A44]/40 before:content-['']">
              {([1, 2, 3, 4, 5] as const).map((i) => (
                <li key={i} className={i === 1 ? 'pl-6 py-9' : 'pl-6 py-6'}>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="text-xs uppercase tracking-[0.18em] text-[#1d1d1f]/55">
                      {t(`experience.${i}.period`)}
                    </div>
                    <div>
                      <div
                        className={
                          i === 1
                            ? 'font-medium text-[#1d1d1f] text-base sm:text-lg flex items-center gap-2'
                            : 'font-medium text-[#1d1d1f] flex items-center gap-2'
                        }
                      >
                        <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-md border border-[#2C3A44]/35 bg-[#141615]/6 shrink-0">
                          <Image
                            src={experienceLogoSrc(i)}
                            alt=""
                            width={24}
                            height={24}
                            className="h-4 w-auto sm:h-5 opacity-90"
                          />
                        </span>
                        {t(`experience.${i}.org`)}
                      </div>
                      <div className="mt-1 text-sm sm:text-base text-[#1d1d1f]/75">
                        {t(`experience.${i}.role`)}
                      </div>
                      {i === 1 && (
                        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#1d1d1f]/55">
                          {t('experience.1.micro')}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Foto editorial */}
          <div className="my-16 sm:my-20">
            <Image
              src="/images/career/career-editorial.jpg"
              alt="Trabajo en contexto profesional"
              width={2400}
              height={1350}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Logros destacados */}
          <section className="space-y-10">
            {/* Section header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#2C3A44]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-medium text-[#1d1d1f]">
                {t('achievements.title')}
              </h2>
            </div>

            {/* Resumen de logros */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#2C3A44]" />
                <span className="text-xs uppercase tracking-[0.22em] text-[#1d1d1f]/55">
                  {t('achievements.summary.title')}
                </span>
              </div>

              {/* Mobile: stack vertical */}
              <div className="grid grid-cols-1 gap-4 md:hidden">
                <p className="text-sm sm:text-base font-medium text-[#1d1d1f]/85">
                  {t('achievements.summary.1')}
                </p>
                <p className="text-sm sm:text-base font-medium text-[#1d1d1f]/85">
                  {t('achievements.summary.2')}
                </p>
                <p className="text-sm sm:text-base font-medium text-[#1d1d1f]/85">
                  {t('achievements.summary.3')}
                </p>
              </div>

              {/* Desktop: una línea con separadores verticales */}
              <div className="hidden md:flex flex-wrap items-center gap-y-2 text-sm sm:text-base font-medium text-[#1d1d1f]/85">
                <span>{t('achievements.summary.1')}</span>
                <span className="mx-6 h-4 w-px bg-[#1d1d1f]/15" aria-hidden="true" />
                <span>{t('achievements.summary.2')}</span>
                <span className="mx-6 h-4 w-px bg-[#1d1d1f]/15" aria-hidden="true" />
                <span>{t('achievements.summary.3')}</span>
              </div>
            </div>

            {/* Separador sutil */}
            <div className="border-t border-[#2C3A44]/15 mt-4" />

            {/* Lista de logros */}
            <ul className="space-y-6">
              {([1, 2, 3, 4, 5] as const).map((i) => (
                <li
                  key={i}
                  className={`grid grid-cols-[auto_4rem_1fr] sm:grid-cols-[auto_4rem_1fr] gap-3 items-start ${
                    i === 1 ? 'py-6' : ''
                  } text-[#1d1d1f]/80`}
                >
                  <span className="flex items-center justify-center w-5 pt-0.5">
                    <TrophyIcon />
                  </span>
                  <span className="text-sm text-[#1d1d1f]/55 shrink-0 pt-0.5">
                    {t(`achievements.${i}.year`)}
                  </span>
                  {i === 1 ? (
                    <div>
                      <span className="block text-sm sm:text-base font-medium text-[#1d1d1f]/90">
                        {t(`achievements.${i}.text`)}
                      </span>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#1d1d1f]/55">
                        {t('achievements.1.micro')}
                      </p>
                      <div className="mt-6">
                        <Image
                          src="/images/career/career-achievement-copa.jpg"
                          alt="Copa América Selección Uruguaya"
                          width={2000}
                          height={1125}
                          className="w-full max-w-xl rounded-md object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <span className="text-sm sm:text-base">
                      {t(`achievements.${i}.text`)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Formación relevante */}
        <div className="mx-auto max-w-6xl px-6 sm:px-10 pt-0 pb-4 sm:pb-8">
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#2C3A44]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-medium text-[#1d1d1f]">
              {t('education.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Left column: Licenses + Academic */}
              <div className="space-y-10">
                {/* Licencias profesionales */}
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#1d1d1f]/60">
                    {t('education.licensesTitle')}
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-[#1d1d1f]/80">
                    <li>{t('education.licenses.1')}</li>
                    <li>{t('education.licenses.2')}</li>
                  </ul>
                </div>

                {/* Formación académica */}
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#1d1d1f]/60">
                    {t('education.academicTitle')}
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-[#1d1d1f]/80">
                    <li>{t('education.academic.1')}</li>
                  </ul>
                </div>
              </div>

              {/* Right column: Institutional */}
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.18em] text-[#1d1d1f]/60">
                  {t('education.institutionalTitle')}
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-[#1d1d1f]/80">
                  <li>{t('education.institutional.1')}</li>
                  <li>{t('education.institutional.2')}</li>
                  <li>{t('education.institutional.3')}</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Bridge + CTA (full-width band) */}
        <div className="mt-14 w-full border-y border-white/10 bg-[#141615] py-12 sm:py-14 pb-10 sm:pb-12">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#2C3A44]" />
              <span className="text-xs uppercase tracking-[0.22em] text-white/60">
                {t('bridge.title')}
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-white/80 leading-relaxed">
              {t('bridge.text')}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <ButtonLink
                href={`/${locale}/cv`}
                className="bg-white text-black hover:bg-white/95 border border-white/20 no-underline hover:no-underline px-6 py-3"
              >
                {t('bridge.ctaPrimary')}
              </ButtonLink>
              <ButtonLink
                href={`/${locale}/contact`}
                className="border border-white/70 text-white hover:bg-white/10 hover:border-white/85 no-underline hover:no-underline px-6 py-3"
              >
                {t('bridge.ctaSecondary')}
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
