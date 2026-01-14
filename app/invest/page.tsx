import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invest — Grupo ZV',
  description:
    'Investment opportunities in Grupo ZV: holding-level, vertical-specific, or brand-specific participation.',
};

const investmentFormats = [
  {
    title: 'Holding-Level Investment',
    description: 'Exposure to the full portfolio with long-term value creation',
    highlights: [
      'Diversified exposure across all portfolio companies',
      'Benefit from ecosystem synergies',
      'Long-term strategic alignment',
    ],
  },
  {
    title: 'Vertical-Specific Investment',
    description: 'Focus on specific categories within the portfolio',
    highlights: ['Festivals & experiences', 'Technology & platforms', 'Cultural & creative assets'],
  },
  {
    title: 'Project / Brand-Specific Investment',
    description: 'Targeted investment in individual brands or projects',
    highlights: ['Flagship events', 'Expansion of specific brands', 'Co-ownership structures'],
  },
];

const idealInvestor = [
  'Think long-term',
  'Understand platform value',
  'Value operational control',
  'Want exposure to culture, tech, and experiences',
  'Are open to strategic involvement, not passive speculation',
];

const riskManagement = [
  'No single company carries the group',
  'Mix of service, ticketing, sponsorship, and platform revenue',
  'Execution risk separated from strategy risk',
  'Strong control over production and delivery',
];

const applicationIncludes = [
  'Investor profile & background',
  'Preferred investment range',
  'Strategic interests',
  'Time horizon',
];

export default function InvestPage() {
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

      {/* Hero */}
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Invest in Grupo ZV
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            Grupo ZV selectively partners with investors who align with our long-term vision and
            operating philosophy.
          </p>
        </div>
      </section>

      {/* Investment Formats */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            Investment Opportunities
          </h2>
          <p className="mt-4 text-2xl font-semibold md:text-3xl">Three Formats</p>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {investmentFormats.map((format, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  0{index + 1}
                </span>
                <h3 className="mt-2 text-xl font-bold">{format.title}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{format.description}</p>
                <ul className="mt-6 space-y-2">
                  {format.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Investor Profile */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                Ideal Investor Profile
              </h2>
              <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
                We are aligned with investors who:
              </p>
              <ul className="mt-8 space-y-4">
                {idealInvestor.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-medium dark:bg-zinc-800">
                      {index + 1}
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                Risk Management
              </h2>
              <ul className="mt-8 space-y-4">
                {riskManagement.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="border-t border-zinc-200 bg-zinc-900 px-6 py-24 text-white dark:bg-zinc-50 dark:text-zinc-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Apply as an Investor</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400 dark:text-zinc-600">
            If you are interested in holding-level participation, strategic co-investment, or
            brand/vertical-specific opportunities, we invite you to apply.
          </p>

          <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-800/50 p-8 text-left dark:border-zinc-200 dark:bg-white/50">
            <h3 className="text-lg font-semibold">Application Includes</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {applicationIncludes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-zinc-300 dark:text-zinc-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="mailto:invest@grupozv.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Apply as an Investor
          </a>

          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
            All applications are reviewed directly by the Grupo ZV leadership team.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Grupo ZV is designed for a new category of investor—one that understands that the future
            of entertainment, culture, and community is built on systems, not one-off successes.
          </p>
          <div className="mt-12 space-y-2">
            <p className="text-2xl font-semibold md:text-3xl">We don&apos;t chase trends.</p>
            <p className="text-2xl font-bold md:text-3xl">We build ecosystems that last.</p>
          </div>
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
