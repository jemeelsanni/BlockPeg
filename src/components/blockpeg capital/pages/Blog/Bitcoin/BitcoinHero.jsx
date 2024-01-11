import React from 'react'
import { Link } from 'react-router-dom';
import Back from "../../../assets/Back.png";

const BitcoinHero = () => {
  return (
    <div>
        <div>
        <div>
          <div className="backgroundimage-cardano pb-[68px] pt-[32px] pl-[64px] text-[#FFFFFF] flex flex-col gap-3 ">
            <Link to="/buildingblocks">
            <img src={Back} className=" h-[50px] w-[50px] mb-[58px]" alt="" />
            </Link>
            <h1 className="lato text-5xl font-bold mb-[110px]">
              Bitcoin
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default BitcoinHero