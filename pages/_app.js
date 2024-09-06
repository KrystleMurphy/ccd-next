// pages/_app.js
import '../styles/globals.css'; // Import global styles
import Nav from '../src/components/common/Nav/Nav'; // Adjust paths based on your new structure
import Footer from '../src/components/common/Footer/Footer'; 
import { HelmetProvider } from 'react-helmet-async';

function MyApp({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </HelmetProvider>
  );
}

export default MyApp;
