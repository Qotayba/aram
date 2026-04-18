import { useLanguage } from '../../../context/LanguageContext';
import heroProduct from '../../../assets/newHero.png';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      {/* Large faded brand watermark */}
      <span className={styles.watermark} aria-hidden="true">ARAM</span>

      <div className={styles.container}>
        {/* Text column */}
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>{t('heroEyebrow')}</span>
          <h1 className={styles.headline}>
            {t('heroHeadline')}{' '}
            <em>{t('heroHeadlineAccent')}</em>
          </h1>
          <p className={styles.body}>{t('heroBody')}</p>
          <div className={styles.ctas}>
            <a href="#products" className={styles.btnPrimary}>
              {t('heroCta1')}
            </a>
            <a href="#story" className={styles.btnSecondary}>
              <span className={styles.playIcon}>&#9654;</span>
              {t('heroCta2')}
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className={styles.imageCol}>
          <div className={styles.imageGlow} aria-hidden="true" />
          <div className={styles.ring1} aria-hidden="true" />
          <div className={styles.ring2} aria-hidden="true" />
          <img
            src={heroProduct}
            alt="Aram Premium Tahini"
            className={styles.heroImg}
          />
          {/* Floating badges */}
          <div className={`${styles.badge} ${styles.badge1}`}>
            <span className={styles.badgeLabel}>100%</span>
            <span className={styles.badgeText}>Pure Sesame</span>
          </div>
          <div className={`${styles.badge} ${styles.badge2}`}>
            <span className={styles.badgeLabel}>&#1591;&#1581;&#1610;&#1606;&#1577;</span>
            <span className={styles.badgeText}>Tahini</span>
          </div>
        </div>
      </div>
    </section>
  );
}
