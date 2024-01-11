import React from "react";
import Discover from "../../assets/Discover.png";
import TalkExpert from "../../assets/TalkExpert.png";
import InvestProduct from "../../assets/InvestProduct.png";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

const Invest = () => {
  return (
    <div>
      <div className=" hidden laptop:block bg-[#0B245B40] px-16 py-14">
        <div className="text-[#0B245B] mb-14 text-center literata text-5xl font-bold">
          How to Start Investing
        </div>
        <div className=" flex flex-row justify-center gap-24">
          <div className="bg-[#0B245B] w-96 h-[304px] text-center lato text-2xl font-medium text-[#FFFFFF]">
            <img className="h-[232px] w-full" src={Discover} alt="" />
            <p className=" py-4">Discover our products</p>
          </div>
          <div className="bg-[#0B245B] w-96 h-[304px] text-center lato text-2xl font-medium text-[#FFFFFF]">
            <img className="h-[232px] w-full" src={TalkExpert} alt="" />
            <p className=" py-4">Talk to our experts</p>
          </div>
          <div className="bg-[#0B245B] w-96 h-[304px] text-center lato text-2xl font-medium text-[#FFFFFF]">
            <img className="h-[232px] w-full" src={InvestProduct} alt="" />
            <p className=" py-4">Invest in product</p>
          </div>
        </div>
      </div>
      <div className=" block laptop:hidden  bg-[#0B245B40] px-4 py-10">
        <div className=" mb-4 literata text-3xl font-bold">
          How to Start Investing
        </div>
        <div className=" flex flex-row justify-center gap-24 bg-[#0B245B]">
          <CCarousel controls className="bg-[#0B245B]">
            <CCarouselItem className="bg-[#0B245B] w-full h-fit text-center lato text-2xl font-medium text-[#FFFFFF]">
              <CImage className=" h-fit w-full" src={Discover} alt="" />
              <p className=" py-4 text-[17.638px] font-normal">Discover our products</p>
            </CCarouselItem>
            <CCarouselItem className="bg-[#0B245B] w-full h-fit text-center lato text-2xl font-medium text-[#FFFFFF]">
              <CImage className=" h-fit w-full" src={TalkExpert} alt="" />
              <p className=" py-4 text-[17.638px] font-normal">Discover our products</p>
            </CCarouselItem>
            <CCarouselItem className="bg-[#0B245B] w-full h-fit text-center lato text-2xl font-medium text-[#FFFFFF]">
              <CImage className=" h-fit w-full" src={InvestProduct} alt="" />
              <p className=" py-4 text-[17.638px] font-normal">Discover our products</p>
            </CCarouselItem>
          </CCarousel>
        </div>
      </div>
    </div>
  );
};

export default Invest;
