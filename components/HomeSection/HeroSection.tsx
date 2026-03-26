import Link from 'next/link'

const DELAY = (n: number) => ({ animationDelay: `${n}ms` })

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

      {/* ── Animated blobs ─────────────────────────── */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-float-reverse pointer-events-none absolute -bottom-40 -right-24 w-[500px] h-[500px] rounded-full bg-violet-500/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[100px]"
        style={{ animationDelay: '2s' }}
      />

      {/* ── Grid overlay ──────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.5) 40px),' +
            'repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.5) 40px)',
        }}
      />

      {/* ── Content ───────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Headline */}
        <h1 className="text-white font-bold tracking-tight leading-[1.08]">
          <span
            className="animate-fade-up block text-5xl sm:text-6xl md:text-7xl"
            style={DELAY(200)}
          >
            Creiamo esperienze
          </span>
          <span
            className="animate-fade-up block text-5xl sm:text-6xl md:text-7xl mt-1"
            style={DELAY(350)}
          >
            digitali che
          </span>
          <span
            className="animate-fade-up block text-5xl sm:text-6xl md:text-7xl mt-1 bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent"
            style={DELAY(480)}
          >
            lasciano il segno.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up mt-8 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          style={DELAY(600)}
        >
          Design moderno, performance eccellenti e codice pulito.
          Trasformiamo le tue idee in prodotti web che funzionano davvero.
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={DELAY(750)}
        >
          <Link
            href="/contatti"
            className="group relative inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            Inizia il progetto
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/30 hover:text-white hover:bg-white/5"
          >
            Vedi il portfolio
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-up mt-16 flex flex-wrap justify-center gap-10 border-t border-white/8 pt-10"
          style={DELAY(900)}
        >
          {[
            { value: '50+', label: 'Progetti consegnati' },
            { value: '98%', label: 'Clienti soddisfatti' },
            { value: '5★',  label: 'Rating medio' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-white">{value}</p>
              <p className="mt-1 text-xs text-white/40 tracking-wide uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
  

    </section>
  )
}
