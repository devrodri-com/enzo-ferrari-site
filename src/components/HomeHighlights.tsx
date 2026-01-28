interface Highlight {
  title: string;
  text: string;
}

interface HomeHighlightsProps {
  highlights: Highlight[];
}

export default function HomeHighlights({
  highlights,
}: HomeHighlightsProps) {
  return (
    <section className="w-full bg-[#fafafa]">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 pt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg sm:text-xl font-medium text-[#1d1d1f]">
                {highlight.title}
              </h3>
              <p className="text-base text-[#1d1d1f]/80 leading-relaxed">
                {highlight.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
