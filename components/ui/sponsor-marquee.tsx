'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Sponsor {
  name: string;
  logo: string;
}

interface SponsorMarqueeProps {
  sponsors: Sponsor[];
  className?: string;
}

export function SponsorMarquee({ sponsors, className }: SponsorMarqueeProps) {
  const doubled = [...sponsors, ...sponsors];

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l to-transparent" />
      <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
        {doubled.map((sponsor, i) => (
          <div
            key={i}
            className="relative h-8 w-28 shrink-0 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10 md:w-36"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              fill
              className="object-contain"
              sizes="112px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
