import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Wallet from "../assets/icon-7.png";
import Transaction from "../assets/icon-3.png";
import Investment from "../assets/icon-9.png";
import Exchange from "../assets/icon-5.png";
import Escrow from "../assets/icon-2.png";
import Sale from "../assets/icon-8.png";

const Services = () => {
  return (
    <div className="bg-[#F2F8FE] py-5">
      <div className="container py-24  mx-auto md:px-6 lg:px-8">
        <div
          className="text-center mx-auto mb-10"
          style={{ maxWidth: "500px" }}
        >
          <h1 className="text-5xl font-bold">Services</h1>
          <p className="text-2xl font-normal mt-2">
            Buy, Sell And Exchange Cryptocurrency
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Currency Wallet Service */}
          <div className="col-md-6 col-lg-4 p-6">
            <div className="bg-white p-5">
              <img className="img-fluid mb-4" src={Wallet} alt="" />
              <h5 className="text-xl font-semibold mb-3">Currency Wallet</h5>
              <p className="text-lg text-[#999999]">
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a
                href=""
                className="text-[#16D5FF] inline-flex items-center justify-center mt-2"
              >
                <span>Read More</span>{" "}
                <FaArrowRight className="ml-2 fill-[#16D5FF] items-center" />
              </a>
            </div>
          </div>

          {/* Currency Transaction Service */}
          <div className="col-md-6 col-lg-4 p-6">
            <div className="bg-white p-5">
              <img className="img-fluid mb-4" src={Transaction} alt="" />
              <h5 className="text-xl font-semibold mb-3">
                Currency Transaction
              </h5>
              <p className="text-lg text-[#999999]">
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a
                href=""
                className="text-[#16D5FF] inline-flex items-center justify-center mt-2"
              >
                <span>Read More</span>{" "}
                <FaArrowRight className="ml-2 fill-[#16D5FF] items-center" />
              </a>
            </div>
          </div>

          {/* Bitcoin Investment Service */}
          <div className="col-md-6 col-lg-4 p-6">
            <div className="bg-white p-5">
              <img className="img-fluid mb-4" src={Investment} alt="" />
              <h5 className="text-xl font-semibold mb-3">Bitcoin Investment</h5>
              <p className="text-lg text-[#999999]">
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a
                href=""
                className="text-[#16D5FF] inline-flex items-center justify-center mt-2"
              >
                <span>Read More</span>{" "}
                <FaArrowRight className="ml-2 fill-[#16D5FF] items-center" />
              </a>
            </div>
          </div>

          {/* Currency Exchange Service */}
          <div className="col-md-6 col-lg-4 p-6">
            <div className="bg-white p-5">
              <img className="img-fluid mb-4" src={Exchange} alt="" />
              <h5 className="text-xl font-semibold mb-3">Currency Exchange</h5>
              <p className="text-lg text-[#999999]">
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a
                href=""
                className="text-[#16D5FF] inline-flex items-center justify-center mt-2"
              >
                <span>Read More</span>{" "}
                <FaArrowRight className="ml-2 fill-[#16D5FF] items-center" />
              </a>
            </div>
          </div>

          {/* Bitcoin Escrow Service */}
          <div className="col-md-6 col-lg-4 p-6">
            <div className="bg-white p-5">
              <img className="img-fluid mb-4" src={Escrow} alt="" />
              <h5 className="text-xl font-semibold mb-3">Bitcoin Escrow</h5>
              <p className="text-lg text-[#999999]">
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a
                href=""
                className="text-[#16D5FF] inline-flex items-center justify-center mt-2"
              >
                <span>Read More</span>{" "}
                <FaArrowRight className="ml-2 fill-[#16D5FF] items-center" />
              </a>
            </div>
          </div>

          {/* Token Sale Service */}
          <div className="col-md-6 col-lg-4 p-6">
            <div className="bg-white p-5">
              <img className="img-fluid mb-4" src={Sale} alt="" />
              <h5 className="text-xl font-semibold mb-3">Token Sale</h5>
              <p className="text-lg text-[#999999]">
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a
                href=""
                className="text-[#16D5FF] inline-flex items-center justify-center mt-2"
              >
                <span>Read More</span>{" "}
                <FaArrowRight className="ml-2 fill-[#16D5FF] items-center" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
