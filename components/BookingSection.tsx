'use client'

import Script from 'next/script'

// TODO: Replace with your Calendly URL, e.g. https://calendly.com/yourname/demo
const CALENDLY_URL = 'https://calendly.com/andrejbantulic-vavilonsolutions/30min'

export default function BookingSection() {
  return (
    <section
      id="contact"
      aria-labelledby="booking-heading"
      className="py-20 lg:py-28 bg-brand-bg relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[600px] h-[400px] rounded-full
                   bg-primary/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full
                   bg-accent/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Section header */}
        <div className="section-center mb-12">
          <span className="eyebrow mb-3 block" id="booking-heading">
            Book a Demo
          </span>
          <h2 className="section-heading mb-4">
            See Vavilon in action
          </h2>
          <p className="section-sub">
            Pick a time that works for you and we will walk you through
            the platform live, no preparation needed on your end.
          </p>
        </div>

        {/* Calendly inline widget */}
        <div
          className="calendly-inline-widget mx-auto rounded-2xl overflow-hidden
                     border border-white/10 shadow-card-hover"
          data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1B2540&text_color=ffffff&primary_color=344CB7`}
          style={{ minWidth: '320px', height: '700px' }}
        />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  )
}
