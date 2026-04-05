import { useLanguage } from '../../../context/LanguageContext';
import heroImage from '../../../assets/heroImage.png';
import styles from './Hero.module.css';

export default function Hero() {
  const { t, tHtml } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.bgText} aria-hidden="true">طحينة</div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>{t('heroEyebrow')}</p>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: tHtml('heroTitle') }}
        />
        <p className={styles.desc}>{t('heroDesc')}</p>
        <div className={styles.actions}>
          <a href="#products" className="btn btn--primary">{t('heroBtn1')}</a>
          <a href="#about"    className="btn btn--ghost">{t('heroBtn2')}</a>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.bowlWrap}>
          <div className={styles.ring} />
          <div className={`${styles.ring} ${styles.ring2}`} />
          <img
            src={heroImage}
            alt="Aram Premium Tahini"
            className={styles.heroImg}
          />
          <div
            className={styles.badge}
            dangerouslySetInnerHTML={{ __html: tHtml('heroBadge') }}
          />
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>{t('scroll')}</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
