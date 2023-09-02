import React from "react";
import Herimg from "../assets/hero-1.png";

const Hero = () => {
  return (
    <div
      className="flex justify-between items-center bg-[#F2F8FE] px-8"
      id="home"
    >
      <div className="w-1/2 p-16">
        <h1 className="text-6xl font-bold capitalize">
          Make a better life with trusted blockpeg
        </h1>
        <p className="text-xl capitalize mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <button className="bg-[#16D5FF] hover:bg-white hover:text-[#16D5FF] text-white text-lg font-medium py-2 px-4 mt-4">
          Explore More
        </button>
      </div>
      <div className="w-1/2">
        <img className="object-cover p-24" src={Herimg} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
