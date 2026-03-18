import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Badge } from '@/components/ui/badge';
import { brands, getBrandBySlug } from '@/lib/brands';
import { getDictionary } from '@/lib/get-dictionary';
import { isValidLocale, type Locale } from '@/lib/i18n';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ['en', 'es']) {
    for (const brand of brands) {
      params.push({ locale, slug: brand.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return { title: 'Not Found' };
  const brand = getBrandBySlug(slug);
  if (!brand) return { title: 'Not Found' };
  const dict = await getDictionary(locale);
  const bt = dict.brands[slug as keyof typeof dict.brands];
  return {
    title: `${brand.name} — ZV Holdings Portfolio`,
    description: bt?.description || brand.description,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const dict = await getDictionary(locale as Locale);
  const t = dict.brandPage;
  const bt = dict.brands[slug as keyof typeof dict.brands];

  const currentIndex = brands.findIndex((b) => b.slug === slug);
  const prevBrand = currentIndex > 0 ? brands[currentIndex - 1] : null;
  const nextBrand = currentIndex < brands.length - 1 ? brands[currentIndex + 1] : null;

  const translatedHighlights = bt?.highlights || brand.highlights;
  const translatedStats = bt?.stats || brand.stats;
  const translatedDetails = bt?.details || brand.details;
  const translatedDescription = bt?.description || brand.description;
  const translatedTagline = bt?.tagline || brand.tagline;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[400px] overflow-hidden px-6 pt-20 pb-16 sm:px-10 lg:px-16">
        {brand.photo ? (
          <>
            <Image
              src={brand.photo}
              alt={brand.name}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </>
        ) : (
          <div className="from-primary/10 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        )}
        <div className="relative mx-auto max-w-6xl">
          <AnimatedSection>
            <Link
              href={`/${locale}/portfolio`}
              className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-white/70 transition-colors hover:text-white"
              style={brand.photo ? undefined : { color: 'var(--muted-foreground)' }}
            >
              <ArrowLeft className="h-4 w-4" />
              {t.backToPortfolio}
            </Link>
            <div className="flex items-start gap-4">
              {brand.logo && (
                <div className="relative h-16 w-48 shrink-0 md:h-20 md:w-56">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className={`object-contain object-left ${brand.photo ? 'invert' : ''}`}
                  />
                </div>
              )}
              {!brand.logo && (
                <h1
                  className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
                  style={brand.photo ? { color: 'white' } : undefined}
                >
                  {brand.name}
                </h1>
              )}
            </div>
            <p
              className="mt-4 max-w-2xl text-lg md:text-xl"
              style={
                brand.photo
                  ? { color: 'rgba(255,255,255,0.8)' }
                  : { color: 'var(--muted-foreground)' }
              }
            >
              {translatedTagline}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Badge
                variant="outline"
                className={brand.photo ? 'border-white/30 text-white/70' : ''}
              >
                {brand.parent}
              </Badge>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="border-border border-t px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {translatedStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08}>
                <div className="border-border bg-card rounded-2xl border p-5 text-center shadow-sm">
                  <p className="text-primary text-2xl font-bold">{stat.value}</p>
                  <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-border bg-muted/30 border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-primary text-sm font-semibold tracking-wider uppercase">
              {t.about}
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">{translatedDescription}</p>
          </AnimatedSection>
          <div className="mt-10 space-y-6">
            {translatedDetails.map((paragraph, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="border-border border-t px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-primary text-sm font-semibold tracking-wider uppercase">
              {t.keyHighlights}
            </h2>
          </AnimatedSection>
          <div className="mt-8 space-y-3">
            {translatedHighlights.map((highlight, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="border-border bg-card flex items-start gap-3 rounded-xl border p-4 shadow-sm">
                  <span className="bg-primary/10 text-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm">{highlight}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {brand.gallery.length > 0 && (
        <section className="border-border bg-muted/30 border-t px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-primary mb-8 text-sm font-semibold tracking-wider uppercase">
                {t.gallery}
              </h2>
            </AnimatedSection>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {brand.gallery.map((img, i) => (
                <AnimatedSection key={img} delay={i * 0.06}>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                    <Image
                      src={img}
                      alt={`${brand.name} gallery ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="border-border border-t px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          {prevBrand ? (
            <Link
              href={`/${locale}/portfolio/${prevBrand.slug}`}
              className="group text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {prevBrand.name}
            </Link>
          ) : (
            <div />
          )}
          {nextBrand ? (
            <Link
              href={`/${locale}/portfolio/${nextBrand.slug}`}
              className="group text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
            >
              {nextBrand.name}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-border bg-primary text-primary-foreground border-t px-6 py-24 sm:px-10 lg:px-16">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            {t.interestedIn} {brand.name}?
          </h2>
          <p className="text-primary-foreground/70 mx-auto mt-4 max-w-xl">{t.investDescription}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href={`/${locale}/invest`}>
                {t.investCta}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={`/${locale}/portfolio`}>{t.allBrands}</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
