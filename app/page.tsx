import Image from "next/image";
import Link from "next/link";

const capabilities = [
  "Ecosystem & Business Architecture",
  "Technology & Platform Development",
  "Data, AI & Intelligence",
  "Growth & Revenue Systems",
  "Experience Strategy (Design Layer)",
];

const proofPoints = [
  "Proprietary platforms in production",
  "Government-grade digital systems",
  "High-volume experience ecosystems",
  "Multi-industry application",
  "Long-term operating partnerships",
];

const featuredWork = [
  { name: "Electric Animals", logo: "/images/electric-animals.png" },
  { name: "Pura Tinta", logo: "/images/pura-tinta.png" },
  { name: "Blockchain Jungle", logo: "/images/blockchain-jungle.png" },
  { name: "Magflow", logo: "/images/magflow.png" },
  { name: "Sweetspot", logo: "/images/sweetspot.png" },
];

export default function Home() {
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

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Broccoli Studios
            <span className="mt-2 block text-zinc-500 dark:text-zinc-400">
              Technology, Data & Ecosystem Design
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
            We design and operate digital and physical ecosystems that transform
            experiences into scalable systems and sustainable growth.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Start a Strategy Call
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-zinc-300 px-8 py-3 text-sm font-medium transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl">
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
            Broccoli Studios is a technology and strategy company specialized in
            ecosystem design, platform development, and data-driven growth.
          </p>
          <div className="mt-12 space-y-4">
            <p className="text-2xl font-medium md:text-3xl">
              We don&apos;t execute campaigns.
            </p>
            <p className="text-2xl font-medium md:text-3xl">
              We don&apos;t sell isolated deliverables.
            </p>
            <p className="text-2xl font-bold md:text-3xl">We design systems.</p>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Core Capabilities
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  0{index + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{capability}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Scale Section */}
      <section className="border-t border-zinc-200 bg-zinc-900 px-6 py-24 text-white dark:bg-zinc-50 dark:text-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Proof of Scale
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {proofPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-sm font-medium dark:bg-zinc-200">
                  {index + 1}
                </span>
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Alignment Section */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Ecosystem Alignment
          </h2>
          <p className="mt-8 text-2xl font-semibold md:text-3xl">
            Designed by Broccoli. Executed by XR Studio.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Broccoli designs the system, the technology, and the growth model.
            XR Studio executes the experience with precision and operational
            control.
          </p>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Featured Work
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {featuredWork.map((work) => (
              <Link
                key={work.name}
                href={`/work#${work.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={work.logo}
                    alt={work.name}
                    fill
                    className="object-contain dark:invert"
                  />
                </div>
                <span className="mt-4 text-sm font-medium text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-50">
                  {work.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="border-t border-zinc-200 bg-zinc-900 px-6 py-24 text-white dark:bg-zinc-50 dark:text-zinc-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Build systems that scale.
          </h2>
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
