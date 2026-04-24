import { useLanguage } from '../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import ourStoryImg from '../../../assets/photos/ourstory.png';
import styles from './OurStory.module.css';

const VALUES = [
  { titleKey: 'storyVal1title' as const, descKey: 'storyVal1desc' as const, icon: '🤝' },
  { titleKey: 'storyVal2title' as const, descKey: 'storyVal2desc' as const, icon: '🏺' },
  { titleKey: 'storyVal3title' as const, descKey: 'storyVal3desc' as const, icon: '⚖️' },
  { titleKey: 'storyVal4title' as const, descKey: 'storyVal4desc' as const, icon: '💡' },
] as const;

export default function OurStory() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className={styles.story} id="story">
      <div className="container">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <p className="section-eyebrow center">{t('storyTitle')}</p>

          {/* Who We Are */}
          <div className={styles.hero}>
            <h2 className={styles.whoTitle}>{t('storyWhoTitle')}</h2>
            <p className={styles.whoText}>{t('storyWhoText')}</p>
          </div>

          {/* Story Image */}
          <div className={styles.storyImgWrap}>
            <img src={ourStoryImg} alt="Our story" className={styles.storyImg} loading="lazy" />
          </div>

          {/* Vision & Mission */}
          <div className={styles.vmGrid}>
            <div className={styles.vmCard}>
              <h3 className={styles.vmTitle}>{t('storyVisionTitle')}</h3>
              <p className={styles.vmText}>{t('storyVisionText')}</p>
            </div>
            <div className={styles.vmCard}>
              <h3 className={styles.vmTitle}>{t('storyMissionTitle')}</h3>
              <p className={styles.vmText}>{t('storyMissionText')}</p>
            </div>
          </div>

          {/* Values */}
          <h3 className={styles.valuesHeading}>{t('storyValuesTitle')}</h3>
          <div className={styles.valuesGrid}>
            {VALUES.map(({ titleKey, descKey, icon }) => (
              <div key={titleKey} className={styles.valueCard}>
                <span className={styles.valueIcon}>{icon}</span>
                <h4 className={styles.valueTitle}>{t(titleKey)}</h4>
                <p className={styles.valueDesc}>{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
