import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servizi',
  description: 'Scopri tutti i servizi digitali su misura per le PMI: siti web, e-commerce, CMS, SEO e molto altro.',
}

/* ─── Dati ────────────────────────────────────────────────────── */

const pros = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Aperto 24 ore su 24, 7 giorni su 7',
    desc: 'Il tuo sito lavora per te anche di notte, nei weekend e durante le ferie. I clienti ti trovano e si informano sempre.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Raggiungi nuovi clienti',
    desc: 'Superi i confini fisici del tuo negozio o ufficio. Google ti porta nuovi clienti che altrimenti non ti avrebbero mai trovato.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Più credibilità e fiducia',
    desc: "Oltre l'80% delle persone cerca online prima di acquistare. Un sito professionale trasmette serietà e differenzia dalla concorrenza.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Marketing più economico',
    desc: 'Rispetto ai volantini o alla pubblicità tradizionale, il digitale costa meno e misura i risultati in tempo reale.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Dati e analisi reali',
    desc: 'Sai esattamente quante persone visitano il tuo sito, cosa cercano e da dove arrivano. Decisioni basate sui fatti.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Vendite anche online',
    desc: "Con un e-commerce puoi vendere prodotti o servizi dal sito, ampliando le entrate senza aumentare i costi fissi.",
  },
]

const cons = [
  {
    title: 'Investimento iniziale',
    desc: 'Realizzare un sito professionale richiede un budget iniziale. Ma è un investimento, non un costo: il ritorno nel tempo è garantito.',
    solution: 'Offro soluzioni adatte a ogni fascia di budget, con pagamenti flessibili.',
  },
  {
    title: 'Richiede aggiornamenti',
    desc: 'Un sito non è "fai e dimentica": va aggiornato con contenuti freschi e mantenuto tecnicamente nel tempo.',
    solution: 'Mi occupo io della manutenzione con piani mensili accessibili.',
  },
  {
    title: 'Concorrenza online',
    desc: 'Online ci sono già tanti competitor. Bisogna distinguersi con un sito ben fatto e ottimizzato per Google.',
    solution: 'Design su misura e SEO incluso sin dall\'inizio per emergere dalla massa.',
  },
  {
    title: 'Curva di apprendimento',
    desc: 'Gestire autonomamente un sito può sembrare complicato se non si ha esperienza con il digitale.',
    solution: 'Installo CMS intuitivi e fornisco formazione. Puoi aggiornare tutto da solo.',
  },
]

const services = [
  {
    tag: 'Presenza online',
    title: 'Sito web professionale',
    desc: 'Il biglietto da visita digitale della tua azienda. Realizzo siti vetrina, istituzionali e landing page veloci, moderni e ottimizzati per Google. Ogni progetto è costruito su misura: nessun template uguale per tutti.',
    features: [
      'Design personalizzato e originale',
      'Ottimizzato per Google (SEO on-page)',
      'Perfetto su smartphone e tablet',
      'Velocità di caricamento elevata',
      'Certificato SSL incluso',
      'Form di contatto e integrazione mappe',
    ],
    color: 'indigo',
    ideal: 'Ideale per: negozi, studi professionali, artigiani, ristoranti, aziende B2B',
  },
  {
    tag: 'Vendite online',
    title: 'E-commerce & negozio online',
    desc: "Vendi i tuoi prodotti o servizi direttamente dal web, 24 ore su 24. Costruisco shop online completi con gestione catalogo, pagamenti sicuri e un'esperienza d'acquisto fluida che converte i visitatori in clienti.",
    features: [
      'Catalogo prodotti illimitato',
      'Pagamenti sicuri (carta, PayPal, bonifico)',
      'Gestione ordini e inventario',
      'Pannello admin intuitivo',
      'Spedizioni e fatturazione automatica',
      'Ottimizzato per mobile e velocità',
    ],
    color: 'violet',
    ideal: 'Ideale per: negozi fisici che vogliono vendere online, produttori, artigiani',
  },
  {
    tag: 'Gestione contenuti',
    title: 'CMS & pannello di controllo',
    desc: 'Non dipendere sempre da un tecnico per aggiornare il tuo sito. Integro sistemi di gestione contenuti semplici e intuitivi: aggiorni testi, immagini, prezzi e news in autonomia, dal PC o dallo smartphone.',
    features: [
      'Interfaccia semplice, nessuna competenza tecnica',
      'Aggiorna contenuti da qualsiasi dispositivo',
      'Gestione notizie, blog e promozioni',
      'Ruoli utente (admin, editor, ecc.)',
      'Formazione e supporto iniziale inclusi',
      'Backup automatico dei contenuti',
    ],
    color: 'sky',
    ideal: 'Ideale per: aziende con aggiornamenti frequenti, studi, associazioni',
  },
  {
    tag: 'Visibilità su Google',
    title: 'SEO & ottimizzazione',
    desc: 'Essere online non basta: bisogna essere trovati. Ottimizza il tuo sito per scalare le posizioni su Google e portare traffico di qualità, fatto di persone che cercano esattamente quello che offri.',
    features: [
      'Analisi delle parole chiave del tuo settore',
      'Ottimizzazione tecnica del sito',
      'Contenuti ottimizzati per i motori di ricerca',
      'Google Business Profile',
      'Report mensili con i progressi',
      'Link building e autorevolezza del dominio',
    ],
    color: 'emerald',
    ideal: 'Ideale per: qualsiasi attività che vuole più clienti da Google',
  },
  {
    tag: 'Performance & sicurezza',
    title: 'Manutenzione & supporto',
    desc: 'Il tuo sito è un asset importante e va protetto. Mi occupo di aggiornamenti, backup, sicurezza e performance in modo continuativo, così tu pensi al tuo lavoro e io penso al tuo sito.',
    features: [
      'Aggiornamenti software e sicurezza',
      'Backup giornalieri automatici',
      'Monitoraggio uptime 24/7',
      'Ottimizzazione velocità e performance',
      'Supporto tecnico prioritario',
      'Report mensile sullo stato del sito',
    ],
    color: 'amber',
    ideal: 'Ideale per: chi ha già un sito e vuole stare tranquillo',
  },
  {
    tag: 'Comunicazione',
    title: 'Email marketing & automazioni',
    desc: 'Rimani in contatto con i tuoi clienti in modo professionale. Creo newsletter, campagne email e automazioni che portano i clienti a tornare, aumentando il valore nel tempo di chi ti ha già scelto.',
    features: [
      'Template email brandizzati',
      'Campagne newsletter periodiche',
      'Automazioni (benvenuto, carrello abbandonato)',
      'Segmentazione del pubblico',
      'Report aperture e click',
      'Integrazione con sito e e-commerce',
    ],
    color: 'rose',
    ideal: 'Ideale per: e-commerce, negozi, studi con lista clienti attiva',
  },
]

