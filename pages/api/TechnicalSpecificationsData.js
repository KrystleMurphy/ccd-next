import airtableBase from '@/src/lib/airtable';

export async function fetchTechnicalSpecificationsData(view) {
  try {
    const records = await airtableBase('TechnicalSpecifications').select({ view }).all();
    const TechnicalSpecificationsData = records.map((record) => record._rawJson);
    return TechnicalSpecificationsData;
  } catch (error) {
    console.error("Error fetching TechnicalSpecifications data:", error);
    return [];
  }
}

// Server-side function to fetch data
export async function getTechnicalSpecificationsData(view, revalidate) {
  const TechnicalSpecificationsData = await fetchTechnicalSpecificationsData(view);

  // Set Cache-Control header for ISR
  // Use Next.js APIs like `getServerSideProps` or `middleware` for setting headers
  if (revalidate) {
    // Headers can't be set like this in component; this is just a placeholder
    // Use context/res object in `getServerSideProps` if needed
  }

  return TechnicalSpecificationsData;
}
