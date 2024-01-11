import React from 'react'
import Navbarr from '../../../layout/Navbarr';
import CardanoHero from './CardanoHero';
import CardanoContent from './CardanoContent';
import Footerr from '../../../layout/Footerr';

const Cardano = () => {
  return (
    <div>
        <Navbarr />
        <CardanoHero />    
        <CardanoContent />
        <Footerr />
    </div>
  )
}

export default Cardano