import airtableBase from '@/src/utils/airtableapi';

export async function fetchNewsData(view) {
    try {
      const records = await airtableBase('News').select({ view }).all();
      const newsData = records.map((record) => record._rawJson);
      return newsData;
    } catch (error) {
      console.error("Error fetching news data:", error);
      return [];
    }
  }
  
  // Server Component to fetch and provide data
  export default async function NewsData({ view, revalidate }) {
    const newsData = await fetchNewsData(view);
  
    // Set Cache-Control header for ISR
    if (revalidate) {
      headers.set('Cache-Control', `s-maxage=1, stale-while-revalidate=${revalidate}`);
    }
  
    return (
      <div>
        {newsData} 
      </div>
    );
  }