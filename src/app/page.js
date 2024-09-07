import Hero from './home/components/Hero';
import Stats from './home/components/Stats';
import Mission from './home/components/Mission';
import MethicaKit from './home/components/MethicaKit';
import FeaturedNews from '../news/components/FeaturedNews';
import SEO from '../components/SEO';
import airtableBase from '@/src/utils/airtableapi';

export default function HomePage({ featuredNews }) { 
    return (
      <>
        <SEO 
          title="CC Diagnostics - Leading Cervical Cancer Detection" 
          description="CC Diagnostics offers superior diagnostic methods for cervical cancer detection using advanced technology. Our innovative solutions ensure early intervention and improved patient outcomes." 
          keywords="cervical cancer detection, diagnostic technology, early detection, medical advancements, CC Diagnostics"
          url="https://www.cc-diagnostics.netlify.app/"
          image="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
        />
        <Hero />
        <Stats />
        <Mission />
        <MethicaKit />
        <FeaturedNews featuredNews={featuredNews} /> 
      </>
    );
  }

  // Fetch featured news data at build time (using getStaticProps)
export async function getStaticProps() {
    try {
      const records = await airtableBase('News').select({ view: 'Featured' }).all();
      const featuredNews = records.map((record) => record._rawJson);
  
      return {
        props: {
          featuredNews,
        },
        revalidate: 604800, // Revalidate every week (adjust as needed)
      };
    } catch (error) {
      console.error("Error fetching featured news:", error);
      return {
        props: {
          featuredNews: [],
        },
        revalidate: 60,
      };
    }
  }