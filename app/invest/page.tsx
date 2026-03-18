import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { InvestForm } from './invest-form';

export const metadata: Metadata = {
  title: 'Invest — Grupo ZV',
  description:
    "Investment opportunities in Grupo ZV: holding-level, vertical-specific, or brand-specific participation in Latin America's leading entertainment ecosystem.",
};

const investmentFormats = [
  {
    title: 'Holding-Level',
    description: 'Full portfolio exposure with long-term value creation',
    highlights: [
      'Diversified across all portfolio companies',
      'Benefit from ecosystem synergies',
      'Long-term strategic alignment',
    ],
  },
  {
    title: 'Vertical-Specific',
    description: 'Focus on a specific category within the portfolio',
    highlights: ['Festivals & experiences', 'Technology & platforms', 'Cultural & creative assets'],
  },
  {
    title: 'Brand-Specific',
    description: 'Targeted investment in individual brands or projects',
    highlights: ['Flagship events', 'Expansion of specific brands', 'Co-ownership structures'],
  },
];

const thesisPoints = [
  'Vertical integration: strategy, technology, execution, and IP under one group',
  'Proven operating companies with real revenue — not speculative startups',
  'Repeatable formats: festivals, conventions, studios, competitive platforms',
  'Real audiences and communities with measurable traction',
  'Scalable across markets without rebuilding from zero',
  '3x year-over-year revenue growth trajectory',
];

export default function InvestPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-16">
        <div className="from-primary/5 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">Invest</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Invest in the Ecosystem
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg md:text-xl">
              Grupo ZV selectively partners with investors who align with our long-term vision —
              building Latin America&apos;s leading entertainment and creative holding company.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="border-border border-t px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading
              label="Investment Thesis"
              title="Why Grupo ZV"
              description="Our strategy is portfolio compounding — shared infrastructure, audiences, and data create a self-reinforcing ecosystem."
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {thesisPoints.map((point, i) => (
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
      <section className="border-border bg-muted/30 border-t px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading label="Opportunities" title="Three Investment Formats" align="center" />
          </AnimatedSection>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {investmentFormats.map((format, index) => (
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
      <section id="form" className="border-border border-t px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <AnimatedSection>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                Get Started
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Request a Conversation
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Whether you&apos;re an investor, strategic partner, or just curious — tell us a bit
                about yourself and our team will follow up within 48 hours.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'No commitment required',
                  'All inquiries reviewed by the leadership team',
                  'Response within 48 hours',
                ].map((point) => (
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
                  Prefer email?{' '}
                  <a
                    href="mailto:invest@grupozv.com"
                    className="text-primary font-medium hover:underline"
                  >
                    invest@grupozv.com
                  </a>
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="border-border bg-card rounded-2xl border p-6 shadow-sm md:p-8">
                <InvestForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-border bg-primary text-primary-foreground border-t px-6 py-24">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-primary-foreground/70 text-lg">
            Grupo ZV is designed for a new category of investor — one that understands that the
            future of entertainment, culture, and community is built on systems, not one-off
            successes.
          </p>
          <div className="mt-8 space-y-2">
            <p className="text-2xl font-semibold md:text-3xl">We don&apos;t chase trends.</p>
            <p className="text-2xl font-bold md:text-3xl">We build ecosystems that last.</p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="mt-8 rounded-full border border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/portfolio">
              View Portfolio
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
}
