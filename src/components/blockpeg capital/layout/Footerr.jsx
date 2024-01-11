import React from "react";
import Logo from "../assets/Logo.png";
import Copyright from "../assets/Copyright.png";
import Linkedin from "../assets/Linkedin.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import { Link } from "react-router-dom";

const Footerr = () => {
  return (
    <div>
      <div className="hidden laptop:flex flex-row justify-between w-full bg-[#0B245B] text-[#FFFFFF] p-16">
        <div className="flex flex-col justify-between mr-64">
          <div className="flex gap-4 literata text-2xl font-semibold items-center">
            <img src={Logo} alt="" />
            <div>
              <p>Blockpeg</p>
              <p>Capital</p>
            </div>
          </div>
          <div></div>
          <div></div>
          <div className="flex gap-4 lato text-lg font-normal items-center mt-36 ">
            <img src={Copyright} alt="" />
            <div className="">
              <p>Copyright 2023</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-between lato text-lg font-normal">
          <div className="text-[#0B245B]">.</div>
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/buildingblocks">Building Blocks</Link>
        </div>

        <div className="flex flex-col gap-8 justify-between lato text-lg font-normal">
          <div className="text-[#0B245B]">.</div>
          <Link to="">Products</Link>
          <Link to="/strategicinsight">Strategic Insights</Link>
          <Link to="/financialadviser">Financial Adviser</Link>
        </div>

        <div className="flex flex-col gap-8 justify-between lato text-lg font-normal">
          <div className="text-[#0B245B]">.</div>
          <Link to="">Our Team</Link>
          <Link to="">Contacts</Link>
          <Link to="">FAQs</Link>
        </div>

        <div className="flex flex-col gap-8 justify-between lato text-lg font-normal">
          <div className="flex flex-row gap-12">
            <div>
              <img src={Linkedin} alt="" />
            </div>
            <div>
              <img src={Instagram} alt="" />
            </div>
            <div>
              <img src={Twitter} alt="" />
            </div>
          </div>
          <div>
            1009 Brass Street, Aviero, <br /> Portugal
          </div>
          <div>
            No.3 Adegunwa Street, Alagomeji, <br /> Yaba, Lagos, Nigeria
          </div>
          <div>Info@blockpeg.com</div>
        </div>
      </div>
 {/* Phon */}
      <div className="block laptop:hidden bg-[#0B245B] pt-[58px] pl-[24px] pb-[24px] text-[#FFFFFF]">
        <div className="flex gap-2 literata text-xl laptop:text-2xl font-semibold items-center">
          <img className="h-[40px]" src={Logo} alt="" />
          <div>
            <p>Blockpeg</p>
            <p>Capital</p>
          </div>
        </div>
        <div className="flex gap-2 lato text-lg font-normal items-center mt-[40px] mb-[48px] ">
            <img className="h-[16px]" src={Copyright} alt="" />
            <div className="">
              <p>Copyright 2024</p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] justify-between lato text-base font-normal mb-[40px]">
          <div className="flex flex-row gap-11">
            <div>
              <img className="h-[30px]" src={Linkedin} alt="" />
            </div>
            <div>
              <img className="h-[30px]" src={Instagram} alt="" />
            </div>
            <div>
              <img className="h-[30px]" src={Twitter} alt="" />
            </div>
          </div>
          <div>
            1009 Brass Street, Aviero, Portugal
          </div>
          <div>
            No.3 Adegunwa Street, Alagomeji, <br /> Yaba, Lagos, Nigeria
          </div>
          <div>Info@blockpeg.com</div>
        </div>
        <div className="flex gap-20">
        <div className="flex flex-col gap-[16px] justify-between lato text-base font-normal">
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/buildingblocks">Building Blocks</Link>
          <Link to="">Our Team</Link>
          <Link to="">FAQs</Link>
        </div>

        <div className="flex flex-col gap-[16px] justify-between lato text-base font-normal">
          <Link to="">Products</Link>
          <Link to="/strategicinsight">Strategic Insights</Link>
          <Link to="/financialadviser">Financial Adviser</Link>
          <Link to="">Contacts</Link>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Footerr;
