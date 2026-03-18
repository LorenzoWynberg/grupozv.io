'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries/en';

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/calendar`, label: dict.nav.calendar },
    { href: `/${locale}/team`, label: dict.nav.team },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}`;
    return pathname.startsWith(href);
  };

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    // Replace current locale prefix with new one
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    // Set cookie so middleware remembers preference
    document.cookie = `locale=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
    router.push(newPath);
  };

  return (
    <header className="bg-background/95 border-border supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 border-b shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Logo */}
        <Link href={`/${locale}`} className="text-lg font-bold tracking-tight">
          ZV Holdings
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm transition-colors',
                isActive(link.href)
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <button
            onClick={switchLocale}
            className="text-muted-foreground hover:text-foreground hover:border-border flex items-center gap-1.5 rounded-full border border-transparent px-3 py-1.5 text-sm font-medium transition-colors"
            aria-label={dict.language.switchTo}
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{locale === 'en' ? dict.language.en : dict.language.es}</span>
          </button>

          {/* Desktop Invest Button */}
          <Button asChild size="sm" className="hidden rounded-full lg:inline-flex">
            <Link href={`/${locale}/invest`}>{dict.nav.invest}</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded-md p-2 transition-colors lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="bg-background border-border absolute inset-x-0 top-16 z-50 border-b shadow-lg lg:hidden"
            >
              <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 sm:px-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className={cn(
                      'rounded-lg px-4 py-3 text-base transition-colors',
                      isActive(link.href)
                        ? 'bg-primary/5 text-foreground font-medium'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-border my-2 border-t" />
                <Button asChild size="default" className="rounded-full">
                  <Link href={`/${locale}/invest`} onClick={closeMobile}>
                    {dict.nav.invest}
                  </Link>
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
