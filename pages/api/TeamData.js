import airtableBase from '@/src/lib/airtable';

export async function fetchTeamData(view) {
  try {
    const records = await airtableBase('Team').select({ view }).all();
    const TeamData = records.map((record) => record._rawJson);
    return TeamData;
  } catch (error) {
    console.error("Error fetching Team data:", error);
    return [];
  }
}

// Server-side function to fetch data
export async function getTeamData(view, revalidate) {
  const TeamData = await fetchTeamData(view);

  // Set Cache-Control header for ISR
  // Use Next.js APIs like `getServerSideProps` or `middleware` for setting headers
  if (revalidate) {
    // Headers can't be set like this in component; this is just a placeholder
    // Use context/res object in `getServerSideProps` if needed
  }

  return TeamData;
}
