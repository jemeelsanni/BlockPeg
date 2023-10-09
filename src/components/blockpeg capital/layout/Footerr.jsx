import React from 'react';
import Logo from "../assets/Logo.png";
import Copyright from "../assets/Copyright.png";
import Linkedin from "../assets/Linkedin.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";

const Footerr = () => {
  return (
    <div>
        <div className=' flex flex-row justify-between w-full bg-[#0B245B] text-[#FFFFFF] p-16'>
            <div className='flex flex-col justify-between mr-64'>
            <div className='flex gap-4 literata text-2xl font-semibold items-center'>
                <img src={Logo} alt="" />
                <div>
                    <p>Blockpeg</p>
                    <p>Capital</p>
                </div>
            </div>
            <div></div>
            <div></div>
            <div className='flex gap-4 lato text-lg font-normal items-center mt-36 '>
                <img src={Copyright} alt="" />
                <div className=''>
                    <p>Copyright 2022</p>
                    
                </div>
            </div>
            </div>
            <div className='flex flex-col gap-16 justify-between lato text-lg font-normal'>
                <div className='text-[#0B245B]'>.</div>
                <div>Home</div>
                <div>About Us</div>
                <div>Building Blocks</div>
            </div>
            
            <div className='flex flex-col gap-16 justify-between lato text-lg font-normal'>
                <div className='text-[#0B245B]'>.</div>
                <div>Products</div>
                <div>Strategic Insights</div>
                <div>Financial Adviser</div>
            </div>

            <div className='flex flex-col gap-16 justify-between lato text-lg font-normal'>
                <div className='text-[#0B245B]'>.</div>
                <div>Our Team</div>
                <div>Contacts</div>
                <div>FAQs</div>
            </div>

            <div className='flex flex-col gap-16 justify-between lato text-lg font-normal'>
                <div className='flex flex-row gap-12'>
                    <div><img src={Linkedin} alt="" /></div>
                    <div><img src={Instagram} alt="" /></div>
                    <div><img src={Twitter} alt="" /></div>
                </div>
                <div>1009 Brass Street, Aviero, <br /> Portugal</div>
                <div>No.3 Adegunwa Street, Alagomeji, <br /> Yaba,  Lagos, Nigeria</div>
                <div>Info@blockpeg.com</div>
            </div>
        </div>
    </div>
  )
}

export default Footerr