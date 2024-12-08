'use server';

export async function fetchAirtableData({ baseName, view, filterByFormula = null }) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;

  const url = `https://api.airtable.com/v0/${baseId}/${baseName}?view=${view}${
    filterByFormula ? `&filterByFormula=${encodeURIComponent(filterByFormula)}` : ''
  }`;

  try {
  const response = await fetch(url, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

  const data = await response.json();

      // Log on successful fetch (successful revalidation)
      console.log(
        `[Revalidation Successful] Airtable fetch for "${baseName}" with view "${view}" at ${new Date().toISOString()}`
      );

  return data.records || [];
} catch (error) {
  console.error('Revalidation failed. Falling back to cached data.', error);

      // Return an empty array or fallback data to prevent content failure
      return [];
    }
  }