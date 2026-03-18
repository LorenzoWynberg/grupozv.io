import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries/en';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const footerLinks = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/calendar`, label: dict.nav.calendar },
    { href: `/${locale}/team`, label: dict.nav.team },
    { href: `/${locale}/invest`, label: dict.nav.invest },
  ];

  return (
    <footer className="border-border bg-muted/30 border-t">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight">ZV Holdings</p>
            <p className="text-muted-foreground mt-2 max-w-xs text-sm">{dict.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-border mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {dict.footer.copyright}
          </p>
          <a
            href={`mailto:${dict.footer.email}`}
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            {dict.footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
