import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { InvestForm } from './invest-form';
import { getDictionary } from '@/lib/get-dictionary';
import { isValidLocale, type Locale } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.investPage.meta.title,
    description: dict.investPage.meta.description,
    alternates: getAlternates(locale, '/invest'),
  };
}

export default async function InvestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const t = dict.investPage;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:px-10 lg:px-16">
        <div className="from-primary/5 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                {t.hero.label}
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {t.hero.title}
              </h1>
              <p className="text-muted-foreground mt-6 text-lg md:text-xl">{t.hero.description}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/wua00771-enhanced-nr.webp"
                    alt="Electric Animals festival"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src="/images/bcjungle-28.webp"
                      alt="Blockchain Jungle"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src="/images/jacobcollier_21-09-25-01550.webp"
                      alt="Live concert experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading
              label={t.thesis.label}
              title={t.thesis.title}
              description={t.thesis.description}
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.thesis.points.map((point, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="border-border bg-card flex items-start gap-3 rounded-xl border p-4 shadow-sm">
                  <span className="bg-primary/10 text-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground text-sm">{point}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Formats */}
      <section className="border-border bg-muted/30 border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading label={t.formats.label} title={t.formats.title} align="center" />
          </AnimatedSection>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {t.formats.items.map((format, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="border-border bg-card flex h-full flex-col rounded-2xl border p-8 shadow-sm">
                  <span className="text-primary text-sm font-medium">0{index + 1}</span>
                  <h3 className="mt-2 text-xl font-bold">{format.title}</h3>
                  <p className="text-muted-foreground mt-2">{format.description}</p>
                  <ul className="mt-6 space-y-2">
                    {format.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm">
                        <span className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <AnimatedSection>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                {t.form.label}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{t.form.title}</h2>
              <p className="text-muted-foreground mt-4 text-lg">{t.form.description}</p>
              <div className="mt-8 space-y-4">
                {t.form.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="bg-primary/10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                      <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                    </span>
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="border-border bg-muted/50 mt-8 rounded-xl border p-4">
                <p className="text-muted-foreground text-xs">
                  {t.form.preferEmail}{' '}
                  <a
                    href="mailto:info@zv.holdings"
                    className="text-primary font-medium hover:underline"
                  >
                    info@zv.holdings
                  </a>
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="border-border bg-card rounded-2xl border p-6 shadow-sm md:p-8">
                <InvestForm dict={dict.investForm} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-border bg-primary text-primary-foreground border-t px-6 py-24 sm:px-10 lg:px-16">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-primary-foreground/70 text-lg">{t.closing.description}</p>
          <div className="mt-8 space-y-2">
            <p className="text-2xl font-semibold md:text-3xl">{t.closing.line1}</p>
            <p className="text-2xl font-bold md:text-3xl">{t.closing.line2}</p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="mt-8 rounded-full border border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href={`/${locale}/portfolio`}>
              {t.closing.portfolioCta}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
}
