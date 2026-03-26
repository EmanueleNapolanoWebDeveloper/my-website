'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home',      href: '/' },
  { label: 'Servizi',   href: '/servizi' },
  { label: 'Portfolio', href: '/portfolio' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible]  = useState(false)
  const pathname = usePathname()

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
            <Image
              src="/assets/webSiteImages/LogoN.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-4 py-2 text-[15px] font-medium rounded-lg transition-colors duration-200 ${
                    isActive(href)
                      ? 'text-white'
                      : 'text-white/50 hover:text-blue-400'
                  }`}
                >
                  {isActive(href) && (
                    <span className="absolute inset-0 rounded-lg bg-white/[0.06]" />
                  )}
                  <span className="relative">{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contatti"
              className={`px-4 py-2 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                isActive('/contatti')
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-blue-900/50 hover:text-blue-300 hover:border-blue-700/50 border border-white/10'
              }`}
            >
              Contatti
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Apri menu"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          >
            <span className={`block h-px w-5 bg-white rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-px w-5 bg-white rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-white rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Offcanvas */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-[#111] border-l border-white/8 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/8">
          <Image
            src="/assets/webSiteImages/LogoN.png"
            alt="Logo"
            width={100}
            height={34}
            className="h-8 w-auto object-contain"
          />
          <button
            onClick={() => setOpen(false)}
            aria-label="Chiudi menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col px-4 py-6 gap-1">
          {[...links, { label: 'Contatti', href: '/contatti' }].map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  isActive(href)
                    ? 'bg-white/8 text-white'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className="h-16" />
    </>
  )
}
