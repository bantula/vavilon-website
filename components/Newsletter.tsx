'use client'

import { useState, FormEvent } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    // TODO: connect to mailing service (Mailchimp, Resend, etc.)
    console.log('Newsletter signup:', email)
    setStatus('success')
    setEmail('')
  }

  return (
    <section
      id="contact"
      aria-labelledby="newsletter-heading"
      className="relative py-20 lg:py-28 bg-brand-surface overflow-hidden"
    >
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[600px] h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Two-part layout: newsletter top, Book a Demo bottom */}

          {/* Newsletter */}
          <div className="text-center mb-14">
            <span className="eyebrow mb-4 block">Stay Updated</span>
            <h2
              id="newsletter-heading"
              className="section-heading mb-4"
            >
              Get product updates & insights
            </h2>
            <p className="section-sub mb-10">
              Early access news, new language additions, and translation
              tips — delivered to your inbox. No spam, unsubscribe any time.
            </p>

            {status === 'success' ? (
              <div
                role="status"
                aria-live="polite"
                className="flex items-center justify-center gap-3 p-5 rounded-xl
                           bg-primary/15 border border-primary/30 text-primary font-medium"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                You&apos;re on the list! We&apos;ll be in touch soon.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Newsletter signup form"
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Your email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (status === 'error') setStatus('idle')
                    }}
                    aria-invalid={status === 'error' ? 'true' : 'false'}
                    aria-describedby={status === 'error' ? 'email-error' : undefined}
                    className="w-full px-4 py-3.5 rounded-lg
                               bg-brand-bg border border-white/15
                               text-white placeholder-content-subtle text-sm
                               focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                               transition-all duration-200"
                  />
                  {status === 'error' && (
                    <p
                      id="email-error"
                      role="alert"
                      className="mt-2 text-xs text-accent text-left"
                    >
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn-secondary whitespace-nowrap sm:self-start"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Divider */}
          <div
            className="flex items-center gap-4 my-10"
            aria-hidden="true"
          >
            <span className="flex-1 h-px bg-white/10" />
            <span className="text-content-subtle text-xs uppercase tracking-widest">or</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>

          {/* Book a Demo — secondary CTA block in footer area */}
          <div
            className="text-center p-8 rounded-2xl border border-accent/25 bg-accent/5
                       relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-card-glow pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to break the language barrier?
              </h3>
              <p className="text-content-muted mb-7 max-w-md mx-auto text-sm">
                See Vavilon in action with a personalised live demo. We&apos;ll
                show you exactly how it works for your tours, museum, or conference.
              </p>
              <a
                href="mailto:info@vavilonsolutions.rs?subject=Demo%20Request"
                className="btn-primary text-base px-10 py-4"
              >
                Book a Demo
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
              <p className="mt-4 text-content-subtle text-xs">
                Or reach us directly:{' '}
                <a
                  href="mailto:info@vavilonsolutions.rs"
                  className="text-content-muted hover:text-white underline underline-offset-2 transition-colors duration-200"
                >
                  info@vavilonsolutions.rs
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
