import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import type { StringKey } from '../../../data/translations';
import FAQItem from './FAQItem/FAQItem';
import styles from './FAQ.module.css';

interface FaqEntry {
  q: StringKey;
  a: StringKey;
}

const FAQ_DATA: FaqEntry[] = [
  { q: 'faq1q', a: 'faq1a' },
  { q: 'faq2q', a: 'faq2a' },
  { q: 'faq3q', a: 'faq3a' },
  { q: 'faq4q', a: 'faq4a' },
  { q: 'faq5q', a: 'faq5a' },
  { q: 'faq6q', a: 'faq6a' },
  { q: 'faq7q', a: 'faq7a' },
  { q: 'faq8q', a: 'faq8a' },
  { q: 'faq9q', a: 'faq9a' },
];

export default function FAQ() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <p className="section-eyebrow center">{t('faqTitle')}</p>

          <div className={styles.list}>
            {FAQ_DATA.map((entry, i) => (
              <FAQItem
                key={entry.q}
                questionKey={entry.q}
                answerKey={entry.a}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
