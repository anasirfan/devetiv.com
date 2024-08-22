import React from 'react'
import { FaCircle } from "react-icons/fa";

const WebApp = ({webHeading,webDescription,webWorking}) => {
  return (
    <div className='my-20 flex items-center flex-col space-y-10 '>
      <h4 data-aos="fade-down" className="text-black text-[35px] sm:text-[25px] font-semibold text-center">{webHeading}</h4>
      <p data-aos="fade-right" className="text-[#6C6C6C] w-[50%] sm:text-[12px]  text-center mx-auto sm:w-[90%]">{webDescription}</p>

    <div className='flex space-x-7 sm:flex-col sm:space-x-0 sm:space-y-7 '>
        {webWorking.map((working,i) =>(
            <button key={i} data-aos="zoom-out" className=' custom-inset-shadow px-3 py-3 flex space-x-2 items-center  border-[#D9D9D9] shadow-lg rounded-full'>
                <FaCircle className='h-12 w-12 opacity-65  text-[#D9D9D9]' />
                <p className='text-black'>{working.work}</p>
            </button>
        ) )}
    </div>
    </div>
  )
}

export default WebApp
