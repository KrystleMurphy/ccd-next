// src/app/products/page.js

import Products from './Products'; // Import the client component
import { getTechnicalSpecificationsData } from '@/pages/api/TechnicalSpecificationsData';

// Metadata object for SEO purposes
export const metadata = {
  title: 'Methica CC Kit - Superior Cervical Cancer Detection',
  description:
    'Discover the Methica CC Kit, a superior diagnostic tool for cervical cancer detection. Clinically validated with a 97% detection rate, compatible with various sample types, and ideal for automation and qPCR cyclers.',
  keywords: [
    'Methica CC Kit',
    'cervical cancer detection',
    'diagnostic performance',
    'qPCR',
    'automation',
    'molecular screening',
  ],
  openGraph: {
    url: 'https://www.cc-diagnostics.netlify.app/products',
    images: [
      {
        url: 'https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png',
      },
    ],
  },
};

export default async function ProductsPage() {
  // Fetch the technical specifications data
  const technicalSpecifications = await getTechnicalSpecificationsData('Grid view');

  return (
    // Pass the fetched data to the Products component
    <Products technicalSpecifications={technicalSpecifications} />
  );
}