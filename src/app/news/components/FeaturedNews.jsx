import React from "react";
import Airtable from "../../common/Airtable/Airtable";
import dayjs from 'dayjs';
import placeholder from '../../../assets/images/placeholder.png';
import { Link, useNavigation } from 'react-router-dom';

export default function FeaturedNews() {

  const renderNewsItem = (post) => {
    const formattedDate = dayjs(post.fields.Published).format("D MMM, YYYY");

    return (
    <div className="lg:w-full"> 
    <article key={post.id} className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <img
          alt=""
          src={post.fields.Photo && post.fields.Photo.length > 0 ? post.fields.Photo[0].url : placeholder }
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
        <div className="group   
 relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-ccDarkBlue group-hover:text-ccLightBlue">
          <Link to={`/article/${post.id}`} state={{ post }}> {/* Pass post data in state */}
              <span className="absolute inset-0 pointer-events-none" />
              {post.fields.Title}
            </Link>
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{post.fields.Description}</p>
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
          <h2 className="text-3xl   
 font-bold tracking-tight text-ccDarkBlue sm:text-4xl">Featured   
 News</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
         <Airtable
          tableName="News"
          view="Featured"
          renderItem={renderNewsItem}
        />
        </div>
      </div>
    </div>
  );
}