import { cn } from '@/lib/utils';

interface MetricCardProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricCard({ value, label, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        'border-border bg-card rounded-2xl border p-6 text-center shadow-sm',
        className
      )}
    >
      <p className="text-primary text-3xl font-bold tracking-tight md:text-4xl">{value}</p>
      <p className="text-muted-foreground mt-2 text-sm">{label}</p>
    </div>
  );
}
