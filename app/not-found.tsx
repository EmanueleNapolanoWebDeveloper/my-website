import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Pagina non trovata',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="text-center">

        {/* 404 */}
        <p className="text-[120px] sm:text-[180px] font-bold leading-none bg-gradient-to-b from-white/10 to-white/[0.02] bg-clip-text text-transparent select-none">
          404
        </p>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-semibold mt-2 mb-3">
          Pagina non trovata
        </h1>
        <p className="text-white/45 text-base max-w-sm mx-auto leading-relaxed mb-10">
          L&apos;indirizzo che hai cercato non esiste o è stato spostato.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Torna alla home
          </Link>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Contattami
          </Link>
        </div>

      </div>
    </main>
  )
}
