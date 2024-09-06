// pages/about.js
import React from 'react';
import Head from 'next/head'; // Import Head from Next.js
import Hero from '../src/components/About/components/Hero';
import Team from '../src/components/About/components/Team';
import Advisors from '../src/components/About/components/Advisors';
import Partners from '../src/components/About/components/Partners';

function About() {
  return (
    <>
      {/* SEO Meta Tags using Next.js Head component */}
      <Head>
        <title>About Us - CC Diagnostics</title>
        <meta
          name="description"
          content="Learn about CC Diagnostics' journey towards medical advancements in cervical cancer detection. Meet our dedicated team, and explore our advisors and partners who support our mission to improve women's health."
        />
        <meta
          name="keywords"
          content="about us, CC Diagnostics, medical advancements, cervical cancer detection, team, advisors, partners"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us - CC Diagnostics" />
        <meta
          property="og:description"
          content="Learn about CC Diagnostics' journey towards medical advancements in cervical cancer detection. Meet our dedicated team, and explore our advisors and partners who support our mission to improve women's health."
        />
        <meta property="og:url" content="https://www.cc-diagnostics.netlify.app/about" />
        <meta
          property="og:image"
          content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - CC Diagnostics" />
        <meta
          name="twitter:description"
          content="Learn about CC Diagnostics' journey towards medical advancements in cervical cancer detection. Meet our dedicated team, and explore our advisors and partners who support our mission to improve women's health."
        />
        <meta
          name="twitter:image"
          content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
        />
        <link rel="canonical" href="https://www.cc-diagnostics.netlify.app/about" />
      </Head>

      {/* Page Components */}
      <Hero />
      <Team />
      <Advisors />
      <Partners />
    </>
  );
}

export default About;
