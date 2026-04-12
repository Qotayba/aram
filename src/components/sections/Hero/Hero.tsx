import heroImage from '../../../assets/heroImage.png';
import heroLogo from '../../../assets/HeroLogo.png';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Cream-to-teal wave divider */}
      <div className={styles.waveDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
          {/* Teal fill below the wave */}
          <path d="M0,120 C480,100 960,40 1440,70 L1440,400 L0,400 Z" fill="#1b4d4a" />
          {/* Thick gold band along the wave */}
          <path d="M0,120 C480,100 960,40 1440,70" fill="none" stroke="#c9a84c" strokeWidth="8" />
        </svg>
      </div>

      <img src={heroLogo} alt="Aram Premium Tahini" className={styles.heroLogo} />

      <div className={styles.visual}>
        <div className={styles.bowlWrap}>
          <div className={styles.ring} />
          <div className={`${styles.ring} ${styles.ring2}`} />
          <img
            src={heroImage}
            alt="Aram Premium Tahini"
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
}
