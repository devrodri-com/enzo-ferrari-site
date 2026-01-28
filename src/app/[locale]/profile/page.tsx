import { getTranslations } from 'next-intl/server';
import Page from '@/components/ui/Page';

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('pages.profile');

  return (
    <Page className="space-y-8 py-10">
      <h1 className="text-4xl font-bold tracking-tight">
        {t('title')}
      </h1>
      
      <div className="space-y-6 max-w-3xl">
        <p className="text-lg text-[#1d1d1f] leading-relaxed">
          {t('mainText')}
        </p>
        
        <p className="text-lg text-[#1d1d1f] leading-relaxed">
          {t('focusBlock')}
        </p>
      </div>
    </Page>
  );
}
