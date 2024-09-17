export const revalidate = 60;

import FeaturedNews from './components/FeaturedNews';
import NewsFeed from './components/NewsFeed';
import { fetchAirtableData } from '../data/AirtableData';
import { sleep } from '../data/AirtableData';

export const metadata = {
  title: 'Latest News - CC Diagnostics',
  description:
    'Stay updated with the latest news, updates, and insights from CC Diagnostics. Explore our featured news and news feed to stay informed about our innovations and advancements in cervical cancer detection.',
  keywords:
    'news, CC Diagnostics, latest updates, cervical cancer, medical advancements',
  openGraph: {
    url: 'https://www.cc-diagnostics.netlify.app/news',
    title: 'Latest News - CC Diagnostics',
    description:
      'Stay updated with the latest news, updates, and insights from CC Diagnostics. Explore our featured news and news feed to stay informed about our innovations and advancements in cervical cancer detection.',
    images: [
      {
        url: 'https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png',
      },
    ],
  },
};
export default async function Page() {
    const featuredNewsData = await fetchAirtableData({ baseName: 'News', view: 'Featured' });
    await sleep(1000);
    const allNewsData = await fetchAirtableData({ baseName: 'News', view: 'Grid view' });
    await sleep(1000);
    return (
      <>
      <FeaturedNews featuredNews={featuredNewsData} />
      <NewsFeed allNews={allNewsData} />
    </>
  );
}
