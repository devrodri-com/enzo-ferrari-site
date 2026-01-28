import Image from 'next/image';

interface HomeSynthesisProps {
  title: string;
  text: string;
  kicker: string;
  microline: string;
}

export default function HomeSynthesis({
  title,
  text,
  kicker,
  microline,
}: HomeSynthesisProps) {
  return (
    <section className="w-full bg-[#fafafa]">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 pt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#2C3A44]" />
                <span className="text-xs uppercase tracking-[0.22em] text-[#1d1d1f]/50">
                  {kicker}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
                {title}
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-[#1d1d1f]/80 leading-relaxed">
              {text}
            </p>
            
            {(() => {
              const parts = microline.split('·').map(p => p.trim());
              return (
                <>
                  {/* Mobile: 3 líneas */}
                  <div className="mt-4 md:hidden space-y-1">
                    {parts.map((part, index) => (
                      <div
                        key={index}
                        className="text-xs uppercase tracking-[0.22em] text-[#1d1d1f]/55"
                      >
                        {part}
                      </div>
                    ))}
                  </div>
                  
                  {/* Desktop: 1 línea */}
                  <p className="mt-4 hidden md:block text-xs uppercase tracking-[0.22em] text-[#1d1d1f]/55 whitespace-nowrap">
                    {microline}
                  </p>
                </>
              );
            })()}
          </div>

          {/* Imagen */}
          <div className="w-full h-[300px] sm:h-[360px] md:h-[420px] relative overflow-hidden rounded-xl border border-[#2C3A44]/20">
            <Image
              src="/images/home/home-synthesis-work.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
