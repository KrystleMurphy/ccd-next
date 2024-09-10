// 'use client';

// import { use } from 'react';
// import Hero from './home/Hero';
// import Stats from './home/Stats';
// import Mission from './home/Mission';
// import MethicaKit from './home/MethicaKit';
// import FeaturedNews from './news/components/FeaturedNews';
// import SEO from '../components/SEO';
// import NewsData from '../../pages/api/NewsData';

// export default function HomePage() {
//     const featuredNewsData = use(NewsData({ view: 'Featured', revalidate: 604800 }));
  
//     return (
//       <>
//         <SEO 
//           title="CC Diagnostics - Leading Cervical Cancer Detection" 
//           description="CC Diagnostics offers superior diagnostic methods for cervical cancer detection using advanced technology. Our innovative solutions ensure early intervention and improved patient outcomes." 
//           keywords="cervical cancer detection, diagnostic technology, early detection, medical advancements, CC Diagnostics"
//           url="https://www.cc-diagnostics.netlify.app/"
//           image="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
//         />
//         <Hero />
//         <Stats />
//         <Mission />
//         <MethicaKit />
//         <FeaturedNews featuredNews={featuredNewsData} /> 
//       </>
//     );
//   }

// src/app/page.js

import HomePage from '../app/home/HomePage';
import ServerNewsFetcher from '@/pages/api/ServerNewsFetcher';

// Define metadata for the page
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
        alt: 'CC Diagnostics Logo',
      },
    ],
  },
};

// Server-side component to fetch data
export default async function Page() {
  const featuredNewsData = await ServerNewsFetcher({ view: 'Featured', revalidate: 604800 });

  return <HomePage featuredNewsData={featuredNewsData} />;
}

