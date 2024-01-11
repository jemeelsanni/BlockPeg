import React from 'react'

const FinancialForm = () => {
  return (
    <div>
        <div className=' mx-[24px] laptop:mx-[408px] my-16 text-[#0B245B]'>
            <div className='text-left laptop:text-center '>
                <h1 className='literata text-3xl laptop:text-5xl font-bold mb-[24px] laptop:mb-5'>Inquiries</h1>
                <p className='lato text-sm laptop:text-lg mb-10'>Fill in your details and go ahead with your enquiry and you will recieve a response within 24hours</p>
            </div>
            <form  className='flex flex-col text-sm laptop:text-lg gap-8 ' action="">
                <div className=' flex flex-col'>
                    <label htmlFor="">Email</label>
                    <input className=' outline-none border-[#0B245B6B] border-[1px] bg-[#7198EF30] p-2' type="text" />
                </div>
                <div className=' flex flex-col'>
                    <label htmlFor="">First Name</label>
                    <input className=' outline-none border-[#0B245B6B] border-[1px] bg-[#7198EF30] p-2' type="text" />
                </div>
                <div className=' flex flex-col'>
                    <label htmlFor="">Last Name</label>
                    <input className=' outline-none border-[#0B245B6B] border-[1px] bg-[#7198EF30] p-2' type="text" />
                </div>
                <div className=' flex flex-col'>
                    <label htmlFor="">Type of Investor</label>
                    <input className=' outline-none border-[#0B245B6B] border-[1px] bg-[#7198EF30] p-2' type="text" />
                </div>
                <div className=' flex flex-col'>
                    <label htmlFor="">Country of Residence</label>
                    <input className=' outline-none border-[#0B245B6B] border-[1px] bg-[#7198EF30] p-2' type="text" />
                </div>
                <div className=' flex flex-col'>
                    <label htmlFor="">How can we help you?</label>
                    <textarea className=' outline-none border-[#0B245B6B] border-[1px] bg-[#7198EF30] p-2' type="text" />
                </div>
                <button className=' bg-[#80FAFA] p-2'>Submit Enquiry</button>
            </form>
        </div>
    </div>
  )
}

export default FinancialForm