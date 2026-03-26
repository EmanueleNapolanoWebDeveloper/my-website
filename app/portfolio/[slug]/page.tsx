import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects, getProjectBySlug } from '@/lib/projects'
import ImageGallery from '@/components/Portfolio/ImageGallery'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(
  props: PageProps<'/portfolio/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

const colorMap: Record<string, { gradient: string; badge: string; dot: string; glow: string }> = {
  indigo: {
    gradient: 'from-indigo-500/20 via-transparent to-transparent',
    badge: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
    dot: 'bg-indigo-500',
    glow: 'shadow-indigo-500/20',
  },
  violet: {
    gradient: 'from-violet-500/20 via-transparent to-transparent',
    badge: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
    dot: 'bg-violet-500',
    glow: 'shadow-violet-500/20',
  },
  sky: {
    gradient: 'from-sky-500/20 via-transparent to-transparent',
    badge: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
    dot: 'bg-sky-500',
    glow: 'shadow-sky-500/20',
  },
  emerald: {
    gradient: 'from-emerald-500/20 via-transparent to-transparent',
    badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    dot: 'bg-emerald-500',
    glow: 'shadow-emerald-500/20',
  },
  amber: {
    gradient: 'from-amber-500/20 via-transparent to-transparent',
    badge: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    dot: 'bg-amber-500',
    glow: 'shadow-amber-500/20',
  },
  rose: {
    gradient: 'from-rose-500/20 via-transparent to-transparent',
    badge: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    dot: 'bg-rose-500',
    glow: 'shadow-rose-500/20',
  },
}

export default async function ProjectPage(props: PageProps<'/portfolio/[slug]'>) {
  const { slug } = await props.params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const c = colorMap[project.color] ?? colorMap.indigo

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className={`relative pt-32 pb-20 px-6 overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-b ${c.gradient} pointer-events-none`} />
        <div className="relative max-w-3xl mx-auto">
          {/* Back */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Tutti i progetti
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`w-2 h-2 rounded-full ${c.dot}`} />
            <span className="text-xs text-white/30 tracking-widest uppercase">{project.year}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">{project.title}</h1>
          <p className="text-white/55 text-lg leading-relaxed mb-8">{project.longDescription}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className={`text-sm px-3 py-1 rounded-full ${c.badge}`}>
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {(project.link || project.github) && (
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                  Visita
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {project.images.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 pb-10">
          <ImageGallery images={project.images} title={project.title} />
        </section>
      )}

      {/* Features */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className={`p-8 rounded-2xl bg-white/[0.03] border border-white/8 shadow-xl ${c.glow}`}>
          <h2 className="text-lg font-semibold mb-6 text-white/80">Funzionalità principali</h2>
          <ul className="space-y-4">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-white/55 text-sm leading-relaxed">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Back CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Torna al portfolio
          </Link>
        </div>
      </section>
    </main>
  )
}
