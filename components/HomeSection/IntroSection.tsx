import Image from 'next/image'
import Link from 'next/link'

const highlights = [
  { value: '5+', label: 'Anni di esperienza' },
  { value: '50+', label: 'Progetti completati' },
  { value: '30+', label: 'Clienti soddisfatti' },
]

export default function IntroSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Colonna immagine ──────────────────────── */}
        <div className="relative">
          {/* Glow decorativo */}
          <div
            aria-hidden
            className="absolute -inset-4 rounded-3xl bg-indigo-600/10 blur-2xl"
          />

          {/* Cornice immagine */}
          <div className="relative rounded-2xl overflow-hidden border border-white/8 aspect-[4/5] bg-white/4">
            {/*
              Sostituisci il placeholder qui sotto con:
              <Image src="/il-tuo-file.jpg" alt="descrizione" fill className="object-cover" />
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/20">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
              <span className="text-sm font-medium tracking-wide">La tua immagine qui</span>
              <span className="text-xs opacity-60">Sostituisci con &lt;Image /&gt;</span>
            </div>
          </div>

          {/* Badge flottante */}
          <div className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-[#111] px-5 py-4 shadow-xl">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Dal</p>
            <p className="text-3xl font-bold text-white">2019</p>
          </div>
        </div>

        {/* ── Colonna testo ─────────────────────────── */}
        <div className="flex flex-col gap-8">

          {/* Label */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/8 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-indigo-400">
            Chi sono
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            Trasformo idee
            <br />
            in{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              esperienze digitali
            </span>
          </h2>

          {/* Testo descrittivo */}
          <div className="flex flex-col gap-4 text-white/55 leading-relaxed text-[15px]">
            <p>
              Sono uno sviluppatore freelance con la passione per il web.
              Progetto e realizzo siti e applicazioni che non solo funzionano
              alla perfezione, ma che le persone amano usare.
            </p>
            <p>
              Ogni progetto è unico: ascolto, progetto e realizzo soluzioni
              su misura — dal concept al deploy — con attenzione ai dettagli
              e rispetto per le scadenze.
            </p>
          </div>

          {/* Separatore + stats */}
          <div className="flex flex-wrap gap-8 pt-2 border-t border-white/8">
            {highlights.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="text-xs text-white/40 mt-1 tracking-wide uppercase">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-white/90"
            >
              Scopri di più
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 16 16" fill="none"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/contatti"
              className="text-sm font-medium text-white/50 hover:text-white transition-colors underline underline-offset-4"
            >
              Contattaci
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
