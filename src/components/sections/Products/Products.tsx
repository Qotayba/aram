import { useLanguage } from '../../../context/LanguageContext';
import { products } from '../../../data/products';
import ProductCard from './ProductCard/ProductCard';
import styles from './Products.module.css';

export default function Products() {
  const { t, tHtml } = useLanguage();

  return (
    <section className={styles.products} id="products">
      <div className="container">
        <p className="section-eyebrow center">{t('prodEyebrow')}</p>
        <h2
          className="section-title center"
          dangerouslySetInnerHTML={{ __html: tHtml('prodTitle') }}
        />
        <p className={styles.intro}>{t('prodIntro')}</p>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
