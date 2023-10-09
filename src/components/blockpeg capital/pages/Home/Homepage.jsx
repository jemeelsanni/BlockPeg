import React from "react";
import Navbarr from "../../layout/Navbarr";
import Heroo from "./Heroo";
import Benefits from "./Benefits";
import Products from "./Products";
import Invest from "./Invest";
import Resource from "./Resource";
import Rinvest from "../../layout/Rinvest";
import Footerr from "../../layout/Footerr";


const Homepage = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div>
        <Navbarr />
        <Heroo />
        <Benefits />
        <Products />
        <Invest />
        <Resource />
        <Rinvest />

        
        <Footerr />
        
      </div>
    </div>
  );
};

export default Homepage;
