import { useLanguage } from '../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import type { StringKey } from '../../../data/translations';
import styles from './TahiniBenefits.module.css';

interface Benefit {
  key: StringKey;
  icon: string;
}

const BENEFITS: Benefit[] = [
  { key: 'benefit1', icon: '💛' },
  { key: 'benefit2', icon: '💪' },
  { key: 'benefit3', icon: '❤️' },
  { key: 'benefit4', icon: '⚡' },
  { key: 'benefit5', icon: '🌿' },
  { key: 'benefit6', icon: '🛡️' },
  { key: 'benefit7', icon: '🌾' },
  { key: 'benefit8', icon: '🍽️' },
  { key: 'benefit9', icon: '🔄' },
  { key: 'benefit10', icon: '🧠' },
];

export default function TahiniBenefits() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className={styles.benefits} id="benefits">
      <div className="container">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <p className="section-eyebrow center">{t('benefitsTitle')}</p>
          <p className={styles.desc}>{t('benefitsDesc')}</p>

          <div className={styles.wheel}>
            <div className={styles.center}>
              <div className={styles.placeholder}>
                <span className={styles.placeholderIcon}>🥣</span>
              </div>
            </div>

            {BENEFITS.map((b, i) => (
              <div
                key={b.key}
                className={styles.callout}
                style={{ '--i': i } as React.CSSProperties}
              >
                <span className={styles.calloutIcon}>{b.icon}</span>
                <span className={styles.calloutText}>{t(b.key)}</span>
              </div>
            ))}
          </div>

          {/* Mobile grid fallback */}
          <div className={styles.mobileGrid}>
            {BENEFITS.map((b) => (
              <div key={b.key} className={styles.mobileItem}>
                <span className={styles.calloutIcon}>{b.icon}</span>
                <span className={styles.calloutText}>{t(b.key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
