import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {label && (
        <p className="text-primary text-sm font-semibold tracking-wider uppercase">{label}</p>
      )}
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight md:text-4xl',
          label && 'mt-3',
          align === 'center' && 'mx-auto'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-muted-foreground mt-4 text-lg',
            align === 'center' && 'mx-auto max-w-2xl'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
