import React from 'react'
import Navbarr from '../../../layout/Navbarr';
import DecentralandHero from './DecentralandHero';
import DecentralandContent from './DecentralandContent';
import Footerr from '../../../layout/Footerr';

const Decentraland = () => {
  return (
    <div>
        <Navbarr />
        <DecentralandHero />    
        <DecentralandContent />
        <Footerr />
    </div>
  )
}

export default Decentraland