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
          className="flex h-[80vh] items-center bg-[#F2F8FE] px-8 shadow-xl"
          id="home"
        >
          <div className="w-full px-16 text-center">
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
