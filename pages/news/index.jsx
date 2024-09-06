// pages/news.jsx
import FeaturedNews from '../../src/components/News/components/FeaturedNews'; // Adjust paths based on project structure
import NewsFeed from '../../src/components/News/components/NewsFeed';
import Head from 'next/head'; // Import Head from Next.js
import { fetchAirtableRecords } from '../../src/utils/airtableapi'; // Ensure this function fetches data correctly

export default function News({ featuredRecords, newsFeedRecords, error }) {
  // Handle error display if data fetching fails
  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <>
      {/* SEO Meta Tags using Next.js Head component */}
      <Head>
        <title>Latest News - CC Diagnostics</title>
        <meta
          name="description"
          content="Stay updated with the latest news, updates, and insights from CC Diagnostics. Explore our featured news and news feed to stay informed about our innovations and advancements in cervical cancer detection."
        />
        <meta
          name="keywords"
          content="news, CC Diagnostics, latest updates, cervical cancer, medical advancements"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Latest News - CC Diagnostics" />
        <meta
          property="og:description"
          content="Stay updated with the latest news, updates, and insights from CC Diagnostics. Explore our featured news and news feed to stay informed about our innovations and advancements in cervical cancer detection."
        />
        <meta property="og:url" content="https://www.cc-diagnostics.netlify.app/news" />
        <meta
          property="og:image"
          content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Latest News - CC Diagnostics" />
        <meta
          name="twitter:description"
          content="Stay updated with the latest news, updates, and insights from CC Diagnostics. Explore our featured news and news feed to stay informed about our innovations and advancements in cervical cancer detection."
        />
        <meta
          name="twitter:image"
          content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
        />
        <link rel="canonical" href="https://www.cc-diagnostics.netlify.app/news" />
      </Head>

      {/* Pass fetched data to components */}
      <FeaturedNews records={featuredRecords} />
      <NewsFeed records={newsFeedRecords} />
    </>
  );
}

// Fetch data server-side for the News page
export async function getServerSideProps() {
  try {
    // Fetch records for Featured News and News Feed
    const featuredRecords = await fetchAirtableRecords('News', 'Featured'); // Adjust table name and view as needed
    const newsFeedRecords = await fetchAirtableRecords('News', 'Grid view'); // Adjust table name and view as needed

    return {
      props: {
        featuredRecords: featuredRecords || [],
        newsFeedRecords: newsFeedRecords || [],
      },
    };
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    return {
      props: {
        featuredRecords: [],
        newsFeedRecords: [],
        error: 'Failed to load data from Airtable. Please try again later.',
      },
    };
  }
}
