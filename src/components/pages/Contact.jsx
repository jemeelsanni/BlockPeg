import React from "react";
import Navbar from "../layout/Navbar";
import Logo from "../assets/blockpeg.png";
import Footer from "../layout/Footer";
import Profile from "../assets/profile.jpg";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <section className="mx-20 my-16">
        <div className="flex gap-12">
          <div className="pb-6 shadow-xl text-[#0c3c4c] md:py-0 md:px-6 relative w-2/5">
            <div className="mb-6">
              <h1 className=" mb-4 heading">Contact</h1>
              <span className="text-lg font-medium text-black  body">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor
                diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                lorem et sit.
              </span>
            </div>

            <div className=" bg-slate-200 p-6">
              <h4 className="head text-2xl mb-4 font-semibold">
                MEDIA CONTACT
              </h4>
              <div className="flex items-center gap-6">
                <div>
                  <img
                    src={Profile}
                    alt=""
                    className="h-16 w-16 rounded-full"
                  />
                </div>
                <div>
                  <div>
                    <h2 className="head text-xl font-extrabold">
                      Leroy Jenkins
                    </h2>
                    <p className="head text-lg">Head of Communications</p>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      {" "}
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon linkedin "
                      >
                        <FaLinkedin size={20} />
                      </a>
                    </div>
                    <div>
                      {" "}
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon linkedin "
                      >
                        <FaTwitter size={20} />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon twitter"
                      >
                        <FaEnvelope size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form novalidate="" className="flex flex-col w-3/5">
            <label className="block mb-5">
              <span className="mb-3 text-xl font-semibold head text-[#0c3c4c] ">
                Full name
              </span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full bg-slate-200 focus:outline-none p-1 capitalize text-lg px-4 body"
                style={{ color: "black" }}
              />
            </label>
            <label className="block mb-5">
              <span className="mb-3 text-xl font-semibold head text-[#0c3c4c]">
                Email address
              </span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full bg-slate-200 focus:outline-none p-1 capitalize text-lg px-4 body"
                style={{ color: "black" }}
              />
            </label>
            <label className="block mb-5">
              <span className="mb-3 text-xl font-semibold head text-[#0c3c4c]">
                Message
              </span>
              <textarea
                rows="6"
                className="block w-full bg-slate-200 focus:outline-none p-1 capitalize text-lg px-4 body"
                style={{ color: "black" }}
              ></textarea>
            </label>
            <button className=" flex gap-2 items-center bg-transparent head border-2 border-[#0c3c4c] hover:bg-[#0c3c4c] text-[#0c3c4c] hover:text-slate-200 text-lg font-bold p-3 w-2/6 text-center justify-center">
              Submit
              <FaEnvelope size={20} />
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
