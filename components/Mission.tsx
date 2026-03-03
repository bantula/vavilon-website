'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Mission() {
  const { t } = useLanguage()

  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="relative py-24 lg:py-36 bg-brand-bg overflow-hidden"
    >
      {/* Decorative large background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[700px] h-[500px] rounded-full
                   bg-primary/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full
                   bg-accent/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow */}
          <span className="eyebrow mb-6 block" id="mission-heading">
            {t.mission_eyebrow}
          </span>

          {/* Large quote */}
          <blockquote
            className="relative"
            aria-label="Vavilon mission statement"
          >
            {/* Opening quote mark (decorative) */}
            <span
              className="absolute -top-4 -left-2 lg:-left-10 text-7xl lg:text-9xl
                         font-serif text-primary/20 leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <p
              className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold
                         text-white leading-snug tracking-tight px-4 lg:px-12"
            >
              {t.mission_quote_a}{' '}
              <span className="text-gradient">{t.mission_quote_hl}</span>{' '}
              {t.mission_quote_b}
            </p>
          </blockquote>

          {/* Divider accent */}
          <div
            className="flex items-center justify-center gap-3 mt-12"
            aria-hidden="true"
          >
            <span className="w-16 h-0.5 bg-primary/40 rounded-full" />
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="w-16 h-0.5 bg-primary/40 rounded-full" />
          </div>

          {/* Attribution / tagline */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="text-content-muted text-base font-medium">
              {t.mission_built}
            </p>
            <p className="text-content-subtle text-sm">
              vavilonsolutions.rs
            </p>
          </div>

          {/* Key pillars */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
            aria-label="Company values"
          >
            <Pillar icon="⚡" title={t.mission_v1_title} desc={t.mission_v1_desc} />
            <Pillar icon="🌍" title={t.mission_v2_title} desc={t.mission_v2_desc} />
            <Pillar icon="🔒" title={t.mission_v3_title} desc={t.mission_v3_desc} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Pillar({
  icon,
  title,
  desc,
}: {
  icon: string
  title: string
  desc: string
}) {
  return (
    <div
      className="flex flex-col items-center gap-3 p-6 rounded-2xl
                 border border-white/8 bg-white/3 hover:bg-white/5
                 transition-colors duration-300"
    >
      <span className="text-3xl" role="img" aria-hidden="true">
        {icon}
      </span>
      <h3 className="text-white font-semibold text-base">{title}</h3>
      <p className="text-content-muted text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
