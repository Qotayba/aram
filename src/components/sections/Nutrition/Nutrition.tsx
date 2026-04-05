import { useLanguage } from '../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { nutritionRows } from '../../../data/nutrition';
import styles from './Nutrition.module.css';

export default function Nutrition() {
  const { t, tHtml } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className={styles.nutrition} id="nutrition">
      <div className="container">
        <div className={styles.grid}>

          <div className={styles.text}>
            <p className="section-eyebrow">{t('nutEyebrow')}</p>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: tHtml('nutTitle') }}
            />
            <p className={styles.body}>{t('nutBody')}</p>
            <p className={styles.note}>{t('nutNote')}</p>
          </div>

          <div
            ref={ref}
            className={`${styles.panel} fade-in ${isVisible ? 'visible' : ''}`}
          >
            <div className={styles.panelHeader}>
              <span>{t('nutPanelTitle')}</span>
              <span>{t('nutPer')}</span>
            </div>

            {nutritionRows.map((row) => {
              if (row.variant === 'divider') {
                return <div key={row.id} className={styles.divider} />;
              }

              const rowClass = [
                styles.row,
                row.variant === 'big' && styles.rowBig,
                row.variant === 'sub' && styles.rowSub,
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <div key={row.id} className={rowClass}>
                  <span>{t(row.labelKey)}</span>
                  <span>{row.value}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
