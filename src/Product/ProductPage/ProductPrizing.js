import React from "react";

const ProductPrizing = ({ product }) => {
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div>
      <div className="flex gap-2 items-end">
        <span className="text-black font-bold text-2xl ">
          ₹{discountedPrice.toFixed(2)}
        </span>
        <span className="text-gray-400 line-through">₹{product.price}</span>
        <span className="text-green-500 text-lg font-semibold">
          {product.discountPercentage}% off
        </span>
      </div>
      <div className="flex items-center my-1">
        <svg
          className="w-4 h-4 text-yellow-300 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className="ms-2 text-lg font-bold text-gray-900 dark:text-white">
          {product.rating} <span className="text-sm text-gray-600">Rating</span>
        </p>
      </div>
    </div>
  );
};

export default ProductPrizing;
