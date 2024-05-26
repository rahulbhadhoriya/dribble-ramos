'use client';
import { useEffect } from 'react';
import Main from './Main';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './Navigation';
import './index.css';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import Footer from './Footer';
config.autoAddCss = false; /* eslint-disable import/first */

export default function Home() {
  useEffect(() => {
    AOS.init({ easing: 'ease-in-out' });
  }, []);

  return (
    <>
      <Navigation />
      <Main />
      <Footer />
    </>
  );
}
