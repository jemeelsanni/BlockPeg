import React from 'react';
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import Contact from './Contact';
import Team from './Team';
import Faqs from './Faqs';
import Navbarr from '../../layout/Navbarr';
import Rinvest from '../../layout/Rinvest';
import Footerr from '../../layout/Footerr';

const AboutUs = () => {
  return (
    <div>
        <Navbarr />
        <AboutHero />
        <AboutStory />
        <Team />
        <Contact />
        <Faqs/>
        <Rinvest />
        <Footerr />
    </div>
  )
}

export default AboutUs