import { useLanguage } from '../../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../../hooks/useIntersectionObserver';
import type { Product } from '../../../../data/products';
import styles from './ProductCard.module.css';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  const cardClass = [
    styles.card,
    product.featured  && styles.featured,
    product.wholesale && styles.wholesale,
    'fade-in',
    isVisible ? 'visible' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const badgeClass = [
    styles.badge,
    product.wholesale ? styles.badgeWholesale : product.featured ? styles.badgeFeatured : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article ref={ref} className={cardClass}>
      <div className={styles.imgWrap}>
        <span className={badgeClass}>{t(product.badgeKey)}</span>
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className={styles.img}
          loading="lazy"
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{t(product.nameKey)}</h3>
        <p className={styles.weight}>{product.weight}</p>
        <p className={styles.desc}>{t(product.descKey)}</p>
        <ul className={styles.tags}>
          {product.tags.map((tag) => (
            <li key={tag}>{t(tag)}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
