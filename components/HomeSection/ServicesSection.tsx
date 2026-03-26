import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    color:  'from-indigo-500 to-indigo-600',
    glow:   'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    accent: 'text-indigo-400',
    image:  '/assets/webSiteImages/services/webSites.webp',
    tag:    'Presenza online',
    title:  'Sito web professionale',
    description:
      'Il tuo biglietto da visita digitale: un sito veloce, moderno e ottimizzato per Google. Lo costruisco su misura — nessun template uguale per tutti.',
    includes: [
      'Design personalizzato e originale',
      'SEO on-page sin dall\'inizio',
      'Perfetto su mobile e tablet',
      'Certificato SSL incluso',
      'Form di contatto e mappe integrate',
      'Velocità di caricamento elevata',
    ],
    caveats: [
      'Richiede contenuti (testi e foto) da parte tua',
      'Posizionamento Google richiede tempo (3–6 mesi)',
      'Non include gestione dei contenuti post-consegna',
    ],
    ideal:    'Negozi, studi professionali, artigiani, ristoranti',
    timeline: '2 – 4 settimane',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    color:  'from-violet-500 to-violet-600',
    glow:   'bg-violet-500/10',
    border: 'border-violet-500/20',
    accent: 'text-violet-400',
    image:  '/assets/webSiteImages/services/ecommerce.webp',
    tag:    'Vendite online',
    title:  'E-commerce & negozio online',
    description:
      'Uno shop completo per vendere prodotti o servizi 24/7. Gestisci catalogo, ordini e pagamenti da un pannello semplice — senza dipendere da nessun tecnico.',
    includes: [
      'Catalogo prodotti con varianti e filtri',
      'Pagamenti sicuri (Stripe, PayPal)',
      'Gestione ordini e notifiche automatiche',
      'Pannello admin intuitivo',
      'Integrazione corrieri e calcolo spedizioni',
      'Schede prodotto ottimizzate SEO',
    ],
    caveats: [
      'Commissioni di transazione dei gateway (es. Stripe ~1,5%)',
      'Gestione magazzino e spedizioni rimane a tuo carico',
      'Budget più alto rispetto a un sito vetrina',
    ],
    ideal:    'Negozi fisici che vogliono vendere online, brand di prodotto',
    timeline: '4 – 8 settimane',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    color:  'from-sky-500 to-sky-600',
    glow:   'bg-sky-500/10',
    border: 'border-sky-500/20',
    accent: 'text-sky-400',
    image:  '/assets/webSiteImages/services/CMS.png',
    tag:    'Gestione contenuti',
    title:  'CMS & pannello di controllo',
    description:
      'Aggiorna testi, immagini e prodotti in autonomia, senza toccare una riga di codice. Ti consegno il sito con una guida e una sessione di formazione inclusa.',
    includes: [
      'Interfaccia di gestione intuitiva',
      'Formazione personalizzata inclusa',
      'Aggiornamento testi, immagini e menu',
      'Gestione blog o news',
      'Accessi multipli con ruoli diversi',
      'Backup automatici',
    ],
    caveats: [
      'Piccola curva di apprendimento iniziale',
      'Modifiche strutturali al layout richiedono ancora uno sviluppatore',
      'Alcuni CMS richiedono aggiornamenti periodici',
    ],
    ideal:    'Chi pubblica contenuti frequentemente: blog, ristoranti, eventi',
    timeline: '3 – 5 settimane',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    color:  'from-emerald-500 to-emerald-600',
    glow:   'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    accent: 'text-emerald-400',
    image:  '/assets/webSiteImages/services/SEO.webp',
    tag:    'Performance',
    title:  'Ottimizzazione & manutenzione',
    description:
      'Il tuo sito esiste già ma è lento, non appare su Google o ha tecnologie vecchie? Me ne occupo io: audit, interventi mirati e monitoraggio continuo.',
    includes: [
      'Audit completo di velocità e sicurezza',
      'Ottimizzazione immagini e codice',
      'Aggiornamento tecnologie e librerie',
      'Backup automatici e monitoraggio uptime',
      'Report mensile delle prestazioni',
      'Supporto prioritario via email',
    ],
    caveats: [
      'I risultati SEO non sono immediati',
      'Siti molto vecchi potrebbero richiedere una riscrittura parziale',
      'Il piano di manutenzione è un costo ricorrente mensile',
    ],
    ideal:    'Chi ha già un sito che non converte o è lento',
    timeline: 'Audit in 1 settimana, interventi variabili',
  },
]

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2 8 6 12 14 4" />
  </svg>
)

const WarnIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6" />
    <line x1="8" y1="5" x2="8" y2="8.5" />
    <circle cx="8" cy="11" r="0.5" fill="currentColor" />
  </svg>
)

export default function ServicesSection() {
  return (
    <section className="relative bg-[#080808] py-28 px-6 border-t border-white/6 overflow-hidden">

      {/* Animated background orbs — GPU-accelerated, pointer-events off */}
      <div aria-hidden className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-violet-600/[0.07] blur-[120px] animate-float will-change-transform" />
      <div aria-hidden className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-sky-500/[0.06] blur-[100px] animate-float-reverse will-change-transform" />
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-indigo-500/[0.04] blur-[90px] animate-float will-change-transform" style={{ animationDelay: '-3s' }} />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/8 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-violet-400 mb-6">
            Cosa faccio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
            Soluzioni digitali
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              pensate per le PMI
            </span>
          </h2>
          <p className="text-white/50 text-[15px] leading-relaxed">
            Ogni servizio è descritto con trasparenza: cosa include, cosa comporta
            e per chi è adatto. Nessuna sorpresa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map(({ icon, color, glow, border, accent, image, tag, title, description, includes, caveats, ideal, timeline }) => (
            <div
              key={title}
              className={`group relative rounded-2xl border ${border} bg-white/[0.02] flex flex-col overflow-hidden transition-all duration-300 hover:bg-white/[0.04] hover:border-white/15`}
            >
              {/* Glow on hover */}
              <div className={`absolute -top-16 -right-16 w-64 h-64 rounded-full ${glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Cover image */}
              <div className="relative w-full aspect-[16/7] overflow-hidden bg-white/[0.03]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* gradient overlay per leggibilità */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
              </div>

              {/* Header card */}
              <div className="relative flex items-start gap-5 p-8 pb-5">
                <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-white/30 mb-1">{tag}</p>
                  <h3 className="text-xl font-semibold text-white leading-snug">{title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="relative text-sm text-white/50 leading-relaxed px-8 pb-7">
                {description}
              </p>

              {/* Include + Caveats */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-px border-t border-white/6 bg-white/6">

                {/* Include */}
                <div className="bg-[#080808] p-7">
                  <p className={`text-xs font-semibold tracking-wider uppercase mb-4 ${accent}`}>
                    Cosa include
                  </p>
                  <ul className="flex flex-col gap-3">
                    {includes.map((item) => (
                      <li key={item} className={`flex items-start gap-2 text-xs ${accent}`}>
                        <CheckIcon />
                        <span className="text-white/55">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Caveats */}
                <div className="bg-[#080808] p-7">
                  <p className="text-xs font-semibold tracking-wider uppercase mb-4 text-amber-400/80">
                    Da sapere
                  </p>
                  <ul className="flex flex-col gap-3">
                    {caveats.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-amber-400/70">
                        <WarnIcon />
                        <span className="text-white/45">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer card */}
              <div className="relative flex flex-wrap items-center justify-between gap-3 px-8 py-5 border-t border-white/6">
                <div className="flex items-center gap-2 text-xs text-white/30">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="8" cy="8" r="6"/><polyline points="8 5 8 8 10 10"/>
                  </svg>
                  {timeline}
                </div>
                <div className="flex items-center gap-2 text-xs text-white/30">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M2 13c0-3 2-4 6-4s6 1 6 4"/><circle cx="8" cy="5" r="3"/>
                  </svg>
                  {ideal}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/8 bg-white/[0.02] px-8 py-7">
          <div>
            <p className="text-white font-semibold text-lg">Hai un progetto in mente?</p>
            <p className="text-white/40 text-sm mt-1">Parliamone — un preventivo è sempre gratuito e senza impegno.</p>
          </div>
          <Link
            href="/contatti"
            className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-white/90"
          >
            Richiedi un preventivo
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
