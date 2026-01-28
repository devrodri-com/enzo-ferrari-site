import ButtonLink from './ui/ButtonLink';

interface HomeCTAProps {
  title: string;
  text: string;
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
}

export default function HomeCTA({
  title,
  text,
  primary,
  secondary,
}: HomeCTAProps) {
  return (
    <section className="w-full bg-[#141615]">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 pt-20 pb-20">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-medium text-white">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {text}
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <ButtonLink
              href={primary.href}
              className="bg-white text-black hover:bg-white/95 border border-white/20 no-underline hover:no-underline px-6 py-3"
            >
              {primary.label}
            </ButtonLink>
            <ButtonLink
              href={secondary.href}
              className="border border-white/70 text-white hover:bg-white/10 hover:border-white/85 no-underline hover:no-underline px-6 py-3"
            >
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
