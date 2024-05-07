import React from "react";
import YouTubeLogo from "../assert/YoutubeLogo";
import TwitterLogo from "../assert/TwitterLogo";
import FacebookLogo from "../assert/FacebookLogo";

const Footer = () => {
  return (
    <div className="p-8 bg-teal-300 mt-24">
      <div className="mx-2 md:mx-16 justify-between text-3xl md:text-5xl flex">
        <button className=" text-white md:font-bold">The Generics</button>
        <div className="flex gap-2  md:gap-8 items-center ">
          <a href="https://www.youtube.com/" className="text-red-500 ">
            <YouTubeLogo />
          </a>
          <a href="https://twitter.com">
            <TwitterLogo />
          </a>
          <a href="https://www.facebook.com">
            <FacebookLogo />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
