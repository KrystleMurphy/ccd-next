import '../styles/globals.css'; // Import your global CSS
import Nav from './Nav';
import Footer from './Footer';
import Script from 'next/script';

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Revalidate the layout every two hours
export const revalidate = 172800;

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
        alt: 'CC Diagnostics Placeholder Image'
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico', // Optional - sets the default icon for old browsers
    apple: '/favicon.ico',    // Optional - used for Apple touch icons
  },
};

export default function RootLayout({ children }) {
  return (
<html lang="en">
<head>
<Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="beforeInteractive"
        />
  {/* Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:wght@100;300;400;500;700;900&family=Work+Sans:wght@100;300;400;500;700;900&family=Nunito:wght@100;300;400;500;700;900&family=Domine:wght@100;300;400;500;700;900&family=Karla:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}