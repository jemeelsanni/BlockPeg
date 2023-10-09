import React from "react";
import Navbarr from "../../layout/Navbarr";
import FinancialHero from "./FinancialHero";
import FinancialForm from "./FinancialForm";
import Rinvest from "../../layout/Rinvest";
import Footerr from "../../layout/Footerr";

const FinancialAdviser = () => {
  return (
    <div className=" bg-[#FFFFFF]">
      <Navbarr />
      <FinancialHero />
      <FinancialForm />
      <Rinvest />
      
      <Footerr />
    </div>
  );
};

export default FinancialAdviser;
