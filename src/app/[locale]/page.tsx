import { getTranslations } from 'next-intl/server';
import ButtonLink from '@/components/ui/ButtonLink';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('home');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('subtitle')}
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <ButtonLink href={`/${locale}/contact`} variant="primary">
            {t('ctaContact')}
          </ButtonLink>
          <ButtonLink href={`/${locale}/cv`} variant="secondary">
            {t('ctaCv')}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
