import React from "react";
import phone from "../../assets/phone.png";
import email from "../../assets/Email.png";
import map from "../../assets/Map.png";
import twitter from "../../assets/TwitterAb.png";
import linkedin from "../../assets/Linkedinab.png";
import instagram from "../../assets/InstagramAb.png";

const Contact = () => {
  return (
    <div >
      <div className="mt-[8px] laptop:mt-[67px] mx-[24px] laptop:mx-[64px]">
        <h1 className=" text-[#0B245B] text-center mb-[32px] laptop:mb-[88px] literata text-3xl laptop:text-5xl font-bold">
          Contact Us
        </h1>
        <div className="hidden laptop:flex gap-[297px] justify-center text-[rgba(11,36,91,0.51)]">
          <div>
            <div className="mb-[38px]">
              <div className="lato text-[32px] font-semibold flex items-center gap-5 ">
                <div>Phone</div>
                <img className="w-[40px] h-[40px]" src={phone} alt="" />
              </div>
              <div className="text-[#0B245B] lato text-lg font-normal mt-[23px]">
                +234 816 7750446
              </div>
            </div>
            <div>
              <div className="lato text-[32px] font-semibold flex items-center gap-9 ">
                <div>Socials</div>
              </div>
              <div className="mt-[23px] flex gap-16">
                <img src={linkedin} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-[38px]">
              <div className="lato text-[32px] font-semibold flex items-center gap-9 ">
                <div>Emails</div>
                <img className="w-[40px] h-[40px]" src={email} alt="" />
              </div>
              <div className="text-[#0B245B] lato text-lg font-normal mt-[23px] flex flex-col gap-[40px]">
                <p>Info@bkockpegcapital.co</p>
                <p>Admin@bkockpegcapital.co</p>
                <p>Admin@bkockpegcapital.co</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-[38px]">
              <div className="lato text-[32px] font-semibold flex items-center gap-9 ">
                <div>Location</div>
                <img className="w-[40px] h-[40px]" src={map} alt="" />
              </div>
              <div className="text-[#0B245B] lato text-lg font-normal mt-[23px] flex flex-col gap-[40px]">
                <p>Lagos, Nigeria</p>
                <p>Aviero, Portugal</p>
                <p>London, UK</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex laptop:hidden flex-row justify-between">
          <div>
            <div className="mb-[38px]">
              <div className="lato text-lg laptop:text-[32px] font-semibold flex items-center gap-4 text-[#0B245B80] ">
                <div>Phone</div>
                <img className="w-[24px] h-[24px]" src={phone} alt="" />
              </div>
              <div className="text-[#0B245B] lato text-xs laptop:text-lg font-normal mt-[16px]">
                +234 816 7750446
              </div>
            </div>
            <div className="mb-[38px]">
              <div className="lato text-lg laptop:text-[32px] font-semibold flex items-center gap-4 text-[#0B245B80] ">
                <div>Emails</div>
                <img className="w-[24px] h-[24px]" src={email} alt="" />
              </div>
              <div className="text-[#0B245B] lato text-xs laptop:text-lg font-normal mt-[16px] flex flex-col gap-[16px]">
                <p>Info@bkockpegcapital.co</p>
                <p>Admin@bkockpegcapital.co</p>
                <p>Admin@bkockpegcapital.co</p>
              </div>
            </div>
          </div>
          <div >
            <div className="mb-6">
              <div className="lato text-lg laptop:text-[32px] font-semibold flex items-center gap-4 text-[#0B245B80] ">
                <div>Socials</div>
              </div>
              <div className="mt-[16px] flex gap-[32px]">
                <img className="w-[24px] h-[24px]" src={linkedin} alt="" />
                <img className="w-[24px] h-[24px]" src={instagram} alt="" />
                <img className="w-[24px] h-[24px]" src={twitter} alt="" />
              </div>
            </div>
            <div className="">
              <div className="lato text-lg laptop:text-[32px] font-semibold flex items-center gap-4 text-[#0B245B80]">
                <div>Location</div>
                <img className="w-[24px] h-[24px]" src={map} alt="" />
              </div>
              <div className="text-[#0B245B] lato text-xs laptop:text-lg font-normal mt-[16px] flex flex-col gap-[16px]">
                <p>Lagos, Nigeria</p>
                <p>Aviero, Portugal</p>
                <p>London, UK</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
