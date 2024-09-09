import React from 'react';
import Hero from './components/Hero';
import Team from './components/Team';
import Advisors from './components/Advisors';
import Partners from './components/Partners';
import SEO from '../common/SEO';

function About() {
    return (
        <>
            {/* SEO Component */}
            <SEO 
                title="About Us - CC Diagnostics" 
                description="Learn about CC Diagnostics' journey towards medical advancements in cervical cancer detection. Meet our dedicated team, and explore our advisors and partners who support our mission to improve women's health." 
                keywords="about us, CC Diagnostics, medical advancements, cervical cancer detection, team, advisors, partners"
                url="https://www.cc-diagnostics.netlify.app/about"
                image="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"  // Using company logo for meta image
            />
            
            {/* Page Components */}
            <Hero />
            <Team />
            <Advisors />
            <Partners />
        </>
    );
}

export default About;
