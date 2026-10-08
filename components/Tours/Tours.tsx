import styles from './Tours.module.css';

const tours = [
  {
    number: 1,
    image: '/images/tour1.jpg',
    title: 'Сэнсо-дзи (Асакуса Каннон)',
    desc: 'Посетите самый cтарый будийский храм в Токио'
  },
  {
    number: 2,
    image: '/images/tour2.jpg',
    title: 'Перекрёсток Сибуя',
    desc: 'Очень популярное место из фильмов и сериалов'
  },
  {
    number: 3,
    image: '/images/tour3.jpg',
    title: 'Синдзюку-Гёэн',
    desc: 'Один из крупнейших и самых известных национальных парков в Япония'
  },
  {
    number: 4,
    image: '/images/tour4.jpg',
    title: 'Японская чайная церемония',
    desc: 'Традиционный ритуал приготовления и питья порошкового зеленого чая маття'
  }
];

export default function Tours() {
  return (
    <section className={styles.tours}>
      <div className={styles.sectionTitle}>
        <p>и получите незабываемые эмоции</p>
        <h2>ПОПУЛЯРНЫЕ ТУРЫ</h2>
      </div>
      <div className={styles.grid}>
        {tours.map(tour => (
          <div key={tour.number} className={styles.card}>
            <div 
              className={styles.image}
              style={{
                backgroundImage: `url(${tour.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className={styles.tourNum}>ТУР №{tour.number}</div>
            </div>
            <h3>{tour.title}</h3>
            <p>{tour.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}