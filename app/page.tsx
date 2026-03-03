import Hero from '@/components/Hero'
import WhatWeOffer from '@/components/WhatWeOffer'
import FeaturesGrid from '@/components/FeaturesGrid'
import Mission from '@/components/Mission'
import PricingSection from '@/components/PricingSection'
import BookingSection from '@/components/BookingSection'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero - split layout, CTA below copy */}
      <Hero />

      {/* 2. What We Offer - two-column, visual left + text right */}
      <WhatWeOffer />

      {/* 3. Features Grid - 3x2 card grid */}
      <FeaturesGrid />

      {/* 4. Mission - full-width quote section */}
      <Mission />

      {/* 5. Pricing - two-card lead capture section */}
      <PricingSection />

      {/* 6. Booking - Calendly inline widget */}
      <BookingSection />
    </>
  )
}
