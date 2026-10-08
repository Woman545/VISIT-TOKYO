import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span className={styles.dot}>●</span> TRAVEL
      </div>
      <p className={styles.tagline}>Откройте мир вместе с нами</p>
      <p className={styles.copy}>© 2026 TRAVEL. Все права защищены.</p>
    </footer>
  );
}