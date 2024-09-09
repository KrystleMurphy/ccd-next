import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Mission from './components/Mission';
import MethicaKit from './components/MethicaKit';
import FeaturedNews from '../News/components/FeaturedNews';
import SEO from '../common/SEO';

function Home() {
    return (
        <>
            {/* SEO Component */}
            <SEO 
                title="CC Diagnostics - Leading Cervical Cancer Detection" 
                description="CC Diagnostics offers superior diagnostic methods for cervical cancer detection using advanced technology. Our innovative solutions ensure early intervention and improved patient outcomes." 
                keywords="cervical cancer detection, diagnostic technology, early detection, medical advancements, CC Diagnostics"
                url="https://www.cc-diagnostics.netlify.app/"
                image="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
            />
            
            {/* Page Components */}
            <Hero />
            <Stats />
            <Mission />
            <MethicaKit />
            <FeaturedNews/>
        </>
    );
}

export default Home;
