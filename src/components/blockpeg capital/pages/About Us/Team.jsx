import React from "react";
import TeamC from "../../assets/TeamCeo.png";

const Team = () => {
  return (
    <div>
      <div>
        <div className="mx-[64px]">
          <div className="eclipse pt-[94px] pb-[132px] text-[#0B245B]">
            <div className="literata text-center mb-[88px] text-5xl font-bold">
              Our Team
            </div>
            <div className="flex justify-center gap-[85px]">
              <div className="w-[381px]">
                <img src={TeamC} alt="" />
                <div>
                  <h1 className=" literata text-[32px] font-bold">
                    Ray Houdson
                  </h1>
                  <p className=" text-[rgba(11,36,91,0.51)] mt-2 lato text-lg font-normal ">
                    Marketing manager
                  </p>
                  <p className="lato mt-4 text-lg font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
              <div className="w-[381px]">
                <img src={TeamC} alt="" />
                <div>
                  <h1 className=" literata text-[32px] font-bold">
                    Ray Houdson
                  </h1>
                  <p className=" text-[rgba(11,36,91,0.51)] mt-2 lato text-lg font-normal ">
                    Marketing manager
                  </p>
                  <p className="lato mt-4 text-lg font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
              <div className="w-[381px]">
                <img src={TeamC} alt="" />
                <div>
                  <h1 className=" literata text-[32px] font-bold">
                    Ray Houdson
                  </h1>
                  <p className=" text-[rgba(11,36,91,0.51)] mt-2 lato text-lg font-normal ">
                    Marketing manager
                  </p>
                  <p className="lato mt-4 text-lg font-normal">
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