const colorMap: Record<string, { badge: string; border: string; bullet: string }> = {
  indigo:  { badge: 'bg-indigo-50 text-indigo-600 border-indigo-100',  border: 'border-indigo-100 hover:border-indigo-200',  bullet: 'bg-indigo-400' },
  violet:  { badge: 'bg-violet-50 text-violet-600 border-violet-100',  border: 'border-violet-100 hover:border-violet-200',  bullet: 'bg-violet-400' },
  sky:     { badge: 'bg-sky-50 text-sky-600 border-sky-100',           border: 'border-sky-100 hover:border-sky-200',         bullet: 'bg-sky-400' },
  emerald: { badge: 'bg-emerald-50 text-emerald-700 border-emerald-100', border: 'border-emerald-100 hover:border-emerald-200', bullet: 'bg-emerald-400' },
  amber:   { badge: 'bg-amber-50 text-amber-700 border-amber-100',     border: 'border-amber-100 hover:border-amber-200',    bullet: 'bg-amber-400' },
  rose:    { badge: 'bg-rose-50 text-rose-600 border-rose-100',        border: 'border-rose-100 hover:border-rose-200',      bullet: 'bg-rose-400' },
}

const faq = [
  {
    q: 'Quanto costa un sito web?',
    a: 'Dipende dalla complessità del progetto. Un sito vetrina parte da poche centinaia di euro, un e-commerce è più articolato. Faccio sempre un preventivo gratuito e personalizzato prima di iniziare qualsiasi lavoro.',
  },
  {
    q: 'Quanto tempo ci vuole per realizzare un sito?',
    a: 'Un sito vetrina richiede in genere 2-4 settimane. Un e-commerce o un progetto più complesso può richiedere 4-8 settimane. I tempi dipendono anche dalla velocità con cui mi vengono forniti testi, immagini e materiali.',
  },
  {
    q: 'Posso gestire il sito da solo dopo la consegna?',
    a: 'Assolutamente sì. Integro sempre un pannello di controllo semplice e intuitivo. Fornisco anche una sessione di formazione iniziale così puoi aggiornare tutto in autonomia.',
  },
  {
    q: 'Il sito sarà visibile su Google?',
    a: 'Ogni sito che realizzo viene ottimizzato con le basi SEO (struttura, velocità, tag, sitemap). Per risultati più avanzati e posizionamenti competitivi, offro anche un servizio SEO dedicato.',
  },
  {
    q: 'Cosa succede se ho un problema dopo la consegna?',
    a: 'Offro un periodo di garanzia post-consegna e piani di manutenzione mensili. Non sparisco dopo aver consegnato il progetto: sono disponibile per supporto e aggiornamenti nel tempo.',
  },
  {
    q: 'Lavori solo con aziende della tua zona?',
    a: 'No, lavoro completamente da remoto con clienti da tutta Italia. Tutta la comunicazione e i meeting avvengono online, senza nessun problema.',
  },
]

