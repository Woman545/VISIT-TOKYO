import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Tours from '@/components/Tours/Tours';
import Inspiration from '@/components/Inspiration/Inspiration';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Tours />
      <Inspiration />
      <Footer />
    </main>
  );
}