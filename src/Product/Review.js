import React from "react";

const Review = ({ user, comment, rating }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-6 bg-white">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://static.thenounproject.com/png/363639-200.png"
            alt="User Avatar"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{user}</h3>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1l2.598 5.854H18l-4.33 3.762L15.789 19 10 15.417 4.211 19l1.522-8.384L2 6.854h5.402L10 1zm0 2.916l-1.438 3.245H3.575L8.18 10.29 6.956 16.5l3.044-2.643L13.044 16.5l-.74-3.21 4.065-3.537h-5.988L10 3.916z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-600">{rating}</span>
            </div>
          </div>
          <p className="text-gray-600 mt-1">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
