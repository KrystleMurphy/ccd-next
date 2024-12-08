'use client'

import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Testimonials({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p className="text-gray-500">No reviews available at the moment.</p>;
  }

    // Sort the reviews by date (most recent first)
    const sortedReviews = [...reviews].sort(
      (a, b) => new Date(b.fields.Date) - new Date(a.fields.Date)
    );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-ccDarkBlue">Client Feedback</h2>
        <div className="mt-6 space-y-10 divide-y divide-ccLightBlue/20 border-b border-t border-ccLightBlue/20 pb-10">
        {sortedReviews.map((review) => (
            <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="flex items-center xl:col-span-1">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          review.fields.Rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0',
                        )}
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-md text-ccDarkBlue">
                    {review.fields.Rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 className="text-md font-medium text-ccDarkBlue">{review.fields.Headline}</h3>
                  <p className="mt-3 text-md max-sm:text-sm max-sm:leading-6 text-gray-500">
                    {review.fields.Review}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center text-md lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-ccDarkBlue">{review.fields.Name}</p>
                <time
                  dateTime={review.fields.Date}
                  className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  {review.fields.Date}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
