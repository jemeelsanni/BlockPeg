import React, { forwardRef } from "react";
import { StrategicData } from "../../Data/StrategicData";

function StrategicGrid(props, ref) {
  return (
    <div ref={ref} className="my-16">
      <div className="mx-[24px] laptop:mx-16 ">
        <div className="text-[#0B245B] literata text-3xl laptop:text-5xl font-bold">
          Strategic Insight
        </div>
        <div className="mt-12 grid grid-cols-2 laptop:grid-cols-3 justify-between gap-[24px] laptop:gap-20 items-start">
          {StrategicData.map((insight, index) => {
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
                    target="_blank"
                    rel="noreferrer"
                    href=""
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

export default forwardRef(StrategicGrid);
