import React from 'react';
import { getTranslations } from 'next-intl/server';
import SiteFooter from '@/components/SiteFooter';
import ButtonLink from '@/components/ui/ButtonLink';

const CONTACT_LINKS: Record<
  string,
  { href: string; external?: boolean } | null
> = {
  email: { href: 'mailto:enzoisef2019@gmail.com', external: false },
  whatsapp: { href: 'https://wa.me/59899719422', external: true },
  linkedin: { href: 'https://www.linkedin.com/in/ea-enzoferrari/', external: true },
  instagram: { href: 'https://www.instagram.com/ea_enzoferrari/', external: true },
  location: null,
  timezone: null,
};

const CONTACT_ORDER = ['email', 'whatsapp', 'linkedin', 'instagram', 'location', 'timezone'] as const;

const iconClass = 'w-5 h-5 shrink-0 text-[#1d1d1f]/55';

function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass} aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass} aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass} aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass} aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass} aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const CONTACT_ICONS: Record<string, () => React.ReactNode> = {
  email: IconMail,
  whatsapp: IconWhatsApp,
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
  location: IconLocation,
  timezone: IconClock,
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('pages.contact');
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
        <div className="mx-auto max-w-6xl px-6 sm:px-10 pt-14 sm:pt-20 pb-8 sm:pb-12 space-y-12">
          {/* Canales directos */}
          <section>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#2C3A44]" />
            </div>
            <h2 className="mt-4 text-xl sm:text-2xl font-medium text-[#1d1d1f]">
              {t('section.title')}
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {CONTACT_ORDER.map((key) => {
                const link = CONTACT_LINKS[key];
                const label = t(`items.${key}.label`);
                const displayValue = key === 'email' ? t('items.email.display') : t(`items.${key}.value`);
                const Icon = CONTACT_ICONS[key];
                return (
                  <div key={key} className="flex items-start gap-3">
                    <span className="mt-0.5" aria-hidden>
                      {Icon ? <Icon /> : null}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#1d1d1f]/55">
                        {label}
                      </p>
                      {link ? (
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="mt-1 block text-base sm:text-lg text-[#1d1d1f]/80 no-underline hover:text-[#1d1d1f] transition-colors"
                        >
                          {displayValue}
                        </a>
                      ) : (
                        <p className="mt-1 text-base sm:text-lg text-[#1d1d1f]/80">
                          {displayValue}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
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
