import airtableBase from '@/src/utils/airtableapi';

export async function fetchFooterData() {
    try {
        const contactRecords = await airtableBase('Contact').select({ view: 'Grid view' }).all();
        const policyRecords = await airtableBase('Policies').select({ view: 'Grid view' }).all();

        const contactDetails = contactRecords.map((record) => record._rawJson);
        const policies = policyRecords.map((record) => record._rawJson);

        return { contactDetails, policies };
    } catch (error) {
        console.error("Error fetching footer data:", error);
        // Handle the error gracefully
        return {
            contactDetails: [],
            policies: [],
        };
    }
}

export default async function FooterData({ revalidate }) {
    const { contactDetails, policies } = await fetchFooterData();

    // Set Cache-Control header for ISR
    if (revalidate) {
        headers.set('Cache-Control', `s-maxage=1, stale-while-revalidate=${revalidate}`);
    }

    return (
        <div>
            {contactDetails}
            {policies}
        </div>
    );
}