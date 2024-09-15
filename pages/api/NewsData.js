// import airtableBase from '@/src/utils/airtableapi';

// export async function fetchNewsData(view) {
//     try {
//       const records = await airtableBase('News').select({ view }).all();
//       const newsData = records.map((record) => record._rawJson);
//       return newsData;
//     } catch (error) {
//       console.error("Error fetching news data:", error);
//       return [];
//     }
//   }
  
//   // Server Component to fetch and provide data
//   export default async function NewsData({ view, revalidate }) {
//     const newsData = await fetchNewsData(view);
  
//     // Set Cache-Control header for ISR
//     if (revalidate) {
//       headers.set('Cache-Control', `s-maxage=1, stale-while-revalidate=${revalidate}`);
//     }
  
//     return (
//       <div>
//         {newsData} 
//       </div>
//     );
//   }

// Fetching utility
import airtableBase from '@/src/lib/airtable';

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

// Server-side function to fetch data
export async function getNewsData(view, revalidate) {
  const newsData = await fetchNewsData(view);

  // Set Cache-Control header for ISR
  // Use Next.js APIs like `getServerSideProps` or `middleware` for setting headers
  if (revalidate) {
    // Headers can't be set like this in component; this is just a placeholder
    // Use context/res object in `getServerSideProps` if needed
  }

  return newsData;
}
