import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, Users, TrendingUp, Zap, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { MetricCard } from '@/components/ui/metric-card';
import { SponsorMarquee } from '@/components/ui/sponsor-marquee';

const metrics = [
  { value: '10+', label: 'Years Operating Since 2013' },
  { value: '$20M+', label: 'Cumulative Revenue Generated' },
  { value: '100K+', label: 'Tickets Sold Across Live Experiences' },
  { value: '250+', label: 'External Customers Served' },
  { value: '400+', label: 'International Talents Hosted' },
  { value: '10+', label: 'Vertically Connected Businesses' },
];

const whyInvest = [
  {
    icon: Zap,
    title: 'Vertical Integration',
    description:
      'Strategy, technology, execution, and IP under one group. No dependency on third-party infrastructure.',
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    description:
      'Operating companies with real revenue — not speculative startups. Zero event cancellations in company history.',
  },
  {
    icon: Target,
    title: 'Repeatable Formats',
    description:
      'Festivals, conventions, studios, competitive platforms — formats that scale across geographies.',
  },
  {
    icon: Users,
    title: 'Real Audiences',
    description:
      'Communities with measurable traction and recurring engagement, not theoretical addressable markets.',
  },
  {
    icon: Globe,
    title: 'Multi-Country Expansion',
    description:
      'Electric Animals expanding to Madrid, Amsterdam, El Salvador, Colombia, and Luxembourg in 2026.',
  },
  {
    icon: TrendingUp,
    title: 'Capital Efficient',
    description:
      '3x YoY revenue growth with shared infrastructure keeping marginal costs low across brands.',
  },
];

