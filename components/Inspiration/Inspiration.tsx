import styles from './Inspiration.module.css';

export default function Inspiration() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>TRAVEL AND<br />INSPIRE YOUR LIFE</h2>
        <button className={styles.playBtn}>
          <span className={styles.playIcon}>▶</span>
          Смотреть видео
        </button>
      </div>
      <div className={styles.videos}>
        {[1, 2, 3].map(i => (
          <div key={i} className={styles.video}>
            <span className={styles.emoji}>🎥</span>
          </div>
        ))}
      </div>
    </section>
  );
}