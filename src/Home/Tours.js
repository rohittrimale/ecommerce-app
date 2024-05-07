import React from "react";
import Tour from "./Tour";
const tours = [
  {
    id: 1,
    date: "JUL 16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
    link: "BUY TICKETS",
  },
  {
    id: 2,
    date: "JUL 19",
    city: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
    link: "BUY TICKETS",
  },
  {
    id: 3,
    date: "JUL 22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
    link: "BUY TICKETS",
  },
  {
    id: 4,
    date: "JUL 29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
    link: "BUY TICKETS",
  },
  {
    id: 5,
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
    link: "BUY TICKETS",
  },
  {
    id: 6,
    date: "AUG 7",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
    link: "BUY TICKETS",
  },
];

const Tours = () => {
  return (
    <div className="mx-2 md:mx-[10%]">
      <div className="font-bold text-3xl font-metal-mania text-center mb-6">
        Tours
      </div>
      <div className="flex flex-col">
        {tours.map((tour) => (
          <Tour tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
