import FeaturedNews from './components/FeaturedNews';
import NewsFeed from './components/NewsFeed';
import { fetchAirtableData } from '../data/AirtableData';

export const revalidate = 60;
export default async function Page() {
    const featuredNewsData = await fetchAirtableData({ baseName: 'News', view: 'Featured' });
    const allNewsData = await fetchAirtableData({ baseName: 'News', view: 'Grid view' }); 
    return (
      <>
      {/* <SEO 
        title="Latest News - CC Diagnostics" 
        description="Stay updated with the latest news, updates, and insights from CC Diagnostics. Explore our featured news and news feed to stay informed about our innovations and advancements in cervical cancer detection." 
        keywords="news, CC Diagnostics, latest updates, cervical cancer, medical advancements"
        url="https://www.cc-diagnostics.netlify.app/news"
        image="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"  // Using company logo for meta image
      /> */}
      <FeaturedNews featuredNews={featuredNewsData} />
      <NewsFeed allNews={allNewsData} /> 
      </>
    );
  }