// import React from "react";
// import dayjs from "dayjs";
// import placeholder from "@/src/assets/images/placeholder.png";
// import Link from "next/link"; // Use Next.js's Link component

// export default function FeaturedNews({ featuredNews }) { // Receive featuredNews as a prop

//   const renderNewsItem = (post) => {
//     const formattedDate = dayjs(post.fields.Published).format("D MMM, YYYY");

//     return (
//       <div className="lg:w-full">
//         <article key={post.id} className="flex flex-col items-start justify-between">
//           <div className="relative w-full">
//             <img
//               alt=""
//               src={
//                 post.fields.Photo && post.fields.Photo.length > 0
//                   ? post.fields.Photo[0].url
//                   : placeholder
//               }
//               className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
//             />
//             <div className="absolute inset-0   
//  pointer-events-none rounded-2xl ring-1 ring-inset ring-gray-900/10" />
//           </div>
//           <div className="max-w-xl">
//             <div className="mt-5 flex items-center gap-x-4 text-xs">
//               <time dateTime={post.fields.Published} className="text-gray-500">
//                 {formattedDate}
//               </time>
//             </div>
//             <div className="group relative">
//               <h3 className="mt-3 text-lg font-semibold leading-6 text-ccDarkBlue group-hover:text-ccLightBlue">
//                 <Link href={`/news/${post.id}`} legacyBehavior> {/* Use Next.js Link with legacyBehavior for now */}
//                   <a className="absolute inset-0 pointer-events-none" /> {/* Wrap link content in an <a> tag */}
//                   {post.fields.Title}
//                 </Link>
//               </h3>
//               <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
//                 {post.fields.Description}
//               </p>
//             </div>
//           </div>
//         </article>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white py-32 sm:py-40">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-ccDarkBlue   
//  sm:text-4xl">
//             Featured News
//           </h2>
//         </div>
//         <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//           {featuredNews.map(renderNewsItem)}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
import React from "react";
import dayjs from "dayjs";
import placeholder from "@/src/assets/images/placeholder.png";
import Link from "next/link"; // Use Next.js's Link component

export default function FeaturedNews({ featuredNews }) { // Receive featuredNews as a prop
  console.log("featuredNews received in FeaturedNews component:", featuredNews); // Log the prop
  // Function to render each news item
  const renderNewsItem = (post) => {
    const formattedDate = dayjs(post.fields.Published).format("D MMM, YYYY");

    return (
      <div className="lg:w-full" key={post.id}> {/* Key prop placed here */}
        <article className="flex flex-col items-start justify-between">
          <div className="relative w-full">
            <img
              alt=""
              src={
                post.fields.Photo && post.fields.Photo.length > 0
                  ? post.fields.Photo[0].url
                  : placeholder
              }
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
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
              <Link href={`/news/${post.id}`}> {/* Directly use Link without an <a> tag */}
                <h3 className="mt-3 text-lg font-semibold leading-6 text-ccDarkBlue group-hover:text-ccLightBlue">
                  {post.fields.Title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.fields.Description}
                </p>
              </Link>
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
          <h2 className="text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
            Featured News
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {featuredNews ? ( // Check if featuredNews is defined
          featuredNews.map(renderNewsItem)
        ) : (
          <div>Loading featured news...</div> 
        )}
        </div>
      </div>
    </div>
  );
}
