import React, { forwardRef } from "react";
import { BlockData } from "../../Data/StrategicData";

function BlockGrid(props, ref) {
  return (
    <div ref={ref} className="mt-16 mb-24">
      <div className="mx-[24px] laptop:mx-16">
        {/* <div className="text-[#0B245B] literata text-5xl font-bold">
          Strategic Insight
        </div> */}
        <div className="mt-12 grid grid-cols-2 laptop:grid-cols-3 justify-between gap-[24px] laptop:gap-20 items-start">
          {BlockData.map((insight, index) => {
            return (
              <div className="w-[179px] laptop:w-[381px] " key={index}>
                <div>
                  <img src={insight.image} alt="" />
                </div>
                <div className="mt-[12px] laptop:mt-6">
                  <h1 className="text-[#0B245B] lato text-lg laptop:text-[32px] font-bold">
                    {insight.title}
                  </h1>
                  <p className="text-[#0B245B] my-4 laptop:my-6 lato text-xs laptop:text-lg font-normal">
                    {insight.intro}
                  </p>
                  <a
                    className="text-[#0B245B] lato text-xs laptop:text-lg font-normal underline"
                    
                    rel="noreferrer"
                    href={insight.link}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(BlockGrid);
