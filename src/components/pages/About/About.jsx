import React from "react";
import about from "../../assets/about.png";
import Navbar from "../../layout/Navbar";
import { IoCheckmarkCircleSharp } from "react-icons/io5"; // Import from 'react-icons/io5'

const About = () => {
  return (
    <div
      className="flex items-center justify-center mt-20 pb-20 px-24 bg shadow-xl"
      id="about"
    >
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2">
          <img src={about} alt="About Us" className="rounded-md" />
        </div>
        <div className="md:w-1/2 px-8">
          <div>
            <h1 className="text-5xl font-bold mb-2 text-[#0c3c4c] title">
              Our Firm
            </h1>

            <p className="mb-4 text-lg text-[#999999]">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
            <p className="text-lg mb-4 text-[#999999]">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <div className="flex items-center space-x-2 text-lg mb-4 text-[#999999]">
              <IoCheckmarkCircleSharp className=" fill-[#0c3c4c]" size={24} />
              <span>Tempor erat elitr rebum at clita</span>
            </div>
            <div className="flex items-center space-x-2 text-lg mb-4 text-[#999999]">
              <IoCheckmarkCircleSharp className=" fill-[#0c3c4c]" size={24} />
              <span>Tempor erat elitr rebum at clita</span>
            </div>
            <div className="flex items-center space-x-2 text-lg mb-4 text-[#999999]">
              <IoCheckmarkCircleSharp className=" fill-[#0c3c4c]" size={24} />
              <span>Tempaor erat elitr rebum at clita</span>
            </div>
            <div className="flex items-center space-x-2 text-lg mb-4 text-[#999999]">
              <IoCheckmarkCircleSharp className=" fill-[#0c3c4c]" size={24} />
              <span>Tempor erat elitr rebum at clita</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
