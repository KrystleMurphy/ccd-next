// pages/api/ContactData.js
import airtableBase from '@/src/lib/airtable';

export async function fetchContactData(view) {
  try {
    const records = await airtableBase('Contact').select({ view }).all();
    const ContactData = records.map((record) => record._rawJson);
    return ContactData;
  } catch (error) {
    console.error("Error fetching Contact data:", error);
    return [];
  }
}

export async function getContactData(view) {
  const ContactData = await fetchContactData(view);
  return ContactData;
}
