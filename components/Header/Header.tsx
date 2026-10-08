import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.dot}>●</span> TRAVEL
      </div>
      <nav className={styles.nav}>
        <a href="#">ГЛАВНАЯ</a>
        <a href="#">О НАС</a>
        <a href="#">ТУРЫ</a>
        <a href="#">ГАЛЕРЕЯ</a>
        <a href="#">КОНТАКТЫ</a>
      </nav>
      <button className={styles.search}>🔍</button>
    </header>
  );
}