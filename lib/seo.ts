const BASE_URL = 'https://zv.holdings';

export function getAlternates(locale: string, path: string = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const fullPath = cleanPath === '/' ? '' : cleanPath;
  return {
    canonical: `${BASE_URL}/${locale}${fullPath}`,
    languages: {
      en: `${BASE_URL}/en${fullPath}`,
      es: `${BASE_URL}/es${fullPath}`,
      'x-default': `${BASE_URL}/en${fullPath}`,
    },
  };
}
