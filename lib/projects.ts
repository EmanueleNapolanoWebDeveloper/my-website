export type Project = {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  color: string
  year: number
  link?: string
  github?: string
  features: string[]
  images: string[]   // [0] = cover, resto = gallery
}

export const projects: Project[] = [
  {
    slug: 'ecommerce-bazar',
    title: 'E-Commerce Bazar',
    description: 'Store online completo per brand di abbigliamento con carrello, pagamenti Stripe e gestione ordini.',
    longDescription:
      `Sviluppo di un e-commerce full-stack per un brand di moda italiana, progettato per offrire un’esperienza di acquisto moderna e sicura. La piattaforma include un catalogo prodotti con filtri avanzati, carrello persistente e checkout integrato con Stripe. 
  Il sistema è dotato di un pannello amministrativo completo per la gestione di ordini, prodotti e inventario. Inoltre, integra funzionalità basate su intelligenza artificiale per il controllo automatico dei contenuti: riconoscimento immagini per individuare elementi offensivi e analisi dei testi per garantire qualità e conformità. 
  L’obiettivo è automatizzare i processi, migliorare la sicurezza dei contenuti e offrire una gestione efficiente e scalabile dell’e-commerce.`,
    tags: ['Laravel', 'LiveWire', 'BootStrap', 'MySql', 'OpenAi'],
    color: 'indigo',
    year: 2024,
    images: [
      '/assets/projects/bazar/bazar1.webp',
      '/assets/projects/bazar/bazar2.webp',
      '/assets/projects/bazar/bazar3.webp',
      '/assets/projects/bazar/bazar4.webp',
      '/assets/projects/bazar/bazar5.webp'
    ],
    features: [
      'Catalogo con filtri per taglia, colore e categoria',
      'Area utente con storico ordini',
      'Pannello admin per gestione prodotti',
      'SEO ottimizzato con metadata dinamici',
      'Plugin AI per riconoscimento Immagini'
    ],
    link: '',
  },
  {
    slug: 'amarcord-restaurant',
    title: 'Sito Web per Ristorante – Amarcord Restaurant',

    description: 'Sito vetrina moderno per ristoranti con menu online, prenotazioni e presenza digitale ottimizzata.',

    longDescription:
      'Sviluppo di un sito web professionale per Amarcord Restaurant, progettato per valorizzare l’identità del locale e migliorare la visibilità online. Il sito consente ai clienti di consultare il menu, visualizzare immagini dei piatti e prenotare un tavolo in modo semplice e veloce, anche da dispositivi mobili.',

    tags: ['Next.js', 'Tailwind CSS', 'SEO', 'Responsive Design'],

    color: 'amber',
    year: 2025,

    images: [
      '/assets/projects/amarcord/amarcorddesktop.png',
      '/assets/projects/amarcord/amarcorddesktop2.png',
      '/assets/projects/amarcord/amarcorddesktop3.png',
      '/assets/projects/amarcord/amarcordtablet.png',
      '/assets/projects/amarcord/amarcordtablet2.png',
      '/assets/projects/amarcord/amarcordtablet3.png',
      '/assets/projects/amarcord/amarcordmobile.png',
      '/assets/projects/amarcord/amarcordmobile2.png',

    ],

    features: [
      'Menu digitale consultabile online',
      'Sezione galleria per valorizzare piatti e ambiente',
      'Sistema di prenotazione tavoli',
      'Design responsive ottimizzato per smartphone',
      'Ottimizzazione SEO per ricerche locali',
      'Contatti rapidi e integrazione con Google Maps',
    ],
    link: 'https://amarcordrestaurant.com'
  },
  {
    slug: 'otowell-app',
    title: 'Gestionale per Farmacie e Promotori – Otowell',

    description: 'Web app per la gestione di lead e clienti nel settore farmaceutico, con dashboard per farmacie e amministratori.',

    longDescription:
      `Sviluppo di una web app gestionale per il settore farmaceutico, progettata per facilitare la raccolta e la gestione dei contatti interessati a servizi specifici (come apparecchi acustici). La piattaforma consente alle farmacie di inserire e monitorare i potenziali clienti, mentre il super admin ha una visione completa di tutte le strutture e dei dati raccolti.

    Il sistema include dashboard dedicate per farmacie e amministratori, permettendo di organizzare i lead, tracciare lo stato dei contatti e ottimizzare le attività di promozione.L’obiettivo è migliorare la gestione commerciale e centralizzare le informazioni in un unico strumento semplice ed efficace.`,

    tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],

    color: 'sky',
    year: 2024,

    images: [
      '/assets/projects/otowell/admindash.webp',
      '/assets/projects/otowell/dashboardUser.webp',
      '/assets/projects/otowell/deniedOtowell.webp',
      '/assets/projects/otowell/homeOtowell.webp',
      '/assets/projects/otowell/registerotowell.webp'
    ],

    features: [
      'Registrazione e gestione farmacie',
      'Dashboard dedicata per ogni farmacia',
      'Inserimento e gestione lead/clienti',
      'Sistema multi-ruolo (super admin / farmacia)',
      'Monitoraggio stato dei contatti',
      'Centralizzazione dati in un unico pannello',
    ],

    link: ''
  },
  {
    slug: 'p-maxhairstudio',
    title: 'Gestionale Web per Barber Shop – P-Max Hair Studio',

    description: 'Web app per la gestione completa di un barbershop: prenotazioni, utenti e dashboard amministrativa.',

    longDescription:
      'Sviluppo di una web app gestionale su misura per P-Max Hair Studio, progettata per digitalizzare la gestione degli appuntamenti e migliorare l’organizzazione del salone. La piattaforma consente ai clienti di prenotare online, mentre barbieri e amministratori possono gestire il calendario, i servizi e le disponibilità in modo semplice ed efficiente.',

    tags: ['Next.js', 'Supabase', 'Tailwind CSS'],

    color: 'emerald',
    year: 2025,

    images: [
      '/assets/projects/pmax/pmaxCell.png',
      '/assets/projects/pmax/PmaxDesktop.png',
      '/assets/projects/pmax/PmaxTablet.png',
      '/assets/projects/pmax/pmaxmob1.webp',
      '/assets/projects/pmax/pmaxmob2.webp',
      '/assets/projects/pmax/pmaxmob3.webp',
      '/assets/projects/pmax/pmaxtab1.webp',
      '/assets/projects/pmax/pmaxtab2.webp',
      '/assets/projects/pmax/pmaxtab3.webp',
      '/assets/projects/pmax/pmaxdes1.webp',
      '/assets/projects/pmax/pmaxdes2.webp',
      '/assets/projects/pmax/pmaxdes3.webp',
    ],

    features: [
      'Sistema di prenotazione online (data, orario, barbiere, servizi)',
      'Dashboard admin con gestione completa appuntamenti',
      'Dashboard barbiere con calendario personale',
      'Controllo sovrapposizioni per evitare doppie prenotazioni',
      'Autenticazione utenti con login (cliente, barbiere, admin)',
      'Calendario interattivo per gestione appuntamenti',
      'Gestione servizi e disponibilità',
    ],

    link: 'https://pmaxhairstudio.it/'
  },
  {
    slug: 'portfolio-fotografo',
    title: 'Mario Rossi Photografy',
    description: 'Portfolio visivo per fotografo professionista con gallerie dinamiche e lightbox.',
    longDescription:
      "Portfolio elegante per un fotografo professionista che aveva bisogno di mostrare il proprio lavoro in modo impeccabile. Gallerie categorizzate, lightbox ad alta risoluzione e CMS per caricare nuove foto in autonomia.",
    tags: ['Wordpress', 'Elementor', 'CSS', 'Javascript'],
    color: 'rose',
    year: 2022,
    images: [
      '/assets/projects/enphoto/enphotodesk.webp',
      '/assets/projects/enphoto/enphotodesk2.webp',
      '/assets/projects/enphoto/enphototab.webp',
      '/assets/projects/enphoto/enphototab2.webp',
      '/assets/projects/enphoto/enphotomob.webp',
      '/assets/projects/enphoto/enphotomob2.webp',
      '/assets/projects/enphoto/enphotomob3.webp'
    ],
    features: [
      'Gallerie categorizzate con lightbox',
      'Ottimizzazione immagini con Cloudinary',
      'CMS per upload autonomo delle foto',
      'Contatto diretto via form',
      'Design minimalista ad alto impatto visivo',
    ],
    link: '',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
