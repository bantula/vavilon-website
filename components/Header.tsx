'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { type Lang } from '@/lib/translations'

function LangSwitcher() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm
                   text-content-muted hover:text-white border border-white/10
                   hover:border-white/20 transition-colors duration-200"
      >
        {lang === 'en' ? t.lang_english : t.lang_serbian}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-28 rounded-lg overflow-hidden
                        bg-brand-surface border border-white/10 shadow-lg z-50">
          {(['en', 'sr'] as Lang[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => { setLang(l); setOpen(false) }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150
                ${lang === l
                  ? 'text-white bg-primary/20'
                  : 'text-content-muted hover:text-white hover:bg-white/5'}`}
            >
              {l === 'en' ? 'English' : 'Srpski'}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: t.nav_features,     href: '#features' },
    { label: t.nav_how_it_works, href: '#what-we-offer' },
    { label: t.nav_mission,      href: '#mission' },
    { label: t.nav_pricing,      href: '#pricing' },
    { label: t.nav_contact,      href: '#contact' },
  ]

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
            <LangSwitcher />
            <a
              href="https://www.vavilonapp.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !py-2 !px-4 !text-sm"
            >
              {t.btn_launch_app}
            </a>
            <a href="#contact" className="btn-primary !py-2 !px-5 !text-sm">
              {t.btn_book_demo}
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
            <div className="px-1 pb-1">
              <LangSwitcher />
            </div>
            <a
              href="https://www.vavilonapp.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full text-center !py-2.5"
              onClick={() => setMenuOpen(false)}
            >
              {t.btn_launch_app}
            </a>
            <a
              href="#contact"
              className="btn-primary w-full text-center !py-2.5"
              onClick={() => setMenuOpen(false)}
            >
              {t.btn_book_demo}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
