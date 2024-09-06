// pages/products.jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Use Next.js router
import Head from 'next/head'; // Import Next.js Head component for SEO
import Info from '../src/components/Products/components/Info';
import Tabs from '../src/components/Products/components/Tabs';
import Flow from '../src/components/Products/components/Flow';
import SearchCTA from '../src/components/SearchDocs/SearchCTA';
import Pipeline from '../src/components/Products/components/Pipeline';

function Products() {
  const router = useRouter();
  const { hash } = router;

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', '')); // Remove the '#' character
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      {/* SEO Meta Tags using Next.js Head component */}
      <Head>
        <title>Methica CC Kit - Superior Cervical Cancer Detection</title>
        <meta
          name="description"
          content="Discover the Methica CC Kit, a superior diagnostic tool for cervical cancer detection. Clinically validated with a 97% detection rate, compatible with various sample types, and ideal for automation and qPCR cyclers."
        />
        <meta
          name="keywords"
          content="Methica CC Kit, cervical cancer detection, diagnostic performance, qPCR, automation, molecular screening"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Methica CC Kit - Superior Cervical Cancer Detection" />
        <meta
          property="og:description"
          content="Discover the Methica CC Kit, a superior diagnostic tool for cervical cancer detection. Clinically validated with a 97% detection rate, compatible with various sample types, and ideal for automation and qPCR cyclers."
        />
        <meta property="og:url" content="https://www.cc-diagnostics.netlify.app/products" />
        <meta
          property="og:image"
          content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Methica CC Kit - Superior Cervical Cancer Detection" />
        <meta
          name="twitter:description"
          content="Discover the Methica CC Kit, a superior diagnostic tool for cervical cancer detection. Clinically validated with a 97% detection rate, compatible with various sample types, and ideal for automation and qPCR cyclers."
        />
        <meta
          name="twitter:image"
          content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
        />
        <link rel="canonical" href="https://www.cc-diagnostics.netlify.app/products" />
      </Head>

      {/* Page Components */}
      <Info />
      <Tabs />
      <Flow />
      <Pipeline />
      <SearchCTA />
    </>
  );
}

export default Products;
