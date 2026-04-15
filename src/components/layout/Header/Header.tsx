import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { useScrollHeader } from '../../../hooks/useScrollHeader';
import logo from '../../../assets/logo.png';
import type { Lang, StringKey } from '../../../data/translations';
import styles from './Header.module.css';

const LANGUAGES: Lang[] = ['en', 'ar', 'he'];

interface NavChild {
  href: string;
  key: StringKey;
}

interface NavItem {
  key: StringKey;
  href?: string;
  children?: NavChild[];
  highlight?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    key: 'navAbout',
    children: [
      { href: '#story', key: 'navStory' },
      { href: '#quality', key: 'navQuality' },
    ],
  },
  {
    key: 'navProducts',
    children: [
      { href: '#products', key: 'navProducts' },
      { href: '#benefits', key: 'navBenefits' },
    ],
  },
  { key: 'navExport', href: '#export', highlight: true },
  { key: 'navPrivateLabel', href: '#private-label', highlight: true },
  {
    key: 'navContact',
    children: [
      { href: '#faq', key: 'navFAQ' },
      { href: '#contact', key: 'navContact' },
    ],
  },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const isScrolled = useScrollHeader();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="Aram Premium Tahini" className={styles.logoImg} />
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`} id="nav">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.key}
                className={styles.dropdown}
                onMouseEnter={() => setOpenDropdown(item.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={styles.navLink}
                  onClick={() => toggleDropdown(item.key)}
                  aria-expanded={openDropdown === item.key}
                >
                  {t(item.key)}
                  <svg className={styles.chevron} viewBox="0 0 12 12" width="10" height="10">
                    <path d="M3 5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <div className={`${styles.dropdownPanel} ${openDropdown === item.key ? styles.dropdownOpen : ''}`}>
                  {item.children.map((child) => (
                    <a
                      key={child.key}
                      href={child.href}
                      className={styles.dropdownLink}
                      onClick={closeMenu}
                    >
                      {t(child.key)}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.key}
                href={item.href}
                className={`${styles.navLink} ${item.highlight ? styles.navHighlight : ''}`}
                onClick={closeMenu}
              >
                {t(item.key)}
              </a>
            ),
          )}
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
