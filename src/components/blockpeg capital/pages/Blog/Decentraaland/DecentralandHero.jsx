import React from "react";
import Back from "../../../assets/Back.png";
import { Link } from 'react-router-dom';

const DecentralandHero = () => {
  return (
    <div>
      <div>
        <div>
          <div className="backgroundimage-decentraland-mobile laptop:backgroundimage-decentraland pb-[68px] pt-[32px] pl-[64px] text-[#FFFFFF] flex flex-col gap-3 ">
            <Link to="/buildingblocks">
              <img src={Back} className=" h-[50px] w-[50px] mb-[58px]" alt="" />
            </Link>
            <h1 className="lato text-5xl font-bold mb-[110px]">Decentraland</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecentralandHero;
