import { useLanguage } from '../../../../context/LanguageContext';
import type { StringKey } from '../../../../data/translations';
import styles from './FAQItem.module.css';

interface Props {
  questionKey: StringKey;
  answerKey: StringKey;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ questionKey, answerKey, isOpen, onToggle }: Props) {
  const { t } = useLanguage();

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button className={styles.question} onClick={onToggle} aria-expanded={isOpen}>
        <span>{t(questionKey)}</span>
        <span className={styles.chevron}>▾</span>
      </button>
      <div className={styles.answerWrap}>
        <p className={styles.answer}>{t(answerKey)}</p>
      </div>
    </div>
  );
}
