import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

interface EventCardProps {
  name: string;
  date: string;
  location: string;
  category?: string;
  blurred?: boolean;
  className?: string;
}

export function EventCard({ name, date, location, category, blurred, className }: EventCardProps) {
  return (
    <div
      className={cn(
        'border-border bg-card relative flex items-center gap-4 overflow-hidden rounded-xl border p-4 shadow-sm transition-shadow hover:shadow-md',
        className
      )}
    >
      <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
        <CalendarDays className="text-primary h-5 w-5" />
      </div>
      <div className={cn('min-w-0 flex-1', blurred && 'blur-[6px] select-none')}>
        <h3 className="font-semibold">{name}</h3>
        <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span>{date}</span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </span>
        </div>
      </div>
      {blurred && <span className="text-primary text-xs font-medium">To be announced</span>}
      {!blurred && category && (
        <Badge variant="outline" className="shrink-0">
          {category}
        </Badge>
      )}
    </div>
  );
}
