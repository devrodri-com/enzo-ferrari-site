import Image from 'next/image';

interface SiteFooterProps {
  name: string;
  role: string;
  context: string;
  location: string;
  copyright: string;
  madeByPrefix: string;
  madeByName: string;
}

// Íconos SVG inline (monocromos, blanco/70, hover a blanco)
const InstagramIcon = () => (
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
);

const LinkedInIcon = () => (
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
);

const EmailIcon = () => (
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
);

const WhatsAppIcon = () => (
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
);

export default function SiteFooter({
  name,
  role,
  context,
  location,
  copyright,
  madeByPrefix,
  madeByName,
}: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#141615] border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 pt-16 pb-12">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
          {/* Columna izquierda: identidad + datos + links */}
          <div className="space-y-6">
            {/* Identidad */}
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-white">
                {name}
              </h3>
              <p className="text-sm text-white/80">
                {role}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                {context}
              </p>
              <p className="text-sm text-white/60">
                {location}
              </p>
            </div>

            {/* Links sociales con íconos */}
            <div className="flex flex-wrap gap-6 pt-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ea_enzoferrari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors no-underline"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ea-enzoferrari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors no-underline"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>

              {/* Email */}
              <a
                href="mailto:enzoisef2019@gmail.com"
                className="text-white/70 hover:text-white transition-colors no-underline"
                aria-label="Email"
              >
                <EmailIcon />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/59899719422"
                className="text-white/70 hover:text-white transition-colors no-underline"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Columna derecha: avatar */}
          <div className="flex md:justify-end justify-center">
            <div className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]">
              <Image
                src="/images/footer/enzo-profile.png"
                alt={name}
                fill
                className="rounded-full object-cover border border-[#2C3A44]"
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 180px, 200px"
              />
            </div>
          </div>
        </div>

        {/* Línea legal final */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            {/* Copyright */}
            <div>
              {copyright.replace('{year}', year.toString())}
            </div>

            {/* Crédito */}
            <div className="text-sm text-white/60">
              {madeByPrefix}{' '}
              <a
                href="https://www.devrodri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 hover:text-white transition-colors no-underline"
              >
                {madeByName}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
