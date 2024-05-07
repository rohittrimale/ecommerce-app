import React from "react";

const Tour = ({ tour }) => {
  return (
    <div
      key={tour.id}
      className="flex items-center text-xs md:text-lg	 border-b-2 border-black  text-black p-3 gap-5"
    >
      <div className="w-1/6 text-start font-bold">{tour.date}</div>
      <div className="w-1/6 text-start">{tour.city}</div>
      <div className="w-2/6 text-start">{tour.venue}</div>
      <div className="w-1/6 bg-teal-300 rounded-md text-center px-2">
        {tour.link && <button>{tour.link}</button>}
      </div>
    </div>
  );
};

export default Tour;
