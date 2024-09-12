// src/app/products/Products.jsx

'use client'; // Marks this as a Client Component

import React, { useEffect } from 'react';
import { useRouter } from 'next/router'; // Use Next.js's router instead of react-router-dom
import Info from './components/Info';
// import Tabs from './components/Tabs';
import Flow from './components/Flow';
// import SearchCTA from '@/src/app/search-docs/SearchCTA';
import Pipeline from './components/Pipeline'; 

export default function Products() {
  const router = useRouter();
  const { hash } = router;

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
      {/* Page Components */}
      <Info />
      {/* <Tabs /> */}
      <Flow />
      <Pipeline />
      {/* <SearchCTA /> */}
    </>
  );
}
