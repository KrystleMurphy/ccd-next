'use server';

export async function fetchAirtableData({ baseName, view, filterByFormula = null }) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;

  const url = `https://api.airtable.com/v0/${baseId}/${baseName}?view=${view}${
    filterByFormula ? `&filterByFormula=${encodeURIComponent(filterByFormula)}` : ''
  }`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    // Cache the Airtable response and revalidate every hour
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    console.error(`Error fetching Airtable data: ${response.statusText}`);
    return [];
  }

  const data = await response.json();
  return data.records || [];
}