import React from "react";
import Navbar from "../layout/Navbar";
import Logo from "../assets/blockpeg.png";
import Footer from "../layout/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <section className="py-6 ">
        <div className="grid  max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 bg-[#16D5FF] md:py-0 md:px-6">
            <div>
              <h1 className="text-black mb-4 flex items-center gap-4">
                <img className="h-24 w-24" src={Logo} alt="" />
                BlockPeg
              </h1>
              <span className="text-xl font-medium text-[#999999]">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor
                diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                lorem et sit.
              </span>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p className="text-4xl font-bold ">
                We'd love <br /> to hear <br /> from you.
              </p>
            </div>
          </div>
          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-3 text-xl font-semibold ">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full bg-gray-300 focus:outline-none p-3 capitalize text-xl font-lg"
                style={{ color: "black" }}
              />
            </label>
            <label className="block">
              <span className="mb-3 text-xl font-semibold">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full bg-gray-300 focus:outline-none p-3 text-xl font-lg"
                style={{ color: "black" }}
              />
            </label>
            <label className="block">
              <span className="mb-3 text-xl font-semibold">Message</span>
              <textarea
                rows="6"
                className="block w-full bg-gray-300 focus:outline-none p-3 text-xl font-lg"
                style={{ color: "black" }}
              ></textarea>
            </label>
            <button className="bg-[#16D5FF] hover:bg-black text-white text-2xl font-medium py-6 px-6 w-1/3">
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
