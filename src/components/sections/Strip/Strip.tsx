import { useLanguage } from '../../../context/LanguageContext';
import styles from './Strip.module.css';

export default function Strip() {
  const { tArray } = useLanguage();
  const items = tArray('strip');
  // Duplicate for a seamless infinite ticker loop
  const doubled = [...items, ...items];

  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            {i < doubled.length - 1 && (
              <span className={styles.dot}> • </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
