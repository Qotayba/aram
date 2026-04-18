import { useLanguage } from '../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { products } from '../../../data/products';
import ProductCard from '../Products/ProductCard/ProductCard';
import halvaImg from '../../../assets/Halva.jpeg';
import koftaImg from '../../../assets/Kofta.jpeg';
import styles from './NewProducts.module.css';

export default function NewProducts() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className={styles.products} id="products">
      <div className="container">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <p className="section-eyebrow center">{t('newProdTitle')}</p>

          {/* Tahini */}
          <div className={styles.category}>
            <h3 className={styles.catTitle}>{t('tahiniTitle')}</h3>
            <p className={styles.catText}>{t('tahiniDesc1')}</p>
            <p className={styles.catText}>{t('tahiniDesc2')}</p>
          </div>

          <div className={styles.cardGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Halva */}
          <div className={styles.category}>
            <h3 className={styles.catTitle}>{t('halvaTitle')}</h3>
            <p className={styles.catText}>{t('halvaDesc')}</p>
            <div className={styles.halvaPlaceholder}>
              <img src={halvaImg} alt="Halva" className={styles.halvaImg} loading="lazy" />
            </div>
          </div>

          {/* Uses */}
          <div className={styles.uses}>
            <h3 className={styles.catTitle}>{t('usesTitle')}</h3>
            <p className={styles.catText}>{t('usesDesc')}</p>
            <div className={styles.usesImgWrap}>
              <img src={koftaImg} alt="Kofta with tahini" className={styles.usesImg} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
