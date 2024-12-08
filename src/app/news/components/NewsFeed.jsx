'use client';

import { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs";
import placeholder from "@/src/assets/images/placeholder.png";
import Link from "next/link";
import Image from "next/image";

const NewsFeed = ({ allNews }) => { // Receive allNews as a prop
  const [selectedYear, setSelectedYear] = useState(dayjs().year().toString());
  const [years, setYears] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

 // Memoize the filter function to prevent it from being re-created on every render
 const filterPostsByYear = useCallback(
  (year) => {
    const postsForSelectedYear = allNews.filter(
      (post) => dayjs(post.fields.Published).format("YYYY") === year
    );
    setFilteredPosts(postsForSelectedYear);
  },
  [allNews] // Only re-create if `allNews` changes
);

  // Populate years and perform the initial filtering
  useEffect(() => {
    const uniqueYears = [
      ...new Set(allNews.map((post) => dayjs(post.fields.Published).year())),
    ];
    const currentYear = dayjs().year();

    const yearOptions = [];
    for (let year = currentYear; year >= Math.min(...uniqueYears); year--) {
      yearOptions.push(year.toString());
    }

    setYears(yearOptions);
    filterPostsByYear(selectedYear); // Initial filtering
  }, [allNews, selectedYear, filterPostsByYear]);

  // Handle year selection
  const handleYearChange = (year) => {
    setSelectedYear(year); 
    filterPostsByYear(year); // Use the same memoized function
  };


  const renderNewsItem = (post) => {
    const formattedDate = dayjs(post.fields.Published).format("D MMM, YYYY");
    console.log("Placeholder image path:", placeholder);


    return (
      <article
        key={post.id}
        className="relative isolate flex flex-col gap-8 lg:flex-row lg:w-full"
      >
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
          <Image
            alt={post.fields.Title || "News Image"}
            src={
              post.fields.Photo && post.fields.Photo.length > 0
                ? post.fields.Photo[0].url
                : placeholder
            }
            fill
            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
            sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
          />
          <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>

        <div className="group relative max-w-xl">

          <Link href={`/news/${post.id}`} legacyBehavior>
            <div>
              <a className="absolute inset-0 pointer-events-none" />
              <h3 className="mt-0 text-lg font-semibold leading-6 text-ccDarkBlue group-hover:text-ccLightBlue text-left">
                {post.fields.Title}
              </h3>
            </div>
          </Link>
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

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Year filter section */}
        <div className="years flex flex-row flex-wrap lg:flex-col lg:col-span-1 lg:sticky lg:top-0 md:text-left text-xl tracking-tight text-ccDarkBlue">
          <h2 className="w-full text-center text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl lg:hidde py-8">
            News by Year
          </h2>
          {years.map((year) => (
            <h2
              key={year}
              className={`w-1/4 lg:w-full p-4 cursor-pointer hover:font-bold ${selectedYear === year ? "underline decoration-ccLightBlue decoration-4 underline-offset-4 font-bold" : ""
                }`}
              onClick={() => handleYearChange(year)}
            >
              {year}
            </h2>
          ))}
        </div>

        {/* News articles section */}
        <div className="col-span-2">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="space-y-20 lg:space-y-20">
              {/* Render filtered posts */}
              {filteredPosts.map(renderNewsItem)}
              {filteredPosts.length === 0 && (
                <p>No article available for the selected year.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;