import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, Globe, Users, TrendingUp, Zap, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { MetricCard } from '@/components/ui/metric-card';
import { SponsorMarquee } from '@/components/ui/sponsor-marquee';
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
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    alternates: getAlternates(locale, ''),
  };
}

const sponsors = [
  { name: 'Tether', logo: '/images/sponsors/tether.svg' },
  { name: 'Red Bull', logo: '/images/sponsors/red-bull.svg' },
  { name: 'Coca Cola', logo: '/images/sponsors/coca-cola.svg' },
  { name: 'Samsung', logo: '/images/sponsors/samsung.svg' },
  { name: 'Heineken', logo: '/images/sponsors/heineken.svg' },
  { name: 'FIFCO', logo: '/images/sponsors/fifco.png' },
  { name: 'Davivienda', logo: '/images/sponsors/davivienda.svg' },
  { name: 'Kolbi', logo: '/images/sponsors/kolbi.svg' },
  { name: 'Avalanche', logo: '/images/sponsors/avalanche.svg' },
  { name: 'Bitfinex', logo: '/images/sponsors/bitfinex.svg' },
];

const whyInvestIcons = [Zap, Shield, Target, Users, Globe, TrendingUp];

const portfolioBrands = [
  {
    slug: 'electric-animals',
    name: 'Electric Animals',
    logo: '/images/logos/electric-animals-cropped.png',
    logoH: 'h-20',
    logoW: 'w-16',
  },
  {
    slug: 'blockchain-jungle',
    name: 'Blockchain Jungle',
    logo: '/images/logos/blockchain-jungle-cropped.png',
    logoH: 'h-20',
    logoW: 'w-16',
  },
  {
    slug: 'pura-tinta-fest',
    name: 'Pura Tinta Fest',
    logo: '/images/logos/pura-tinta-cropped.png',
    logoH: 'h-20',
    logoW: 'w-20',
  },
  {
    slug: 'magflow',
    name: 'Magflow',
    logo: '/images/logos/magflow-cropped.png',
    logoH: 'h-8',
    logoW: 'w-40',
  },
  {
    slug: 'sweetspot',
    name: 'Sweetspot',
    logo: '/images/logos/sweetspot-cropped.png',
    logoH: 'h-20',
    logoW: 'w-20',
  },
  {
    slug: 'bandida-tattoo-studio',
    name: 'Bandida Tattoo',
    logo: null,
    logoH: '',
    logoW: '',
  },
];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const t = dict.home;

  const blurredEvents = [false, false, true, false, false, false];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-indigo-500/8 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <AnimatedSection>
              <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
                {t.hero.badge}
              </p>
              <h1 className="mt-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                {t.hero.title}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
                {t.hero.description}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link href={`/${locale}/invest`}>
                    {t.hero.investCta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="rounded-full border border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href={`/${locale}/portfolio`}>{t.hero.portfolioCta}</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/wua00771-enhanced-nr.webp"
                    alt="Electric Animals festival"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src="/images/bcjungle-28.webp"
                      alt="Blockchain Jungle conference"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src="/images/jacobcollier_21-09-25-01550.webp"
                      alt="Live concert experience"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label={t.glance.label}
              title={t.glance.title}
              align="center"
              description={t.glance.description}
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.glance.metrics.map((metric, i) => (
              <AnimatedSection key={metric.label} delay={i * 0.06}>
                <MetricCard value={metric.value} label={metric.label} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.glance.points.map((point) => (
                <div
                  key={point}
                  className="border-border bg-card flex items-start gap-3 rounded-xl border p-4"
                >
                  <span className="bg-primary mt-1 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <p className="text-muted-foreground text-sm">{point}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="border-border bg-muted/30 border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                {t.thesis.label}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                {t.thesis.title}
              </h2>
              <p className="text-muted-foreground mt-6 text-lg">{t.thesis.description}</p>
              <div className="mt-8 space-y-4">
                {t.thesis.points.map((point, i) => (
                  <div
                    key={i}
                    className="border-border bg-card flex items-start gap-3 rounded-xl border p-4"
                  >
                    <span className="bg-primary/10 text-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/bcjungle-19.webp"
                  alt="Blockchain Jungle conference"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label={t.structure.label}
              title={t.structure.title}
              description={t.structure.description}
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <div className="border-border bg-card h-full rounded-2xl border p-8 shadow-sm">
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="text-primary text-lg font-bold">BS</span>
                </div>
                <h3 className="text-xl font-bold">{t.structure.bs.name}</h3>
                <p className="text-primary mt-1 text-sm font-medium">{t.structure.bs.subtitle}</p>
                <p className="text-muted-foreground mt-3">{t.structure.bs.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium">
                    Bandida Tattoo
                  </span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="border-border bg-card h-full rounded-2xl border p-8 shadow-sm">
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="text-primary text-lg font-bold">XR</span>
                </div>
                <h3 className="text-xl font-bold">{t.structure.xr.name}</h3>
                <p className="text-primary mt-1 text-sm font-medium">{t.structure.xr.subtitle}</p>
                <p className="text-muted-foreground mt-3">{t.structure.xr.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    'Electric Animals',
                    'Blockchain Jungle',
                    'Pura Tinta',
                    'Magflow',
                    'Sweetspot',
                  ].map((brand) => (
                    <span
                      key={brand}
                      className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portfolio — logo grid */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label={t.portfolio.label}
              title={t.portfolio.title}
              description={t.portfolio.description}
            />
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {portfolioBrands.map((brand, i) => {
              const brandT = t.portfolio.brands[brand.slug as keyof typeof t.portfolio.brands];
              return (
                <AnimatedSection key={brand.slug} delay={i * 0.06}>
                  <Link
                    href={`/${locale}/portfolio/${brand.slug}`}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="flex h-24 w-full items-center justify-center">
                      {brand.logo ? (
                        <div className={`relative ${brand.logoH} ${brand.logoW}`}>
                          <Image
                            src={brand.logo}
                            alt={brand.name}
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      ) : (
                        <p className="group-hover:text-primary text-xl font-bold transition-colors">
                          {brand.name}
                        </p>
                      )}
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground mt-2 text-sm transition-colors">
                      {brandT?.tagline}
                    </p>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link href={`/${locale}/portfolio`}>
                {t.portfolio.viewFull}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Invest */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label={t.whyInvest.label}
              title={t.whyInvest.title}
              align="center"
              description={t.whyInvest.description}
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.whyInvest.items.map((item, i) => {
              const Icon = whyInvestIcons[i];
              return (
                <AnimatedSection key={item.title} delay={i * 0.08}>
                  <div className="border-border bg-card h-full rounded-2xl border p-6 shadow-sm">
                    <Icon className="text-primary h-6 w-6" />
                    <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr]">
            <AnimatedSection>
              <SectionHeading
                label={t.events.label}
                title={t.events.title}
                description={t.events.description}
              />
              <Button asChild variant="outline" className="mt-6 rounded-full">
                <Link href={`/${locale}/calendar`}>
                  {t.events.viewFull}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="space-y-3">
                {t.events.list.map((event, idx) => (
                  <div
                    key={event.name}
                    className="border-border bg-card relative flex items-center justify-between overflow-hidden rounded-xl border p-4 shadow-sm"
                  >
                    <div className={blurredEvents[idx] ? 'blur-[6px] select-none' : ''}>
                      <p className="font-semibold">{event.name}</p>
                      <p className="text-muted-foreground mt-0.5 text-sm">{event.location}</p>
                    </div>
                    {blurredEvents[idx] ? (
                      <span className="text-primary shrink-0 text-xs font-medium">
                        {t.events.tba}
                      </span>
                    ) : (
                      <div className="bg-primary/10 text-primary shrink-0 rounded-full px-3 py-1 text-sm font-medium">
                        {event.date}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="border-border bg-muted/30 border-t px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading label={t.sponsors.label} title={t.sponsors.title} align="center" />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-10">
            <SponsorMarquee sponsors={sponsors} />
          </AnimatedSection>
        </div>
      </section>

      {/* Event Photography */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label={t.photos.label}
              title={t.photos.title}
              align="center"
              description={t.photos.description}
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: '/images/wua00771-enhanced-nr.webp', alt: 'Electric Animals festival' },
              { src: '/images/jacobcollier_21-09-25-01550.webp', alt: 'Jacob Collier live' },
              { src: '/images/bcjungle-28.webp', alt: 'Blockchain Jungle conference' },
              { src: '/images/img_8566-mejorado-nr-2.webp', alt: 'Event production' },
              { src: '/images/img_3697.webp', alt: 'Live experience' },
              { src: '/images/ss_img_0128.webp', alt: 'Sweetspot esports' },
            ].map((photo, i) => (
              <AnimatedSection key={photo.src} delay={i * 0.06}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-border bg-primary text-primary-foreground border-t px-6 py-24 sm:px-10 lg:px-16">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wider uppercase opacity-70">{t.cta.badge}</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">{t.cta.title}</h2>
          <p className="text-primary-foreground/70 mx-auto mt-6 max-w-xl text-lg">
            {t.cta.description}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href={`/${locale}/invest`}>
                {t.cta.investCta}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={`/${locale}/about`}>{t.cta.learnMore}</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
