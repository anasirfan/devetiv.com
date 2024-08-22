import Image from "next/image";
import Link from "next/link";
import React from "react";

const Build = ({buildHeading, buildDesc,buildbanner}) => {

   return (
    <div className="mt-24 sm:mt-4 mx-4  rounded-2xl py-8 px-8 bg-[#F0F2F4]">
      <div className="flex space-x-12 lg:space-x-6 custom-md:flex-col custom-md:space-y-12 custom-md:items-center sm:flex-col sm:space-y-12 sm:items-center">
        <Image
         data-aos="zoom-in"
          src={buildbanner} alt="buildbanner" height={500} width={500}  className="basis-1/2"/>

        <div
         data-aos="fade-up"
          className="basis-1/2 self-center custom-md:items-center flex flex-col space-y-6 sm:space-y-3">
          <h4 className="text-black text-[35px] sm:text-[25px] font-semibold custom-md:text-center">{buildHeading}</h4>
          <p className="text-black w-[80%] sm:text-[12px] custom-md:mx-auto">
            {buildDesc}
          </p>
          <Link href={'/contact-us'}>

          <button className="px-8 py-3 rounded-full custom-md:mx-auto bg-[#CDAC00] hover:border-[#CDAC00] border-[2px] hover:text-[#CDAC00] hover:bg-[#F0F2F4] text-black font-semibold text-md w-[160px]">Get Started</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Build;
