import React, { forwardRef } from "react";
import { StrategicData } from "../../Data/StrategicData";

function StrategicGrid(props, ref) {
  return (
    <div ref={ref} className="mt-44 mb-24">
      <div className="mx-16">
        <div className="text-[#0B245B] literata text-5xl font-bold">
          Strategic Insight
        </div>
        <div className="mt-12 grid grid-cols-3 justify-around gap-20 items-center">
          {StrategicData.map((insight, index) => {
            return (
              <div className="w-[381px]" key={index}>
                <div>
                  <img src={insight.image} alt="" />
                </div>
                <div className="mt-6">
                  <h1 className="text-[#0B245B] lato text-[32px] font-bold">
                    {insight.title}
                  </h1>
                  <p className="text-[#0B245B] my-6 lato text-lg font-normal">
                    {insight.intro}
                  </p>
                  <a
                    className="text-[#0B245B] lato text-lg font-normal underline"
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
