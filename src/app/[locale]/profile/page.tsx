import { getTranslations } from 'next-intl/server';
import Page from '@/components/ui/Page';

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('pages.profile');
  const navT = await getTranslations('nav');

  return (
    <Page className="space-y-12 py-10">
      {/* Entrada editorial: micro-línea + kicker + título */}
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[#2C3A44]" />
        <span className="text-xs uppercase tracking-[0.22em] text-[#1d1d1f]/55">
          {navT('profile')}
        </span>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-[#1d1d1f]">
        {t('title')}
      </h1>

      <div className="space-y-8 max-w-3xl">
        <p className="text-base sm:text-lg text-[#1d1d1f]/80 leading-relaxed">
          {t('mainText')}
        </p>

        <div className="flex items-center gap-3 pt-2">
          <span className="h-px w-10 shrink-0 bg-[#2C3A44]/60" />
        </div>

        <p className="text-base sm:text-lg text-[#1d1d1f]/80 leading-relaxed">
          {t('focusBlock')}
        </p>
      </div>
    </Page>
  );
}
