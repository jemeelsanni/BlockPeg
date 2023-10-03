import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Herimg from "../assets/hero-1.png";

const Hero = () => {
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }, // Adjust the duration here
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }, // Adjust the duration here
  };

  return (
    <div className="">
      {/* desktop */}
      <div className="hidden sm:hidden lg:block xl:block">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInFromLeft} // Use the fade-in animation variants
          className="flex flex-col items-center bg-[#F2F8FE] px-8 "
          id="home"
        >
          <div className="w-full h-[80vh] py-48 px-16 text-center shadow-xl">
            <motion.h1
              variants={fadeInFromLeft} // Use the fade-in animation variants
              className="text-7xl font-bold capitalize title text-[#0c3c4c]"
            >
              The reliable and secure partner for a cryptocurrency investment
            </motion.h1>
            <motion.p
              variants={fadeInFromLeft} // Use the fade-in animation variants
              className="text-3xl font-light capitalize mt-4 title"
            >
              Investing in cryptocurrency can be a complex business. By placing
              your investment with an expert partner, you can easily diversify
              your portfolio and benefit from optimal returns.
            </motion.p>
            <motion.div
              variants={fadeInFromLeft} // Use the fade-in animation variants
            >
              <Link to="/contact">
                <button className="bg-transparent hover:bg-[#0c3c4c] hover:text-white text-[#0c3c4c] border-[#0c3c4c] border-2 body text-lg font-medium py-2 px-4 mt-4 mb-16">
                  Let's Talk
                </button>
              </Link>
            </motion.div>
          </div>
          {/* <div className="p-16">
            <div className="text-4xl mb-2 heading text-center">
              Invest in a fund that aligns with your financial goals
            </div>
            <div className="text-xl font-light text-center title mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className=" flex flex-row gap-6">
              <div>
                <h1 className="text-xl mb-2 uppercase font-bold heading text-center">
                  Blockpeg Funds
                </h1>
                <div >
                  <li className="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li className=" mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li className="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                </div>
              </div>
              <div>
                <h1 className="text-xl mb-2 uppercase font-bold heading text-center">
                  Blockpeg Funds
                </h1>
                <div >
                  <li className="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li className=" mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li className="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                </div>
              </div>
              <div>
                <h1 className="text-xl mb-2 uppercase font-bold heading text-center">
                  Blockpeg Funds
                </h1>
                <div >
                  <li className="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li className=" mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li className="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                </div>
              </div>
              
              
            </div>
          </div> */}
        </motion.div>
      </div>
      {/* mobile */}
      <div className="sm:block lg:hidden xl:hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInFromRight} // Use the fade-in animation variants
          className="flex h-full items-center bg-[#F2F8FE] px-3 shadow-xl"
          id="home"
        >
          <div className="w-full px-7 text-center">
            <motion.h1
              variants={fadeInFromRight} // Use the fade-in animation variants
              className="text-3xl font-bold capitalize title text-[#0c3c4c]"
            >
              The reliable and secure partner for a cryptocurrency investment
            </motion.h1>
            <motion.p
              variants={fadeInFromRight} // Use the fade-in animation variants
              className="text-xl font-light capitalize mt-4 title"
            >
              Investing in cryptocurrency can be a complex business. By placing
              your investment with an expert partner, you can easily diversify
              your portfolio and benefit from optimal returns.
            </motion.p>
            <motion.div
              variants={fadeInFromRight} // Use the fade-in animation variants
            >
              <Link to="/contact">
                <button className="bg-transparent mb-6 hover:bg-[#0c3c4c] hover:text-white text-[#0c3c4c] border-[#0c3c4c] border-2 text-2xl body text-lg font-medium py-2 px-4 mt-4">
                  Let's Talk
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
