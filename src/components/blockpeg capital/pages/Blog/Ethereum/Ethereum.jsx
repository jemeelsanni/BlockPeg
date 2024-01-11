import React from 'react'
import Navbarr from '../../../layout/Navbarr';
import EthereumHero from './EthereumHero';
import EthereumContent from './EthereumContent';
import Footerr from '../../../layout/Footerr';

const Ethereum = () => {
  return (
    <div>
        <Navbarr />
        <EthereumHero />    
        <EthereumContent />
        <Footerr />
    </div>
  )
}

export default Ethereum