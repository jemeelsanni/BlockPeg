import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLink,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/blockpeg.png";
import { Link } from "react-router-dom";
import AumTimer from "../timer/AumTimer";

const Footer = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="bg-[#0c3c4c] px-24 py-8 mt-16 text-gray-300 hidden laptop:block">
        <div className="mx-auto flex flex-col gap-4 pt-12 ">
          <div className="border-b-2 border-gray-300 pb-4 mb-4">
            <div className="grid grid-cols-2 gap-16 items-center mb-6 ">
              <div>
                <div className="flex gap-3 items-center">
                  <img src={Logo} alt="" />
                  <h1 className="text-5xl mt-6 font-bold capitalize title mb-4 ">
                    BlockPeg Capital
                  </h1>
                </div>
                <br />
                <span className="text-lg text-gray-300 body">
                  {/* <AumTimer /> */}
                  Investing in cryptocurrency can be a complex business. By
                  placing your investment with an expert partner, you can easily
                  diversify your portfolio and benefit from optimal returns.
                </span>
              </div>
              <div className="flex gap-16">
                <div className="capitalize body">
                  <h5 className="font-semibold text-2xl mb-4 capitalize heading">
                    Quick Links
                  </h5>
                  <div className="mb-2 text-gray-300 hover:text-lg">
                    <Link to="/blogx">Blog</Link>
                  </div>
                  <div className="mb-2 text-gray-300 hover:text-lg">
                    <Link to="/contact">Contact</Link>
                  </div>
                  {/* <div className="mb-2 text-[#999999] hover:text-lg">
                  <Link to="/about">Team</Link>
                  </div> */}
                </div>
                <div className="body">
                  <h5 className="font-semibold text-2xl heading mb-4 capitalize">
                    Get in touch
                  </h5>
                  <p className="mb-4 text-gray-300">
                    <FaMapMarkerAlt className="inline mr-2" />
                    78/79 Pappelallee, 10437, Berlin, Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center text-lg font-semibold heading">
            &copy;{" "}
            <a href="#" className=" text-xl title">
              BlockPeg,
            </a>
            <span className="text-gray-300"> All Right Reserved.</span>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="bg-[#0c3c4c] px-8 pb-7 mt-8 text-gray-300 block laptop:hidden">
        <div className="mx-auto flex flex-col gap-1 pt-12  ">
          <div className="border-b-2 border-gray-300 pb-4 mb-4">
            <div className="grid grid-cols-1 gap-8 items-center mb-6 ">
              <div>
                <div className="flex gap-3 items-center">
                  <img src={Logo} alt="" />
                  <h1 className="text-4xl mt-6 font-bold capitalize title mb-4 ">
                    BlockPeg Capital
                  </h1>
                </div>
                <br />
                <span className="text-lg text-gray-300 body">
                  {/* <AumTimer /> */}
                  Investing in cryptocurrency can be a complex business. By
                  placing your investment with an expert partner, you can easily
                  diversify your portfolio and benefit from optimal returns.
                </span>
              </div>
              <div className="flex w-full justify-between text-center">
                <div className="capitalize w-1/2 body">
                  <h5 className="font-semibold  text-md mb-2 capitalize heading">
                    Quick Links
                  </h5>
                  <div className="mb-2 text-gray-300 hover:text-lg">
                    <Link to="/blogx">Blog</Link>
                  </div>
                  <div className="mb-2 text-gray-300 hover:text-lg">
                    <Link to="/contact">Contact</Link>
                  </div>
                  {/* <div className="mb-2 text-[#999999] hover:text-lg">
                  <Link to="/about">Team</Link>
                  </div> */}
                </div>
                <div className="body">
                  <h5 className="font-semibold text-md heading mb-2 capitalize">
                    Get in touch
                  </h5>

                  <p className="mb-4 text-gray-300">
                    <FaEnvelope className="inline mr-2" />
                    admin@blockpeg.capital
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center text-lg font-semibold heading">
            &copy;{" "}
            <a href="#" className=" text-xl title">
              BlockPeg,
            </a>
            <span className="text-gray-300"> All Right Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
