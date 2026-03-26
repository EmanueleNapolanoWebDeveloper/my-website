'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const INTERVAL_MS = 3500

export default function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive]   = useState(0)
  const [paused, setPaused]   = useState(false)
  const [lightbox, setLightbox] = useState(false)

  const next = useCallback(
    () => setActive((p) => (p + 1) % images.length),
    [images.length]
  )
  const prev = useCallback(
    () => setActive((p) => (p - 1 + images.length) % images.length),
    [images.length]
  )

  // Auto-scroll — si ferma quando l'utente fa hover o apre il lightbox
  useEffect(() => {
    if (paused || lightbox || images.length <= 1) return
    const id = setInterval(next, INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, lightbox, next, images.length])

  if (!images.length) return null

  return (
    <>
      {/* Slide principale */}
      <div
        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#111] border border-white/8 cursor-zoom-in select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onClick={() => setLightbox(true)}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <Image
              src={src}
              alt={`${title} — screenshot ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Frecce */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Precedente"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-black/70 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 3L5 8l5 5" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Successiva"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-black/70 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
          </>
        )}

        {/* Contatore */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-xs text-white/60 select-none">
            {active + 1} / {images.length}
          </div>
        )}

        {/* Barra di progresso auto-scroll */}
        {images.length > 1 && !paused && !lightbox && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
            <div
              key={active}
              className="h-full bg-white/40"
              style={{ animation: `progressBar ${INTERVAL_MS}ms linear forwards` }}
            />
          </div>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Vai a immagine ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-4 h-1.5 bg-white'
                  : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
            onClick={() => setLightbox(false)}
            aria-label="Chiudi"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
                onClick={(e) => { e.stopPropagation(); prev() }}
                aria-label="Precedente"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 3L5 8l5 5" />
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label="Successiva"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden bg-[#111]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={`${title} — screenshot ${active + 1}`}
              fill
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-6 text-xs text-white/30 select-none">
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
