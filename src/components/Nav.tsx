'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Nav() {
  const t = useTranslations('nav');
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as 'es' | 'en';
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Scroll detection
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  // Scroll lock when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isMobileMenuOpen]);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  // Focus management when menu opens
  useEffect(() => {
    if (isMobileMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a') as HTMLAnchorElement;
      if (firstLink) {
        // Small delay to ensure the menu is rendered
        setTimeout(() => {
          firstLink.focus();
        }, 100);
      }
    }
  }, [isMobileMenuOpen]);

  // Close menu when navigating
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navClasses = isHome
    ? `w-full fixed top-0 left-0 z-50 relative transition-colors duration-300 bg-[color:var(--darkband)]/32 backdrop-blur-md border-b border-[#2C3A44]/70`
    : 'w-full fixed top-0 left-0 z-40 relative bg-[color:var(--darkband)]/32 backdrop-blur-md border-b border-[#2C3A44]/70';

  const linkClasses = 'text-sm font-medium text-white hover:text-white transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.75)] no-underline hover:no-underline';

  const isActive = (href: string) => pathname === href || pathname === `${href}/`;

  const linkUnderlineClasses = (href: string) => {
    const active = isActive(href);  
    if (isHome && !isScrolled) {
      return active
        ? 'border-b-2 border-white/80'
        : 'border-b-2 border-transparent';
    } else {
      return active
        ? 'border-b-2 border-white/80'
        : 'border-b-2 border-transparent';
    }
  };

  const mobileLinkClasses = (href: string) => {
    const active = isActive(href);
    return `block py-4 text-base font-medium text-white no-underline hover:no-underline transition-colors ${
      active ? 'border-b-2 border-white/80' : ''
    }`;
  };

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/profile`, label: t('profile') },
    { href: `/${locale}/career`, label: t('career') },
    { href: `/${locale}/methodology`, label: t('methodology') },
    { href: `/${locale}/cv`, label: t('cv') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <>
      <nav className={navClasses}>
        <div className="absolute inset-x-0 top-0 h-14 md:h-16 bg-[color:var(--darkband)] -z-10" />
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 h-14 md:h-16 flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5 flex-wrap">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`${linkClasses} ${linkUnderlineClasses(link.href)}`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile: Language Switcher + Hamburger */}
            <div className="md:hidden flex items-center justify-between w-full">
              <div>
                <LanguageSwitcher
                  buttonClassName={
                    isHome && !isScrolled
                      ? 'focus-visible:ring-white/40 border border-transparent'
                      : 'focus-visible:ring-white/40 border border-transparent'
                  }
                  activeButtonClassName={
                    isHome && !isScrolled
                      ? 'text-white border-white/80'
                      : 'text-white border-white/80'
                  }
                  inactiveButtonClassName={
                    isHome && !isScrolled
                      ? 'text-white/70 hover:text-white hover:border-white/70'
                      : 'text-white/70 hover:text-white hover:border-white/70'
                  }
                />
              </div>

              <div>
                <button
                  ref={hamburgerRef}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                  aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  {isMobileMenuOpen ? (
                    // Close icon (X)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  ) : (
                    // Hamburger icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Desktop Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher
                buttonClassName={
                  isHome && !isScrolled
                    ? 'focus-visible:ring-white/40 border border-transparent'
                    : 'focus-visible:ring-white/40 border border-transparent'
                }
                activeButtonClassName={
                  isHome && !isScrolled
                    ? 'text-white border-white/80'
                    : 'text-white border-white/80'
                }
                inactiveButtonClassName={
                  isHome && !isScrolled
                    ? 'text-white/70 hover:text-white hover:border-white/70'
                    : 'text-white/70 hover:text-white hover:border-white/70'
                }
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="fixed top-14 left-0 right-0 bg-[#141615] border-b border-white/10 z-[60] md:hidden max-h-[calc(100vh-3.5rem)] overflow-y-auto"
          >
            <div className="px-5 sm:px-8 py-6">
              {/* Navigation Links */}
              <nav className="space-y-0">
                {navLinks.map((link, index) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={mobileLinkClasses(link.href)}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <div className="border-t border-white/10 my-0" />
                    )}
                  </div>
                ))}
              </nav>

              {/* Social Icons */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex gap-6">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/ea_enzoferrari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors no-underline"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/ea-enzoferrari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors no-underline"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:enzoisef2019@gmail.com"
                    className="text-white/70 hover:text-white transition-colors no-underline"
                    aria-label="Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/59899719422"
                    className="text-white/70 hover:text-white transition-colors no-underline"
                    aria-label="WhatsApp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
