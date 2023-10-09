import React from 'react';
import Logo from "../assets/Logo.png";

const Navbarr = () => {
  return (
    <div>
        <div className=' bg-[#0B245B] flex justify-between px-16 pt-10 pb-6 items-center'>
            <div className='flex gap-4 text-[#FFFFFF] literata text-2xl font-semibold'>
                <img src={Logo} alt="" />
                <div>
                    <p>Blockpeg</p>
                    <p>Capital</p>
                </div>
            </div>
            <div className='text-[#FFFFFF] flex gap-20 inter text-lg font-normal items-center cursor-pointer'>
                <div>Products</div>
                <div>Insights</div>
                <div>About Us</div>
                <button className=' px-6 py-2 bg-[#01F5F5] text-[#0B245B] text-xs font-normal'>Start Investing</button>
            </div>
        </div>
    </div>
  )
}

export default Navbarr;