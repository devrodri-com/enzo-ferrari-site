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

        {/* Overlay oscuro funcional */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />

        {/* Scrim superior para asegurar legibilidad del Nav */}
        <div className="absolute inset-x-0 top-0 h-16 md:h-20 bg-gradient-to-b from-black/80 via-black/55 to-transparent pointer-events-none" />

        {/* Contenido */}
        <div className="absolute inset-0">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 h-full flex items-end md:items-center pb-10 md:pb-0">
            <div className="space-y-8 w-full">
              <div className="space-y-3 max-w-xl">
                <p className="text-sm text-white/80">{subtitle}</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.02]">
                  {title}
                </h1>
                <p className="text-sm sm:text-base text-white/80 mt-3">{context}</p>
              </div>

              <div className="flex gap-4 flex-wrap">
                <ButtonLink
                  href={ctaPrimary.href}
                  className="bg-white/90 text-black hover:bg-white"
                >
                  {ctaPrimary.label}
                </ButtonLink>
                <ButtonLink
                  href={ctaSecondary.href}
                  className="border border-white text-white hover:bg-white/10 hover:border-white"
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
