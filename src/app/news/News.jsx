import React, { useEffect, useState } from 'react';
import FeaturedNews from './components/FeaturedNews';
import NewsFeed from './components/NewsFeed';
import FNSkeleton from './components/FNSkeleton';
import NFSkeleton from './components/NFSkeleton';
import SEO from '../common/SEO';  // Import the SEO component

function News() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {/* SEO Component */}
      <SEO 
        title="Latest News - CC Diagnostics" 
        description="Stay updated with the latest news, updates, and insights from CC Diagnostics. Explore our featured news and news feed to stay informed about our innovations and advancements in cervical cancer detection." 
        keywords="news, CC Diagnostics, latest updates, cervical cancer, medical advancements"
        url="https://www.cc-diagnostics.netlify.app/news"
        image="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"  // Using company logo for meta image
      />

      {loading ? <FNSkeleton /> : <FeaturedNews />}
      {loading ? <NFSkeleton /> : <NewsFeed />}
    </>
  );
}

export default News;