const upcomingEvents = [
  {
    name: 'Electric Animals Fest',
    date: 'Apr 11',
    location: 'National Convention Center',
    blurred: false,
  },
  { name: 'Miguel Bos\u00e9', date: 'Apr 25', location: 'Parque Viva', blurred: false },
  {
    name: 'Jon Batiste & the Costa Philharmonic Orchestra',
    date: 'Sep 3',
    location: 'Parque Viva',
    blurred: true,
  },
  {
    name: 'Blockchain Jungle',
    date: 'Nov 13-14',
    location: 'National Convention Center',
    blurred: false,
  },
  {
    name: 'Electric Animals NYE',
    date: 'Dec 31',
    location: 'National Convention Center',
    blurred: false,
  },
  {
    name: 'EA Europe Tour',
    date: '2026',
    location: 'Madrid · Luxembourg · Amsterdam',
    blurred: false,
  },
];

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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a] px-6 py-24 md:py-32 lg:py-40">
        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Gradient accents */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-indigo-500/8 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            {/* Left — Copy */}
            <AnimatedSection>
              <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
                Holding Company &middot; Costa Rica
              </p>
              <h1 className="mt-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Building Latin America&apos;s Leading Entertainment Ecosystem
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
                ZV Holdings is a holding company that designs, builds, and operates vertically
                integrated entertainment and creative brands — from strategy and technology to live
                execution.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/invest">
                    Invest in ZV Holdings
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="rounded-full border border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Right — Key stats */}
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '6', label: 'Portfolio Brands' },
                  { value: '5+', label: 'Countries in 2026' },
                  { value: '75K', label: 'Projected Attendees' },
                  { value: '3x', label: 'YoY Revenue Growth' },
                  { value: '400+', label: 'International Artists' },
                  { value: '0', label: 'Event Cancellations' },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm ${i === 0 ? 'col-span-2 sm:col-span-1' : ''}`}
                  >
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="border-border border-t px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="At a Glance"
              title="The Numbers That Matter"
              align="center"
              description="Key metrics that demonstrate the scale, growth, and operational strength of the ZV Holdings ecosystem."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric, i) => (
              <AnimatedSection key={metric.label} delay={i * 0.06}>
                <MetricCard value={metric.value} label={metric.label} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Integrated infrastructure across event production, media, marketing, technology, hospitality and monetization',
                'Diversified revenue model combining owned IP, service revenue, sponsorship, ticketing and strategic partnerships',
                'Platform built for scale through cross-selling, shared audiences and centralized execution',
              ].map((point) => (
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
      <section className="border-border bg-muted/30 border-t px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                Investment Thesis
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Portfolio Compounding, Not Diversification
              </h2>
              <p className="text-muted-foreground mt-6 text-lg">
                Our strategy is not diversification by volume. Each company in the portfolio
                compounds the value of the others through shared infrastructure, shared audiences,
                and shared data.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Shared infrastructure reduces marginal cost per new brand',
                  'Cross-audience monetization multiplies customer lifetime value',
                  'Centralized data architecture powers smarter decisions across all brands',
                  'Clear separation between strategy (Broccoli Studios) and execution (XR Studio)',
                ].map((point, i) => (
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
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="border-border border-t px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="Corporate Structure"
              title="Two Verticals, One Ecosystem"
              description="ZV Holdings operates through two complementary verticals that share infrastructure, audiences, and data."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <div className="border-border bg-card h-full rounded-2xl border p-8 shadow-sm">
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="text-primary text-lg font-bold">BS</span>
                </div>
                <h3 className="text-xl font-bold">Broccoli Studios</h3>
                <p className="text-primary mt-1 text-sm font-medium">Strategy & Technology</p>
                <p className="text-muted-foreground mt-3">
                  The system architect and IP holder. Designs the platforms, growth logic, data
                  architecture, and technology infrastructure for the entire portfolio.
                </p>
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
                <h3 className="text-xl font-bold">XR Studio</h3>
                <p className="text-primary mt-1 text-sm font-medium">
                  Event Production & Execution
                </p>
                <p className="text-muted-foreground mt-3">
                  The execution engine. Transforms strategy into world-class delivery with
                  large-scale event production, artist management, and operational control.
                </p>
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
      <section className="border-border border-t px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="Portfolio"
              title="6 Brands, One Ecosystem"
              description="Each brand operates independently while benefiting from shared infrastructure, audiences, and data across the portfolio."
            />
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: 'Electric Animals',
                slug: 'electric-animals',
                logo: '/images/logos/electric-animals-cropped.png',
                tagline: 'Flagship festival platform',
                logoH: 'h-20',
                logoW: 'w-16',
              },
              {
                name: 'Blockchain Jungle',
                slug: 'blockchain-jungle',
                logo: '/images/logos/blockchain-jungle-cropped.png',
                tagline: 'Blockchain conference',
                logoH: 'h-20',
                logoW: 'w-16',
              },
              {
                name: 'Pura Tinta Fest',
                slug: 'pura-tinta-fest',
                logo: '/images/logos/pura-tinta-cropped.png',
                tagline: 'Tattoo convention',
                logoH: 'h-20',
                logoW: 'w-20',
              },
              {
                name: 'Magflow',
                slug: 'magflow',
                logo: '/images/logos/magflow-cropped.png',
                tagline: 'Music, studio & live experiences',
                logoH: 'h-8',
                logoW: 'w-40',
              },
              {
                name: 'Sweetspot',
                slug: 'sweetspot',
                logo: '/images/logos/sweetspot-cropped.png',
                tagline: 'Esports & gaming',
                logoH: 'h-20',
                logoW: 'w-20',
              },
              {
                name: 'Bandida Tattoo',
                slug: 'bandida-tattoo-studio',
                logo: null,
                tagline: 'Premium tattoo studio',
                logoH: '',
                logoW: '',
              },
            ].map((brand, i) => (
              <AnimatedSection key={brand.slug} delay={i * 0.06}>
                <Link
                  href={`/portfolio/${brand.slug}`}
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
                    {brand.tagline}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Invest */}
      <section className="border-border border-t px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="Why Invest"
              title="The Case for ZV Holdings"
              align="center"
              description="Six reasons investors are looking at the Latin American experience economy — and why ZV Holdings is the best vehicle."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyInvest.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="border-border bg-card h-full rounded-2xl border p-6 shadow-sm">
                  <item.icon className="text-primary h-6 w-6" />
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="border-border border-t px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr]">
            <AnimatedSection>
              <SectionHeading
                label="Coming Up"
                title="2026 Calendar Highlights"
                description="15+ confirmed events across Costa Rica and 5 international markets. Here are some highlights."
              />
              <Button asChild variant="outline" className="mt-6 rounded-full">
                <Link href="/calendar">
                  View Full Calendar
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.name}
                    className="border-border bg-card relative flex items-center justify-between overflow-hidden rounded-xl border p-4 shadow-sm"
                  >
                    <div className={event.blurred ? 'blur-[6px] select-none' : ''}>
                      <p className="font-semibold">{event.name}</p>
                      <p className="text-muted-foreground mt-0.5 text-sm">{event.location}</p>
                    </div>
                    {event.blurred ? (
                      <span className="text-primary shrink-0 text-xs font-medium">
                        To be announced
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
      <section className="border-border bg-muted/30 border-t px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="Notable Partners"
              title="Trusted By Leading Brands"
              align="center"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-10">
            <SponsorMarquee sponsors={sponsors} />
          </AnimatedSection>
        </div>
      </section>

      {/* Event Photography */}
      <section className="border-border border-t px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="Our Events"
              title="Experiences at Scale"
              align="center"
              description="From 8,000 attendees in 2022 to 75,000 projected in 2026 — real events, real communities, real momentum."
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
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-border bg-primary text-primary-foreground border-t px-6 py-24">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wider uppercase opacity-70">
            Join the Ecosystem
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            We don&apos;t chase trends. We build ecosystems that last.
          </h2>
          <p className="text-primary-foreground/70 mx-auto mt-6 max-w-xl text-lg">
            ZV Holdings is designed for investors who understand that the future of entertainment and
            culture is built on systems, not one-off successes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href="/invest">
                Apply as an Investor
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
