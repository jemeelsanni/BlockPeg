import React from "react";
import Back from "../../../assets/Back.png";

const DecentralandHero = () => {
  return (
    <div>
      <div>
        <div>
          <div className="backgroundimage-decentraland pb-[68px] pt-[32px] pl-[64px] text-[#FFFFFF] flex flex-col gap-3 ">
            <img src={Back} className=" h-[50px] w-[50px] mb-[58px]" alt="" />
            <h1 className="lato text-5xl font-bold mb-[110px]">
              Get in Touch with Expert
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecentralandHero;