/* ─── Page ────────────────────────────────────────────────────── */

export default function ServiziPage() {
  return (
    <main className="bg-white">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-indigo-400 mb-7">
            Servizi
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            Tutto quello che serve
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
              alla tua attività online
            </span>
          </h1>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Soluzioni digitali concrete, chiare e senza fronzoli.
            Progettate per chi gestisce un'attività reale e ha bisogno di risultati veri.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 hover:bg-white/90 transition-colors"
          >
            Richiedi un preventivo gratuito
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ══ PERCHÉ ESSERE ONLINE ════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-gray-500 mb-6">
              Perché essere online
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              La tua attività ha bisogno
              di una presenza digitale?
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Risposta breve: sì. Ma capire il perché — e anche gli aspetti da considerare —
              ti aiuta a prendere la decisione giusta per la tua PMI.
              Ecco una panoramica onesta e completa.
            </p>
          </div>

          {/* Vantaggi */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">I vantaggi di essere online</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pros.map(({ icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:border-gray-200 hover:bg-white transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                    {icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1.5">{title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Svantaggi + soluzioni */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Gli aspetti da considerare</h3>
              <span className="text-sm text-gray-400">(e come li risolvo)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {cons.map(({ title, desc, solution }) => (
                <div key={title} className="rounded-2xl border border-amber-100 bg-amber-50/40 p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    <p className="font-semibold text-gray-900">{title}</p>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-start gap-2 rounded-xl bg-white border border-emerald-100 px-4 py-3">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <p className="text-sm text-emerald-700 font-medium">{solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verdetto */}
          <div className="mt-12 rounded-2xl bg-gray-900 px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-white font-bold text-lg mb-1">Il verdetto?</p>
              <p className="text-white/60 text-sm leading-relaxed">
                I vantaggi superano di gran lunga gli svantaggi — che tra l'altro hanno tutti una soluzione concreta.
                Nel 2025, non essere online significa regalare clienti alla concorrenza.
              </p>
            </div>
            <Link href="/contatti" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white/90 transition-colors">
              Parliamone
            </Link>
          </div>

        </div>
      </section>

      {/* ══ SERVIZI ═════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-gray-500 mb-6">
              Cosa faccio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              I servizi che offro
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Ogni servizio è pensato per dare un risultato concreto alla tua attività.
              Niente di inutile, tutto ciò che serve.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {services.map(({ tag, title, desc, features, color, ideal }, i) => {
              const c = colorMap[color]
              return (
                <div key={title} className={`group rounded-3xl border ${c.border} bg-white overflow-hidden transition-all duration-300 hover:shadow-lg`}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''}`}>

                    {/* Immagine placeholder */}
                    <div className="relative aspect-[4/3] lg:aspect-auto bg-gray-100 flex flex-col items-center justify-center gap-3 text-gray-300 min-h-64">
                      {/*
                        Sostituisci con:
                        <Image src="/assets/servizi/nome.jpg" alt={title} fill className="object-cover" />
                      */}
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="M21 15l-5-5L5 21"/>
                      </svg>
                      <span className="text-sm font-medium">Immagine — {title}</span>
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${c.badge}`}>
                          {tag}
                        </span>
                      </div>
                    </div>

                    {/* Contenuto */}
                    <div className="flex flex-col justify-center gap-6 p-8 lg:p-10">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                        <p className="text-gray-500 text-[15px] leading-relaxed">{desc}</p>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`} />
                            <span className="text-sm text-gray-600">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">{ideal}</p>
                      <Link
                        href="/contatti"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors group/link w-fit"
                      >
                        Richiedi informazioni
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Domande frequenti</h2>
            <p className="text-gray-500">Le risposte alle domande che mi fanno più spesso le PMI.</p>
          </div>
          <div className="flex flex-col divide-y divide-gray-100">
            {faq.map(({ q, a }) => (
              <div key={q} className="py-6">
                <p className="font-semibold text-gray-900 mb-2">{q}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINALE ══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Pronto a portare la tua attività online?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Raccontami il tuo progetto. Analizzerò la tua situazione e ti proporrò
            la soluzione più adatta — senza impegno e senza costi nascosti.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contatti"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 hover:bg-white/90 transition-colors"
            >
              Contattami ora — è gratuito
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/70 hover:text-white hover:border-white/30 transition-all">
              Vedi i miei lavori
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
