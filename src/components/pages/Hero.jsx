import React from "react";
import { Link } from "react-router-dom";
import Herimg from "../assets/hero-1.png";

const Hero = () => {
  return (
    <div className="">
      {/* desktop */}
      <div className=" hidden sm:hidden lg:block xl:block">
        <div
          className="flex h-[80vh] items-center bg-[#F2F8FE] px-8 shadow-xl"
          id="home"
        >
          <div className="w-full px-16 text-center">
            <h1 className="text-7xl font-bold capitalize title text-[#0c3c4c]">
            The reliable and secure partner for a cryptocurrency investment
            </h1>
            <p className="text-3xl font-light capitalize mt-4 title">
            Investing in cryptocurrency can be a complex business. By placing your investment with an expert partner, 
            you can easily diversify your portfolio and benefit from optimal returns.
            </p>
            <Link to="/contact">
              <button className="bg-transparent hover:bg-[#0c3c4c] hover:text-white text-[#0c3c4c] border-[#0c3c4c] border-2 body text-lg font-medium py-2 px-4 mt-4 mb-16">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className=" sm:block lg:hidden xl:hidden">
        <div
          className="flex h-full items-center bg-[#F2F8FE] px-3 shadow-xl"
          id="home"
        >
          <div className="w-full px-7 text-center">
            <h1 className="text-3xl font-bold capitalize title text-[#0c3c4c]">
            The reliable and secure partner for a cryptocurrency investment
            </h1>
            <p className="text-xl font-light capitalize mt-4 title">
            Investing in cryptocurrency can be a complex business. By placing your investment with an expert partner, 
            you can easily diversify your portfolio and benefit from optimal returns.
            </p>
            <Link to="/contact">
              <button className="bg-transparent mb-6 hover:bg-[#0c3c4c] hover:text-white text-[#0c3c4c] border-[#0c3c4c] border-2 text-2xl body text-lg font-medium py-2 px-4 mt-4">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
