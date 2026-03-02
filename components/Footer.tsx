import Image from 'next/image'
import Link from 'next/link'

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#what-we-offer' },
  { label: 'Live App', href: 'https://www.vavilonapp.rs', external: true },
]

const companyLinks = [
  { label: 'Mission', href: '#mission' },
  { label: 'Contact', href: '#contact' },
  { label: 'Newsletter', href: '#contact' },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="bg-brand-surface border-t border-white/8"
    >
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link
              href="/"
              aria-label="Vavilon Solutions homepage"
              className="inline-block"
            >
              <Image
                src="/vavilon-logo.svg"
                alt="Vavilon Solutions"
                width={140}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-content-muted text-sm leading-relaxed max-w-xs">
              Real-time spoken translation for tours, museums, and conferences.
              One speaker, twenty languages, zero apps to install.
            </p>

            {/* Social / App links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.vavilonapp.rs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Launch the Vavilon app (opens in new tab)"
                className="flex items-center gap-2 text-xs font-semibold text-content-muted
                           hover:text-white border border-white/15 hover:border-white/30
                           px-3 py-1.5 rounded-full transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
                vavilonapp.rs
              </a>
              <a
                href="mailto:info@vavilonsolutions.rs"
                aria-label="Email Vavilon Solutions"
                className="flex items-center gap-2 text-xs font-semibold text-content-muted
                           hover:text-white border border-white/15 hover:border-white/30
                           px-3 py-1.5 rounded-full transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email us
              </a>
            </div>
          </div>

          {/* Column 2 — Product */}
          <nav aria-label="Product links">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Product
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {productLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-content-muted hover:text-white text-sm transition-colors duration-200
                                 flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-content-muted hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Company + CTA */}
          <div>
            <nav aria-label="Company links">
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Company
              </h3>
              <ul className="flex flex-col gap-3 mb-8" role="list">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-content-muted hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer Book a Demo CTA */}
            <a
              href="mailto:info@vavilonsolutions.rs?subject=Demo%20Request"
              className="btn-primary !py-3 !px-5 !text-sm w-full text-center"
            >
              Book a Demo
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-content-subtle text-xs">
            © {currentYear} Vavilon Solutions d.o.o. All rights reserved.
          </p>
          <p className="text-content-subtle text-xs">
            Built in Serbia 🇷🇸 · Powered by{' '}
            <span className="text-content-muted">Azure AI</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
