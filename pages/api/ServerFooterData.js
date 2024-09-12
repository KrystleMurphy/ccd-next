// src/components/ServerFooterData.js

import Footer from '@/src/app/Footer'; // Adjust path if necessary

export default async function ServerFooterData() {
  try {
    // Define the base URL properly, using an environment variable or a direct string if not available.
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // Use localhost as fallback for development
    const response = await fetch(`${baseUrl}/api/FooterData`); // Ensure the URL is correctly constructed

    // Check if the response is okay, otherwise handle errors appropriately.
    if (!response.ok) {
      throw new Error(`Failed to fetch footer data: ${response.statusText}`);
    }

    const footerData = await response.json();

    // Extract needed data
    const { contactDetails = [], policies = [] } = footerData;

    // Pass the fetched data to the Footer Client Component
    return <Footer contactDetails={contactDetails} policies={policies} />;
  } catch (error) {
    console.error('Error fetching footer data:', error);
    return <Footer contactDetails={[]} policies={[]} />; // Provide fallback in case of an error
  }
}
