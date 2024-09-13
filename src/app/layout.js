// src/app/layout.js

import '../styles/globals.css'; // Import your global CSS
import Nav from './Nav';
// import ServerFooterData from '@/pages/api/ServerFooterData'; 

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
    url: 'https://www.cc-diagnostics.netlify.app/',
    images: [
      {
        url: 'https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* Add the <html> tag with a lang attribute */}
      <head>
        {/* Next.js automatically injects the metadata here based on the metadata object */}
      </head>
      <body> {/* Add the <body> tag */}
        <Nav />
        {children}
        {/* <ServerFooterData /> */}
      </body>
    </html>
  );
}
