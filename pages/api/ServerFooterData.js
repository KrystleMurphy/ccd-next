// src/app/components/ServerFooterData.js
import Footer from '@/src/app/Footer'; // Adjust path if necessary
import FooterData from '@/pages/api/FooterData'; // Ensure the correct path to your API route

// Server component that fetches footer data and passes it to Footer
export default async function ServerFooterData() {
  try {
    // Fetch data from the FooterData API or any server-side function directly
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/FooterData`);
    const footerData = await response.json();

    // Extract necessary data
    const { contactDetails = [], policies = [] } = footerData;

    // Pass the fetched data to the Footer Client Component
    return <Footer contactDetails={contactDetails} policies={policies} />;
  } catch (error) {
    console.error('Error fetching footer data:', error);
    return <Footer contactDetails={[]} policies={[]} />; // Provide fallback in case of an error
  }
}
