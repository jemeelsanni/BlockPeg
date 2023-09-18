import React from "react";
import Navbar from "../layout/Navbar";
import Hero from "./Hero";
import Blog from "./Blog/Blog";
import About from "./About/About";
import Facts from "./Facts";
import Features from "./Features";
import Services from "./Services";
import FAQs from "./FAQs";
import Footer from "../layout/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero id="home" />
      

      <Blog />
      {/* <About id="about" />
      <Facts />
      <Features />
      <Services />
      <FAQs /> */}
      <Footer />
    </div>
  );
};

export default Index;
