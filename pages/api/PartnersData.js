// pages/api/PartnersData.js
import airtableBase from '@/src/lib/airtable';

export async function fetchPartnersData(view) {
  try {
    const records = await airtableBase('Partners').select({ view }).all();
    const partnersData = records.map((record) => record._rawJson);
    return partnersData;
  } catch (error) {
    console.error("Error fetching Partners data:", error);
    return [];
  }
}

export async function getPartnersData(view) {
  const partnersData = await fetchPartnersData(view);
  return partnersData;
}
