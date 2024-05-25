import React, { useState } from "react";
import ProductSideCard from "./ProductSideCard";

const ProductSpec = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.thumbnail);
  const [showLargeImage, setShowLargeImage] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  const [largeImagePosition, setLargeImagePosition] = useState({ x: 0, y: 0 });
  const [zoomFactor, setZoomFactor] = useState(2); // Adjust the zoom factor as needed

  const handleThumbnailHover = (image) => {
    setMainImage(image);
  };

  const handleMainImageHover = (image, e) => {
    setShowLargeImage(true);
    setLargeImage(image);
    setLargeImagePosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  const handleMainImageLeave = () => {
    setShowLargeImage(false);
  };

  const calculateZoomPosition = () => {
    return {
      transform: `scale(${zoomFactor})`,
      transformOrigin: `${largeImagePosition.x}px ${largeImagePosition.y}px`,
    };
  };

  return (
    <div className="container mx-auto">
      <div className="text-center mb-3 -mt-7 rounded-2xl text-xl font-serif bg-orange-600">
        category - {product.category}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative">
        <div className="flex flex-col col-span-1 flex-wrap p-2  ">
          {product.images.map((image, index) => (
            <img
              key={index}
              className="w-16 h-16 object-cover cursor-pointer m-1 hover:border p-1"
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onMouseEnter={() => handleThumbnailHover(image)}
            />
          ))}
        </div>
        <div className="relative flex col-span-5 justify-center items-center w-full h-full hover:border">
          <img
            className="w-80 h-80 cursor-pointer"
            src={mainImage}
            alt={product.title}
            onMouseMove={(e) => handleMainImageHover(mainImage, e)}
            onMouseLeave={handleMainImageLeave}
          />
          {showLargeImage && (
            <div
              className="fixed top-0 left-50 z-10 bg-white p-4 shadow-lg"
              style={{
                ...calculateZoomPosition(),
                right: "24px",
                top: "24px",
              }}
            >
              <img
                src={largeImage}
                alt="Large"
                className="w-72 h-72 object-cover"
              />
            </div>
          )}
        </div>
        <div className="col-span-6">
          <ProductSideCard product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductSpec;
