import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Scopri i miei ultimi progetti: siti web, e-commerce, CMS e applicazioni su misura.',
}

const colorMap: Record<string, { border: string; badge: string; dot: string }> = {
  indigo: {
    border: 'hover:border-indigo-500/60',
    badge: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
    dot: 'bg-indigo-500',
  },
  violet: {
    border: 'hover:border-violet-500/60',
    badge: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
    dot: 'bg-violet-500',
  },
  sky: {
    border: 'hover:border-sky-500/60',
    badge: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
    dot: 'bg-sky-500',
  },
  emerald: {
    border: 'hover:border-emerald-500/60',
    badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    dot: 'bg-emerald-500',
  },
  amber: {
    border: 'hover:border-amber-500/60',
    badge: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    dot: 'bg-amber-500',
  },
  rose: {
    border: 'hover:border-rose-500/60',
    badge: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    dot: 'bg-rose-500',
  },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-widest uppercase rounded-full bg-white/5 border border-white/10 text-white/50">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          I miei{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
            progetti
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-white/50 text-lg">
          Una selezione di lavori realizzati per clienti e progetti personali.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const c = colorMap[project.color] ?? colorMap.indigo
            return (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className={`group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/8 overflow-hidden transition-all duration-300 ${c.border} hover:bg-white/[0.06]`}
              >
                {/* Cover image */}
                <div className="relative w-full aspect-[16/9] bg-white/[0.04] overflow-hidden">
                  {project.images[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`w-3 h-3 rounded-full ${c.dot} opacity-30`} />
                    </div>
                  )}
                  {/* Year badge */}
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-xs text-white/60">
                    {project.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                    <h2 className="text-base font-semibold group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  <p className="text-sm text-white/45 leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${c.badge}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/40">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
