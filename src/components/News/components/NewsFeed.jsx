// components/NewsFeed.jsx
import React, { useState, useCallback, useEffect } from 'react';
import Airtable from '../../common/Airtable/Airtable';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

const placeholder = '/images/placeholder.png';

const NewsFeed = () => {
  const [selectedYear, setSelectedYear] = useState(dayjs().year().toString());
  const [years, setYears] = useState([]);
  const [hasArticles, setHasArticles] = useState(false);

  // Memoized function to handle records fetched from Airtable
  const handleRecordsFetched = useCallback(
    (fetchedPosts) => {
      if (!fetchedPosts || fetchedPosts.length === 0) {
        console.log('No records fetched');
        setHasArticles(false);
        return;
      }

      console.log('Fetched Posts:', fetchedPosts); // Debug fetched posts

      const uniqueYears = [...new Set(fetchedPosts.map(post => dayjs(post.fields.Published).year()))];
      const currentYear = dayjs().year();

      // Generate a list of years up to the current year
      const yearOptions = [];
      for (let year = currentYear; year >= Math.min(...uniqueYears); year--) {
        yearOptions.push(year.toString());
      }

      setYears(yearOptions);

      // Check if any posts exist for the selected year
      const postsForSelectedYear = fetchedPosts.filter(
        (post) => dayjs(post.fields.Published).format('YYYY') === selectedYear
      );
      setHasArticles(postsForSelectedYear.length > 0);
    },
    [selectedYear]
  );

  const renderNewsItem = (post) => {
    const formattedDate = dayjs(post.fields.Published).format('D MMM, YYYY');
    const imageUrl = post.fields.Photo?.[0]?.url || placeholder;

    return (
      <article
        key={post.id}
        className="relative isolate flex flex-col gap-8 lg:flex-row lg:w-full"
      >
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
          <Image
            alt={post.fields.Title || 'News Image'}
            src={imageUrl}
            layout="fill"
            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
            placeholder="blur"
            blurDataURL={placeholder}
          />
          <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>

        <div className="group relative max-w-xl">
          <h3 className="mt-0 text-lg font-semibold leading-6 text-ccDarkBlue group-hover:text-ccLightBlue text-left">
            <Link href={`/news/${post.id}`} passHref>
              {post.fields.Title}
            </Link>
          </h3>
          <div className="mt-3 flex items-center gap-x-4 text-xs">
            <time dateTime={post.fields.Published} className="text-gray-500">
              {formattedDate}
            </time>
          </div>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 text-left">
            {post.fields.Description}
          </p>
        </div>
      </article>
    );
  };

  // Check if years were set correctly
  useEffect(() => {
    if (years.length === 0) {
      console.log('Years not set or empty:', years);
    }
  }, [years]);

  return (
    <div className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Year filter section */}
        <div className="years lg:col-span-1 lg:sticky lg:top-0 text-left text-xl font-bold tracking-tight text-ccDarkBlue">
          {years.map((year) => (
            <h2
              key={year}
              className={`lg:p-4 p-8 cursor-pointer hover:text-ccLightBlue ${
                selectedYear === year ? 'text-ccLightBlue' : ''
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </h2>
          ))}
        </div>

        {/* News articles section */}
        <div className="col-span-2">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="space-y-20 lg:space-y-20">
              <Airtable
                tableName="News"
                view="Grid view"
                renderItem={(post) => {
                  // Debug each post fetched
                  console.log('Rendering Post:', post);

                  if (
                    dayjs(post.fields.Published).format('YYYY') !== selectedYear
                  ) {
                    return null; // Don't render if year doesn't match
                  }
                  return renderNewsItem(post); // Render if year matches
                }}
                onRecordsFetched={handleRecordsFetched}
              />
              {!hasArticles && <p>No articles available for the current year.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
