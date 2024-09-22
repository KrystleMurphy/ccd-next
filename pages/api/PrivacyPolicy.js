import airtableBase from '@/src/lib/airtable'; 

// const base = new airtableBase({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
// const table = base(process.env.AIRTABLE_TABLE_NAME);

// export default async function handler(req, res) {
//   const { recordId } = req.query; // Get the record ID from the query parameters

//   try {
//     // Fetch the record from Airtable by its ID
//     const record = await table.find(recordId);

//     if (record.fields.Policies) { // Replace with your attachment field name
//       const fileData = record.fields.Document[0]; // Assuming the first attachment
//       res.status(200).json({ fileUrl: fileData.url });
//     } else {
//       res.status(404).json({ error: 'No attachment found' });
//     }
//   } catch (error) {
//     console.error('Error fetching record:', error);
//     res.status(500).json({ error: 'Failed to retrieve file' });
//   }
// }

export async function fetchFile(view) {
    try {
      const records = await airtableBase('Policies').select({ view }).all();
      return records;
    } catch (error) {
      console.error("Error fetching news data:", error);
      return [];
    }
  }

export default async function getPolicy(req, res) {
  const { recordId } = req.query;

  try {
    const record = await airtableBase.find(recordId);

    if (record.fields.AttachmentFieldName) {
      const fileData = record.fields.AttachmentFieldName[0];
      res.status(200).json({ fileUrl: fileData.url });
    } else {
      res.status(404).json({ error: 'No attachment found' });
    }
  } catch (error) {
    console.error('Error fetching record:', error);
    res.status(500).json({ error: 'Failed to retrieve file' });
  }
}
