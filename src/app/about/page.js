import React from 'react';
import Hero from './components/Hero';
import Team from './components/Team';
import Advisors from './components/Advisors';
import Partners from './components/Partners';
import { fetchAirtableData } from '../data/AirtableData';

export const revalidate = 60;
// Server-side component to fetch data
export default async function Page() {
  const teamData = await fetchAirtableData({ baseName: 'Team', view: 'Grid view' });
  const partnersData = await fetchAirtableData({ baseName: 'Partners', view: 'Grid view' });
    return (
        <>
            <Hero />
            <Team teamData={teamData}/>
            <Advisors advisorsData={teamData}/>
            <Partners partnersData={partnersData} />
        </>
    );
}
