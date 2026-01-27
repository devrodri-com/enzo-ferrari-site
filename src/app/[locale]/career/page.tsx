import { getTranslations } from 'next-intl/server';
import Page from '@/components/ui/Page';
import Section from '@/components/ui/Section';

export default async function CareerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('pages.career');

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

      <Section title={t('timeline.title')}>
        <ul className="space-y-4">
          <li className="border-l-4 border-[#2C3A44] pl-4 py-2">
            <p className="text-gray-500 text-sm">2024–Actualidad</p>
            <p className="text-gray-700">{t('timeline.item1')}</p>
          </li>
          <li className="border-l-4 border-[#2C3A44] pl-4 py-2">
            <p className="text-gray-500 text-sm">2024</p>
            <p className="text-gray-700">{t('timeline.item2')}</p>
          </li>
          <li className="border-l-4 border-[#2C3A44] pl-4 py-2">
            <p className="text-gray-500 text-sm">2023</p>
            <p className="text-gray-700">{t('timeline.item3')}</p>
          </li>
          <li className="border-l-4 border-[#2C3A44] pl-4 py-2">
            <p className="text-gray-500 text-sm">2022</p>
            <p className="text-gray-700">{t('timeline.item4')}</p>
          </li>
          <li className="border-l-4 border-[#2C3A44] pl-4 py-2">
            <p className="text-gray-500 text-sm">2016-2021</p>
            <p className="text-gray-700">{t('timeline.item5')}</p>
          </li>
        </ul>
      </Section>
    </Page>
  );
}
