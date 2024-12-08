'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // State to track the selected image

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <figure className="mt-5 grid gap-4">
      {/* Main Image (Dynamically Selected) */}
      {images.length > 0 && (
        <div className="relative h-auto w-full max-w-full rounded-lg md:h-[480px]">
          <Image
            src={images[selectedImageIndex].url} // Use the selected image
            alt={`Selected Image ${selectedImageIndex + 1}`}
            layout="fill" // Fill the container
            fill
            className="rounded-lg object-cover"
          />
        </div>
      )}

      {/* Thumbnail Grid (Remaining Images) */}
      {images.length > 1 && (
        <div className="grid grid-cols-8 gap-0">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative h-20 cursor-pointer overflow-hidden rounded-lg ${
                index === selectedImageIndex ? 'ring-2 ring-ccDarkBlue' : ''
              }`}
            >
              <Image
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </figure>
  );
};

export default ImageGallery;
