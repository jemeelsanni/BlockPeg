import React from 'react'
import Strategic from '../../assets/Strategic.png';
import Financial from '../../assets/Financial.png';
import Building from '../../assets/Building.png';
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

const Resource = () => {
  return (
    <div>
        <div className='hidden laptop:block my-16 mx-16'>
            <div className='text-[#0B245B] text-center literata text-5xl font-bold mb-16'>Resources</div>
            <div className='flex flex-row gap-24 justify-center'>
                <div>
                    <img src={Strategic} alt="" />
                    <p className=' text-[#0B245B] text-center lato text-3xl font-semibold mt-8'>Strategic Insight</p>
                </div>
                <div>
                    <img src={Building} alt="" />
                    <p className=' text-[#0B245B] text-center lato text-3xl font-semibold mt-8'>Building Blocks</p>
                </div>
                <div>
                    <img src={Financial} alt="" />
                    <p className=' text-[#0B245B] text-center lato text-3xl font-semibold mt-8'>Financial Adviser</p>
                </div>
            </div>

        </div>
        <div className=" block laptop:hidden my-16 mx-8  ">
        <div className='text-[#0B245B] mb-4 literata text-4xl font-bold'>Resources</div>
        <div className=" flex flex-row justify-center gap-24">
          <CCarousel controls className=" bg-white">
            <CCarouselItem className=" bg-white w-full h-fit text-center lato text-2xl font-normal text-[#0B245B]">
              <CImage className=" h-fit w-full" src={Strategic} alt="" />
              <p className=" py-4 text-[17.638px] font-normal">Discover our products</p>
            </CCarouselItem>
            <CCarouselItem className="bg-white w-full h-fit text-center lato text-2xl font-normal text-[#0B245B]">
              <CImage className=" h-fit w-full" src={Building} alt="" />
              <p className=" py-4 text-[17.638px] font-normal">Discover our products</p>
            </CCarouselItem>
            <CCarouselItem className="bg-white w-full h-fit text-center lato text-2xl font-normal text-[#0B245B]">
              <CImage className=" h-fit w-full" src={Financial} alt="" />
              <p className=" py-4 text-[17.638px] font-normal">Discover our products</p>
            </CCarouselItem>
          </CCarousel>
        </div>
      </div>
    </div>
  )
}

export default Resource