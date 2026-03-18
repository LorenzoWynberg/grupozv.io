import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TeamCardProps {
  name: string;
  role: string;
  photo: string | null;
  className?: string;
}

export function TeamCard({ name, role, photo, className }: TeamCardProps) {
  return (
    <div className={cn('group text-center', className)}>
      <div className="bg-muted mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={128}
            height={128}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="bg-primary/10 text-primary flex h-full w-full items-center justify-center text-2xl font-bold">
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
        )}
      </div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-muted-foreground mt-1 text-sm">{role}</p>
    </div>
  );
}
