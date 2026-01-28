import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Nav from '@/components/Nav';
import { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'es') {
    return {
      title: 'Enzo Ferrari | Entrenador de Arqueros · Alto Rendimiento',
      description:
        'Entrenador de arqueros en contextos de selecciones nacionales y alto rendimiento. Metodología aplicada al juego real. Selección Uruguaya Mayor · AUF.',
      openGraph: {
        title: 'Enzo Ferrari | Entrenador de Arqueros · Alto Rendimiento',
        description:
          'Entrenador de arqueros en contextos de selecciones nacionales y alto rendimiento. Metodología aplicada al juego real. Selección Uruguaya Mayor · AUF.',
        images: [
          {
            url: '/og/og-es.jpg',
            width: 1200,
            height: 630,
            alt: 'Enzo Ferrari · Entrenador de Arqueros · Alto Rendimiento',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Enzo Ferrari | Entrenador de Arqueros · Alto Rendimiento',
        description:
          'Entrenador de arqueros en contextos de selecciones nacionales y alto rendimiento. Metodología aplicada al juego real. Selección Uruguaya Mayor · AUF.',
        images: ['/og/og-es.jpg'],
      },
    };
  }

  // EN locale
  return {
    title: 'Enzo Ferrari | Goalkeeper Coach · High Performance',
    description:
      'Goalkeeper coach working in national team and high-performance environments. Game-based methodology. Uruguay Senior National Team (AUF).',
    openGraph: {
      title: 'Enzo Ferrari | Goalkeeper Coach · High Performance',
      description:
        'Goalkeeper coach working in national team and high-performance environments. Game-based methodology. Uruguay Senior National Team (AUF).',
      images: [
        {
          url: '/og/og-en.jpg',
          width: 1200,
          height: 630,
          alt: 'Enzo Ferrari · Goalkeeper Coach · High Performance',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Enzo Ferrari | Goalkeeper Coach · High Performance',
      description:
        'Goalkeeper coach working in national team and high-performance environments. Game-based methodology. Uruguay Senior National Team (AUF).',
      images: ['/og/og-en.jpg'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen bg-[#fafafa]">
        <Nav />
        <main className="w-full p-0">
          {children}
        </main>
      </div>
    </NextIntlClientProvider>
  );
}
