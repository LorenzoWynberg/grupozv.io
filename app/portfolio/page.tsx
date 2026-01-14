import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — Grupo ZV',
  description:
    'Portfolio of experience-driven platforms: technology, festivals, conventions, esports, media, and creative infrastructure.',
};

const portfolioCompanies = [
  {
    id: 'broccoli-studios',
    name: 'Broccoli Studios',
    logo: null,
    category: 'Tech & Strategy',
    maturity: 'Mature',
    revenueType: 'Retainers / Platforms',
    scalability: 'High',
    strategicRole: 'System architect & IP',
    description:
      'Broccoli Studios designs the systems, platforms, and growth logic for the entire portfolio. It serves as the technical and strategic backbone of Grupo ZV.',
  },
  {
    id: 'xr-studio',
    name: 'XR Studio',
    logo: null,
    category: 'Production',
    maturity: 'Mature',
    revenueType: 'Production fees',
    scalability: 'Medium–High',
    strategicRole: 'Execution engine',
    description:
      'XR Studio executes and operationalizes experiences across the portfolio. It transforms strategy into delivery with precision and operational control.',
  },
  {
    id: 'electric-animals',
    name: 'Electric Animals',
    logo: '/images/electric-animals.png',
    category: 'Festival Platform',
    maturity: 'Growth',
    revenueType: 'Ticketing / Sponsors',
    scalability: 'High',
    strategicRole: 'Flagship ecosystem',
    description:
      'Electric Animals operates as a large-scale experience ecosystem, generating recurring revenue, proprietary data, and strong community engagement.',
  },
  {
    id: 'pura-tinta-fest',
    name: 'Pura Tinta Fest',
    logo: '/images/pura-tinta.png',
    category: 'Cultural Convention',
    maturity: 'Mature',
    revenueType: 'Ticketing / Booths',
    scalability: 'Medium–High',
    strategicRole: 'Repeatable convention model',
    description:
      'Pura Tinta Fest is a cultural convention supporting large-scale attendance, exhibitors, and artists while preserving cultural identity.',
  },
  {
    id: 'blockchain-jungle',
    name: 'Blockchain Jungle',
    logo: '/images/blockchain-jungle.png',
    category: 'Knowledge Platform',
    maturity: 'Growth',
    revenueType: 'Tickets / Sponsors',
    scalability: 'High',
    strategicRole: 'B2B & content leverage',
    description:
      'Blockchain Jungle functions as a knowledge and networking platform, connecting speakers, sponsors, attendees, content, and data.',
  },
  {
    id: 'sweetspot',
    name: 'Sweetspot',
    logo: '/images/sweetspot.png',
    category: 'Esports Platform',
    maturity: 'Growth',
    revenueType: 'Sponsorship / Events',
    scalability: 'High',
    strategicRole: 'Competitive ecosystem',
    description:
      'Sweetspot provides structured systems for competitive integrity, recurring tournaments, and audience growth in the esports space.',
  },
  {
    id: 'magflow',
    name: 'Magflow',
    logo: '/images/magflow.png',
    category: 'Media & Culture',
    maturity: 'Early–Growth',
    revenueType: 'Content / Events',
    scalability: 'High',
    strategicRole: 'Talent & content funnel',
    description:
      'Magflow operates at the intersection of music, culture, and live experiences, functioning as a talent and content pipeline.',
  },
  {
    id: 'bandida-tattoo-studio',
    name: 'Bandida Tattoo Studio',
    logo: null,
    category: 'Physical Brand',
    maturity: 'Mature',
    revenueType: 'Services',
    scalability: 'Medium',
    strategicRole: 'Brick-and-mortar proof',
    description:
      'Bandida Tattoo Studio is a premium physical business with strong cultural identity, validating real-world scalability.',
  },
  {
    id: 'magflow-studio',
    name: 'Magflow Studio',
    logo: null,
    category: 'Creative Infra',
    maturity: 'Mature',
    revenueType: 'Studio services',
    scalability: 'Medium',
    strategicRole: 'Talent incubation',
    description:
      'Magflow Studio operates as creative infrastructure for talent incubation and production, connecting creative output with long-term growth.',
  },
];

const portfolioLogic = [
  {
    title: 'Broccoli Studios',
    description: 'Designs the systems, platforms, and growth logic',
  },
  {
    title: 'XR Studio',
    description: 'Executes and operationalizes experiences',
  },
  {
    title: 'Flagship Brands',
    description: 'Generate recurring revenue, proprietary data, strong communities',
  },
  {
    title: 'Studios & Physical Brands',
    description: 'Validate real-world scalability',
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Grupo ZV
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/portfolio" className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
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
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Portfolio</h1>
          <p className="mt-6 max-w-3xl text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            Experience-driven platforms powered by technology, data, and community. Each company
            operates independently at brand level, while benefiting from centralized ecosystem
            architecture.
          </p>
        </div>
      </section>

      {/* Portfolio Matrix Table */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            Portfolio Matrix
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="pr-4 pb-4 font-semibold">Company</th>
                  <th className="pr-4 pb-4 font-semibold">Category</th>
                  <th className="pr-4 pb-4 font-semibold">Maturity</th>
                  <th className="pr-4 pb-4 font-semibold">Revenue Type</th>
                  <th className="pr-4 pb-4 font-semibold">Scalability</th>
                  <th className="pb-4 font-semibold">Strategic Role</th>
                </tr>
              </thead>
              <tbody>
                {portfolioCompanies.map((company) => (
                  <tr key={company.id} className="border-b border-zinc-200 dark:border-zinc-800">
                    <td className="py-4 pr-4 font-medium">{company.name}</td>
                    <td className="py-4 pr-4 text-zinc-600 dark:text-zinc-400">
                      {company.category}
                    </td>
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                          company.maturity === 'Mature'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : company.maturity === 'Growth'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}
                      >
                        {company.maturity}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-zinc-600 dark:text-zinc-400">
                      {company.revenueType}
                    </td>
                    <td className="py-4 pr-4 text-zinc-600 dark:text-zinc-400">
                      {company.scalability}
                    </td>
                    <td className="py-4 text-zinc-600 dark:text-zinc-400">
                      {company.strategicRole}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Portfolio Logic */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            How It Compounds
          </h2>
          <p className="mt-4 text-2xl font-semibold md:text-3xl">Portfolio Logic</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioLogic.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  0{index + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-lg font-medium text-zinc-600 dark:text-zinc-400">
            This creates a feedback loop where each company strengthens the others.
          </p>
        </div>
      </section>

      {/* Company Details */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            Company Profiles
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioCompanies.map((company) => (
              <div
                key={company.id}
                id={company.id}
                className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                {company.logo ? (
                  <div className="relative mb-4 h-10 w-24">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain object-left dark:invert"
                    />
                  </div>
                ) : (
                  <h3 className="mb-4 text-xl font-bold">{company.name}</h3>
                )}
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium dark:bg-zinc-800">
                    {company.category}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      company.maturity === 'Mature'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : company.maturity === 'Growth'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}
                  >
                    {company.maturity}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{company.description}</p>
                <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-medium">Strategic Role:</span> {company.strategicRole}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-zinc-900 px-6 py-24 text-white dark:bg-zinc-50 dark:text-zinc-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Interested in the portfolio?</h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400 dark:text-zinc-600">
            Explore investment opportunities across the holding, specific verticals, or individual
            brands.
          </p>
          <Link
            href="/invest"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
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
