'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { type Lang, type Translations, getTranslations } from '@/lib/translations'

interface LanguageContextValue {
  lang:    Lang
  setLang: (l: Lang) => void
  t:       Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  lang:    'en',
  setLang: () => {},
  t:       getTranslations('en'),
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('vavilon-lang') as Lang | null
    if (saved === 'en' || saved === 'sr') setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('vavilon-lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: getTranslations(lang) }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
