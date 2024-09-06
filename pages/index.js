// pages/index.js
import React from 'react';
import Head from 'next/head'; // Import Head from Next.js
import Hero from '../src/components/Home/components/Hero';
import Stats from '../src/components/Home/components/Stats';
import Mission from '../src/components/Home/components/Mission';
import MethicaKit from '../src/components/Home/components/MethicaKit';
import FeaturedNews from '../src/components/News/components/FeaturedNews';
import { fetchAirtableRecords } from '../src/utils/airtableapi';

export default function Home({ featuredRecords, error }) {
  if (error) {
    return <p className="text-red-500 text-center mt-4">Error: {error.message}</p>;
  }

  return (
    <>
      {/* SEO Meta Tags using Next.js Head component */}
      <Head>
        <title>CC Diagnostics - Leading Cervical Cancer Detection</title>
        <meta
          name="description"
          content="CC Diagnostics offers superior diagnostic methods for cervical cancer detection using advanced technology. Our innovative solutions ensure early intervention and improved patient outcomes."
        />
        <meta
          name="keywords"
          content="cervical cancer detection, diagnostic technology, early detection, medical advancements, CC Diagnostics"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CC Diagnostics - Leading Cervical Cancer Detection" />
        <meta
          property="og:description"
          content="CC Diagnostics offers superior diagnostic methods for cervical cancer detection using advanced technology. Our innovative solutions ensure early intervention and improved patient outcomes."
        />
        <meta property="og:url" content="https://www.cc-diagnostics.netlify.app/" />
        <meta
          property="og:image"
          content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CC Diagnostics - Leading Cervical Cancer Detection" />
        <meta
          name="twitter:description"
          content="CC Diagnostics offers superior diagnostic methods for cervical cancer detection using advanced technology. Our innovative solutions ensure early intervention and improved patient outcomes."
        />
        <meta
          name="twitter:image"
          content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
        />
        <link rel="canonical" href="https://www.cc-diagnostics.netlify.app/" />
      </Head>

      {/* Page Components */}
      <Hero />
      <Stats />
      <Mission />
      <MethicaKit />
      <FeaturedNews records={featuredRecords} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    // Fetch records for the Featured News
    const featuredRecords = await fetchAirtableRecords('News', 'Featured');
    return { props: { featuredRecords } };
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    return { props: { featuredRecords: [], error: { message: error.message } } };
  }
}
