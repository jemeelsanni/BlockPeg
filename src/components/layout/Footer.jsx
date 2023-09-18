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
      <div className="bg-[#0c3c4c] px-24 py-8 mt-16 text-[#999999] hidden sm:hidden lg:block xl:block">
        <div className="mx-auto flex flex-col gap-4 ">
          <div className="border-b-2 border-gray-300 pb-4 mb-4">
            <div className="grid grid-cols-2 gap-16 items-center mb-6 ">
              <div>
                <h1 className="text-5xl font-bold capitalize title mb-4 ">
                  BlockPeg
                </h1>
                <span className="text-lg text-[#999999] body">
                <AumTimer />
                </span>
              </div>
              <div className="flex gap-16">
                <div className="capitalize body">
                  <h5 className="font-semibold text-2xl mb-4 capitalize heading">
                    Quick Links
                  </h5>
                  <div className="mb-2 text-[#999999] hover:text-lg">
                  <Link to="/blogx">Blog</Link>
                  </div>
                  <div className="mb-2 text-[#999999] hover:text-lg">
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
                  <p className="mb-4 text-[#999999]">
                    <FaMapMarkerAlt className="inline mr-2" />
                    78/79 Pappelallee, 10437, Berlin, Germany
                  </p>
                  <p className="mb-4 text-[#999999]">
                    <FaPhone className="inline mr-2" />
                    +351912392362
                  </p>
                  <p className="mb-4 text-[#999999]">
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
            <span className="text-[#999999]"> All Right Reserved.</span>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="bg-[#0c3c4c] px-8 pb-7 mt-8 text-[#999999] sm:block lg:hidden xl:hidden">
        <div className="mx-auto flex flex-col gap-1  ">
          <div className="border-b-2 border-gray-300 pb-4 mb-4">
            <div className="grid grid-cols-1 gap-8 items-center mb-6 ">
              <div>
                <h1 className="text-3xl font-bold capitalize title ">
                  BlockPeg
                </h1>
                <span className="text-lg text-[#999999] body">
                <AumTimer />
                </span>
              </div>
              <div className="flex justify-around">
                <div className="capitalize body">
                  <h5 className="font-semibold text-xl mb-2 capitalize heading">
                    Quick Links
                  </h5>
                  <div className="mb-2 text-[#999999] hover:text-lg">
                  <Link to="/blogx">Blog</Link>
                  </div>
                  <div className="mb-2 text-[#999999] hover:text-lg">
                  <Link to="/contact">Contact</Link>
                  </div>
                  {/* <div className="mb-2 text-[#999999] hover:text-lg">
                  <Link to="/about">Team</Link>
                  </div> */}
                </div>
                <div className="body">
                  <h5 className="font-semibold text-xl heading mb-2 capitalize">
                    Get in touch
                  </h5>
                  <p className="mb-4 text-[#999999]">
                    <FaMapMarkerAlt className="inline mr-2" />
                    78/79 Pappelallee, 10437, Berlin, Germany
                  </p>
                  <p className="mb-4 text-[#999999]">
                    <FaPhone className="inline mr-2" />
                    +351912392362
                  </p>
                  <p className="mb-4 text-[#999999]">
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
            <span className="text-[#999999]"> All Right Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
