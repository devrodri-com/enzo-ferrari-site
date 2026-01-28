interface EditorialIntroProps {
  statement: string;
  paragraph: string;
}

export default function EditorialIntro({
  statement,
  paragraph,
}: EditorialIntroProps) {
  return (
    <section className="w-full bg-[#fafafa]">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 pt-20 pb-14">
        <div className="space-y-6">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#1d1d1f] leading-relaxed">
            {statement}
          </p>
          
          <div className="w-16 h-px bg-[#2C3A44]" />
          
          <p className="text-base sm:text-lg text-[#1d1d1f]/80 leading-relaxed">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
