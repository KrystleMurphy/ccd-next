export const revalidate = 60; 

import Products from './Products';
import { Suspense } from 'react'
import { fetchAirtableData } from '../data/AirtableData';

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

export default async function Page() {
  // Fetch the technical specifications data
  const productData = await fetchAirtableData({ baseName: 'Technical Specifications', view: 'Grid view' });
return (
    <>
    <Suspense>
    <Products technicalSpecifications={productData} />
    </Suspense>
    </>
  );
}