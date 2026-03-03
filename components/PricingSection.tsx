'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'


// ── Shared lead form ─────────────────────────────────────────────────────────

interface LeadFormProps {
  plan: 'trial' | 'professional'
  showPhone?: boolean
}

function LeadForm({ plan, showPhone = false }: LeadFormProps) {
  const { t } = useLanguage()
  const [name,    setName]    = useState('')
  const [surname, setSurname] = useState('')
  const [email,   setEmail]   = useState('')
  const [phone,   setPhone]   = useState('')
  const [loading, setLoading] = useState(false)
  const [done,    setDone]    = useState(false)
  const [err,     setErr]     = useState('')

  const canSubmit = name.trim() && surname.trim() && email.trim() && !loading

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return

    setLoading(true)
    setErr('')

    try {
      const res = await fetch('/api/leads', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          plan,
          name:    name.trim(),
          surname: surname.trim(),
          email:   email.trim(),
          phone:   phone.trim() || null,
        }),
      })

      if (!res.ok) throw new Error('server')
      setDone(true)
    } catch {
      setErr(t.form_error)
      setLoading(false)
    }
  }

  if (done) {
    return (
      <p className="text-sm text-green-400 text-center py-4 font-medium">
        {t.form_success}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5" noValidate>
      {err && (
        <p role="alert" className="text-xs text-accent bg-accent/10 border border-accent/25
                                   rounded-lg px-3 py-2 text-center">
          {err}
        </p>
      )}

      <div className="flex gap-3">
        <input
          type="text"
          placeholder={t.form_first_name}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          autoComplete="given-name"
          className="field flex-1"
        />
        <input
          type="text"
          placeholder={t.form_last_name}
          required
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          disabled={loading}
          autoComplete="family-name"
          className="field flex-1"
        />
      </div>

      <input
        type="email"
        placeholder={t.form_email}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        autoComplete="email"
        className="field"
      />

      {showPhone && (
        <input
          type="tel"
          placeholder={t.form_phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={loading}
          autoComplete="tel"
          className="field"
        />
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        className="btn-primary mt-1 disabled:opacity-40 disabled:cursor-not-allowed
                   disabled:transform-none disabled:shadow-none"
      >
        {loading ? t.btn_sending : t.btn_contact_me}
      </button>
    </form>
  )
}

// ── Card 2 — Professional ─────────────────────────────────────────────────────

function ProfessionalCard() {
  const { t } = useLanguage()
  const [showForm, setShowForm] = useState(false)

  const features = [t.pro_f1, t.pro_f2, t.pro_f3, t.pro_f4, t.pro_f5, t.pro_f6]

  return (
    <div className="bg-brand-surface rounded-2xl border border-white/[0.12] overflow-hidden
                    shadow-glow flex flex-col">
      {/* Header stripe */}
      <div className="bg-primary px-8 py-6 text-center">
        <span className="inline-block bg-white/20 text-white text-xs font-bold
                         uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          {t.pro_badge}
        </span>
        <div className="flex items-baseline justify-center gap-1 mb-1">
          <span className="text-white/50 line-through text-xl mr-2">€450/mo</span>
          <span className="text-white text-5xl font-extrabold leading-none">€150</span>
          <span className="text-white/70 text-lg font-medium">/month</span>
        </div>
        <p className="text-white/60 text-sm mt-2">
          {t.pro_billing}
        </p>
      </div>

      {/* Body */}
      <div className="px-8 py-6 flex flex-col flex-1">
        <ul className="flex flex-col gap-3 mb-6">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-content-muted leading-snug">
              <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 16 16"
                   fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 8.5l3.5 3.5 7-8" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          {!showForm ? (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="btn-primary w-full text-center"
            >
              {t.btn_subscribe}
            </button>
          ) : (
            <>
              {/* Error / sales message */}
              <div className="bg-accent/10 border border-accent/25 rounded-lg px-4 py-3 mb-1">
                <p className="text-sm text-accent text-center leading-relaxed">
                  {t.pro_sales_msg}
                </p>
              </div>
              <LeadForm plan="professional" showPhone />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Main section ─────────────────────────────────────────────────────────────

export default function PricingSection() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="container-site py-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <span className="eyebrow mb-3 block">{t.pricing_eyebrow}</span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          {t.pricing_h2}
        </h2>
        <p className="section-sub max-w-md mx-auto">
          {t.pricing_sub}
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">

        {/* Card 1 — Free Trial */}
        <div className="bg-brand-surface rounded-2xl border border-white/[0.12] overflow-hidden
                        shadow-glow flex flex-col">
          {/* Header stripe */}
          <div className="bg-primary/80 px-8 py-6 text-center">
            <span className="inline-block bg-white/20 text-white text-xs font-bold
                             uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              {t.trial_badge}
            </span>
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="text-white text-5xl font-extrabold leading-none">{t.trial_price}</span>
            </div>
            <p className="text-white/60 text-sm mt-2">
              {t.trial_billing}
            </p>
          </div>

          {/* Body */}
          <div className="px-8 py-6 flex flex-col flex-1">
            <p className="text-sm text-content-muted leading-relaxed mb-2">
              {t.trial_desc}
            </p>

            <div className="mt-auto">
              <LeadForm plan="trial" />
            </div>
          </div>
        </div>

        {/* Card 2 — Professional */}
        <ProfessionalCard />
      </div>
    </section>
  )
}
