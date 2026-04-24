import { useLanguage } from '../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import exportBannerImg from '../../../assets/photos/Export&Distribution.jpeg';
import distributorImg from '../../../assets/photos/BecomeADistributor.jpeg';
import styles from './Export.module.css';

export default function Export() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className={styles.export} id="export">
      <div className="container">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <p className="section-eyebrow center">{t('exportTitle')}</p>

          {/* Banner image */}
          <div className={styles.bannerWrap}>
            <img src={exportBannerImg} alt="Export and distribution" className={styles.bannerImg} loading="lazy" />
          </div>

          <p className={styles.body}>{t('exportBody')}</p>

          <div className={styles.distBox}>
            <div className={styles.distImgWrap}>
              <img src={distributorImg} alt="Become a distributor" className={styles.distImg} loading="lazy" />
            </div>
            <h3 className={styles.distTitle}>{t('distTitle')}</h3>
            <p className={styles.distBody}>{t('distBody')}</p>
            <a href="mailto:info@aramtahini.com" className="btn btn--primary">
              {t('distCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
