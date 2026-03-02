import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
    './pages/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand color tokens as specified in Color_Scheme.txt
        // COLOR_BG
        'brand-bg': '#171A1C',
        // Slightly elevated surface for cards/panels — blue-navy for visual depth
        'brand-surface': '#1B2540',
        // Glass panel
        'brand-glass': 'rgba(0,0,0,0.90)',
        // Glass button
        'brand-glass-btn': 'rgba(255,255,255,0.11)',
        // COLOR_PRIMARY — blue button
        primary: '#344CB7',
        'primary-hover': '#3B56D1',
        // COLOR_ACCENT — orange button
        accent: '#C4581B',
        'accent-hover': '#CC6931',
        // COLOR_TEXT
        content: '#FFFFFF',
        'content-muted': '#8B9199',
        'content-subtle': '#5C6370',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(52,76,183,0.35) 0%, transparent 70%)',
        'card-glow':
          'linear-gradient(135deg, rgba(52,76,183,0.08) 0%, rgba(196,88,27,0.04) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'card-hover': '0 8px 32px rgba(52,76,183,0.28)',
        glow: '0 0 40px rgba(52,76,183,0.20)',
      },
    },
  },
  plugins: [],
}

export default config
