import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Badge } from '@/components/ui/badge';
import { brands } from '@/lib/brands';

export const metadata: Metadata = {
  title: 'Portfolio — ZV Holdings',
  description:
    "Explore ZV Holdings's portfolio of 7 brands spanning festivals, conferences, esports, recording studios, and cultural platforms.",
};

export default function PortfolioPage() {
  const xrBrands = brands.filter((b) => b.parent === 'XR Studio');
  const bsBrands = brands.filter((b) => b.parent === 'Broccoli Studios');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-16">
        <div className="from-primary/5 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">Portfolio</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              6 Brands, One Ecosystem
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg md:text-xl">
              Each brand operates independently at the brand level while benefiting from centralized
              ecosystem architecture — shared infrastructure, audiences, and data.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* XR Studio Brands */}
      <section className="border-border border-t px-6 sm:px-10 lg:px-16 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="XR Studio"
              title="Event Production & Live Experiences"
              description="Five brands delivering world-class events across festivals, conferences, esports, and live music."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {xrBrands.map((brand, i) => (
              <AnimatedSection key={brand.slug} delay={i * 0.08}>
                <Link
                  href={`/portfolio/${brand.slug}`}
                  className="group border-border bg-card hover:border-primary/30 flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-md"
                >
                  {brand.photo && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={brand.photo}
                        alt={brand.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-start justify-between">
                      {brand.logo ? (
                        <div className="relative h-12 w-40">
                          <Image
                            src={brand.logo}
                            alt={brand.name}
                            fill
                            className="object-contain object-left"
                          />
                        </div>
                      ) : (
                        <h3 className="text-xl font-bold">{brand.name}</h3>
                      )}
                      <Badge variant="secondary" className="shrink-0">
                        {brand.parent}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">{brand.tagline}</p>
                    <div className="text-primary mt-auto flex items-center gap-2 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                      View case study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Broccoli Studios Brands */}
      <section className="border-border bg-muted/30 border-t px-6 sm:px-10 lg:px-16 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="Broccoli Studios"
              title="Strategy, Technology & Creative Infrastructure"
              description="Physical brands and creative infrastructure that anchor the ecosystem in real-world operations and cultural identity."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {bsBrands.map((brand, i) => (
              <AnimatedSection key={brand.slug} delay={i * 0.08}>
                <Link
                  href={`/portfolio/${brand.slug}`}
                  className="group border-border bg-card hover:border-primary/30 flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-md"
                >
                  {brand.photo && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={brand.photo}
                        alt={brand.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-start justify-between">
                      {brand.logo ? (
                        <div className="relative h-12 w-40">
                          <Image
                            src={brand.logo}
                            alt={brand.name}
                            fill
                            className="object-contain object-left"
                          />
                        </div>
                      ) : (
                        <h3 className="text-xl font-bold">{brand.name}</h3>
                      )}
                      <Badge variant="secondary" className="shrink-0">
                        {brand.parent}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">{brand.tagline}</p>
                    <ul className="mt-auto space-y-2">
                      {brand.highlights.slice(0, 3).map((item, j) => (
                        <li
                          key={j}
                          className="text-muted-foreground flex items-start gap-2 text-sm"
                        >
                          <span className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="text-primary mt-4 flex items-center gap-2 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                      View case study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Logic */}
      <section className="border-border border-t px-6 sm:px-10 lg:px-16 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="How It Compounds"
              title="Portfolio Logic"
              align="center"
              description="This creates a feedback loop where each company strengthens the others."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Broccoli Studios',
                desc: 'Designs systems, platforms & growth logic',
              },
              { step: '02', title: 'XR Studio', desc: 'Executes and operationalizes experiences' },
              {
                step: '03',
                title: 'Flagship Brands',
                desc: 'Generate recurring revenue, data & community',
              },
              { step: '04', title: 'Physical Brands', desc: 'Validate real-world scalability' },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="border-border bg-card rounded-2xl border p-6 text-center shadow-sm">
                  <span className="text-primary text-sm font-medium">{item.step}</span>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-border bg-primary text-primary-foreground border-t px-6 sm:px-10 lg:px-16 py-24">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Interested in the portfolio?</h2>
          <p className="text-primary-foreground/80 mx-auto mt-4 max-w-xl">
            Explore investment opportunities across the holding, specific verticals, or individual
            brands.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full">
            <Link href="/invest">
              Apply as an Investor
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
}
