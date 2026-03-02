import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyContactButton from '@/components/StickyContactButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vavilon Solutions — Real-Time Translation for Tours & Conferences',
  description:
    'Break every language barrier. Real-time spoken translation for tours, museums, and conferences. 20 languages, 200 concurrent listeners, no app required.',
  keywords: [
    'real-time translation',
    'tour guide translation',
    'conference translation',
    'live subtitles',
    'speech translation',
    'museum audio guide',
    'Vavilon',
  ],
  authors: [{ name: 'Vavilon Solutions' }],
  openGraph: {
    title: 'Vavilon Solutions — Real-Time Translation Platform',
    description:
      'One speaker. Twenty languages. Zero apps. Break language barriers at tours, museums, and conferences.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Vavilon Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vavilon Solutions — Real-Time Translation Platform',
    description:
      'One speaker. Twenty languages. Zero apps. Real-time spoken translation for tours, museums, and conferences.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-brand-bg text-content antialiased min-h-screen flex flex-col">
        {/* Skip navigation link for keyboard / screen-reader users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        {/* Persistent right-side sticky Contact Us button */}
        <StickyContactButton />

        {/* Page content */}
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
