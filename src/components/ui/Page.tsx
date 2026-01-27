import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
  className?: string;
}

function cn(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(' ');
}

export default function Page({ children, className }: PageProps) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
