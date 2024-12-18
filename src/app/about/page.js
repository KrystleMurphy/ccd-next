import React from 'react';
import Hero from './components/Hero';
import Team from './components/Team';
import Advisors from './components/Advisors';
import Partners from './components/Partners';
import { fetchAirtableData } from '../data/AirtableData';

async function getAboutPageData() {
  try {
    const teamData = await fetchAirtableData({
      baseName: 'Team',
      view: 'Grid view',
    });

    const partnersData = await fetchAirtableData({
      baseName: 'Partners',
      view: 'Grid view',
    });

    return { teamData, partnersData };
  } catch (error) {
    console.error('Error fetching About page data:', error);
    return { teamData: [], partnersData: [] }; // Return fallback data
  }
}

// Dynamic metadata generation function
export async function generateMetadata() {
  // Fetch team data
  const { teamData } = await getAboutPageData();
  const teamNames = teamData.map((member) => member.fields.Name).join(', ');

  return {
    title: 'About Us - CC Diagnostics',
    description: 
      `Learn about CC Diagnostics' journey towards medical advancements in cervical cancer detection. Meet our dedicated team: ${teamNames}. Explore our advisors and partners who support our mission to improve women's health.`,
    keywords: [
      'about us', 
      'CC Diagnostics', 
      'medical advancements', 
      'cervical cancer detection', 
      'team', 
      'advisors', 
      'partners'
    ],
    openGraph: {
      type: 'website',
      url: 'https://www.ccdiagnostics.netlify.app/about',
      title: 'About Us - CC Diagnostics',
      description: 
        `Learn about CC Diagnostics' journey towards medical advancements in cervical cancer detection. Meet our dedicated team: ${teamNames}. Explore our advisors and partners who support our mission to improve women's health.`,
      images: [
        {
          url: 'https://ccdiagnostics.netlify.app/assets/teamPhoto.jpg', // Use dynamic URL if needed
          width: 1200,
          height: 630,
          alt: 'Team Photo of CC Diagnostics',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us - CC Diagnostics',
      description: 
        `Learn about CC Diagnostics' journey towards medical advancements in cervical cancer detection. Meet our dedicated team: ${teamNames}.`,
      images: [
        {
          url: 'https://ccdiagnostics.netlify.app/assets/teamPhoto.jpg',
          alt: 'Team Photo of CC Diagnostics',
        },
      ],
    },
    robots: 'index, follow',
  };
}

// Main About Page Component
export default async function Page() {
  const { teamData, partnersData } = await getAboutPageData();

  return (
    <>
      <Hero />
      <Team teamData={teamData} />
      <Advisors advisorsData={teamData} />
      <Partners partnersData={partnersData} />
    </>
  );
}