import React from 'react';

export default function NFSkeleton() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Year filter section skeleton */}
        <div className="years lg:col-span-1 lg:sticky lg:top-0 text-left text-xl font-bold tracking-tight text-ccDarkBlue">
          {["2024", "2023", "2022", "2021"].map((year, index) => (
            <div key={index} className="lg:p-4 p-8 skeleton h-6 w-24 mb-4 bg-gray-200 rounded"></div>
          ))}
        </div>

        {/* News articles section skeleton */}
        <div className="col-span-2">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="space-y-20 lg:space-y-20">
              {[...Array(3)].map((_, index) => (
                <article
                  key={index}
                  className="relative isolate flex flex-col gap-8 lg:flex-row lg:w-full"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 skeleton bg-gray-200 rounded-2xl"></div>
                  <div className="group relative max-w-xl">
                    <div className="skeleton h-6 w-3/4 bg-gray-200 rounded mt-0"></div>
                    <div className="mt-3 flex items-center gap-x-4 text-xs">
                      <div className="skeleton h-4 w-16 bg-gray-200 rounded"></div>
                    </div>
                    <div className="mt-3 skeleton h-4 w-full bg-gray-200 rounded"></div>
                    <div className="mt-3 skeleton h-4 w-full bg-gray-200 rounded"></div>
                    <div className="mt-3 skeleton h-4 w-full bg-gray-200 rounded"></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
