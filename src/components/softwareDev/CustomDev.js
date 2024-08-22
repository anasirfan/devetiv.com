import Image from "next/image";
import React from "react";

const CustomDev = ({ sideImage, heading, description }) => {
  return (
    <div className="flex w-[90%] mx-auto items-center my-20 sm:flex-col sm:space-y-12 sm:justify-center overflow-hidden">
      <Image  data-aos="zoom-out" src={sideImage} alt="customSoft" height={100} width={100}  className="basis-1/2 lg:w-[200px] xl:w-[100px] custom-md:h-[300px] custom-md:w-[200px] sm:h-[210px] sm:w-[400px]" />
      <div data-aos="fade-up" className="flex flex-col space-y-6  basis-1/2">
        <h4 className="text-black font-semibold text-3xl leading-10 custom-md:text-xl">{heading}</h4>
        <p  className="text-[#4B4B4B] w-[90%] custom-md:w-[100%] text-sm" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
};

export default CustomDev;
