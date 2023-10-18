import React from "react";
import Trust from "../../assets/Trust.png";
import Secured from "../../assets/Secured.png";
import Scaled from "../../assets/Scaled.png";
import Expert from "../../assets/Expert.png";
import Regulated from "../../assets/Regulated.png";
import Ease from "../../assets/Ease.png";

const Benefits = () => {
  return (
    <div className=" mt-16 mx-16">
      <div>
        <div className="literata text-center text-[#0B245B] text-5xl font-bold mb-10">
          Benefits of Our Approach
        </div>
        <div className="grid grid-cols-3 justify-center gap-16">
          <div className="flex flex-col items-center">
            <div>
              <div className="border-4 border-[#0B245B] mb-4 rounded-3xl w-[200px] ">
                <img className=" p-[50px]" src={Trust} alt="" />
              </div>
              <h1 className=" text-[#0B245B] lato text-center text-[32px] font-bold">
                Trust
              </h1>
            </div>
            <div>
              <p className="text-[#0B245B] text-center lato text-lg font-normal">
                BlockPeg Capital, a trusted partner for investors in digital
                currencies, institutional and individual alike.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <div className="border-4 border-[#0B245B] mb-4 rounded-3xl w-[200px] ">
                <img className=" p-[50px]" src={Secured} alt="" />
              </div>
              <h1 className=" text-[#0B245B] lato text-center text-[32px] font-bold">
                Secured
              </h1>
            </div>
            <div>
              <p className="text-[#0B245B] text-center lato text-lg font-normal">
                Our products operates as a distinct legal entity with support
                from institutional-grade partners, including custodians and
                auditors.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <div className="border-4 border-[#0B245B] mb-4 rounded-3xl w-[200px] ">
                <img className=" p-[50px]" src={Scaled} alt="" />
              </div>
              <h1 className=" text-[#0B245B] lato text-center text-[32px] font-bold">
                Scaled
              </h1>
            </div>
            <div>
              <p className="text-[#0B245B] text-center lato text-lg font-normal">
                BlockPeg Capital products excel in industry-leading
                availability, scale, investment opportunities, and liquidity.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <div className="border-4 border-[#0B245B] mb-4 rounded-3xl w-[200px] ">
                <img className=" p-[50px]" src={Expert} alt="" />
              </div>
              <h1 className=" text-[#0B245B] lato text-center text-[32px] font-bold">
                Expert
              </h1>
            </div>
            <div>
              <p className="text-[#0B245B] text-center lato text-lg font-normal">
                BlockPeg Capital, a digital-native company, possesses early
                insight into high-potential innovations in the digital economy.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <div className="border-4 border-[#0B245B] mb-4 rounded-3xl w-[200px] ">
                <img className=" p-[50px]" src={Regulated} alt="" />
              </div>
              <h1 className=" text-[#0B245B] lato text-center text-[32px] font-bold">
                Regulated
              </h1>
            </div>
            <div>
              <p className="text-[#0B245B] text-center lato text-lg font-normal">
                BlockPeg Capital's products comply with all regulations and set
                industry standards as the first SEC reporting funds.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <div className="border-4 border-[#0B245B] mb-4 rounded-3xl w-[200px] ">
                <img className=" p-[50px]" src={Ease} alt="" />
              </div>
              <h1 className=" text-[#0B245B] lato text-center text-[32px] font-bold">
                Ease
              </h1>
            </div>
            <div>
              <p className="text-[#0B245B] text-center lato text-lg font-normal">
                You can easily buy BlockPeg Capital products in their IRA or
                investment accounts through brokerage platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
