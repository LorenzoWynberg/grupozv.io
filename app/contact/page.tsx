import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Broccoli Studios",
  description:
    "Start a strategy conversation with Broccoli Studios. Build infrastructure, not one-off solutions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Broccoli Studios
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/services"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Build infrastructure,
            <span className="mt-2 block">not one-off solutions.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
            Start a strategy conversation with Broccoli Studios. We&apos;re
            ready to discuss how we can design systems that scale for your
            organization.
          </p>

          <div className="mt-12">
            <a
              href="mailto:hello@broccolistudios.com"
              className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
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
              hello@broccolistudios.com
            </a>
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            What We Can Help With
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Ecosystem & Business Architecture",
              "Technology & Platform Development",
              "Data, AI & Intelligence",
              "Growth & Revenue Systems",
              "Experience Strategy",
              "Long-term Partnerships",
            ].map((service) => (
              <div
                key={service}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            What to Expect
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold dark:bg-zinc-800">
                1
              </span>
              <div>
                <h3 className="font-semibold">Initial Conversation</h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  We&apos;ll discuss your goals, challenges, and vision to
                  understand if there&apos;s a fit.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold dark:bg-zinc-800">
                2
              </span>
              <div>
                <h3 className="font-semibold">Discovery & Assessment</h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  We analyze your current state and identify opportunities for
                  system-level improvements.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold dark:bg-zinc-800">
                3
              </span>
              <div>
                <h3 className="font-semibold">Strategy Proposal</h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  We present a clear roadmap for ecosystem design, platform
                  development, and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-12 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Broccoli Studios. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/services"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
