import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/get-dictionary';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
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
      <Header locale={locale as Locale} dict={dict} />
      <main>{children}</main>
      <Footer locale={locale as Locale} dict={dict} />
    </>
  );
}
