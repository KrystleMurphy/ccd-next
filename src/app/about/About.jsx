import React from 'react';
import Hero from './components/Hero';
import Team from './components/Team';
import Advisors from './components/Advisors';
import Partners from './components/Partners';

export const metadata = {
    title: 'About Us - CC Diagnostics',
    description:
      "Learn about CC Diagnostics' journey towards medical advancements in cervical cancer detection. Meet our dedicated team, and explore our advisors and partners who support our mission to improve women's health.",
    keywords:
      'about us, CC Diagnostics, medical advancements, cervical cancer detection, team, advisors, partners',
    openGraph: {
      url: 'https://www.cc-diagnostics.netlify.app/about',
      title: 'About Us - CC Diagnostics',
      description:
        "Learn about CC Diagnostics' journey towards medical advancements in cervical cancer detection. Meet our dedicated team, and explore our advisors and partners who support our mission to improve women's health.",
      images: [
        {
          url: 'https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png',
        },
      ],
    },
  };
  

function About({ teamData, partnersData}) {
    return (
        <>
            {/* Page Components */}
            <Hero />
            <Team teamData={teamData}/>
            <Advisors advisorsData={teamData}/>
            <Partners partnersData={partnersData} />
        </>
    );
}

export default About;
