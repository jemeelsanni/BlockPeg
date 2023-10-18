import React from 'react'
import Navbarr from '../../layout/Navbarr';
import BlockHero from './BlockHero';
import BlockGrid from './BlockGrid';
import Footerr from '../../layout/Footerr';
import Rinvest from '../../layout/Rinvest';

const BuildingBlocks = () => {
  return (
    <div>
        <Navbarr />
        <BlockHero />
        <BlockGrid />
        <Rinvest />
        <Footerr />
    </div>
  )
}

export default BuildingBlocks