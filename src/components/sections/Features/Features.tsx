import type { ReactNode } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './Features.module.css';

interface FeatureItem {
  titleKey: 'feat1title' | 'feat2title' | 'feat3title' | 'feat4title';
  descKey:  'feat1desc'  | 'feat2desc'  | 'feat3desc'  | 'feat4desc';
  icon: ReactNode;
}

const FEATURES: FeatureItem[] = [
  {
    titleKey: 'feat1title',
    descKey:  'feat1desc',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 20c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7-7-3.134-7-7z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 16v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titleKey: 'feat2title',
    descKey:  'feat2desc',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 26l4-8 4 4 3-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    titleKey: 'feat3title',
    descKey:  'feat3desc',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 12v4M20 24v4M12 20h4M24 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titleKey: 'feat4title',
    descKey:  'feat4desc',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 20l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Features() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className={styles.features}>
      <div className="container">
        <div
          ref={ref}
          className={`${styles.grid} fade-in ${isVisible ? 'visible' : ''}`}
        >
          {FEATURES.map(({ titleKey, descKey, icon }) => (
            <div key={titleKey} className={styles.feature}>
              <div className={styles.icon}>{icon}</div>
              <h4>{t(titleKey)}</h4>
              <p>{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
