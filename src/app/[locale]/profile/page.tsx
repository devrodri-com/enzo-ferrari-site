import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import SiteFooter from '@/components/SiteFooter';
import ButtonLink from '@/components/ui/ButtonLink';

function ParagraphBlock({ text }: { text: string }) {
  const paragraphs = text.split('\n\n').filter(Boolean);
  return (
    <div className="space-y-4">
      {paragraphs.map((para, idx) => (
        <p
          key={idx}
          className="text-base sm:text-lg text-[#1d1d1f]/80 leading-relaxed"
        >
          {para}
        </p>
      ))}
    </div>
  );
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('pages.profile');
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
          {/* Rol */}
          <section>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#2C3A44]" />
            </div>
            <h2 className="mt-4 text-xl sm:text-2xl font-medium text-[#1d1d1f]">
              {t('role.title')}
            </h2>
            <div className="mt-6 max-w-3xl">
              <ParagraphBlock text={t('role.text')} />
            </div>
          </section>

          {/* Criterio */}
          <section>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#2C3A44]" />
            </div>
            <h2 className="mt-4 text-xl sm:text-2xl font-medium text-[#1d1d1f]">
              {t('criteria.title')}
            </h2>
            <div className="mt-6 max-w-3xl">
              <ParagraphBlock text={t('criteria.text')} />
            </div>
          </section>

          {/* Imagen editorial */}
          <div className="my-14 sm:my-20 flex justify-center">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] md:aspect-square">
                <Image
                  src="/images/profile/profile-editorial.jpg"
                  alt="Trabajo en contexto profesional"
                  fill
                  sizes="(min-width: 1024px) 768px, 100vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* Contextos */}
          <section>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#2C3A44]" />
            </div>
            <h2 className="mt-4 text-xl sm:text-2xl font-medium text-[#1d1d1f]">
              {t('contexts.title')}
            </h2>
            <div className="mt-6 max-w-3xl">
              <ParagraphBlock text={t('contexts.text')} />
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
