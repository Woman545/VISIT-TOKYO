import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>VISIT TOKYO</h1>
        <p className={styles.subtitle}>Откройте для себя Японию</p>
      </div>
      <div className={styles.info}>
        {[1, 2, 3].map(i => (
          <div key={i} className={styles.infoCard}>
            <p>Посетите лучшие места и узнайте что-то новое</p>
            <a href="#" className={styles.link}>ПОДРОБНЕЕ →</a>
          </div>
        ))}
      </div>
    </section>
  );
}