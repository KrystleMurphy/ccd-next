// src/app/components/HomePage.js
'use client';

import Hero from './Hero';
import Stats from './Stats';
import Mission from './Mission';
import MethicaKit from './MethicaKit';
import FeaturedNews from '../news/components/FeaturedNews';

export default function HomePage({ featuredNewsData }) {
  return (
    <>
      <Hero />
      <Stats />
      <Mission />
      <MethicaKit />
      <FeaturedNews featuredNews={featuredNewsData} />
    </>
  );
}
