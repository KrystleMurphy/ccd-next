import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUturnLeftIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import airtableBase from '../../../../utils/airtableapi';
import placeholder from '../../../../assets/images/placeholder.png'; 
import dayjs from "dayjs";
import ReactMarkdown from 'react-markdown';
import ImageGallery from './ImageGallery';

export default function IndividualArticle() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); 

  const initialPost = location.state?.post; 
  const [post, setPost] = useState(initialPost);
  const [isLoading, setIsLoading] = useState(!initialPost); 
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initialPost) {
      console.log("Fetching data from Airtable (fallback mechanism)");
      airtableBase('News')
        .find(id)
        .then((record) => {
          setPost(record._rawJson);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
          console.error(error);
        });
    } else {
      console.log("Using post data from props"); 
      }
  }, [id, initialPost]);

  const renderArticle = (post) => {
    const formattedDate = dayjs(post.fields.Published).format("D MMM, YYYY");

    return (
      <div className="relative bg-white px-6 py-32 lg:px-8">
        <button
          type="button"
          onClick={() => navigate('/news')}
          className="fixed bottom-4 right-4 rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2   
 focus-visible:outline-indigo-600"   

        >
          <ArrowUturnLeftIcon aria-hidden="true" className="h-5 w-5" />
        </button>
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
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!post) return <div>Article not found</div>;

  return renderArticle(post);
}
