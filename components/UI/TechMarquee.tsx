// Tech stack logos — sostituisci `icon` con <Image> se hai i file in /public
const stacks: { name: string; color: string; bg: string; icon: React.ReactNode }[] = [
  {
    name: 'React',
    color: '#61DAFB',
    bg: 'rgba(97,218,251,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        <circle cx="12" cy="12" r="2.4" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.06)',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.5L8 8.5v7H9.5v-4.3l6.3 8.3c-.57.27-1.17.47-1.8.6V15.5z"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    bg: 'rgba(49,120,198,0.12)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
        <rect width="24" height="24" rx="3" fill="#3178C6"/>
        <path d="M13.5 14.5v1.7c.3.15.65.27 1.05.33.4.07.82.1 1.27.1.44 0 .85-.05 1.23-.14.38-.1.7-.25.98-.45.28-.2.5-.46.66-.78.16-.32.24-.7.24-1.14 0-.33-.05-.62-.14-.87a2 2 0 00-.42-.67 3.2 3.2 0 00-.7-.52 9 9 0 00-.97-.46 7 7 0 01-.6-.27.9.9 0 01-.36-.28.6.6 0 01-.12-.38c0-.13.03-.25.1-.35.06-.1.15-.18.26-.24.11-.06.25-.1.4-.13.16-.03.33-.04.52-.04.14 0 .28.01.44.04.16.02.31.06.46.12.15.05.3.12.43.2.14.08.26.18.37.3V12.1a5 5 0 00-.9-.25 6 6 0 00-1.08-.09c-.43 0-.83.05-1.2.14-.38.1-.7.24-.98.44-.28.2-.5.45-.66.76-.16.3-.24.67-.24 1.1 0 .54.15.99.46 1.35.3.36.78.67 1.42.93l.62.25c.2.08.37.17.5.26.14.1.24.2.31.32.07.12.1.26.1.42 0 .14-.03.27-.1.38a.8.8 0 01-.28.28c-.12.08-.27.13-.44.17-.18.04-.38.06-.6.06-.4 0-.78-.07-1.14-.22a3.3 3.3 0 01-.97-.64zm-3.2-3.84H12v7.3h1.6v-7.3h2.1V9.1H8.2v1.56h2.1z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    bg: 'rgba(247,223,30,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
        <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
        <path d="M7 17.5c.4.7 1 1.1 1.9 1.1 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.25C7 15 6.1 14.2 6.1 12.7c0-1.4 1.1-2.4 2.7-2.4 1.2 0 2 .4 2.6 1.5l-1.4.9c-.3-.55-.65-.76-1.2-.76-.55 0-.9.34-.9.76 0 .53.35.75 1.15 1.08l.6.25c1.45.63 2.35 1.4 2.35 3 0 1.7-1.35 2.6-3.15 2.6-1.77 0-2.9-.87-3.47-2zM13.5 17.3c.3.53.57.98 1.2.98.6 0 .98-.23.98-1.14v-6.8h1.8v6.83c0 1.88-1.1 2.73-2.7 2.73-1.45 0-2.3-.75-2.72-1.65z" fill="#333"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    color: '#38BDF8',
    bg: 'rgba(56,189,248,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.1 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.5 12 7 12z" fill="#38BDF8"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#68A063',
    bg: 'rgba(104,160,99,0.1)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="#68A063" strokeWidth="1.4" fill="none"/>
        <path d="M12 2v20M3 7l9 5 9-5" stroke="#68A063" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    name: 'Laravel',
    color: '#FF2D20',
    bg: 'rgba(255,45,32,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        <path d="M21.7 7.3l-3-5.2a.8.8 0 00-.7-.4H6a.8.8 0 00-.7.4l-3 5.2a.8.8 0 000 .8l9 15.6a.8.8 0 001.4 0l9-15.6a.8.8 0 000-.8z" fill="#FF2D20" opacity=".9"/>
        <path d="M12 4.5L7 13h10L12 4.5z" fill="white" opacity=".25"/>
      </svg>
    ),
  },
  {
    name: 'Vue.js',
    color: '#42B883',
    bg: 'rgba(66,184,131,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        <path d="M12 21L1 3h4.5L12 14.5 18.5 3H23L12 21z" fill="#42B883"/>
        <path d="M12 21L7 3h3L12 9.5 14 3h3L12 21z" fill="#35495E"/>
      </svg>
    ),
  },
  {
    name: 'Docker',
    color: '#2496ED',
    bg: 'rgba(36,150,237,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        <path d="M13 9h2V7h-2v2zm-3 0h2V7h-2v2zm-3 0h2V7H7v2zm3-3h2V4h-2v2zm3 0h2V4h-2v2zM7 12h2v-2H7v2zm3 0h2v-2h-2v2zm3 0h2v-2h-2v2z" fill="#2496ED"/>
        <path d="M21.8 11.2a3 3 0 00-2-.6 3 3 0 00-.4-2.1 4.3 4.3 0 00-2.4 1.5H3a2 2 0 00-2 2v1c0 3.3 2.7 6 6 6h7c2.7 0 5-1.8 5.8-4.3a3 3 0 002-3.5z" fill="#2496ED" opacity=".5"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    color: '#4169E1',
    bg: 'rgba(65,105,225,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        <ellipse cx="12" cy="8" rx="8" ry="4" stroke="#4169E1" strokeWidth="1.4" fill="none"/>
        <path d="M4 8v8c0 2.2 3.58 4 8 4s8-1.8 8-4V8" stroke="#4169E1" strokeWidth="1.4" fill="none"/>
        <path d="M4 12c0 2.2 3.58 4 8 4s8-1.8 8-4" stroke="#4169E1" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    bg: 'rgba(71,162,72,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        <path d="M12 2C9 7 7 10 7 14a5 5 0 0010 0c0-4-2-7-5-12z" fill="#47A248"/>
        <path d="M12 2v18.5" stroke="#fff" strokeWidth="1" opacity=".4"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    color: '#F24E1E',
    bg: 'rgba(242,78,30,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        <rect x="6" y="2" width="5" height="5" rx="2" fill="#F24E1E"/>
        <rect x="13" y="2" width="5" height="5" rx="2" fill="#FF7262"/>
        <rect x="6" y="9" width="5" height="5" rx="2" fill="#A259FF"/>
        <rect x="6" y="16" width="5" height="5" rx="2" fill="#0ACF83"/>
        <circle cx="15.5" cy="11.5" r="2.5" fill="#1ABCFE"/>
      </svg>
    ),
  },
  {
    name: 'Git',
    color: '#F05032',
    bg: 'rgba(240,80,50,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        <path d="M22.2 11.2l-9.4-9.4a1.1 1.1 0 00-1.6 0L9.1 3.9l2 2a1.3 1.3 0 011.6 1.65l1.9 1.9a1.3 1.3 0 011.7 1.24 1.3 1.3 0 01-1.3 1.3 1.3 1.3 0 01-1.3-1.3c0-.15.03-.3.07-.42L11.9 8.4v5.3a1.3 1.3 0 01.34 2.54 1.3 1.3 0 01-1.3-1.3 1.3 1.3 0 01.65-1.12V8.27a1.3 1.3 0 01-.65-1.12 1.3 1.3 0 01.07-.43L9.06 4.8 1.8 12.06a1.1 1.1 0 000 1.56l9.4 9.4a1.1 1.1 0 001.57 0l9.4-9.4a1.1 1.1 0 000-1.56" fill="#F05032"/>
      </svg>
    ),
  },
  {
    name: 'PHP',
    color: '#777BB4',
    bg: 'rgba(119,123,180,0.1)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        <ellipse cx="12" cy="12" rx="11" ry="6" stroke="#777BB4" strokeWidth="1.4" fill="none"/>
        <text x="5.5" y="16" fontSize="7" fontWeight="bold" fill="#777BB4" fontFamily="monospace">php</text>
      </svg>
    ),
  },
]

import React from 'react'

// Raddoppia per il loop seamless
const items = [...stacks, ...stacks]

export default function TechMarquee() {
  return (
    <section className="relative bg-[#0a0a0a] py-14 border-y border-white/6 overflow-hidden">

      {/* Label */}
      <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-white/25 mb-8">
        Stack tecnologico
      </p>

      {/* Fade edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }}
      />

      {/* Track */}
      <div className="flex w-max animate-marquee gap-4 px-4">
        {items.map(({ name, color, bg, icon }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-2.5 rounded-full px-4 py-2.5 border border-white/8 cursor-default select-none transition-colors duration-200 hover:border-white/20"
            style={{ background: bg }}
          >
            {icon}
            <span className="text-sm font-medium whitespace-nowrap" style={{ color }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
