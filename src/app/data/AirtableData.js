'use server';

import airtableBase from '@/src/lib/airtable';

export async function fetchAirtableData({ baseName, view, filterByFormula = null }) {
  console.log("Airtable API Key:", process.env.AIRTABLE_API_KEY);
console.log("Airtable Base ID:", process.env.AIRTABLE_BASE_ID);
  try {
    // Build the select options dynamically
    const selectOptions = { view };
    // If filterByFormula is provided, include it in the options
    if (filterByFormula) {
      selectOptions.filterByFormula = filterByFormula;
    }
        // Fetch the records from Airtable with the provided options
        const records = await airtableBase(baseName)
        .select(selectOptions)
        .all();
    const data = records.map((record) => record._rawJson);

    return data;
  } catch (error) {
    console.error(`Error fetching data from ${baseName}:`, error);
    return [];
  }
}