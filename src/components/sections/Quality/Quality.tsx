import { useLanguage } from '../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import labImg from '../../../assets/lap.jpeg';
import styles from './Quality.module.css';

const CERTS = [
  { titleKey: 'qualCert1' as const, descKey: 'qualCert1desc' as const, icon: '🛡️' },
  { titleKey: 'qualCert2' as const, descKey: 'qualCert2desc' as const, icon: '✡️' },
  { titleKey: 'qualCert3' as const, descKey: 'qualCert3desc' as const, icon: '🌿' },
] as const;

export default function Quality() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className={styles.quality} id="quality">
      <div className="container">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <p className="section-eyebrow center">{t('qualityTitle')}</p>

          {/* Production Quality */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>{t('qualProdTitle')}</h3>
            <p className={styles.blockText}>{t('qualProdText')}</p>
          </div>

          {/* Production Line */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>{t('qualLineTitle')}</h3>
            <p className={styles.blockText}>{t('qualLineText')}</p>
          </div>

          {/* Lab & Certifications */}
          <div className={styles.labSection}>
            <h3 className={styles.labTitle}>{t('qualLabTitle')}</h3>
            <p className={styles.labIntro}>{t('qualLabIntro')}</p>
            <div className={styles.labImgWrap}>
              <img src={labImg} alt="Quality control laboratory" className={styles.labImg} loading="lazy" />
            </div>
            <div className={styles.certGrid}>
              {CERTS.map(({ titleKey, descKey, icon }) => (
                <div key={titleKey} className={styles.certCard}>
                  <span className={styles.certIcon}>{icon}</span>
                  <h4 className={styles.certTitle}>{t(titleKey)}</h4>
                  <p className={styles.certDesc}>{t(descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
