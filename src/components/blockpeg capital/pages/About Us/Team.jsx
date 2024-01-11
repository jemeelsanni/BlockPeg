import React from "react";
import TeamC from "../../assets/TeamCeo.png";

const Team = () => {
  return (
    <div>
      <div>
        <div className="mx-6 laptop:mx-[64px]">
          <div className="eclipse-mobile laptop:eclipse pt-6 laptop:pt-[94px] pb-[132px] text-[#0B245B]">
            <div className="literata text-center mb-[32px] laptop:mb-[88px] text-3xl laptop:text-5xl font-bold">
              Our Team
            </div>
            <div className="grid grid-cols-2 laptop:grid-cols-3 justify-center gap-6 laptop:gap-[85px]">
              <div className="w-[178px] laptop:w-[381px]">
                <img src={TeamC} alt="" />
                <div>
                  <h1 className=" literata text-2xl laptop:text-[32px] font-bold">
                    Ray Houdson
                  </h1>
                  <p className=" text-[rgba(11,36,91,0.51)] mt-2 lato text-sm laptop:text-lg font-normal ">
                    Marketing manager
                  </p>
                  <p className="lato mt-4 text-sm laptop:text-lg font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
              <div className="w-[178px] laptop:w-[381px]">
                <img src={TeamC} alt="" />
                <div>
                  <h1 className=" literata text-2xl laptop:text-[32px] font-bold">
                    Ray Houdson
                  </h1>
                  <p className=" text-[rgba(11,36,91,0.51)] mt-2 lato text-sm laptop:text-lg font-normal ">
                    Marketing manager
                  </p>
                  <p className="lato mt-4 text-sm laptop:text-lg font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
              <div className="w-[178px] laptop:w-[381px]">
                <img src={TeamC} alt="" />
                <div>
                  <h1 className=" literata text-2xl laptop:text-[32px] font-bold">
                    Ray Houdson
                  </h1>
                  <p className=" text-[rgba(11,36,91,0.51)] mt-2 lato text-sm laptop:text-lg font-normal ">
                    Marketing manager
                  </p>
                  <p className="lato mt-4 text-sm laptop:text-lg font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
