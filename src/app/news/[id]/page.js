import { ArrowUturnLeftIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import dayjs from "dayjs";
import ReactMarkdown from 'react-markdown';
import ImageGallery from '../components/ImageGallery';
import Link from 'next/link';
import { fetchAirtableData } from '../../data/AirtableData';

// Enable dynamic routes
export const dynamicParams = true;

// Centralized Airtable Fetch Function
async function getPostData(recordId) {
  try {
    const postData = await fetchAirtableData({
      baseName: 'News',
      view: 'Grid view',
      filterByFormula: `RECORD_ID() = '${recordId}'`,
    });
    return postData.length > 0 ? postData[0] : null;
  } catch (error) {
    console.error('Error fetching post data:', error);
    return null;
  }
}

// Generate static params for ISR
export async function generateStaticParams() {
  const allNewsData = await fetchAirtableData({
    baseName: 'News',
    view: 'Grid view',
  });

  return allNewsData.map((newsItem) => ({
    id: newsItem.id,
  }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const post = await getPostData(params.id);

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'This article could not be found.',
    };
  }

  return {
    title: `${post.fields.Title} - CC Diagnostics`,
    description: post.fields.Description,
    openGraph: {
      url: `https://www.ccdiagnostics.netlify.app/news/${params.id}`,
      images: [
        {
          url: post.fields.Photo ? post.fields.Photo[0].url : '/assets/placeholder.png',
          width: 1200,
          height: 630,
          alt: post.fields.Title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.fields.Title,
      description: post.fields.Description,
      images: [
        {
          url: post.fields.Photo ? post.fields.Photo[0].url : '/assets/placeholder.png',
          alt: post.fields.Title,
        },
      ],
    },
  };
}



export default async function Page({ params }) {
  // Fetch only once
  const post = await getPostData(params.id);

  if (!post) {
    return <div>Article not found</div>;
  }

  const formattedDate = dayjs(post.fields.Published).format("D MMM, YYYY");

    return (
      <div className="relative bg-white px-6 py-32 lg:px-8">
        <Link href="/news" legacyBehavior>
          <a className="fixed bottom-4 right-4 rounded-full bg-ccDarkBlue p-2 text-white shadow-sm hover:bg-ccLightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2   
   focus-visible:outline-ccDarkBlue">   
  
            <ArrowUturnLeftIcon aria-hidden="true" className="h-5 w-5" />
          </a>
        </Link>
  
        <div className="mx-auto max-w-3xl text-base leading-7">
        <p className="text-base font-semibold leading-7 text-ccLightBlue">News</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">{post.fields.Title}</h1>   
          {post.fields.Photo && post.fields.Photo.length > 0 && (
          <ImageGallery images={post.fields.Photo} />
        )}
          <p className="mt-6 text-xl leading-8 text-justify text-gray-600">{post.fields.Description}</p>
          
          <div className="mt-6 max-w-7xl prose text-justify text-gray-600">
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
