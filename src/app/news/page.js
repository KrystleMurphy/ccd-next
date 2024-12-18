import FeaturedNews from './components/FeaturedNews';
import NewsFeed from './components/NewsFeed';
import { fetchAirtableData } from '../data/AirtableData';

export const metadata = {
  title: 'Latest News - CC Diagnostics',
  description:
    'Stay updated with the latest news, updates, and insights from CC Diagnostics. Explore our featured news and news feed to stay informed about our innovations and advancements in cervical cancer detection.',
  keywords:
    'news, CC Diagnostics, latest updates, cervical cancer, medical advancements',
  openGraph: {
    url: 'https://www.ccdiagnostics.netlify.app/news',
    title: 'Latest News - CC Diagnostics',
    description:
      'Stay updated with the latest news, updates, and insights from CC Diagnostics. Explore our featured news and news feed to stay informed about our innovations and advancements in cervical cancer detection.',
    images: [
      {
        url: 'https://ccdiagnostics.netlify.app/assets/MethicaKit.png',
      },
    ],
  },
};
// Centralized Data Fetching
async function getNewsData() {
  const [featuredNews, allNews] = await Promise.all([
    fetchAirtableData({ baseName: 'News', view: 'Featured' }),
    fetchAirtableData({ baseName: 'News', view: 'Grid view' }),
  ]);

  return { featuredNews, allNews };
}

export default async function Page() {
  const { featuredNews, allNews } = await getNewsData();

  return (
    <>
      <FeaturedNews featuredNews={featuredNews} />
      <NewsFeed allNews={allNews} />
    </>
  );
}
