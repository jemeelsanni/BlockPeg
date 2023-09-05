import React, { useState } from "react";
import logo from "../assets/blockpeg.png";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      <div className="hidden sm:hidden lg:block xl:block">
        <div className="flex justify-between mx-24 my-5 items-center bg-slate-200 head  px-10 rounded-full">
          <div>
            <Link to="/">
              <img className="h-16 w-16" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="">
            <ul className="flex gap-10 text-lg font-semibold mx-8 cursor-pointer ">
              {/* <li>
            <ScrollLink to="home" smooth={true} duration={500}>
              <Link to="/">
                <img className="h-16 w-16" src={logo} alt="Logo" />
              </Link>
            </ScrollLink>
          </li> */}
              <li className="hover:text-[#0c3c4c] hover:border-b-2 hover:border-[#0c3c4c]">
                {/* <ScrollLink to="about" smooth={true} duration={500}> */}
                <Link to="/about">Team</Link>
                {/* </ScrollLink> */}
              </li>
              <li className="hover:text-[#0c3c4c] hover:border-b-2 hover:border-[#0c3c4c]">
                <Link to="/blogx">Blog</Link>
              </li>
              <li className="hover:text-[#0c3c4c] hover:border-b-2 hover:border-[#0c3c4c]">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 text-[#0c3c4c]">
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
      {/* Mobile */}
      {open && (
        <>
          <div className=" md:hidden w-full bg-bluebg h-60 absolute top-0">
            <div onClick={() => setOpen(false)}>
              <img src="Vector3.png" className=" m-6" alt="" />
            </div>
            <ul className="flex gap-10 text-lg font-semibold mx-8 cursor-pointer ">
              {/* <li>
            <ScrollLink to="home" smooth={true} duration={500}>
              <Link to="/">
                <img className="h-16 w-16" src={logo} alt="Logo" />
              </Link>
            </ScrollLink>
          </li> */}
              <li className="hover:text-[#0c3c4c] hover:border-b-2 hover:border-[#0c3c4c]">
                {/* <ScrollLink to="about" smooth={true} duration={500}> */}
                <Link to="/about">Team</Link>
                {/* </ScrollLink> */}
              </li>
              <li className="hover:text-[#0c3c4c] hover:border-b-2 hover:border-[#0c3c4c]">
                <Link to="/blogx">Blog</Link>
              </li>
              <li className="hover:text-[#0c3c4c] hover:border-b-2 hover:border-[#0c3c4c]">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <div className="sm:block lg:hidden xl:hidden">
        <div className="flex justify-between mx-4 my-5 items-center bg-slate-200 head  p-2 rounded-full">
          <div>
            <Link to="/">
              <img className="h-16 w-16" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="text-4xl font-bold capitalize title text-[#0c3c4c]">
            Blockpeg
          </div>
          <div className="flex gap-4 text-[#0c3c4c]">
            <div>
              <button
                onClick={() => setOpen(!open)}
                className="flex justify-end p-4 "
                control-id="ControlID-34"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
