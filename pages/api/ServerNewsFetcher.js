// src/app/components/ServerNewsFetcher.js
import airtableBase from '@/src/utils/airtableapi'; // Ensure this path is correct

// Server component that fetches data from Airtable
export default async function ServerNewsFetcher({ view, revalidate }) {
  try {
    const records = await airtableBase('News').select({ view }).all();
    const newsData = records.map((record) => record._rawJson);

    // This can handle caching logic or headers if needed in the server environment

    return newsData; // Simply return the fetched data
  } catch (error) {
    console.error('Error fetching news data:', error);
    return [];
  }
}
