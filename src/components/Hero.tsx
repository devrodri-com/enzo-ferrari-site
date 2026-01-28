import Image from 'next/image';
import ButtonLink from './ui/ButtonLink';

interface CTA {
  href: string;
  label: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  context: string;
  ctaPrimary: CTA;
  ctaSecondary: CTA;
}

export default function Hero({
  title,
  subtitle,
  context,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[78vh] min-h-[560px] md:min-h-[92vh]">
        {/* Imagen (mobile / desktop) */}
        <Image
          src="/hero/hero-mobile.jpg"
          alt="Enzo Ferrari entrenando arqueros"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[100%_10%] block md:hidden"
        />
        <Image
          src="/hero/hero-desktop.jpg"
          alt="Enzo Ferrari entrenando arqueros"
          fill
          priority
          sizes="(min-width: 768px) 100vw, 100vw"
          className="object-cover object-[100%_5%] hidden md:block"
        />

        {/* Overlay plano institucional */}
        <div className="absolute inset-0 bg-[color:var(--darkband)]/50 pointer-events-none" />

        {/* Contenido */}
        <div className="absolute inset-0">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 h-full flex items-end md:items-center pb-10 md:pb-0">
            <div className="w-full">
              <div className="max-w-xl">
                <p className="text-sm sm:text-base uppercase tracking-[0.16em] text-white/80">
                  {subtitle}
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-white leading-[1.02] mt-3">
                  {title}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mt-4 max-w-lg">
                  {context}
                </p>
              </div>

              <div className="flex gap-4 flex-wrap mt-8">
                <ButtonLink
                  href={ctaPrimary.href}
                  className="bg-white text-black hover:bg-white/95 border border-white/20 no-underline hover:no-underline px-6 py-3"
                >
                  {ctaPrimary.label}
                </ButtonLink>
                <ButtonLink
                  href={ctaSecondary.href}
                  className="border border-white/70 text-white hover:bg-white/10 hover:border-white/85 no-underline hover:no-underline px-6 py-3"
                >
                  {ctaSecondary.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
