import type { MetadataRoute } from 'next';
import { brands } from '@/lib/brands';

const BASE_URL = 'https://zv.holdings';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/portfolio', '/calendar', '/team', '/invest'];

  const brandRoutes = brands.map((brand) => `/portfolio/${brand.slug}`);

  const allRoutes = [...staticRoutes, ...brandRoutes];

  return allRoutes.map((route) => ({
    url: `${BASE_URL}/en${route}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${BASE_URL}/en${route}`,
        es: `${BASE_URL}/es${route}`,
      },
    },
  }));
}
