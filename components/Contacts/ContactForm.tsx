'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const services = [
  'Sito web professionale',
  'E-commerce',
  'CMS & pannello di controllo',
  'Ottimizzazione & SEO',
  'App web su misura',
  'Altro',
]

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', service: '', budget: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-all duration-200'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Messaggio inviato!</h3>
        <p className="text-white/45 text-sm max-w-xs">
          Ti rispondo entro 24 ore. Controlla anche la casella spam.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4"
        >
          Invia un altro messaggio
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Nome + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs text-white/40 tracking-wide">Nome *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Mario Rossi"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-white/40 tracking-wide">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="mario@esempio.it"
            className={inputClass}
          />
        </div>
      </div>

      {/* Servizio + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs text-white/40 tracking-wide">Servizio</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled className="bg-[#111]">Seleziona...</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-[#111]">{s}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-white/40 tracking-wide">Budget indicativo</label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled className="bg-[#111]">Seleziona...</option>
            <option value="< 1.000€" className="bg-[#111]">Meno di 1.000€</option>
            <option value="1.000 – 3.000€" className="bg-[#111]">1.000 – 3.000€</option>
            <option value="3.000 – 7.000€" className="bg-[#111]">3.000 – 7.000€</option>
            <option value="> 7.000€" className="bg-[#111]">Oltre 7.000€</option>
            <option value="Da definire" className="bg-[#111]">Da definire</option>
          </select>
        </div>
      </div>

      {/* Messaggio */}
      <div className="flex flex-col gap-2">
        <label className="text-xs text-white/40 tracking-wide">Messaggio *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Descrivi il tuo progetto, cosa ti serve e quando vorresti iniziare..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <p className="text-sm text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-3">
          Qualcosa è andato storto. Riprova o scrivimi direttamente via email.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity="0.25"/>
              <path d="M21 12a9 9 0 00-9-9"/>
            </svg>
            Invio in corso...
          </>
        ) : (
          <>
            Invia messaggio
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}
