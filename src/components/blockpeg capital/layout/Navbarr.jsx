import React from "react";
import Nav from "./Nav";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <header className="">
      <div className=" bg-[#0B245B] flex justify-between px-4 laptop:px-16 py-3 laptop:py-4 ">
        <div>
          <Link
            className="flex flex-row gap-2 text-[#FFFFFF] items-center literata text-base laptop:text-2xl font-semibold"
            to="/home"
          >
            <img src={Logo} className="w-[32px] h-[32px]" alt="" />
            <div>
              <div className="flex flex-col laptop:flex-row">
                <div>BlockPeg</div> <div className="ml-0 laptop:ml-3">Capital</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden laptop:flex flex-row  items-center laptop:gap-24 gap-4">
          <Nav />
          <button className="px-6 py-2 bg-[#01F5F5] text-[#0B245B] text-[9.35px] font-normal">
            Start Investing
          </button>
        </div>
        <div className="laptop:hidden flex flex-row items-center laptop:gap-24 gap-4">
          
          <button className="px-6 py-2 bg-[#01F5F5] text-[#0B245B] text-[9.35px] font-normal">
            Start Investing
          </button>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Navbarr;
