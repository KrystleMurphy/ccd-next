'use client';

import { use } from 'react';
import FeaturedNews from './components/FeaturedNews';
import NewsFeed from './components/NewsFeed';
// import SEO from '@/src/components/SEO'
import NewsData from '../data/AirtableData'

export default function NewsPage() {
    const featuredNewsData = use(NewsData({ view: 'Featured', revalidate: 604800 })); 
    const allNewsData = use(NewsData({ view: 'Grid view', revalidate: 604800 })); 
  
    return (
      <>
      {/* <SEO 
        title="Latest News - CC Diagnostics" 
        description="Stay updated with the latest news, updates, and insights from CC Diagnostics. Explore our featured news and news feed to stay informed about our innovations and advancements in cervical cancer detection." 
        keywords="news, CC Diagnostics, latest updates, cervical cancer, medical advancements"
        url="https://www.cc-diagnostics.netlify.app/news"
        image="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"  // Using company logo for meta image
      /> */}
      <FeaturedNews featuredNews={featuredNewsData} />
      <NewsFeed allNews={allNewsData} /> 
      </>
    );
  }