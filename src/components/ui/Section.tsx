import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

function cn(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(' ');
}

export default function Section({ children, title, className }: SectionProps) {
  return (
    <section className={cn("space-y-3", className)}>
      {title ? (
        <h2 className="text-sm font-semibold tracking-tight text-black/90">
          {title}
        </h2>
      ) : null}
      <div className="space-y-3">{children}</div>
    </section>
  );
}
