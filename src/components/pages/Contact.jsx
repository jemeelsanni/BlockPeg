import React, { useState, useRef } from "react";
import Navbar from "../layout/Navbar";
import Logo from "../assets/blockpeg.png";
import Footer from "../layout/Footer";
import Profile from "../assets/profile.jpg";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { MuiTelInput } from "mui-tel-input";
import { ClipLoader } from "react-spinners";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [phone_number, setPhone_number] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "",
        "",

        form.current,
        ""
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          toast.success("email sent successfully");
        },
        (error) => {
          console.log(error);
          setLoading(false);
        }
      );
  };
  console.log(form.current);
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_lw0920c",
  //       "template_wds5rdb",
  //       form.current,
  //       "XUMoM5FgMGTUctBMI"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div>
      <Navbar />
      <div className="w-full h-[70vh] items-center px-[20px] flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[40%] w-full bg-gray-400 rounded-[12px] h-[450px]"></div>
        <form
          className="flex flex-col gap-y-[20px] lg:w-[50%] w-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="block ">
            <span className="text-xl font-semibold head text-[#0c3c4c] ">
              Full name
            </span>
            <input
              type="text"
              required
              name="user_name"
              placeholder="Leroy Jenkins"
              className=" w-full border border-gray-400 rounded-[4px] bg-transparent  h-[52px] focus:outline-none p-1 capitalize text-lg px-4 body"
              style={{ color: "black" }}
            />
          </label>
          <label className="block ">
            <span className="text-xl font-semibold head text-[#0c3c4c]">
              Email address
            </span>
            <input
              type="email"
              required
              name="email"
              placeholder="leroy@jenkins.com"
              className="block w-full border border-gray-400 rounded-[4px] bg-transparent h-[52px] focus:outline-none p-1 text-lg px-4 body"
              style={{ color: "black" }}
            />
          </label>
          <section>
            <MuiTelInput
              value={phone_number}
              id="phone_number"
              label="Phone Number"
              name="phone_number"
              defaultCountry="NG"
              required
              onChange={(newNumber) => {
                setPhone_number(newNumber);
              }}
              className="w-full h-[20px]"
            />
          </section>
          <label className="block mt-[20px] ">
            <span className="text-xl font-semibold head text-[#0c3c4c]">
              Message
            </span>
            <textarea
              name="message"
              rows="6"
              required
              className="block w-full border border-gray-400 rounded-[4px] bg-transparent focus:outline-none p-1 capitalize text-lg px-4 body"
              style={{ color: "black" }}
            ></textarea>
          </label>
          <button
            type="submit"
            value="Send"
            className=" flex gap-2 items-center bg-transparent head border-2 border-[#0c3c4c] hover:bg-[#0c3c4c] text-[#0c3c4c] hover:text-slate-200 text-lg font-bold p-3 w-2/6 text-center justify-center"
          >
            {!loading ? "Submit" : <ClipLoader size={24} />}
          </button>
        </form>
      </div>
      {/* Desktop */}
      {/* <div className="hidden sm:hidden lg:block xl:block">
        <section className="mx-20 my-16">
          <div className="flex gap-12">
            <div className="pb-6 shadow-xl text-[#0c3c4c] md:py-0 md:px-6 relative w-2/5">
              <div className="mb-6">
                <h1 className=" mb-4 heading">Contact</h1>
                <span className="text-lg font-medium text-black  body">
                  Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                  erat ipsum et lorem et sit, sed stet lorem sit clita. Diam
                  dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                  ipsum et lorem et sit.
                </span>
              </div>

              <div className=" border border-gray-400 rounded-[4px] bg-transparent h-[52px] p-6">
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
            <form
              className="flex flex-col gap-y-[20px] w-3/5"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="block ">
                <span className="text-xl font-semibold head text-[#0c3c4c] ">
                  Full name
                </span>
                <input
                  type="text"
                  required
                  name="user_name"
                  placeholder="Leroy Jenkins"
                  className=" w-full border border-gray-400 rounded-[4px] bg-transparent  h-[52px] focus:outline-none p-1 capitalize text-lg px-4 body"
                  style={{ color: "black" }}
                />
              </label>
              <label className="block ">
                <span className="text-xl font-semibold head text-[#0c3c4c]">
                  Email address
                </span>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="leroy@jenkins.com"
                  className="block w-full border border-gray-400 rounded-[4px] bg-transparent h-[52px] focus:outline-none p-1 text-lg px-4 body"
                  style={{ color: "black" }}
                />
              </label>
              <section>
               
                <MuiTelInput
                  value={phone_number}
                  id="phone_number"
                  label="Phone Number"
                  name="phone_number"
                  defaultCountry="NG"
                  required
                  onChange={(newNumber) => {
                    setPhone_number(newNumber);
                  }}
                  className="w-full h-[20px]"
          
                />
              </section>
              <label className="block mt-[20px] ">
                <span className="text-xl font-semibold head text-[#0c3c4c]">
                  Message
                </span>
                <textarea
                  name="message"
                  rows="6"
                  required
                  className="block w-full border border-gray-400 rounded-[4px] bg-transparent focus:outline-none p-1 capitalize text-lg px-4 body"
                  style={{ color: "black" }}
                ></textarea>
              </label>
              <button
                type="submit"
                value="Send"
                className=" flex gap-2 items-center bg-transparent head border-2 border-[#0c3c4c] hover:bg-[#0c3c4c] text-[#0c3c4c] hover:text-slate-200 text-lg font-bold p-3 w-2/6 text-center justify-center"
              >
                {!loading ? "Submit" : <ClipLoader size={24} />}
              </button>
            </form>
          </div>
        </section>
      </div> */}
      {/* Mobile */}
      {/* <div className="sm:block lg:hidden xl:hidden">
        <section className="mx-6 my-4">
          <div className="flex flex-col gap-10">
            <div className="pb-6 shadow-xl text-[#0c3c4c] px-6  w-full">
              <div className="mb-6">
                <h1 className=" mb-4 heading">Contact</h1>
                <span className="text-lg font-medium text-black  body">
                  Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                  erat ipsum et lorem et sit, sed stet lorem sit clita. Diam
                  dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                  ipsum et lorem et sit.
                </span>
              </div>

              <div className=" border border-gray-400 rounded-[4px] bg-transparent h-[52px] p-6">
                <h2 className="head text-2xl mb-4 font-semibold">
                  MEDIA CONTACT
                </h2>
                <div className="flex items-center gap-3">
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
                      <p className="head text-base">Head of Communications</p>
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
            <form
              className="flex flex-col w-full"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="block ">
                <span className="text-xl font-semibold head text-[#0c3c4c] ">
                  Full name
                </span>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Leroy Jenkins"
                  className="block w-full border border-gray-400 rounded-[4px] bg-transparent h-[52px] focus:outline-none p-1 capitalize text-lg px-4 body"
                  style={{ color: "black" }}
                />
              </label>
              <label className="block ">
                <span className="text-xl font-semibold head text-[#0c3c4c]">
                  Email address
                </span>
                <input
                  type="email"
                  name="user_email"
                  placeholder="leroy@jenkins.com"
                  className="block w-full border border-gray-400 rounded-[4px] bg-transparent h-[52px] focus:outline-none p-1 text-lg px-4 body"
                  style={{ color: "black" }}
                />
              </label>
              <label className="block ">
                <span className="text-xl font-semibold head text-[#0c3c4c]">
                  Message
                </span>
                <textarea
                  name="message"
                  rows="6"
                  className="block w-full border border-gray-400 rounded-[4px] bg-transparent h-[52px] focus:outline-none p-1 capitalize text-lg px-4 body"
                  style={{ color: "black" }}
                ></textarea>
              </label>
              <button
                type="submit"
                className=" flex gap-2 items-center bg-transparent head border-2 border-[#0c3c4c] hover:bg-[#0c3c4c] text-[#0c3c4c] hover:text-slate-200 text-lg font-bold p-3 w-2/6 text-center justify-center"
              >
                {!loading ? "Submit" : <ClipLoader size={20} />}
              </button>
            </form>
          </div>
        </section>
      </div> */}
      <Footer />
    </div>
  );
};

export default Contact;
