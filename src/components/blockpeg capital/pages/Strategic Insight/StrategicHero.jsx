import React from "react";
import StrategiccHero from "../../assets/StrategicHero.png";

const StrategicHero = () => {
  return (
    <div>
      <div className="">
        <div className="backgroundimage-strategic pb-[88px] pt-[120px] pl-[64px] text-[#FFFFFF] flex flex-col gap-3">
          <h1 className="literata text-5xl font-bold">
            Manage Bitcoin’s Volatility 
          </h1>
          <h1 className="literata text-5xl font-bold">
            
            with Momentum Signals
          </h1>
          <p className="pt-12 lato text-lg font-normal">
            Certain investors may be optimistic about <br /> Bitcoin’s longer-term
            potential, but unsure <br /> about how to value this novel asset and hoping <br />
            to mitigate volatility.
          </p>
          <p className="pt-4 underline cursor-pointer lato text-lg font-normal">Learn more</p>
        </div>
      </div>
    </div>
  );
};

export default StrategicHero;
