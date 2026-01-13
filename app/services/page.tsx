import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Broccoli Studios",
  description:
    "Ecosystem architecture, platform development, data intelligence, growth systems, and experience strategy.",
};

const services = [
  {
    number: "01",
    title: "Ecosystem & Business Architecture",
    description: "We design the structural foundation before anything is built.",
    capabilities: [
      "Digital and physical ecosystem design",
      "Business model architecture",
      "Customer and user journey mapping",
      "Data architecture design",
      "Go-to-market and scaling strategy",
    ],
    outcome: "Clear systems, reduced risk, scalable foundations",
  },
  {
    number: "02",
    title: "Technology & Platform Development",
    description: "We build platforms that function as long-term infrastructure.",
    capabilities: [
      "Proprietary platforms",
      "API integrations (ticketing, fintech, CRM, biometrics)",
      "Dashboards and operational control systems",
      "Automation and cloud architecture",
    ],
    outcome: "Operational control, scalability, independence",
  },
  {
    number: "03",
    title: "Data, AI & Intelligence",
    description: "We turn data into decisions.",
    capabilities: [
      "Data capture frameworks",
      "Predictive analytics",
      "Advanced segmentation",
      "Revenue intelligence",
      "Decision-support systems",
    ],
    outcome: "Smarter decisions, optimized performance, lower uncertainty",
  },
  {
    number: "04",
    title: "Growth & Revenue Systems",
    description: "We design systems that generate recurring growth.",
    capabilities: [
      "Growth loops",
      "Funnel architecture and automation",
      "CRM and lifecycle systems",
      "Monetization strategies",
    ],
    outcome: "Sustainable growth, repeatable revenue",
  },
  {
    number: "05",
    title: "Experience Strategy",
    description: "We design experiences as systems, not events.",
    capabilities: [
      "Experience architecture",
      "Conceptual design for physical and digital experiences",
      "Execution blueprints for production teams",
      "Technology–experience alignment",
    ],
    outcome: "Experiences that scale and generate long-term value",
  },
];

const platformFeatures = [
  "Modular architecture",
  "Secure cloud infrastructure",
  "Data-first design",
  "Compliance and scalability mindset",
];

const methodSteps = [
  "Ecosystem Definition",
  "System & Data Architecture",
  "Platform Development",
  "Growth System Integration",
  "Continuous Optimization",
];

const clientGains = ["Control", "Scalability", "Visibility", "Measurable results"];

export default function ServicesPage() {
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
              className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
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
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
            Comprehensive ecosystem design and technology solutions for
            organizations building at scale.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-16">
            {services.map((service) => (
              <div
                key={service.number}
                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="scroll-mt-24 border-b border-zinc-200 pb-16 last:border-b-0 dark:border-zinc-800"
              >
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      {service.number}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {service.capabilities.map((capability, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 rounded-xl bg-zinc-100 p-4 dark:bg-zinc-900">
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        Outcome
                      </p>
                      <p className="mt-1 font-semibold">{service.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Technology */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Platforms & Technology
          </h2>
          <p className="mt-6 max-w-3xl text-2xl font-semibold md:text-3xl">
            Broccoli Studios builds API-first, modular platforms designed for
            scale, integration, and longevity.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Our Method
          </h2>
          <p className="mt-6 max-w-3xl text-2xl font-semibold md:text-3xl">
            Our System-Driven Approach
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {methodSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white dark:bg-zinc-50 dark:text-zinc-900">
                  {index + 1}
                </span>
                <p className="mt-2 font-medium">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              What clients gain
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {clientGains.map((gain, index) => (
                <span
                  key={index}
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium dark:border-zinc-800 dark:bg-zinc-900"
                >
                  {gain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-zinc-900 px-6 py-24 text-white dark:bg-zinc-50 dark:text-zinc-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to build systems that scale?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400 dark:text-zinc-600">
            Start a strategy conversation to discuss your ecosystem needs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
          >
            Contact Broccoli Studios
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
