// pages/_app.js
import '../styles/globals.css';
import Nav from '../src/components/common/Nav/Nav';
import Footer from '../src/components/common/Footer/Footer';
import { fetchAirtableRecords } from '../src/utils/airtableapi';

function MyApp({ Component, pageProps, footerData }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer footerData={footerData} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    // Fetch records for the Footer
    const footerData = await fetchAirtableRecords('Footer', 'Main');
    return { props: { footerData } };
  } catch (error) {
    console.error('Error fetching footer data:', error);
    return { props: { footerData: [], error: { message: error.message } } };
  }
}

export default MyApp;
