import type { ReactNode } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './ContactUs.module.css';

interface ContactItem {
  id: string;
  titleKey: 'contactPhone' | 'contactWA' | 'contactEmail' | 'contactWeb';
  display: string;
  href: string;
  labelKey?: 'contactWALink';
  target?: '_blank';
  icon: ReactNode;
}

const PHONE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .89h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
  </svg>
);

const EMAIL_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const WEB_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
);

const CONTACT_ITEMS: ContactItem[] = [
  {
    id: 'phone',
    titleKey: 'contactPhone',
    display: '+972-59-393-3395',
    href: 'tel:+972593933395',
    icon: PHONE_ICON,
  },
  {
    id: 'whatsapp',
    titleKey: 'contactWA',
    display: '+972 59-393-3395',
    labelKey: 'contactWALink',
    href: 'https://wa.me/972593933395',
    target: '_blank',
    icon: WA_ICON,
  },
  {
    id: 'email',
    titleKey: 'contactEmail',
    display: 'info@aramtahini.com',
    href: 'mailto:info@aramtahini.com',
    icon: EMAIL_ICON,
  },
  {
    id: 'web',
    titleKey: 'contactWeb',
    display: 'www.aramtahini.com',
    href: 'https://www.aramtahini.com/',
    target: '_blank',
    icon: WEB_ICON,
  },
];

export default function ContactUs() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <p className="section-eyebrow center">{t('contactEyebrow')}</p>
        <h2 className="section-title center">{t('contactTitle')}</h2>

        <div
          ref={ref}
          className={`${styles.grid} fade-in ${isVisible ? 'visible' : ''}`}
        >
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={styles.card}
              target={item.target}
              rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h4>{t(item.titleKey)}</h4>
              <span className={styles.link}>
                {item.labelKey ? t(item.labelKey) : item.display}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
