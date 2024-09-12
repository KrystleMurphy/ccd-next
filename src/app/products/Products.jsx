'use client'; // Marks this as a Client Component

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Info from './components/Info';
// import Tabs from './components/Tabs';
import Flow from './components/Flow';
// import SearchCTA from '@/src/app/search-docs/SearchCTA';
import Pipeline from './components/Pipeline'; 

export default function Products() {
  const router = useRouter();
  const { hash } = router; // Since next/navigation doesn't directly expose 'hash', you need to handle hash differently.

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
      {/* <Tabs /> */}
      <Flow />
      <Pipeline />
      {/* <SearchCTA /> */}
    </>
  );
}
