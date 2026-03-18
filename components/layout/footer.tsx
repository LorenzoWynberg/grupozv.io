import Link from 'next/link';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/team', label: 'Team' },
  { href: '/invest', label: 'Invest' },
];

export function Footer() {
  return (
    <footer className="border-border bg-muted/30 border-t">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight">ZV Holdings</p>
            <p className="text-muted-foreground mt-2 max-w-xs text-sm">
              Building Latin America&apos;s leading entertainment and creative ecosystem.
            </p>
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
            &copy; {new Date().getFullYear()} ZV Holdings. All rights reserved.
          </p>
          <a
            href="mailto:info@zv.holdings.com"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            info@zv.holdings.com
          </a>
        </div>
      </div>
    </footer>
  );
}
