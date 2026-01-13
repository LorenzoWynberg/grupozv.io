import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Grupo ZV",
  description:
    "Grupo ZV builds, owns, and operates experience-driven platforms powered by technology, data, and community.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
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
              className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
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
            About Grupo ZV
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
            Grupo ZV builds, owns, and operates experience-driven platforms
            powered by technology, data, and community.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Our Philosophy
          </h2>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Our strategy is not diversification by volume, but{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">
              portfolio compounding
            </span>
            .
          </p>
          <div className="mt-12 space-y-4">
            <p className="text-2xl font-semibold md:text-3xl">
              Shared infrastructure.
            </p>
            <p className="text-2xl font-semibold md:text-3xl">
              Shared audiences.
            </p>
            <p className="text-2xl font-semibold md:text-3xl">Shared data.</p>
            <p className="text-2xl font-bold md:text-3xl">
              Clear separation between strategy and execution.
            </p>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            How We&apos;re Structured
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Strategy Layer</h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                  Broccoli Studios
                </span>{" "}
                serves as the system architect and IP holder. It designs the
                systems, platforms, and growth logic for the entire portfolio.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "System design",
                  "Technology architecture",
                  "Growth model design",
                  "Platform development",
                  "Data architecture",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Execution Layer</h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                  XR Studio
                </span>{" "}
                executes and operationalizes experiences across the portfolio.
                It transforms strategy into delivery with precision and
                operational control.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Experience execution",
                  "Production management",
                  "Operational control",
                  "On-ground delivery",
                  "Quality assurance",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Brands */}
      <section className="border-t border-zinc-200 bg-zinc-900 px-6 py-24 text-white dark:bg-zinc-50 dark:text-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Flagship Brands Generate
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { title: "Recurring Revenue", description: "Sustainable income streams across multiple business models" },
              { title: "Proprietary Data", description: "Audience insights that power smarter decisions" },
              { title: "Strong Communities", description: "Real engagement, not theoretical traction" },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800 bg-zinc-800/50 p-6 dark:border-zinc-200 dark:bg-white/50"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-zinc-400 dark:text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-lg text-zinc-400 dark:text-zinc-600">
            Studios and physical brands validate real-world scalability,
            creating a feedback loop where each company strengthens the others.
          </p>
        </div>
      </section>

      {/* Why Grupo ZV */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Why Grupo ZV
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Vertical integration: strategy, technology, execution, and IP under one group",
              "Proven operating companies, not speculative startups",
              "Repeatable formats: festivals, conventions, studios, competitive platforms",
              "Real audiences & communities, not theoretical traction",
              "Scalable across markets without rebuilding from zero",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold dark:bg-zinc-800">
                  {index + 1}
                </span>
                <p className="text-zinc-600 dark:text-zinc-400">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Grupo ZV is designed for a new category of stakeholder—one that
            understands that the future of entertainment, culture, and community
            is built on systems, not one-off successes.
          </p>
          <div className="mt-12 space-y-2">
            <p className="text-2xl font-semibold md:text-3xl">
              We don&apos;t chase trends.
            </p>
            <p className="text-2xl font-bold md:text-3xl">
              We build ecosystems that last.
            </p>
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
