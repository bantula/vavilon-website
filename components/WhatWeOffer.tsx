'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WhatWeOffer() {
  const { t } = useLanguage()

  const offerings = [
    { label: t.offer_1_label, detail: t.offer_1_detail },
    { label: t.offer_2_label, detail: t.offer_2_detail },
    { label: t.offer_3_label, detail: t.offer_3_detail },
    { label: t.offer_4_label, detail: t.offer_4_detail },
    { label: t.offer_5_label, detail: t.offer_5_detail },
    { label: t.offer_6_label, detail: t.offer_6_detail },
  ]

  return (
    <section
      id="what-we-offer"
      aria-labelledby="offer-heading"
      className="py-20 lg:py-28 bg-brand-surface relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-3xl bg-primary/8 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-brand-bg aspect-[3/4] lg:aspect-[4/5] shadow-card-hover">
              <Image src="/placeholder-offer.svg"
                     alt="Speaker view: a tour guide speaking while listeners receive live subtitles and audio in their chosen language"
                     fill className="object-cover"
                     sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute top-6 left-6 flex flex-col gap-3" aria-hidden="true">
                <StatBadge icon="🎙️" text={t.offer_badge1.replace('🎙️ ', '')} color="blue" />
                <StatBadge icon="👥" text={t.offer_badge2.replace('👥 ', '')} color="orange" />
              </div>
            </div>
          </div>

          {/* RIGHT — Text content */}
          <div className="order-1 lg:order-2 flex flex-col">
            <span className="eyebrow mb-4 block">{t.offer_eyebrow}</span>

            <h2 id="offer-heading" className="section-heading mb-6">
              {t.offer_h2_a}{' '}
              <span className="text-gradient">{t.offer_h2_b}</span>
            </h2>

            <p className="section-sub mb-10">{t.offer_sub}</p>

            <ul className="flex flex-col gap-4" aria-label="Key platform offerings">
              {offerings.map((item) => (
                <li key={item.label} className="flex items-start gap-4 group">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full
                                   bg-primary/20 border border-primary/40
                                   flex items-center justify-center
                                   group-hover:bg-primary/30 transition-colors duration-200"
                        aria-hidden="true">
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-white font-medium text-sm">{item.label}</span>
                    <p className="text-content-muted text-sm mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a href="https://www.vavilonapp.rs" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                {t.offer_cta_app}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a href="#features" className="text-sm font-medium text-content-muted hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-white/30 hover:decoration-white">
                {t.offer_cta_features}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function StatBadge({ icon, text, color }: { icon: string; text: string; color: 'blue' | 'orange' }) {
  return (
    <div className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white backdrop-blur-md border
      ${color === 'blue' ? 'bg-primary/80 border-primary/60' : 'bg-accent/80 border-accent/60'}`}>
      <span role="img" aria-hidden="true">{icon}</span>
      {text}
    </div>
  )
}
