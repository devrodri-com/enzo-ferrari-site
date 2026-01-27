import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

function cn(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(' ');
}

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
}: ButtonLinkProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20";
  
  const variantClasses = variant === 'primary'
    ? "bg-black/90 hover:bg-black"
    : "border border-black/15 hover:border-black/25";

  return (
    <Link
      href={href}
      className={cn(baseClasses, variantClasses, className)}
    >
      {children}
    </Link>
  );
}
