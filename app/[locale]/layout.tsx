import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/get-dictionary';
import { getAlternates } from '@/lib/seo';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/json-ld';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);

  const title = dict.home.meta.title;
  const description = dict.home.meta.description;

  return {
    metadataBase: new URL('https://zv.holdings'),
    title: {
      template: '%s | ZV Holdings',
      default: title,
    },
    description,
    keywords:
      locale === 'es'
        ? [
            'holding empresa',
            'entretenimiento Costa Rica',
            'festival música electrónica',
            'blockchain conferencia',
            'inversión Costa Rica',
            'Electric Animals',
            'Blockchain Jungle',
            'ZV Holdings',
          ]
        : [
            'holding company',
            'entertainment Costa Rica',
            'electronic music festival',
            'blockchain conference',
            'invest Costa Rica',
            'Electric Animals',
            'Blockchain Jungle',
            'ZV Holdings',
          ],
    authors: [{ name: 'ZV Holdings' }],
    creator: 'ZV Holdings',
    publisher: 'ZV Holdings',
    alternates: getAlternates(locale, ''),
    openGraph: {
      title,
      description,
      siteName: 'ZV Holdings',
      locale: locale === 'es' ? 'es_CR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/logos/zv-holdings-logo.png',
          width: 1200,
          height: 630,
          alt: 'ZV Holdings',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/logos/zv-holdings-logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    formatDetection: { email: false, address: false, telephone: false },
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
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <Header locale={locale as Locale} dict={dict} />
      <main>{children}</main>
      <Footer locale={locale as Locale} dict={dict} />
    </>
  );
}
