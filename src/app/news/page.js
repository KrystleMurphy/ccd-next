import FeaturedNews from './components/FeaturedNews';
import NewsFeed from './components/NewsFeed';
import SEO from '@/src/components/SEO'
import airtableBase from '@/src/utils/airtableapi';

export default function NewsPage({ featuredNews, allNews }) { 
    return (
      <>
      <SEO 
        title="Latest News - CC Diagnostics" 
        description="Stay updated with the latest news, updates, and insights from CC Diagnostics. Explore our featured news and news feed to stay informed about our innovations and advancements in cervical cancer detection." 
        keywords="news, CC Diagnostics, latest updates, cervical cancer, medical advancements"
        url="https://www.cc-diagnostics.netlify.app/news"
        image="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"  // Using company logo for meta image
      />
        <FeaturedNews featuredNews={featuredNews} />
        <NewsFeed allNews={allNews} /> 
      </>
    );
  }
  
  // Fetch data at build time (using getStaticProps)
  export async function getStaticProps() {
    try {
      const featuredRecords = await airtableBase('News').select({ view: 'Featured' }).all();
      const allRecords = await airtableBase('News').select({ view: 'Grid view' }).all();
  
      const featuredNews = featuredRecords.map((record) => record._rawJson);
      const allNews = allRecords.map((record) => record._rawJson);
  
      return {
        props: {
          featuredNews,
          allNews
        },
        revalidate: 604800, // Revalidate every week
      };
    } catch (error) {
      console.error("Error fetching news data:", error);
      // Handle the error gracefully
      return {
        props: {
          featuredNews: [],
          allNews: [],
        },
        revalidate: 60, // Revalidate more frequently in case of errors
      };
    }
  }