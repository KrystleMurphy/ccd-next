// import Airtable from "../../src/components/common/Airtable/Airtable";

// const apiKey = process.env.AIRTABLE_API_KEY;
// const baseId = process.env.AIRTABLE_BASE_ID;

// Airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: apiKey,
// });

// const base = Airtable.base(baseId);

// export default base;

// utils/airtableapi.js
let base = null;

async function initializeAirtable() {
  const Airtable = (await import('airtable')).default;

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!apiKey || !baseId) {
    throw new Error('Missing Airtable API key or Base ID. Please check your environment variables.');
  }

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: apiKey,
  });

  base = Airtable.base(baseId);
}

export async function getBase() {
  if (!base) {
    await initializeAirtable();
  }
  return base;
}

export async function fetchAirtableRecords(tableName, view) {
  const base = await getBase();
  const records = [];

  try {
    await base(tableName)
      .select({ view })
      .eachPage((pageRecords, fetchNextPage) => {
        records.push(...pageRecords.map((record) => record._rawJson));
        fetchNextPage();
      });

    return records;
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    throw error;
  }
}
