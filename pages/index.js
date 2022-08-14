import React from 'react'
import { Hero, Cards, Partners, Relax } from '../components/index';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  React.useEffect(() => {
    Aos.init({ duration: 1000, once: true, easing: 'ease' });
  }, []);
  return (
    <>
      <Hero />
      <Cards />
      <Partners />
      <Relax />
    </>
  );
}
