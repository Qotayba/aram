import { useLanguage } from '../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './About.module.css';

const STATS = [
  { num: '80+',  key: 'statYears' as const },
  { num: '100%', key: 'statPure'  as const },
  { num: '0',    key: 'statAdd'   as const },
] as const;

export default function About() {
  const { t, tHtml } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.grid}>

          <div
            ref={ref}
            className={`${styles.text} fade-in ${isVisible ? 'visible' : ''}`}
          >
            <p className="section-eyebrow">{t('aboutEyebrow')}</p>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: tHtml('aboutTitle') }}
            />
            <p className={styles.body}>{t('aboutBody1')}</p>
            <p className={styles.body}>{t('aboutBody2')}</p>

            <div className={styles.stats}>
              {STATS.map(({ num, key }) => (
                <div key={key} className={styles.stat}>
                  <span className={styles.statNum}>{num}</span>
                  <span className={styles.statLabel}>{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.frame}>
              <div className={styles.pattern} />
              <div className={styles.frameInner}>
                <div className={styles.year}>1940</div>
                <p className={styles.quote}>{t('aboutQuote')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
