import React from 'react'
import phone from '../../assets/phone.png'
import twitter from '../../assets/TwitterAb.png'
import linkedin from '../../assets/LinkedinAb.png'
import instagram from '../../assets/InstagramAb.png'

const Contact = () => {
  return (
    <div>
        <div className='mt-[67px] mx-[64px]'>
            <h1 className=' text-[#0B245B] text-center mb-[88px] literata text-5xl font-bold'>Contact Us</h1>
            <div className='flex gap-[297px] justify-center text-[rgba(11,36,91,0.51)]'>
                <div>
                    <div className='mb-[38px]'>
                        <div className='lato text-[32px] font-semibold flex items-center gap-5 '>
                            <div>Phone</div>
                            <img className='w-[40px] h-[40px]' src={phone} alt="" />
                        </div>
                        <div className='text-[#0B245B] lato text-lg font-normal mt-[23px]'>+234 816 7750446</div>
                    </div>
                    <div>
                        <div className='lato text-[32px] font-semibold flex items-center gap-9 '>
                            <div>Socials</div>
                            
                        </div>
                        <div className='mt-[23px] flex gap-16'>
                            <img src={linkedin} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mb-[38px]'>
                        <div className='lato text-[32px] font-semibold flex items-center gap-9 '>
                            <div>Emails</div>
                            <img className='w-[40px] h-[40px]' src={phone} alt="" />
                        </div>
                        <div className='text-[#0B245B] lato text-lg font-normal mt-[23px] flex flex-col gap-[40px]'>
                            <p>Info@bkockpegcapital.co</p>
                            <p>Admin@bkockpegcapital.co</p>
                            <p>Admin@bkockpegcapital.co</p>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <div className='mb-[38px]'>
                        <div className='lato text-[32px] font-semibold flex items-center gap-9 '>
                            <div>Location</div>
                            <img className='w-[40px] h-[40px]' src={phone} alt="" />
                        </div>
                        <div className='text-[#0B245B] lato text-lg font-normal mt-[23px] flex flex-col gap-[40px]'>
                            <p>Lagos, Nigeria</p>
                            <p>Aviero, Portugal</p>
                            <p>London, UK</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact