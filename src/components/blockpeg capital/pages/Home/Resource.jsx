import React from 'react'
import Strategic from '../../assets/Strategic.png';
import Financial from '../../assets/Financial.png';
import Building from '../../assets/Building.png';

const Resource = () => {
  return (
    <div>
        <div className='my-16 mx-16'>
            <div className='text-[#0B245B] text-center literata text-5xl font-bold mb-16'>Resources</div>
            <div className='flex flex-row gap-24 justify-center'>
                <div>
                    <img src={Strategic} alt="" />
                    <p className=' text-[#0B245B] text-center lato text-3xl font-semibold mt-8'>Strategic Insight</p>
                </div>
                <div>
                    <img src={Building} alt="" />
                    <p className=' text-[#0B245B] text-center lato text-3xl font-semibold mt-8'>Building Blocks</p>
                </div>
                <div>
                    <img src={Financial} alt="" />
                    <p className=' text-[#0B245B] text-center lato text-3xl font-semibold mt-8'>Financial Adviser</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Resource