import { brands } from '@/lib/brands';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZV Holdings',
    url: 'https://zv.holdings',
    logo: 'https://zv.holdings/images/logos/zv-holdings-logo.png',
    description:
      'Costa Rica-based holding company operating entertainment, blockchain, and creative brands across Latin America and Europe.',
    foundingDate: '2022',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San José',
      addressCountry: 'CR',
    },
    subOrganization: brands.map((brand) => ({
      '@type': 'Organization',
      name: brand.name,
      url: `https://zv.holdings/en/portfolio/${brand.slug}`,
      description: brand.tagline,
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ZV Holdings',
    url: 'https://zv.holdings',
    inLanguage: ['en', 'es'],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
