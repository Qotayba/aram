import { useLanguage } from '../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import privateLabelImg from '../../../assets/photos/PrivateLable.png';
import styles from './PrivateLabel.module.css';

export default function PrivateLabel() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className={styles.pl} id="private-label">
      <div className="container">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <p className="section-eyebrow center">{t('plTitle')}</p>
          <p className={styles.slogan}>{t('plSlogan')}</p>
          <p className={styles.body}>{t('plBody')}</p>
          <div className={styles.plImgWrap}>
            <img src={privateLabelImg} alt="Private label" className={styles.plImg} loading="lazy" />
          </div>
          <div className={styles.ctaWrap}>
            <a href="mailto:info@aramtahini.com" className="btn btn--primary">
              {t('plCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
