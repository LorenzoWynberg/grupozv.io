import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Broccoli Studios",
  description:
    "Case studies of owned ecosystems: Electric Animals, Pura Tinta, Blockchain Jungle, Magflow, Sweetspot, and more.",
};

const caseStudies = [
  {
    id: "electric-animals",
    name: "Electric Animals",
    logo: "/images/electric-animals.png",
    category: "Experience Ecosystem & Platform Strategy",
    summary:
      "Electric Animals operates as a large-scale experience ecosystem rather than a single festival. Broccoli Studios designed the system connecting audience data, monetization, experience design, and long-term brand growth.",
    scope: [
      "Ecosystem and business model architecture",
      "Audience journey and data capture design",
      "Platform and system integrations",
      "Growth and revenue system design",
      "Experience blueprint for execution teams",
    ],
    outcome: "Scalable ecosystem, data-driven decisions, repeatable growth model",
    images: [
      "/images/_a1a6014.webp",
      "/images/_a1a6369.webp",
      "/images/_a1a6440.webp",
    ],
  },
  {
    id: "pura-tinta",
    name: "Pura Tinta Fest",
    logo: "/images/pura-tinta.png",
    category: "Cultural Convention Platform Architecture",
    summary:
      "Pura Tinta Fest required a system capable of supporting large-scale attendance, exhibitors, and artists while preserving cultural identity. Broccoli Studios designed the digital and operational ecosystem behind the convention.",
    scope: [
      "Platform and data architecture",
      "Stakeholder journey design",
      "Business model optimization",
      "Experience system blueprint",
    ],
    outcome:
      "Scalable convention model, operational clarity, improved stakeholder experience",
    images: [
      "/images/img_8497-mejorado-nr.webp",
      "/images/img_8566-mejorado-nr-2.webp",
      "/images/wua04032-enhanced-nr.webp",
    ],
  },
  {
    id: "blockchain-jungle",
    name: "Blockchain Jungle",
    logo: "/images/blockchain-jungle.png",
    category: "Conference & Knowledge Ecosystem Design",
    summary:
      "Blockchain Jungle functions as a knowledge and networking platform rather than a one-off event. Broccoli Studios designed the system connecting speakers, sponsors, attendees, content, and data.",
    scope: [
      "Conference ecosystem architecture",
      "Data and segmentation strategy",
      "Platform integrations",
      "Monetization and partner value systems",
    ],
    outcome: "Structured conference ecosystem, repeatable annual model",
    images: [
      "/images/bcjungle-7.webp",
      "/images/bcjungle-19.webp",
      "/images/bcjungle-28.webp",
    ],
  },
  {
    id: "magflow",
    name: "Magflow",
    logo: "/images/magflow.png",
    category: "Culture & Media Ecosystem Design",
    summary:
      "Magflow operates at the intersection of music, culture, and live experiences. Broccoli Studios designed the ecosystem allowing content, community, and experiences to function as a scalable platform.",
    scope: [
      "Platform and content ecosystem design",
      "Growth and distribution strategy",
      "Audience data architecture",
      "Experience frameworks",
    ],
    outcome: "Unified audience system, scalable cultural platform",
    images: [
      "/images/jacobcollier_21-09-25-01550.webp",
      "/images/jacobcollier_21-09-25-04416.webp",
      "/images/jacobcollier_21-09-25-04612.webp",
    ],
  },
  {
    id: "sweetspot",
    name: "Sweetspot",
    logo: "/images/sweetspot.png",
    category: "Esports Ecosystem & Competitive Platform Design",
    summary:
      "Sweetspot requires structured systems to support competitive integrity, recurring tournaments, and audience growth. Broccoli Studios designed the architecture behind operations, data, and monetization.",
    scope: [
      "Competitive ecosystem architecture",
      "Platform and data system design",
      "Growth and monetization systems",
      "Experience strategy for live and digital formats",
    ],
    outcome: "Scalable esports platform, repeatable competition systems",
    images: [
      "/images/ss_img_0083.webp",
      "/images/ss_img_0128.webp",
      "/images/ss_img_0238.webp",
    ],
  },
  {
    id: "bandida-tattoo-studio",
    name: "Bandida Tattoo Studio",
    logo: null,
    category: "Physical Business Ecosystem & Brand Platform",
    summary:
      "Bandida Tattoo Studio functions as a premium physical business with strong cultural identity. Broccoli Studios designed the system that allows the studio to scale beyond a single location.",
    scope: [
      "Business and ecosystem architecture",
      "Customer journey design",
      "Digital and operational platform design",
      "Growth strategy and experience framework",
    ],
    outcome: "Structured operations, scalable brand, consistent customer experience",
    images: [],
  },
  {
    id: "magflow-studio",
    name: "Magflow Studio",
    logo: null,
    category: "Creative Infrastructure & Talent Development Platform",
    summary:
      "Magflow Studio operates as creative infrastructure for talent incubation and production. Broccoli Studios designed the system connecting creative output, services, and long-term growth.",
    scope: [
      "Platform and business model architecture",
      "Artist and client journey design",
      "Systemized studio operations",
      "Monetization and growth strategy",
    ],
    outcome: "Repeatable operations, diversified revenue, scalable creative platform",
    images: [],
  },
];

export default function WorkPage() {
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
              className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
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
            Work
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
            Case studies of owned ecosystems designed and built by Broccoli
            Studios.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                id={study.id}
                className="scroll-mt-24"
              >
                <div className="grid gap-12 lg:grid-cols-2">
                  {/* Info */}
                  <div>
                    {study.logo && (
                      <div className="relative mb-6 h-12 w-32">
                        <Image
                          src={study.logo}
                          alt={study.name}
                          fill
                          className="object-contain object-left dark:invert"
                        />
                      </div>
                    )}
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      {study.category}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                      {study.name}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {study.summary}
                    </p>

                    <div className="mt-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Broccoli Studios Scope
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {study.scope.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 rounded-xl bg-zinc-100 p-4 dark:bg-zinc-900">
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        Outcome Focus
                      </p>
                      <p className="mt-1 font-semibold">{study.outcome}</p>
                    </div>
                  </div>

                  {/* Images */}
                  {study.images.length > 0 && (
                    <div className="grid gap-4">
                      {study.images.map((image, i) => (
                        <div
                          key={i}
                          className="relative aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900"
                        >
                          <Image
                            src={image}
                            alt={`${study.name} - Image ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {index < caseStudies.length - 1 && (
                  <div className="mt-24 border-b border-zinc-200 dark:border-zinc-800" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-zinc-900 px-6 py-24 text-white dark:bg-zinc-50 dark:text-zinc-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to build your ecosystem?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400 dark:text-zinc-600">
            Let&apos;s discuss how we can design systems that scale for your
            organization.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
          >
            Start a Strategy Call
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
