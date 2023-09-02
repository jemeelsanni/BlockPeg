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
    <div className="container-xxl bg-[#F2F8FE] px-24 py-16">
      <div className="mx-auto flex flex-col gap-4 ">
        <div className="border-b-2 border-gray-300 pb-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center mb-6 ">
            <div>
              <h1 className="text-[#16D5FF] mb-4 flex items-center gap-4">
                <img className="h-24 w-24" src={Logo} alt="" />
                BlockPeg
              </h1>
              <span className="text-lg text-[#999999]">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor
                diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                lorem et sit.
              </span>
            </div>
            <div>
              <h5 className=" font-semibold text-2xl mb-4">BlockPeg</h5>
              <p className="text-lg text-[#999999] mb-4">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              </p>
              <div className="relative">
                <input
                  className="bg-transparent w-full py-4 px-4 pr-10 placeholder-neutral-400 text-neutral-700 border border-neutral-200 rounded-md focus:border-primary focus:ring-0 focus:ring-offset-0"
                  type="text"
                  placeholder="Your email"
                />

                <button
                  type="button"
                  className=" bg-black text-white py-2 px-3 absolute top-0 right-0 mt-2 mr-2 rounded-md hover:bg-[#16D5FF] focus:ring focus:ring-opacity-50"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold text-xl mb-4 capitalize">
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
            <div className="capitalize">
              <h5 className="font-semibold text-xl mb-4 capitalize">
                Our services
              </h5>
              <div className="mb-4 text-[#999999]">
                <a href="">
                  <FaLink className="inline mr-2" />
                  currency wallet
                </a>
              </div>
              <div className="mb-4 text-[#999999]">
                <a href="">
                  <FaLink className="inline mr-2" />
                  currency transaction
                </a>
              </div>
              <div className="mb-4 text-[#999999]">
                <a href="">
                  <FaLink className="inline mr-2" />
                  bitcoin investment
                </a>
              </div>
              <div className="mb-4 text-[#999999]">
                <a href="">
                  <FaLink className="inline mr-2" />
                  token sale
                </a>
              </div>
            </div>
            <div className="capitalize">
              <h5 className="font-semibold text-xl mb-4 capitalize">
                Our services
              </h5>
              <div className="mb-4 text-[#999999]">
                <a href="">
                  <FaLink className="inline mr-2" />
                  about us
                </a>
              </div>
              <div className="mb-4 text-[#999999]">
                <a href="">
                  <FaLink className="inline mr-2" />
                  contact us
                </a>
              </div>
              <div className="mb-4 text-[#999999]">
                <a href="">
                  <FaLink className="inline mr-2" />
                  our services
                </a>
              </div>
              <div className="mb-4 text-[#999999]">
                <a href="">
                  <FaLink className="inline mr-2" />
                  blog
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-xl mb-4 capitalize">Socials</h5>
              <div className="flex space-x-2">
                <a href="#">
                  <FaTwitter className="text-blue-400 text-5xl rounded-full p-2 hover:bg-blue-400 hover:text-white" />
                </a>
                <a href="#">
                  <FaFacebook className="text-blue-600 text-5xl rounded-full p-2 hover:bg-blue-600 hover:text-white" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-blue-800 text-5xl rounded-full p-2 hover:bg-blue-800 hover:text-white" />
                </a>
                <a href="#">
                  <FaGithub className="text-gray-800 text-5xl rounded-full p-2 hover:bg-gray-800 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center text-xl font-semibold">
          &copy;{" "}
          <a href="#" className="text-[#16D5FF]">
            BlockPeg
          </a>
          , <span className="text-[#999999]">All Right Reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
