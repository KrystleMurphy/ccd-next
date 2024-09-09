import Head from 'next/head';
import '../styles/globals.css'; // Import your global CSS
import Nav from './Nav';
import Footer from './Footer';

export default function RootLayout({ children }) {
    return (
      <div>
        <Head>
          <title>CC Diagnostics - Leading Cervical Cancer Detection</title>
  
          {/* SEO Meta Tags */}
          <meta name="description" content="CC Diagnostics offers superior diagnostic methods for cervical cancer detection using advanced technology. Our innovative solutions ensure early intervention and improved patient outcomes." />
          <meta name="keywords" content="cervical cancer detection, diagnostic technology, early detection, medical advancements, CC Diagnostics" />
          <link rel="canonical" href="https://www.cc-diagnostics.netlify.app/" />
  
          {/* Open Graph Meta Tags for Social Media */}
          <meta property="og:title" content="CC Diagnostics - Leading Cervical Cancer Detection" />
          <meta property="og:description" content="CC Diagnostics offers superior diagnostic methods for cervical cancer detection using advanced technology." />
          <meta property="og:image" content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png" />
          <meta property="og:url" content="https://www.cc-diagnostics.netlify.app/" />
  
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="CC Diagnostics - Leading Cervical Cancer Detection" />
          <meta name="twitter:description" content="CC Diagnostics offers superior diagnostic methods for cervical cancer detection using advanced technology." />
          <meta name="twitter:image" content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png" />
        </Head>
  
        <Nav />
        {children}
        <Footer />
      </div>
    );
  }