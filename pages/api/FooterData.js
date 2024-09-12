// import airtableBase from '@/src/utils/airtableapi';

// export async function fetchFooterData() {
//     try {
//         const contactRecords = await airtableBase('Contact').select({ view: 'Grid view' }).all();
//         const policyRecords = await airtableBase('Policies').select({ view: 'Grid view' }).all();

//         const contactDetails = contactRecords.map((record) => record._rawJson);
//         const policies = policyRecords.map((record) => record._rawJson);

//         return { contactDetails, policies };
//     } catch (error) {
//         console.error("Error fetching footer data:", error);
//         // Handle the error gracefully
//         return {
//             contactDetails: [],
//             policies: [],
//         };
//     }
// }

// export default async function FooterData({ revalidate }) {
//     const { contactDetails, policies } = await fetchFooterData();

//     // Set Cache-Control header for ISR
//     if (revalidate) {
//         headers.set('Cache-Control', `s-maxage=1, stale-while-revalidate=${revalidate}`);
//     }

//     return (
//         <div>
//             {contactDetails}
//             {policies}
//         </div>
//     );
// }


// pages/api/FooterData.js
import airtableBase from '@/src/utils/airtableapi'; 

export default async function FooterData(req, res) {
  // Safely destructure query parameters with default values
  const { view = 'DefaultView', revalidate = 3600 } = req.query; // Set a default view value

  try {
    // Check if the view is a valid string
    if (typeof view !== 'string' || view.trim() === '') {
      throw new Error('Invalid view parameter: must be a non-empty string.');
    }

    // Fetch data from Airtable
    const records = await airtableBase('Footer').select({ view }).all();
    const footerData = records.map((record) => record._rawJson);

    // Set Cache-Control header for ISR
    res.setHeader('Cache-Control', `s-maxage=1, stale-while-revalidate=${revalidate}`);

    // Send the response with the fetched data
    res.status(200).json(footerData);
  } catch (error) {
    console.error('Error fetching footer data:', error);
    res.status(500).json({ error: 'Failed to fetch footer data' });
  }
}
