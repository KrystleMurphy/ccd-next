export const revalidate = 60; 

import Hero from './home/Hero';
import Stats from './home/Stats';
import Issues from './home/Issues'
import Mission from './home/Mission';
import MethicaKit from './home/MethicaKit';
import FeaturedNews from './news/components/FeaturedNews';
import Testimonials from './home/Testimonials';
import { fetchAirtableData } from './data/AirtableData';

// Server-side component to fetch data
export default async function Page() {
  const featuredNewsData = await fetchAirtableData({ baseName: 'News', view: 'Featured' });
return (
    <>
      <Hero />
      <Stats />
      <Mission />
      <Issues/>
      <MethicaKit />
      <FeaturedNews featuredNews={featuredNewsData} />
      <Testimonials />
    </>
  );
}