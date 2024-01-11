import React from "react";
import Story from "../../assets/AboutStory.png";

const AboutStory = () => {
  return (
    <div>
      <div className="flex flex-col laptop:flex-row items-center gap-6 laptop:gap-[68px] mx-6 laptop:mx-16 my-10 laptop:my-16">
        <div>
          <img className="h-[392px] w-[1240px]" src={Story} alt="" />
        </div>
        <div className="text-[#0B245B]">
          <h1 className="literata text-3xl laptop:text-5xl font-bold">
          Our Story
          </h1>
          <p className=" pt-2 laptop:pt-8 lato text-sm laptop:text-lg font-normal">
            We envision digital currencies as catalysts for a transformative
            shift in our traditional economic, political, and social systems.
            This shift will profoundly influence how institutions and
            individuals approach investments, and BlockPeg Capital is here to
            play a pivotal role in this evolution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
