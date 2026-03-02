import Image from 'next/image'

export default function Hero() {
  return (
    <section
      aria-label="Hero - One tour. One guide. Every language."
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background gradient glow */}
      <div
        className="absolute inset-0 bg-hero-glow pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative accent circles */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full
                   bg-primary/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full
                   bg-accent/5 blur-3xl pointer-events-none"
      />

      <div className="container-site relative z-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Copy + CTA */}
          <div className="flex flex-col items-start">
            {/* Eyebrow badge */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="flex items-center gap-1.5 bg-primary/15 border border-primary/30
                           text-primary text-xs font-semibold tracking-wider uppercase
                           px-3 py-1.5 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                Real-Time Translation Platform
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              <span className="block">One tour.</span>
              <span className="block">One guide.</span>
              <span className="block text-gradient pb-1">Every language.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-content-muted leading-relaxed max-w-xl mb-10">
              One speaker. 70+ languages. Zero apps to install.
              Vavilon delivers live spoken translation and subtitles to every
              listener, instantly, from any browser.
            </p>

            {/* CTA group — Book a Demo is the prominent primary action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="btn-primary text-base px-8 py-4 w-full sm:w-auto text-center"
              >
                Book a Demo
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <a
                href="https://www.vavilonapp.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-base px-8 py-4 w-full sm:w-auto text-center"
              >
                See It Live
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10 w-full">
              <Stat value="70+" label="Languages" />
              <div className="w-px h-8 bg-white/15" aria-hidden="true" />
              <Stat value="60+" label="People per tour" />
              <div className="w-px h-8 bg-white/15" aria-hidden="true" />
              <Stat value="<500ms" label="Latency" />
            </div>
          </div>

          {/* RIGHT — Visual placeholder (app illustration) */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-3xl bg-primary/10 blur-2xl"
              aria-hidden="true"
            />

            {/* Main illustration container */}
            <div
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden
                         border border-white/10 bg-brand-surface shadow-card-hover"
            >
              <Image
                src="/placeholder-hero.svg"
                alt="Vavilon app showing real-time translated subtitles in a chat interface"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 50vw"
              />

              {/* Live badge overlay */}
              <div
                className="absolute top-4 left-4 flex items-center gap-2
                           bg-brand-bg/90 backdrop-blur-sm border border-white/15
                           rounded-full px-3 py-1.5 text-xs font-semibold text-white"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                Live Translation Active
              </div>

              {/* Language count badge overlay */}
              <div
                className="absolute bottom-4 right-4 flex items-center gap-2
                           bg-primary/90 backdrop-blur-sm rounded-xl px-4 py-2.5
                           text-sm font-bold text-white"
              >
                🌍 70+ Languages
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-xl font-bold text-white">{value}</span>
      <span className="text-xs text-content-muted">{label}</span>
    </div>
  )
}
