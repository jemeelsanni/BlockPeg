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
                  Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                  erat ipsum et lorem et sit, sed stet lorem sit clita. Diam
                  dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                  ipsum et lorem et sit.
                </span>
              </div>
              <div className="flex gap-16">
                <div className="capitalize body">
                  <h5 className="font-semibold text-2xl mb-4 capitalize heading">
                    Quick Links
                  </h5>
                  <div className="mb-2 text-[#999999] hover:text-lg">
                    <a href="">Blog</a>
                  </div>
                  <div className="mb-2 text-[#999999] hover:text-lg">
                    <a href="">Contact</a>
                  </div>
                  <div className="mb-2 text-[#999999] hover:text-lg">
                    <a href="">About</a>
                  </div>
                </div>
                <div className="body">
                  <h5 className="font-semibold text-2xl heading mb-4 capitalize">
                    Get in touch
                  </h5>
                  <p className="mb-4 text-[#999999]">
                    <FaMapMarkerAlt className="inline mr-2" />
                    123 Street, New York, USA
                  </p>
                  <p className="mb-4 text-[#999999]">
                    <FaPhone className="inline mr-2" />
                    +012 345 67890
                  </p>
                  <p className="mb-4 text-[#999999]">
                    <FaEnvelope className="inline mr-2" />
                    info@example.com
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
                  Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                  erat ipsum et lorem et sit, sed stet lorem sit clita. Diam
                  dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                  ipsum et lorem et sit.
                </span>
              </div>
              <div className="flex justify-around">
                <div className="capitalize body">
                  <h5 className="font-semibold text-xl mb-2 capitalize heading">
                    Quick Links
                  </h5>
                  <div className="mb-2 text-[#999999] hover:text-lg">
                    <a href="">Blog</a>
                  </div>
                  <div className="mb-2 text-[#999999] hover:text-lg">
                    <a href="">Contact</a>
                  </div>
                  <div className="mb-2 text-[#999999] hover:text-lg">
                    <a href="">About</a>
                  </div>
                </div>
                <div className="body">
                  <h5 className="font-semibold text-xl heading mb-2 capitalize">
                    Get in touch
                  </h5>
                  <p className="mb-4 text-[#999999]">
                    <FaMapMarkerAlt className="inline mr-2" />
                    123 Street, New York, USA
                  </p>
                  <p className="mb-4 text-[#999999]">
                    <FaPhone className="inline mr-2" />
                    +012 345 67890
                  </p>
                  <p className="mb-4 text-[#999999]">
                    <FaEnvelope className="inline mr-2" />
                    info@example.com
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
