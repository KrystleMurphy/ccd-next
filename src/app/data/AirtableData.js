'use server';

import airtableBase from '@/src/lib/airtable';

export async function fetchAirtableData({ baseName, view }) {
  try {
    const records = await airtableBase(baseName)
    .select({ view })
    .all();
    const data = records.map((record) => record._rawJson);

    return data;
  } catch (error) {
    console.error(`Error fetching data from ${baseName}:`, error);
    return [];
  }
}