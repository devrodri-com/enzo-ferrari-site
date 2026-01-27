'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
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

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale('es')}
        disabled={isPending || currentLocale === 'es'}
        className={`text-sm font-medium px-3 py-1 rounded ${
          currentLocale === 'es'
            ? 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            : 'hover:text-gray-600 dark:hover:text-gray-400'
        } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        ES
      </button>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending || currentLocale === 'en'}
        className={`text-sm font-medium px-3 py-1 rounded ${
          currentLocale === 'en'
            ? 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            : 'hover:text-gray-600 dark:hover:text-gray-400'
        } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        EN
      </button>
    </div>
  );
}
