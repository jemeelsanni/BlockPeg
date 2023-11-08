import React from "react";
import Add from "../../assets/Add.png";

const Faqs = () => {
  return (
    <div>
      <div className="mt-[67px] mb-[120px] mx-[64px]">
        <h1 className=" text-[#0B245B] text-center mb-[88px] literata text-5xl font-bold">
          FAQS
        </h1>
        <div className=" flex flex-col gap-6 ">
          <div className=" mx-[344px] flex justify-between px-10 py-3 lato text-[#0B245B] text-lg font-normal  items-center border-2 border-[#0B245B80]">
            {" "}
            <p>
              How can I monitor the performance of my investments with your
              company?
            </p>{" "}
            <img src={Add} alt="" />
          </div>
          <div className=" mx-[344px] flex justify-between px-10 py-3 lato text-[#0B245B] text-lg font-normal  items-center border-2 border-[#0B245B80]">
            {" "}
            <p>
            How does your asset management process work?
            </p>{" "}
            <img src={Add} alt="" />
          </div>
          <div className=" mx-[344px] flex justify-between px-10 py-3 lato text-[#0B245B] text-lg font-normal  items-center border-2 border-[#0B245B80]">
            {" "}
            <p>
            What fees and charges are associated with your asset management services?
            </p>{" "}
            <img src={Add} alt="" />
          </div>
          <div className=" mx-[344px] flex justify-between px-10 py-3 lato text-[#0B245B] text-lg font-normal  items-center border-2 border-[#0B245B80]">
            {" "}
            <p>
            What is asset management, and why is it important?
            </p>{" "}
            <img src={Add} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
