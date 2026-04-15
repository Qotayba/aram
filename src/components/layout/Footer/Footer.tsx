import { useLanguage } from '../../../context/LanguageContext';
import aramLogo from '../../../assets/logo.png';
import natureWorldLogo from '../../../assets/NatureWorldlogo.svg';
import styles from './Footer.module.css';

const NAV_LINKS = [
  { href: '#story',         key: 'navStory'        as const },
  { href: '#quality',       key: 'navQuality'      as const },
  { href: '#benefits',      key: 'navBenefits'     as const },
  { href: '#products',      key: 'navProducts'     as const },
  { href: '#export',        key: 'navExport'       as const },
  { href: '#private-label', key: 'navPrivateLabel' as const },
  { href: '#faq',           key: 'navFAQ'          as const },
  { href: '#contact',       key: 'navContact'      as const },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>

          {/* Aram brand */}
          <div className={styles.brand}>
            <img src={aramLogo} alt="Aram Premium Tahini" className={styles.brandLogo} />
            <p className={styles.tagline}>{t('footerTagline')}</p>
          </div>

          {/* Footer nav */}
          <nav className={styles.nav} aria-label="Footer navigation">
            {NAV_LINKS.map(({ href, key }) => (
              <a key={key} href={href}>{t(key)}</a>
            ))}
          </nav>

          {/* Manufacturer */}
          <div className={styles.manufacturer}>
            <img
              src={natureWorldLogo}
              alt="Nature World for Halva and Tahini"
              className={styles.mfrLogo}
            />
            <span className={styles.mfrLabel}>Manufactured by Nature World</span>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>{t('footerCopy')}</p>
          <p className={styles.allergy}>{t('footerAllergy')}</p>
        </div>
      </div>
    </footer>
  );
}
