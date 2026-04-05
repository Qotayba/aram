import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';
import type { Lang, StringKey, ArrayKey } from '../data/translations';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: StringKey) => string;
  tHtml: (key: StringKey) => string;
  tArray: (key: ArrayKey) => string[];
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): Lang {
  const saved = localStorage.getItem('aram_lang') as Lang | null;
  if (saved && translations[saved]) return saved;
  const browser = (navigator.language ?? 'en').toLowerCase();
  if (browser.startsWith('ar')) return 'ar';
  if (browser.startsWith('he') || browser.startsWith('iw')) return 'he';
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  const setLang = (newLang: Lang) => {
    localStorage.setItem('aram_lang', newLang);
    setLangState(newLang);
  };

  useEffect(() => {
    const { dir } = translations[lang];
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);
  }, [lang]);

  const t = (key: StringKey): string => translations[lang][key] as string;
  const tHtml = (key: StringKey): string => translations[lang][key] as string;
  const tArray = (key: ArrayKey): string[] => translations[lang][key] as string[];
  const dir = translations[lang].dir as 'ltr' | 'rtl';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tHtml, tArray, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
