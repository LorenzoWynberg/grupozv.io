import Image from 'next/image';
import Link from 'next/link';

const portfolioHighlights = [
  { name: 'Broccoli Studios', category: 'Tech & Strategy', logo: null },
  { name: 'XR Studio', category: 'Production', logo: null },
  {
    name: 'Electric Animals',
    category: 'Festival Platform',
    logo: '/images/electric-animals.png',
  },
  {
    name: 'Pura Tinta Fest',
    category: 'Cultural Convention',
    logo: '/images/pura-tinta.png',
  },
  {
    name: 'Blockchain Jungle',
    category: 'Knowledge Platform',
    logo: '/images/blockchain-jungle.png',
  },
  {
    name: 'Sweetspot',
    category: 'Esports Platform',
    logo: '/images/sweetspot.png',
  },
  { name: 'Magflow', category: 'Media & Culture', logo: '/images/magflow.png' },
];

const whyInvest = [
  {
    title: 'Vertical Integration',
    description: 'Strategy, technology, execution, and IP under one group',
  },
  {
    title: 'Proven Companies',
    description: 'Operating companies, not speculative startups',
  },
  {
    title: 'Repeatable Formats',
    description: 'Festivals, conventions, studios, competitive platforms',
  },
  {
    title: 'Real Audiences',
    description: 'Communities with real traction, not theoretical',
  },
  {
    title: 'Scalable Model',
    description: 'Expand across markets without rebuilding from zero',
  },
];

const pillars = [
  {
    number: '01',
    title: 'Scale Existing Flagships',
    items: ['Geographic expansion', 'Format replication', 'Strategic partnerships'],
  },
  {
    number: '02',
    title: 'Increase Platform Leverage',
    items: [
      'Shared technology across brands',
      'Cross-audience monetization',
      'Data-driven decision making',
    ],
  },
  {
    number: '03',
    title: 'Selective New Ventures',
    items: [
      'Only where ecosystem gives unfair advantage',
      'Experience-driven, community-based models',
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Grupo ZV
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/portfolio"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              About
            </Link>
            <Link
              href="/invest"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Invest
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            Investor Overview
          </p>
          <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight md:text-6xl lg:text-7xl">
            Grupo ZV
          </h1>
          <p className="mt-4 text-xl text-zinc-500 md:text-2xl dark:text-zinc-400">
            Technology · Experiences · Cultural Platforms
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Grupo ZV builds, owns, and operates experience-driven platforms powered by technology,
            data, and community.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/invest"
              className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Apply as an Investor
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-zinc-300 px-8 py-3 text-sm font-medium transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            Investment Thesis
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-400">
            Our strategy is not diversification by volume, but{' '}
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">
              portfolio compounding
            </span>
            :
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Shared infrastructure',
              'Shared audiences',
              'Shared data',
              'Clear separation between strategy and execution',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <span className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-50" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-400">
            Each company operates independently at brand level, while benefiting from a centralized
            ecosystem architecture.
          </p>
        </div>
      </section>

      {/* Why Invest */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            Why Invest in Grupo ZV
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyInvest.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xl font-semibold">
            Grupo ZV is structured to scale brands, not just events.
          </p>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="border-t border-zinc-200 bg-zinc-900 px-6 py-24 text-white dark:bg-zinc-50 dark:text-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
            Portfolio Companies
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {portfolioHighlights.map((company) => (
              <Link
                key={company.name}
                href={`/portfolio#${company.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-800/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-800 dark:border-zinc-200 dark:bg-white/50 dark:hover:border-zinc-300 dark:hover:bg-white"
              >
                {company.logo ? (
                  <div className="relative h-12 w-full">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain invert dark:invert-0"
                    />
                  </div>
                ) : (
                  <p className="text-lg font-semibold">{company.name}</p>
                )}
                <span className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
                  {company.category}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-block rounded-full border border-zinc-700 px-6 py-2 text-sm font-medium transition-colors hover:bg-zinc-800 dark:border-zinc-300 dark:hover:bg-zinc-100"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            Growth Strategy
          </h2>
          <p className="mt-4 text-2xl font-semibold md:text-3xl">3 Pillars</p>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.number}>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {pillar.number}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{pillar.title}</h3>
                <ul className="mt-4 space-y-2">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Grupo ZV is designed for a new category of investor—one that understands that the future
            of entertainment, culture, and community is built on systems, not one-off successes.
          </p>
          <div className="mt-12 space-y-2">
            <p className="text-2xl font-semibold md:text-3xl">We don&apos;t chase trends.</p>
            <p className="text-2xl font-bold md:text-3xl">We build ecosystems that last.</p>
          </div>
          <Link
            href="/invest"
            className="mt-10 inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Apply as an Investor
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-12 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Grupo ZV. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/portfolio"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              About
            </Link>
            <Link
              href="/invest"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Invest
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
