import Image from "next/image";
import React from "react";

const Working = ({ working, heading, description }) => {

  return (
    <>
      <div 
      data-aos="fade-up"
       className="my-16 ">
        <h4 
        data-aos="slide-right"
         className="text-black text-5xl font-semibold text-center py-4  sm:text-[32px] sm:leading-[36px]">
          {heading}
        </h4>
        <p 
        data-aos="zoom-out"
         className="text-center text-sm mx-auto w-[50%] text-[#4B4B4B] pb-8 sm:text-[12px] sm:leading-[18px] sm:w-[80%]">
         {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 w-[80%] sm:w-[100%] mx-auto">
          {working.map((work) => (
            <div key={work.id} className="flex space-x-4 rounded-3xl p-4 custom-inset sm:space-x-1 sm:p-2">
              <Image
              data-aos="zoom-out"
                src={work.img}
                alt={work.title}

                className="sm:h-[100px]  sm:w-auto sm:self-center"
              />
              <div
               data-aos="fade-down" 
               className="text-black flex flex-col justify-center align-middle space-y-2 w-[80%] sm:w-[100%]">
                <span className="text-lg font-semibold sm:leading-[20px]">{work.title}</span>

                <p className="text-[12px] text-[#4B4B4B] sm:leading-[14px]">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Working;
