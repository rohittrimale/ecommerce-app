import React from "react";
import Tours from "./Tours";
import Album from "./Album";
import PlayButton from "../assert/PlayButton";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Album />
      <Tours />
    </div>
  );
};

export default Home;
