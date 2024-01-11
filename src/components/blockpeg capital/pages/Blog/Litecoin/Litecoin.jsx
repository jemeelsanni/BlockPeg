import React from 'react'
import Navbarr from '../../../layout/Navbarr';
import LitecoinHero from './LitecoinHero';
import LitecoinContent from './LitecoinContent';
import Footerr from '../../../layout/Footerr';

const Litecoin = () => {
  return (
    <div>
        <Navbarr />
        <LitecoinHero />    
        <LitecoinContent />
        <Footerr />
    </div>
  )
}

export default Litecoin