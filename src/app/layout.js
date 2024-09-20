// src/app/layout.js

import '../styles/globals.css'; // Import your global CSS
import Nav from './Nav';
import Footer from './Footer';

// Metadata configuration
export const metadata = {
  title: 'CC Diagnostics - Leading Cervical Cancer Detection',
  description:
    'CC Diagnostics offers superior diagnostic methods for cervical cancer detection using advanced technology. Our innovative solutions ensure early intervention and improved patient outcomes.',
  keywords: [
    'cervical cancer detection',
    'diagnostic technology',
    'early detection',
    'medical advancements',
    'CC Diagnostics',
  ],
  openGraph: {
    url: 'https://www.ccdiagnostics.netlify.app/',
    images: [
      {
        url: 'https://ccdiagnostics.netlify.app/assets/placeholder.png',
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"   
 />
    <link rel="icon" type="png"
 href="/favicon.ico" /> 
  </head>
      <body> {/* Add the <body> tag */}
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
