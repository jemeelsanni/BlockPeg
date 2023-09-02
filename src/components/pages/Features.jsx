import React from "react";
import Easy from "../assets/icon-7.png";
import Safe from "../assets/icon-6.png";
import Affordable from "../assets/icon-5.png";
import Secure from "../assets/icon-4.png";
import Protected from "../assets/icon-3.png";
import Support from "../assets/icon-8.png";

const Features = () => {
  return (
    <div className="container-xxl py-5 ">
      <div className="container mx-auto mb-10">
        <div className="text-center mx-auto">
          <h1 className="text-5xl font-bold mb-2">Why Us!</h1>
          <p className="text-2xl font-normal mb-5">
            The Best In The Crypto Industry
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-20 justify-center">
          <div className="col-lg-4 col-md-6">
            <div className="flex items-start">
              <img className=" flex-shrink-0" src={Easy} alt="" />
              <div className="ps-4">
                <h5 className="text-xl font-semibold mb-3">Easy To Start</h5>
                <p className="text-lg text-[#999999]">
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flex items-start">
              <img className=" flex-shrink-0" src={Safe} alt="" />
              <div className="ps-4">
                <h5 className="text-xl font-semibold mb-3">Safe & Secure</h5>
                <p className="text-lg text-[#999999]">
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flex items-start">
              <img className=" flex-shrink-0" src={Affordable} alt="" />
              <div className="ps-4">
                <h5 className="text-xl font-semibold mb-3">Affordable Plans</h5>
                <p className="text-lg text-[#999999]">
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flex items-start">
              <img className=" flex-shrink-0" src={Secure} alt="" />
              <div className="ps-4">
                <h5 className="text-xl font-semibold mb-3">Secure Storage</h5>
                <p className="text-lg text-[#999999]">
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flex items-start">
              <img className=" flex-shrink-0" src={Protected} alt="" />
              <div className="ps-4">
                <h5 className="text-xl font-semibold mb-3">
                  Protected By Insurance
                </h5>
                <p className="text-lg text-[#999999]">
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flex items-start">
              <img className=" flex-shrink-0" src={Support} alt="" />
              <div className="ps-4">
                <h5 className="text-xl font-semibold mb-3">24/7 Support</h5>
                <p className="text-lg text-[#999999]">
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </p>
              </div>
            </div>
          </div>

          {/* Add more features here */}
        </div>
      </div>
    </div>
  );
};

export default Features;
