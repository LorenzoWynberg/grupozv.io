import type { Locale } from './i18n';
import type { Dictionary } from './dictionaries/en';

const dictionaries = {
  en: () => import('./dictionaries/en').then((mod) => mod.default),
  es: () => import('./dictionaries/es').then((mod) => mod.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
