import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { useScrollHeader } from '../../../hooks/useScrollHeader';
import logo from '../../../assets/logo.png';
import type { Lang } from '../../../data/translations';
import styles from './Header.module.css';

const LANGUAGES: Lang[] = ['en', 'ar', 'he'];

const NAV_LINKS = [
  { href: '#about',     key: 'navStory'     as const },
  { href: '#products',  key: 'navProducts'  as const },
  { href: '#nutrition', key: 'navNutrition' as const },
  { href: '#contact',   key: 'navContact'   as const },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const isScrolled = useScrollHeader();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="Aram Premium Tahini" className={styles.logoImg} />
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`} id="nav">
          {NAV_LINKS.map(({ href, key }) => (
            <a key={key} href={href} className={styles.navLink} onClick={closeMenu}>
              {t(key)}
            </a>
          ))}
        </nav>

        <div className={styles.langSwitcher}>
          {LANGUAGES.map((l) => (
            <button
              key={l}
              className={`${styles.langBtn} ${lang === l ? styles.langBtnActive : ''}`}
              onClick={() => setLang(l)}
              aria-label={`Switch language to ${l.toUpperCase()}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="nav"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
