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
  const [featuredNewsData, testimonialsData] = await Promise.all([
    fetchAirtableData({ baseName: 'News', view: 'Featured' }),
    fetchAirtableData({ baseName: 'Testimonials', view: 'Grid view' }),
  ]);
return (
    <>
      <Hero />
      <Stats />
      <Mission />
      <Issues/>
      <MethicaKit />
      {featuredNewsData.length > 0 && <FeaturedNews featuredNews={featuredNewsData} />}
      {testimonialsData.length > 0 && <Testimonials reviews={testimonialsData} />}
    </>
  );
}