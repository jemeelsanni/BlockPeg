import React from "react";
import logo from "../assets/blockpeg.png";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
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
  );
};

export default Navbar;
