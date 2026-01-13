import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Broccoli Studios",
  description:
    "Broccoli Studios is a technology and ecosystem design company focused on building systems that scale beyond individual projects.",
};

export default function AboutPage() {
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
              className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
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
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            About
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
            Broccoli Studios is a technology and ecosystem design company
            focused on building systems that scale beyond individual projects.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            <p className="text-2xl font-semibold md:text-3xl">
              We design the system.
            </p>
            <p className="text-2xl font-semibold md:text-3xl">
              We build the platform.
            </p>
            <p className="text-2xl font-semibold md:text-3xl">
              We define how it grows.
            </p>
            <p className="text-2xl font-semibold text-zinc-500 dark:text-zinc-400 md:text-3xl">
              XR Studio executes the experience.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                What We Do
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                We specialize in ecosystem design, platform development, and
                data-driven growth. Our work spans digital and physical
                experiences, from large-scale festivals to cultural conventions,
                from esports platforms to creative studios.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                We don&apos;t execute campaigns or sell isolated deliverables.
                We design systems that create sustainable, repeatable growth for
                our partners.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                How We Work
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Broccoli designs the system, the technology, and the growth
                model. We work as long-term partners, not vendors. Our approach
                is system-driven: we start with ecosystem definition, build the
                architecture, develop the platforms, integrate growth systems,
                and continuously optimize.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Our execution partner XR Studio brings experiences to life with
                precision and operational control, while we maintain the
                strategic and technical backbone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="border-t border-zinc-200 bg-zinc-900 px-6 py-24 text-white dark:bg-zinc-50 dark:text-zinc-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Ecosystem Alignment
          </h2>
          <p className="mt-8 text-2xl font-semibold md:text-3xl">
            Designed by Broccoli. Executed by XR Studio.
          </p>
          <div className="mx-auto mt-12 grid max-w-2xl gap-8 text-left sm:grid-cols-2">
            <div className="rounded-xl bg-zinc-800 p-6 dark:bg-white">
              <h3 className="font-semibold">Broccoli Studios</h3>
              <p className="mt-2 text-zinc-400 dark:text-zinc-600">
                System design, technology, growth model, platform development,
                data architecture
              </p>
            </div>
            <div className="rounded-xl bg-zinc-800 p-6 dark:bg-white">
              <h3 className="font-semibold">XR Studio</h3>
              <p className="mt-2 text-zinc-400 dark:text-zinc-600">
                Experience execution, production, operational control, on-ground
                delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            What Clients Gain
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {["Control", "Scalability", "Visibility", "Measurable Results"].map(
              (value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h3 className="text-xl font-semibold">{value}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Build infrastructure, not one-off solutions.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
            Start a strategy conversation with Broccoli Studios.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Contact Us
          </Link>
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
