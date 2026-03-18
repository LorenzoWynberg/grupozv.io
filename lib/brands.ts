export interface Brand {
  slug: string;
  name: string;
  parent: 'XR Studio' | 'Broccoli Studios';
  tagline: string;
  description: string;
  logo: string | null;
  photo: string | null;
  gallery: string[];
  highlights: string[];
  stats: { label: string; value: string }[];
  details: string[];
}

export const brands: Brand[] = [
  {
    slug: 'electric-animals',
    name: 'Electric Animals',
    parent: 'XR Studio',
    tagline: 'Flagship electronic music festival platform',
    description:
      'Electric Animals is a large-scale electronic music festival ecosystem generating recurring revenue, proprietary data, and strong community engagement. What started as a single Costa Rica event has grown into a multi-country festival brand expanding to 5+ international markets in 2026.',
    logo: '/images/logos/electric-animals-cropped.png',
    photo: '/images/electric-animals-crowd.webp',
    gallery: [
      '/images/electric-animals-stage.webp',
      '/images/ea-fest25-crowd.webp',
      '/images/ea-fest25-stage.webp',
      '/images/ea-halloween-crowd.webp',
      '/images/ea-halloween-stage.webp',
      '/images/electric-animals-aerial.webp',
      '/images/electric-animals-dj.webp',
    ],
    highlights: [
      'Multi-country expansion: Costa Rica, El Salvador, Thailand, Madrid, Amsterdam',
      'Carbon-neutral certified events',
      'International headliner bookings',
      'Repeatable format proven across geographies',
      'Revenue: Ticketing + Sponsorships',
    ],
    stats: [
      { label: 'Countries (2026)', value: '5+' },
      { label: 'Events Per Year', value: '6+' },
      { label: 'Scalability', value: 'High' },
      { label: 'Stage', value: 'Growth' },
    ],
    details: [
      'Electric Animals operates as the flagship brand in the Grupo ZV ecosystem. Its festival format has been designed for geographic replication — the same production standards, brand identity, and operational playbook can be deployed in new markets with minimal incremental cost.',
      'In 2026, Electric Animals is confirmed in Costa Rica (flagship fest, Halloween, and NYE editions), plus international expansions to Madrid, Luxembourg, ADE Amsterdam, El Salvador, and Cali Colombia. This proves the core thesis: repeatable formats that scale.',
      'The brand generates revenue through ticketing, multi-tier sponsorship packages, and on-site activations. Its carbon-neutral certification and partnership with the National Convention Center in Costa Rica add institutional credibility that attracts premium sponsors.',
    ],
  },
  {
    slug: 'blockchain-jungle',
    name: 'Blockchain Jungle',
    parent: 'XR Studio',
    tagline: 'Largest blockchain conference in Central America',
    description:
      'Blockchain Jungle is a knowledge and networking platform connecting speakers, sponsors, attendees, content, and data. It functions as the premier blockchain and cryptocurrency event in the Central American region.',
    logo: '/images/logos/blockchain-jungle-cropped.png',
    photo: '/images/bcjungle-crowd.webp',
    gallery: [
      '/images/bcjungle-7.webp',
      '/images/bcjungle-19.webp',
      '/images/bcjungle-28.webp',
      '/images/bcjungle-panel.webp',
      '/images/bcjungle-stage.webp',
    ],
    highlights: [
      'Largest crypto/blockchain conference in Central America',
      'B2B content and networking platform',
      'High-value sponsor relationships (Tether, Avalanche, Bitfinex)',
      'Content leverage through recordings and digital distribution',
      'Revenue: Tickets + Sponsors',
    ],
    stats: [
      { label: 'Annual Edition', value: '2026' },
      { label: 'Sponsor Tier', value: 'Enterprise' },
      { label: 'Scalability', value: 'High' },
      { label: 'Stage', value: 'Growth' },
    ],
    details: [
      'Blockchain Jungle positions Grupo ZV at the intersection of technology and live experiences. The conference attracts decision-makers, investors, and builders from the global blockchain ecosystem to Costa Rica.',
      'The event generates revenue through tiered ticket pricing, exhibition booths, and premium sponsorship packages from companies like Tether, Avalanche, and Bitfinex. Its content — panels, keynotes, and workshops — creates lasting digital assets that extend value beyond the live event.',
      'As a B2B platform, Blockchain Jungle has higher per-attendee revenue than consumer events and creates strategic relationships that benefit the broader Grupo ZV ecosystem.',
    ],
  },
  {
    slug: 'pura-tinta-fest',
    name: 'Pura Tinta Fest',
    parent: 'XR Studio',
    tagline: 'Largest tattoo convention in Central America',
    description:
      'Pura Tinta Fest is a cultural convention supporting large-scale attendance, exhibitors, and artists while preserving cultural identity. It brings together 300+ tattoo artists for a multi-day celebration of tattoo culture.',
    logo: '/images/logos/pura-tinta-cropped.png',
    photo: '/images/pura-tinta-1.webp',
    gallery: [
      '/images/pura-tinta-2.webp',
      '/images/pura-tinta-3.webp',
      '/images/pura-tinta-4.webp',
      '/images/pura-tinta-5.webp',
      '/images/img_3577.webp',
      '/images/img_3697.webp',
    ],
    highlights: [
      '300+ tattoo artists per event',
      'Largest tattoo convention in Central America',
      'Multi-day format with live tattooing, competitions, and music',
      'Strong cultural identity and community loyalty',
      'Revenue: Ticketing + Booth sales',
    ],
    stats: [
      { label: 'Artists', value: '300+' },
      { label: 'Format', value: 'Convention' },
      { label: 'Scalability', value: 'Medium-High' },
      { label: 'Stage', value: 'Mature' },
    ],
    details: [
      'Pura Tinta Fest demonstrates the repeatable convention model within the Grupo ZV portfolio. The format — exhibitor booths, live demonstrations, competitions, and music programming — can be replicated across markets.',
      'The event connects directly with the Bandida Tattoo Studio brand, creating a feedback loop where the studio generates community year-round and the festival brings that community together at scale.',
      'Revenue comes from ticket sales, booth rentals to artists and vendors, and sponsorships. The convention model has proven resilient with consistent attendance growth year over year.',
    ],
  },
  {
    slug: 'magflow',
    name: 'Magflow',
    parent: 'XR Studio',
    tagline: 'Music, recording studio & live experience platform',
    description:
      'Magflow operates at the intersection of music, culture, and live experiences — combining a professional recording studio with a live events platform. From artist development and production to world-class concerts, Magflow is the talent and content engine of the Grupo ZV ecosystem.',
    logo: '/images/logos/magflow-cropped.png',
    photo: '/images/magflow-jacob-collier.webp',
    gallery: [
      '/images/magflow-concert.webp',
      '/images/jacobcollier_21-09-25-01550.webp',
      '/images/jacobcollier_21-09-25-04612.webp',
      '/images/martinez-concert.webp',
    ],
    highlights: [
      'Jacob Collier, Miguel Bosé, and more confirmed for 2026',
      'Professional recording studio & production facility',
      'Artist development pipeline feeding the broader ecosystem',
      'Premium concert experiences in curated venues',
      'Content creation and media distribution',
      'Revenue: Ticketing + Studio services + Content',
    ],
    stats: [
      { label: 'Artists (2026)', value: '5+' },
      { label: 'Format', value: 'Studio + Live' },
      { label: 'Scalability', value: 'High' },
      { label: 'Stage', value: 'Growth' },
    ],
    details: [
      'Magflow fills a critical gap in the Grupo ZV portfolio by combining creative infrastructure with live experience delivery. The recording studio develops talent in-house, creating a pipeline of artists who perform at Magflow concerts, Electric Animals festivals, and other portfolio events.',
      'On the live side, Magflow brings world-class musical talent to markets traditionally underserved by international touring circuits. The brand has secured Jacob Collier, Miguel Bosé, and additional major artists for 2026. These are intimate, premium-priced experiences in curated venues — higher margins per ticket than festival formats.',
      'The studio generates stable revenue through recording sessions, mixing, mastering, and production work, while the events side drives ticketing and content revenue. Together, the artist relationships and content produced feed value across the entire ecosystem.',
    ],
  },
  {
    slug: 'sweetspot',
    name: 'Sweetspot',
    parent: 'XR Studio',
    tagline: 'Esports league & competitive gaming platform',
    description:
      'Sweetspot provides structured systems for competitive integrity, recurring tournaments, and audience growth in the esports space. It operates as a digital-first platform with physical event activations.',
    logo: '/images/logos/sweetspot-cropped.png',
    photo: '/images/sweetspot-tournament.webp',
    gallery: [
      '/images/sweetspot-gaming.webp',
      '/images/sweetspot-crowd.webp',
      '/images/ss_img_0083.webp',
      '/images/ss_img_0128.webp',
      '/images/ss_img_0238.webp',
    ],
    highlights: [
      'Structured competitive gaming league',
      'Recurring tournament format',
      'Digital-first with physical event integration',
      'Young, engaged demographic (18-30)',
      'Revenue: Sponsorship + Events',
    ],
    stats: [
      { label: 'Model', value: 'Digital-first' },
      { label: 'Audience', value: '18-30' },
      { label: 'Scalability', value: 'High' },
      { label: 'Stage', value: 'Growth' },
    ],
    details: [
      'Sweetspot taps into the rapidly growing esports market in Latin America, where gaming culture is expanding faster than traditional entertainment. The platform provides the infrastructure for organized competitive play.',
      'The recurring tournament structure creates predictable engagement cycles and sponsorship opportunities. Unlike one-off events, the league format generates consistent touchpoints with an engaged audience throughout the year.',
      'As a digital-first brand, Sweetspot has the lowest marginal cost of expansion in the portfolio. The platform can scale to new games, regions, and tournament formats without significant infrastructure investment.',
    ],
  },
  {
    slug: 'bandida-tattoo-studio',
    name: 'Bandida Tattoo Studio',
    parent: 'Broccoli Studios',
    tagline: 'Premium tattoo studio & cultural platform',
    description:
      'Bandida Tattoo Studio is a premium physical business with strong cultural identity, validating real-world scalability. The studio serves as a year-round cultural hub that connects with the broader tattoo community.',
    logo: '/images/logos/bandida-logo.png',
    photo: '/images/bandida-tattoo.webp',
    gallery: ['/images/bandida-studio.webp', '/images/bandida-studio-2.webp'],
    highlights: [
      'Premium physical brand with strong identity',
      'Year-round cultural hub and community anchor',
      'Direct connection to Pura Tinta Fest',
      'Franchise potential for geographic expansion',
      'Revenue: Services',
    ],
    stats: [
      { label: 'Model', value: 'Physical' },
      { label: 'Format', value: 'Studio' },
      { label: 'Scalability', value: 'Medium' },
      { label: 'Stage', value: 'Mature' },
    ],
    details: [
      'Bandida Tattoo Studio proves that the Grupo ZV thesis works in physical retail, not just events. The studio maintains a premium brand with strong cultural identity and loyal clientele year-round.',
      'The studio has a direct feedback loop with Pura Tinta Fest — the convention drives awareness and client acquisition for the studio, while the studio maintains community engagement between events.',
      'As a brick-and-mortar brand, Bandida validates real-world operational capacity and provides a model for potential franchise expansion into other cities.',
    ],
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
