'use client'

import { useLanguage } from '@/contexts/LanguageContext'

/**
 * StickyContactButton
 *
 * Persistent right-side vertical "Contact Us" button.
 * Replaces the original site's top-clustered CTAs with a
 * persistent, always-accessible contact affordance.
 *
 * WCAG AA: 44×44px minimum tap target, aria-label, focus ring.
 */
export default function StickyContactButton() {
  const { t } = useLanguage()

  return (
    <a
      href="#contact"
      aria-label="Contact Vavilon Solutions"
      className="
        fixed right-0 top-1/2 -translate-y-1/2 z-40
        bg-primary hover:bg-primary-hover
        text-white font-semibold text-xs tracking-[0.18em] uppercase
        flex items-center justify-center
        w-11 h-40
        rounded-l-xl
        transition-all duration-300
        shadow-glow hover:shadow-card-hover
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        group
      "
    >
      {/* Vertical text — rotated 90° counter-clockwise */}
      <span className="-rotate-90 whitespace-nowrap select-none" aria-hidden="true">
        {t.sticky_contact}
      </span>

      {/* Small accent line at bottom */}
      <span
        className="
          absolute bottom-0 left-0 right-0 h-1
          bg-accent rounded-bl-xl
          group-hover:h-1.5
          transition-all duration-300
        "
        aria-hidden="true"
      />
    </a>
  )
}
