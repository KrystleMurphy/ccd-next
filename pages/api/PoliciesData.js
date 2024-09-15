// pages/api/PoliciesData.js
import airtableBase from '@/src/lib/airtable';

export async function fetchPoliciesData(view) {
  try {
    const records = await airtableBase('Policies').select({ view }).all();
    const PoliciesData = records.map((record) => record._rawJson);
    return PoliciesData;
  } catch (error) {
    console.error("Error fetching Policies data:", error);
    return [];
  }
}

export async function getPoliciesData(view) {
  const PoliciesData = await fetchPoliciesData(view);
  return PoliciesData;
}
