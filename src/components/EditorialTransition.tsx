import Image from 'next/image';

interface EditorialTransitionProps {
  text: string;
  kicker: string;
  microline: string;
}

export default function EditorialTransition({
  text,
  kicker,
  microline,
}: EditorialTransitionProps) {
  return (
    <section className="w-full bg-[#141615]">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 pt-16 sm:pt-20 pb-16 sm:pb-20">
        {/* Editorial kicker */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#2C3A44]" />
            <span className="text-xs tracking-[0.22em] uppercase text-white/60">
              {kicker}
            </span>
          </div>

          <p className="mt-6 max-w-[78ch] text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-[1.12]">
            {text}
          </p>
          
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/50">
            {microline}
          </p>
        </div>

        {/* Horizontal band image */}
        <div className="mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-[180px] sm:h-[240px] lg:h-[280px] overflow-hidden">
          <Image
            src="/images/editorial/editorial-transition-net.jpg"
            alt=""
            fill
            priority={false}
            className="object-cover object-center brightness-85 contrast-115"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
