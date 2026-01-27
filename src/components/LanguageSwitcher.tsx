'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

interface LanguageSwitcherProps {
  className?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  inactiveButtonClassName?: string;
}

function cn(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(' ');
}

export default function LanguageSwitcher({
  className,
  buttonClassName,
  activeButtonClassName,
  inactiveButtonClassName,
}: LanguageSwitcherProps) {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const currentLocale = params.locale as string;

  const switchLocale = (newLocale: string) => {
    // Obtener el path sin el locale actual
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    
    // Establecer cookie con expiración de 1 año
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `NEXT_LOCALE=${newLocale}; expires=${expires.toUTCString()}; path=/`;
    
    startTransition(() => {
      router.push(newPath);
    });
  };

  const baseButtonClasses = cn(
    "text-xs font-semibold px-3 py-1 rounded-md transition-colors focus:outline-none focus-visible:ring-2",
    buttonClassName
  );

  return (
    <div className={cn("flex gap-2", className)}>
      <button
        onClick={() => switchLocale('es')}
        disabled={isPending || currentLocale === 'es'}
        className={cn(
          baseButtonClasses,
          currentLocale === 'es'
            ? activeButtonClassName
            : inactiveButtonClassName,
          isPending && 'opacity-50 cursor-not-allowed'
        )}
      >
        ES
      </button>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending || currentLocale === 'en'}
        className={cn(
          baseButtonClasses,
          currentLocale === 'en'
            ? activeButtonClassName
            : inactiveButtonClassName,
          isPending && 'opacity-50 cursor-not-allowed'
        )}
      >
        EN
      </button>
    </div>
  );
}
