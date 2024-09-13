// src/components/AsyncFooter.jsx
import Footer from '@/src/app/Footer';
import { getPoliciesData } from '@/pages/api/PoliciesData';
import { getContactData } from '@/pages/api/ContactData';

// Define an async component to fetch data and render the footer
export default async function AsyncFooter() {
  // Fetch data for the footer
  const policies = await getPoliciesData('Grid view'); // Replace with correct view if needed
  const contactDetails = await getContactData('Grid view'); // Replace with correct view if needed

  // Render the Footer component with fetched data
  return <Footer policies={policies} contactDetails={contactDetails} />;
}
