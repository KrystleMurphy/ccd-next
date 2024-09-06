// components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'CC Diagnostics - Leading Cervical Cancer Detection',
  description = 'CC Diagnostics offers superior diagnostic methods for cervical cancer detection using advanced technology.',
  keywords = 'cervical cancer detection, diagnostic technology, early detection, medical advancements, CC Diagnostics',
  url = 'https://www.cc-diagnostics.netlify.app/',
  image = 'https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Title */}
      {title && <title>{title}</title>}

      {/* Standard Meta Tags */}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph Meta Tags for Social Media */}
      {type && <meta property="og:type" content={type} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      
      {/* Twitter Meta Tags */}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Canonical Link */}
      {url && <link rel="canonical" href={url} />}

      {/* Additional Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Helmet>
  );
};

export default SEO;
