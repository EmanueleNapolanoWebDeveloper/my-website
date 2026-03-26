import Link from 'next/link'
import Image from 'next/image'

const currentYear = new Date().getFullYear()

const links = {
  navigation: [
    { label: 'Home',       href: '/' },
    { label: 'Servizi',    href: '/servizi' },
    { label: 'Portfolio',  href: '/portfolio' },
    { label: 'Chi sono',   href: '/about' },
    { label: 'Contatti',   href: '/contatti' },
  ],
  services: [
    { label: 'Sito web professionale',      href: '/servizi' },
    { label: 'E-commerce & negozio online', href: '/servizi' },
    { label: 'CMS & pannello di controllo', href: '/servizi' },
    { label: 'Ottimizzazione & SEO',        href: '/servizi' },
    { label: 'Manutenzione & supporto',     href: '/servizi' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Top grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link href="/" className="inline-flex hover:opacity-75 transition-opacity duration-200">
              <Image
                src="/assets/webSiteImages/LogoN.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">
              Sviluppatore freelance specializzato in soluzioni digitali
              per piccole e medie imprese.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link utili */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/25">
              Link utili
            </h3>
            <ul className="flex flex-col gap-3">
              {links.navigation.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servizi */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/25">
              Servizi
            </h3>
            <ul className="flex flex-col gap-3">
              {links.services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/25">
              Contatti
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:postmaster@enwebdeveloper.it"
                  className="flex items-start gap-3 text-sm text-white/45 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                  postmaster@enwebdeveloper.it
                </a>
              </li>
              <li>
                <a
                  href="tel:+393286208187"
                  className="flex items-start gap-3 text-sm text-white/45 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +39 328 620 8187
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-white/45">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  Italia — Disponibile da remoto
                </span>
              </li>
            </ul>

            <Link
              href="/contatti"
              className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-white/8 border border-white/10 px-4 py-2 text-xs font-medium text-white/70 hover:bg-white/15 hover:text-white transition-all duration-200"
            >
              Scrivimi
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>

        {/* ── Bottom bar ───────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {currentYear} EN Web Developer. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-white/25 hover:text-white/60 transition-colors">
              Privacy policy
            </Link>
            <Link href="/cookie" className="text-xs text-white/25 hover:text-white/60 transition-colors">
              Cookie policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
