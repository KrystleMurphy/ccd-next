import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Info from '../Products/components/Info';
import Tabs from '../Products/components/Tabs';
import Flow from '../Products/components/Flow';
import SearchCTA from '../SearchDocs/SearchCTA';
import Pipeline from './components/Pipeline';
import SEO from '../common/SEO';

function Products() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', '')); // Remove the '#' character
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <>
            {/* SEO Component */}
            <SEO 
                title="Methica CC Kit - Superior Cervical Cancer Detection" 
                description="Discover the Methica CC Kit, a superior diagnostic tool for cervical cancer detection. Clinically validated with a 97% detection rate, compatible with various sample types, and ideal for automation and qPCR cyclers." 
                keywords="Methica CC Kit, cervical cancer detection, diagnostic performance, qPCR, automation, molecular screening"
                url="https://www.cc-diagnostics.netlify.app/products"
                image="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"  // Company logo used for meta image
            />
            
            {/* Page Components */}
            <Info />
            <Tabs />
            <Flow />
            <Pipeline />
            <SearchCTA />
        </>
    );
}

export default Products;
