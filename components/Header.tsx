'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#what-we-offer' },
  { label: 'Mission', href: '#mission' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 glass-panel"
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Vavilon Solutions - homepage"
            className="flex items-center gap-2 group"
          >
            <Image
              src="/vavilon-logo.png"
              alt="Vavilon logo"
              width={140}
              height={46}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-medium text-content-muted
                           hover:text-white hover:bg-white/8
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary
                           transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.vavilonapp.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !py-2 !px-4 !text-sm"
            >
              Launch App
            </a>
            <a href="#contact" className="btn-primary !py-2 !px-5 !text-sm">
              Book a Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg
                       text-content-muted hover:text-white hover:bg-white/10
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary
                       transition-all duration-200"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="md:hidden glass-panel border-t border-white/10 px-4 py-4"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-content-muted
                             hover:text-white hover:bg-white/10
                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary
                             transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://www.vavilonapp.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full text-center !py-2.5"
              onClick={() => setMenuOpen(false)}
            >
              Launch App
            </a>
            <a
              href="#contact"
              className="btn-primary w-full text-center !py-2.5"
              onClick={() => setMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
