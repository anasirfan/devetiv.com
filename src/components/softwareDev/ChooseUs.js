import Image from "next/image";
import React from "react";
import focus from "../../../public/assets/images/categories/software-development/whychooseus/focus.png";
import unmatched from "../../../public/assets/images/categories/software-development/whychooseus/unmatched.png";
import unflinching from "../../../public/assets/images/categories/software-development/whychooseus/unflinching.png";
import banner from "../../../public/assets/images/categories/software-development/whychooseus/banner.png";

const ChooseUs = ({chooseUs, choosUsDesc}) => {
 
  return (
    <div
    data-aos="zoom-in"
      className="h-auto bg-cover bg-center flex items-center w-[100%]  rounded-2xl px-4 py-16 sm:py-0"
      style={{ backgroundImage: `url(${banner.src})`}}
    >
      <div className="mb-20 sm:py-8">
        <h4 className="text-white text-[45px] leading-[84px] pb-6 font-semibold text-center  sm:text-[32px] sm:leading-[36px] md:text-[45px] md:leading-[50px] sm:pb-4">
          Why Choose Us
        </h4>
        <p className="text-white text-[25px] leading-[30px] pb-6 text-center w-[40%] mx-auto sm:text-[12px] sm:leading-[18px] md:text-[16px] md:leading-[25px]">
          {choosUsDesc}
        </p>

        <div className="flex space-x-12 w-[80%] mx-auto sm:flex-col sm:space-x-0 sm:space-y-8 lg:space-x-6 custom-md:space-x-4">
          {chooseUs.map((item) => (
            <div
              key={item.id}
              className="px-8 py-12 flex flex-col justify-center items-center text-center space-y-8 basis-1/3 bg-[#F0F2F4] shadow-lg rounded-xl lg:px-4 lg:py-16 sm:px-2 sm:py-8"
            >
              <Image
              data-aos="fade-down"
                src={item.img}
                alt="vision"
                height={80}
                width={80}
                className="md:h-[70px] md:w-[70px] mb-8 sm:mb-0"
              />
              <h4 
              data-aos="slide-right" 
              className="text-[34px] w-[80%] font-semibold text-black sm:text-[22px] md:text-[22px]">
                {item.heading}
              </h4>
              <p 
              data-aos="zoom-in" 
              className="text-[#686868] w-[80%]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
