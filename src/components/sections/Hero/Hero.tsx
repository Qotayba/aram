import heroImage from '../../../assets/heroImage.png';
import heroLogo from '../../../assets/HeroLogo.png';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src={heroLogo} alt="Aram Premium Tahini" className={styles.heroLogo} width="273" height="291" />

      <div className={styles.visual}>
        {/* Wave lives here — positioned relative to the jar container */}
        <div className={styles.waveDivider} aria-hidden="true">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C480,60 960,20 1440,50 L1440,320 L0,320 Z" fill="#1b4d4a" />
            <path d="M0,80 C480,60 960,20 1440,50" fill="none" stroke="#c9a84c" strokeWidth="8" />
          </svg>
        </div>

        <div className={styles.bowlWrap}>
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