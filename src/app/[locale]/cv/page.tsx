import { getTranslations } from 'next-intl/server';
import Page from '@/components/ui/Page';
import Section from '@/components/ui/Section';

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('pages.cv');
  const cvT = await getTranslations('cv');

  return (
    <Page className="space-y-8 py-10">
      <h1 className="text-4xl font-bold tracking-tight">
        {t('title')}
      </h1>
      
      <Section>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t('intro')}
        </p>
      </Section>

      <Section>
        <div className="space-y-4">
          <a
            href="/cv/cv-es.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
          >
            {cvT('downloadEs')}
          </a>
          
          <a
            href="/cv/cv-en.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center"
          >
            {cvT('downloadEn')}
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          {t('note')}
        </p>
      </Section>
    </Page>
  );
}
