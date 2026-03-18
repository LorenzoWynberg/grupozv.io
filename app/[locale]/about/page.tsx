import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, Shield, Leaf, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { getDictionary } from '@/lib/get-dictionary';
import { isValidLocale, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

const advantageIcons = [Award, Shield, Leaf, Shield, Award];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.about.meta.title, description: dict.about.meta.description };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const t = dict.about;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-16 sm:px-10 lg:px-16">
        <div className="from-primary/5 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">
              {t.hero.label}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg md:text-xl">
              {t.hero.description}{' '}
              <span className="text-foreground font-semibold">{t.hero.highlight}</span>
              {t.hero.descriptionEnd}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Verticals */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label={t.verticals.label}
              title={t.verticals.title}
              description={t.verticals.description}
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <div className="border-border bg-card h-full rounded-2xl border p-8 shadow-sm">
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="text-primary text-lg font-bold">BS</span>
                </div>
                <h3 className="text-2xl font-bold">{t.verticals.bs.name}</h3>
                <p className="text-primary mt-1 text-sm font-medium">{t.verticals.bs.subtitle}</p>
                <p className="text-muted-foreground mt-4">{t.verticals.bs.description}</p>
                <ul className="mt-6 space-y-2">
                  {t.verticals.bs.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex items-center gap-3 text-sm"
                    >
                      <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="border-border bg-card h-full rounded-2xl border p-8 shadow-sm">
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="text-primary text-lg font-bold">XR</span>
                </div>
                <h3 className="text-2xl font-bold">{t.verticals.xr.name}</h3>
                <p className="text-primary mt-1 text-sm font-medium">{t.verticals.xr.subtitle}</p>
                <p className="text-muted-foreground mt-4">{t.verticals.xr.description}</p>
                <ul className="mt-6 space-y-2">
                  {t.verticals.xr.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex items-center gap-3 text-sm"
                    >
                      <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="border-border bg-muted/30 border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label={t.advantages.label}
              title={t.advantages.title}
              description={t.advantages.description}
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.advantages.items.map((advantage, i) => {
              const Icon = advantageIcons[i];
              return (
                <AnimatedSection key={advantage.title} delay={i * 0.08}>
                  <div className="border-border bg-card h-full rounded-2xl border p-6 shadow-sm">
                    <Icon className="text-primary h-6 w-6" />
                    <h3 className="mt-3 text-lg font-semibold">{advantage.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm">{advantage.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                {t.mission.label}
              </p>
              <p className="text-muted-foreground mt-4 text-lg">{t.mission.text}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                {t.vision.label}
              </p>
              <p className="text-muted-foreground mt-4 text-lg">{t.vision.text}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-border bg-muted/30 border-t px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label={t.certifications.label}
              title={t.certifications.title}
              align="center"
            />
          </AnimatedSection>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-12">
            {[
              {
                name: t.certifications.items[0],
                logo: '/images/certifications/esencial-costa-rica.png',
                h: 'h-16',
                w: 'w-16',
              },
              {
                name: t.certifications.items[1],
                logo: '/images/certifications/carbon-neutral.png',
                h: 'h-12',
                w: 'w-32',
              },
              {
                name: t.certifications.items[2],
                logo: '/images/certifications/lsqa.svg',
                h: 'h-14',
                w: 'w-14',
              },
            ].map((cert, i) => (
              <AnimatedSection key={cert.name} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-3">
                  <div className={`relative ${cert.h} ${cert.w}`}>
                    <Image src={cert.logo} alt={cert.name} fill className="object-contain" />
                  </div>
                  <span className="text-muted-foreground text-xs font-medium">{cert.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-border bg-primary text-primary-foreground border-t px-6 py-24 sm:px-10 lg:px-16">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t.cta.title}</h2>
          <p className="text-primary-foreground/80 mx-auto mt-4 max-w-xl">{t.cta.description}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href={`/${locale}/portfolio`}>
                {t.cta.portfolioCta}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={`/${locale}/invest`}>{t.cta.investCta}</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
