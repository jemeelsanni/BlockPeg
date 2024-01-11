import React from "react";
import Navbarr from "../../../layout/Navbarr";
import BitcoinHero from "./BitcoinHero";
import BitcoinContent from "./BitcoinContent";
import Footerr from "../../../layout/Footerr";

const Bitcoin = () => {
  return (
    <div>
      <Navbarr />
      <BitcoinHero />
      <BitcoinContent />
      <Footerr />
    </div>
  );
};

export default Bitcoin;
