import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface BrandCardProps {
  name: string;
  logo: string | null;
  parent: string;
  description: string;
  highlights: string[];
  className?: string;
}

export function BrandCard({
  name,
  logo,
  parent,
  description,
  highlights,
  className,
}: BrandCardProps) {
  return (
    <div
      className={cn(
        'group border-border bg-card flex flex-col rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md',
        className
      )}
    >
      <div className="mb-4 flex items-start justify-between">
        {logo ? (
          <div className="relative h-12 w-40">
            <Image src={logo} alt={name} fill className="object-contain object-left" />
          </div>
        ) : (
          <h3 className="text-xl font-bold">{name}</h3>
        )}
        <Badge variant="secondary" className="shrink-0">
          {parent}
        </Badge>
      </div>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      <ul className="mt-auto space-y-2">
        {highlights.map((item, i) => (
          <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm">
            <span className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
