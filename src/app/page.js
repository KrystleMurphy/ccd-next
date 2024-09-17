export const revalidate = 60; 

import Hero from './home/Hero';
import Stats from './home/Stats';
import Mission from './home/Mission';
import MethicaKit from './home/MethicaKit';
import FeaturedNews from './news/components/FeaturedNews';
import { fetchAirtableData } from './data/AirtableData';

// Server-side component to fetch data
export default async function Page() {
  const featuredNewsData = await fetchAirtableData({ baseName: 'News', view: 'Featured' });
  await sleep(1000);
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