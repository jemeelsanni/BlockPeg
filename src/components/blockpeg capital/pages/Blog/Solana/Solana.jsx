import React from 'react'
import Navbarr from '../../../layout/Navbarr';
import SolanaHero from './SolanaHero';
import SolanaContent from './SolanaContent';
import Footerr from '../../../layout/Footerr';

const Solana = () => {
  return (
    <div>
        <Navbarr />
        <SolanaHero />    
        <SolanaContent />
        <Footerr />
    </div>
  )
}

export default Solana