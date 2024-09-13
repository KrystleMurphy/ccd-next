// src/app/about/page.js
import About from '@/src/app/about/About';
import { getTeamData } from '@/pages/api/TeamData';
import { getPartnersData } from '@/pages/api/PartnersData';

export default async function AboutPage() {
  // Fetch data for Team, Advisors, and Partners
  const teamData = await getTeamData('Grid view');
  const partnersData = await getPartnersData('Grid view');

  // Pass data as props to the About component
  return <About teamData={teamData} partnersData={partnersData} />;
}
