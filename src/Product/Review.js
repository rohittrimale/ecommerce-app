import React from "react";

const Review = ({ user, comment, rating }) => {
  return (
    <div className="border border-gray-200 rounded p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="flex-shrink-0 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M4.273 12.273a7 7 0 1111.454 0 6.5 6.5 0 01-11.454 0zM10 2a5 5 0 100 10 5 5 0 000-10z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-medium">{user}</h3>
          <p className="text-sm text-gray-500">Rating: {rating}</p>
        </div>
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default Review;
