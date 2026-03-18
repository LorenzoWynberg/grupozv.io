import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, Shield, Leaf, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'About — ZV Holdings',
  description:
    "Learn about ZV Holdings, the holding company building Latin America's leading entertainment and creative ecosystem.",
};

const advantages = [
  {
    title: 'Esencial Costa Rica',
    description:
      "Officially endorsed brand under Costa Rica's national excellence program, signaling quality and credibility.",
    icon: Award,
  },
  {
    title: 'National Convention Center Partnership',
    description:
      'Strategic venue partnership providing premium infrastructure for large-scale events.',
    icon: Shield,
  },
  {
    title: 'Carbon Neutral Certified',
    description:
      'Certified carbon-neutral operations with LSQA-verified carbon footprint measurement.',
    icon: Leaf,
  },
  {
    title: 'Zero Cancellations',
    description:
      'Perfect track record of event execution — every event announced has been delivered.',
    icon: Shield,
  },
  {
    title: 'Institutional Credibility',
    description:
      'Trusted by multinational sponsors including Tether, Red Bull, Samsung, and Heineken.',
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-16">
        <div className="from-primary/5 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">About</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Who We Are
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg md:text-xl">
              ZV Holdings is a holding company that builds, owns, and operates experience-driven
              platforms powered by technology, data, and community. Our thesis is simple:{' '}
              <span className="text-foreground font-semibold">portfolio compounding</span> — shared
              infrastructure, shared audiences, shared data.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Verticals */}
      <section className="border-border border-t px-6 sm:px-10 lg:px-16 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="Verticals"
              title="Strategy Meets Execution"
              description="Two verticals work in concert: one designs the systems, the other brings them to life."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <div className="border-border bg-card h-full rounded-2xl border p-8 shadow-sm">
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="text-primary text-lg font-bold">BS</span>
                </div>
                <h3 className="text-2xl font-bold">Broccoli Studios</h3>
                <p className="text-primary mt-1 text-sm font-medium">
                  Strategy, Technology & Digital Services
                </p>
                <p className="text-muted-foreground mt-4">
                  The system architect and IP holder. Broccoli Studios designs the systems,
                  platforms, and growth logic for the entire portfolio. It serves as the technical
                  and strategic backbone of ZV Holdings.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    'Digital marketing & brand strategy',
                    'Technology architecture & platform development',
                    'Data analytics & audience insights',
                    'Growth model design',
                    'IP development & licensing',
                  ].map((item) => (
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
                <h3 className="text-2xl font-bold">XR Studio</h3>
                <p className="text-primary mt-1 text-sm font-medium">
                  Event Production & Live Experiences
                </p>
                <p className="text-muted-foreground mt-4">
                  The execution engine. XR Studio transforms strategy into world-class delivery,
                  operationalizing experiences across the portfolio with precision and operational
                  control.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    'Large-scale event production',
                    'Stage design & technical operations',
                    'Artist management & booking',
                    'On-ground delivery & logistics',
                    'Quality assurance & safety',
                  ].map((item) => (
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
      <section className="border-border bg-muted/30 border-t px-6 sm:px-10 lg:px-16 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="Competitive Advantages"
              title="What Sets Us Apart"
              description="Institutional credibility, operational excellence, and environmental responsibility."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, i) => (
              <AnimatedSection key={advantage.title} delay={i * 0.08}>
                <div className="border-border bg-card h-full rounded-2xl border p-6 shadow-sm">
                  <advantage.icon className="text-primary h-6 w-6" />
                  <h3 className="mt-3 text-lg font-semibold">{advantage.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{advantage.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-border border-t px-6 sm:px-10 lg:px-16 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">Mission</p>
              <p className="text-muted-foreground mt-4 text-lg">
                To build and operate experience-driven platforms that generate recurring value
                through technology, data, and community — creating a self-reinforcing ecosystem
                where each company strengthens the others.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">Vision</p>
              <p className="text-muted-foreground mt-4 text-lg">
                To become Latin America&apos;s leading entertainment and creative holding company —
                scaling proven formats across markets while maintaining operational excellence and
                cultural authenticity.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-border bg-muted/30 border-t px-6 sm:px-10 lg:px-16 py-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading label="Certifications" title="Verified & Trusted" align="center" />
          </AnimatedSection>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-12">
            {[
              {
                name: 'Esencial Costa Rica',
                logo: '/images/certifications/esencial-costa-rica.png',
                h: 'h-16',
                w: 'w-16',
              },
              {
                name: 'Carbon Neutral Certified',
                logo: '/images/certifications/carbon-neutral.png',
                h: 'h-12',
                w: 'w-32',
              },
              {
                name: 'LSQA Carbon Footprint Verified',
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
      <section className="border-border bg-primary text-primary-foreground border-t px-6 sm:px-10 lg:px-16 py-24">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            We don&apos;t chase trends. We build ecosystems that last.
          </h2>
          <p className="text-primary-foreground/80 mx-auto mt-4 max-w-xl">
            Explore our portfolio or get in touch to learn more about investment opportunities.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href="/portfolio">
                View Portfolio
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/invest">Invest</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
