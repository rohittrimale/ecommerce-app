import React from "react";
import PlayButton from "../assert/PlayButton";

const Album = () => {
  return (
    <div className="p-12 bg-slate-600 mb-8 text-2xl text-center -mt-9 text-white">
      <div>
        <div className="-mt-8 mb-6">
          <button className="border-teal-300 border p-2">
            Get Our Latest Album
          </button>
        </div>
        <div className="flex justify-center items-center h-full text-teal-300">
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default Album;
