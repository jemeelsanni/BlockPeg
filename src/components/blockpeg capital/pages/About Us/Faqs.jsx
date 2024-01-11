import React from "react";
import Add from "../../assets/Add.png";

const Faqs = () => {
  return (
    <div>
      <div className="mt-[65px] mb-[64px] laptop:mb-[120px] mx-[24px] laptop:mx-[64px]">
        <h1 className=" text-[#0B245B] text-center mb-6 laptop:mb-[88px] literata text-3xl laptop:text-5xl font-bold">
          FAQS
        </h1>
        <div className=" flex flex-col gap-6 ">
          <div className=" mx-0 laptop:mx-[344px] flex justify-between px-5 laptop:px-10 py-2 laptop:py-3 lato text-[#0B245B] text-xs laptop:text-lg font-normal  items-center border-2 border-[#0B245B80]">
            {" "}
            <p>
              How can I monitor the performance of my investments with your
              company?
            </p>{" "}
            <img src={Add} className="w-5 laptop:w-10 h-5 laptop:h-10" alt="" />
          </div>
          <div className=" mx-0 laptop:mx-[344px] flex justify-between px-5 laptop:px-10 py-2 laptop:py-3 lato text-[#0B245B] text-xs laptop:text-lg font-normal  items-center border-2 border-[#0B245B80]">
            {" "}
            <p>
            How does your asset management process work?
            </p>{" "}
            <img src={Add} className="w-5 laptop:w-10 h-5 laptop:h-10" alt="" />
          </div>
          <div className=" mx-0 laptop:mx-[344px] flex justify-between px-5 laptop:px-10 py-2 laptop:py-3 lato text-[#0B245B] text-xs laptop:text-lg font-normal  items-center border-2 border-[#0B245B80]">
            {" "}
            <p>
            What fees and charges are associated with your asset management services?
            </p>{" "}
            <img src={Add} className="w-5 laptop:w-10 h-5 laptop:h-10" alt="" />
          </div>
          <div className=" mx-0 laptop:mx-[344px] flex justify-between px-5 laptop:px-10 py-2 laptop:py-3 lato text-[#0B245B] text-xs laptop:text-lg font-normal  items-center border-2 border-[#0B245B80]">
            {" "}
            <p>
            What is asset management, and why is it important?
            </p>{" "}
            <img src={Add} className="w-5 laptop:w-10 h-5 laptop:h-10" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
