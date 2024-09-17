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
        <div className="relative w-full h-auto md:h-[480px]">
          <Image
            src={images[selectedImageIndex].url} // Use the selected image
            alt={`Image ${selectedImageIndex + 1}`}
            layout="responsive" // Automatically adjust based on the container's size
            width={800} // Provide a width for responsive scaling
            height={480} // Provide a height for responsive scaling
            className="w-full h-auto max-w-full rounded-lg object-cover object-center py-8"
          />
        </div>
      )}

      {/* Thumbnail Grid (Remaining Images) */}
      {images.length > 1 && (
        <div className="grid grid-cols-8 gap-0 py-8">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className="relative w-full h-20 cursor-pointer"
            >
              <Image
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                layout="fill" // Use fill to keep the image within the div without distortion
                objectFit="cover"
                className={`object-cover object-center py-8 ${
                  index === selectedImageIndex ? 'ring-2 ring-ccLightBlue' : ''
                }`} // Highlight selected thumbnail
              />
            </div>
          ))}
        </div>
      )}
    </figure>
  );
};

export default ImageGallery;
