import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // State to track the selected image

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };
  return (
    <figure className="mt-5 grid gap-4">
      {/* Main Image (Dynamically Selected) */}
      {images.length > 0 && (
        <div>
          <img
            src={images[selectedImageIndex].url} // Use the selected image
            alt=""
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            onError={(e) => {
              e.target.src = placeholder;
            }}
          />
        </div>
      )}

      {/* Thumbnail Grid (Remaining Images) */}
      {images.length > 1 && (
        <div className="grid grid-cols-8 gap-0">
          {images.map((image, index) => (
            <div key={index} onClick={() => handleThumbnailClick(index)} className="m-0 !m-0"> {/* Add onClick handler */}
              <img
                src={image.url}
                className={`object-cover object-center h-20 max-w-full rounded-lg cursor-pointer ${
                  index === selectedImageIndex ? "ring-2 ring-indigo-500" : "" // Add a visual cue for the selected thumbnail
                }`}
                alt="gallery-image"
                onError={(e) => {
                  e.target.src = placeholder;
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* ... (figcaption if needed) ... */}
    </figure>
  );
};

export default ImageGallery;