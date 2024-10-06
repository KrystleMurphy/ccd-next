'use server';

import airtableBase from '@/src/lib/airtable';

/**
 * Fetches data from an Airtable base and view with optional filtering.
 *
 * @param {Object} params - The parameters for the Airtable query.
 * @param {string} params.baseName - The Airtable base name.
 * @param {string} params.view - The Airtable view name.
 * @param {string} [params.filterByFormula] - Optional Airtable formula for filtering.
 * @returns {Promise<Array>} The data fetched from Airtable.
 */

export async function fetchAirtableData({ baseName, view, filterByFormula = null }) {
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
    console.error(`Error fetching data from ${baseName}:`, error.response || error.message || error);
    return [];
  }
}