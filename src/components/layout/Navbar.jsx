import React from "react";
import logo from "../assets/blockpeg.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="flex justify-between mx-4 items-center">
      <div>
        <a href="#" className="cursor-pointer">
          <img className="h-36 w-36" src={logo} alt="Logo" />
        </a>
      </div>
      <ul className="flex gap-10 text-lg font-semibold mx-8 cursor-pointer">
        <li>
          <ScrollLink to="home" smooth={true} duration={500}>
            <Link to="/">Home</Link>
          </ScrollLink>
        </li>
        <li>
          {/* <ScrollLink to="about" smooth={true} duration={500}> */}
          <Link to="/about">About Us</Link>
          {/* </ScrollLink> */}
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
