'use client'; // Marks this as a Client Component

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Info from './components/Info';
import Tabs from './components/Tabs';
import Flow from './components/Flow';
import SearchCTA from '../search-docs/SearchCTA';
import Pipeline from './components/Pipeline'; 

function Products({ technicalSpecifications }) {
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash'); // Extract hash from search params

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.replace('#', '')); // Access hash from window location
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      {/* Page Components */}
      <Info />
      <Tabs technicalSpecifications={technicalSpecifications} />
      <Flow />
      <Pipeline />
      <SearchCTA />
    </>
  );
}

export default Products;
