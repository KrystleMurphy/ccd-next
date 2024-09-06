// components/FeaturedNews.jsx
import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import Link from 'next/link';

const placeholder = '/images/placeholder.png';

export default function FeaturedNews({ records = [] }) {
  // Check if records is an array before attempting to map
  if (!Array.isArray(records) || records.length === 0) {
    return <p className="text-center text-gray-500">No featured news available at the moment.</p>;
  }

  const renderNewsItem = (post) => {
    const formattedDate = dayjs(post.fields.Published).format('D MMM, YYYY');
    const imageUrl = post.fields.Photo?.[0]?.url || placeholder;

    return (
      <div className="lg:w-full" key={post.id}>
        <article className="flex flex-col items-start justify-between">
          <div className="relative w-full">
            <Image
              alt={post.fields.Title || 'Featured News Image'}
              src={imageUrl}
              width={500}
              height={300}
              layout="responsive"
              className="rounded-2xl bg-gray-100 object-cover"
              placeholder="blur"
              blurDataURL={placeholder}
            />
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="max-w-xl">
            <div className="mt-5 flex items-center gap-x-4 text-xs">
              <time dateTime={post.fields.Published} className="text-gray-500">
                {formattedDate}
              </time>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-ccDarkBlue group-hover:text-ccLightBlue">
                <Link href={`/article/${post.id}`}>
                  {post.fields.Title}
                </Link>
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                {post.fields.Description}
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  };

  return (
    <div className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">Featured News</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {records.map(renderNewsItem)}
        </div>
      </div>
    </div>
  );
}
