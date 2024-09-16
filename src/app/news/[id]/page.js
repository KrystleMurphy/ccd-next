'use client'; // This is now a Client Component

import { useParams } from 'next/navigation';
import { ArrowUturnLeftIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import dayjs from "dayjs";
import ReactMarkdown from 'react-markdown';
import ImageGallery from '../components/ImageGallery';
import Link from 'next/link';
import { use } from 'react';
import NewsData from '../../data/AirtableData'; // Import your Server Component

export default function NewsArticlePage() {
    const params = useParams();
     // Fetch the article data from the Server Component
     const postData = use(NewsData({ 
      baseName: 'News', 
      view: 'Grid view', 
      filterByFormula: `RECORD_ID()='${params.id}'`, // Filter by the ID from the URL
      revalidate: 604800 
    })); 
  
    if (!postData || postData.length === 0) {
      return <div>Article not found</div>;
    }

  const post = postData[0]; // Get the first (and only) record
  const formattedDate = dayjs(postData.fields.Published).format("D MMM, YYYY");

    return (
      <div className="relative bg-white px-6 py-32 lg:px-8">
        <Link href="/news" legacyBehavior>
          <a className="fixed bottom-4 right-4 rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2   
   focus-visible:outline-indigo-600">   
  
            <ArrowUturnLeftIcon aria-hidden="true" className="h-5 w-5" />
          </a>
        </Link>
  
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">News</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.fields.Title}</h1>   
          {post.fields.Photo && post.fields.Photo.length > 0 && (
          <ImageGallery images={post.fields.Photo} />
        )}
          <p className="mt-6 text-xl leading-8 text-justify">{post.fields.Description}</p>
          
          <div className="mt-6 max-w-7xl prose text-justify">
          <ReactMarkdown>{post.fields['Full Content']}</ReactMarkdown>
          </div>
          
      <p className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
        <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
        Published on {formattedDate}
      </p>
        </div>
      </div>
    );
  }

  export async function generateStaticParams() {
    const allNewsData = await fetchAirtableData({ baseName: 'News', view: 'Grid view' });
  
    return {
      paths: allNewsData.map((newsItem) => ({
        params: { id: newsItem.id },
      })),
      fallback: 'blocking',
    };
  }
  
  export const dynamicParams = true; 