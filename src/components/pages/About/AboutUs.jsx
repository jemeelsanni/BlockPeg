import React from "react";
import About from "./About";
import Team from "./Team";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div>
        <About />
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
