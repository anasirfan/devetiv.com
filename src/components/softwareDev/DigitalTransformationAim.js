import Image from "next/image";
import React from "react";

import transformationaimleft from "../../../public/assets/images/categories/software-development/transformleft.png";
import transformationaimright from "../../../public/assets/images/categories/software-development/transformright.png";

const DigitalTransformationAim = ({ working, heading, description }) => {
  return (
    <>
      <div className="my-16">
        <h4 className="text-black text-5xl font-semibold text-center py-4  sm:text-[32px] sm:leading-[36px]">
          {heading}
        </h4>
        <p className="text-center text-sm mx-auto w-[50%] text-[#4B4B4B] pb-8 sm:text-[12px] sm:leading-[18px] sm:w-[80%]">
          {description}
        </p>
        <div className="flex justify-center w-[60%] mx-auto">
          <Image src={transformationaimleft} alt="transformationaimleft" className="h-cover self-start my-20 sm:h-[500px] sm:w-[20px] "/>
          <div className="flex flex-col space-y-8">
            {working &&
              working.map((work) => (
                <div
                  key={work.id}
                  className="flex text-center py-12 bg-[#F0F2F4] w-[300px] px-2 rounded-xl"
                >
                  <div className="text-black flex flex-col justify-center align-middle space-y-2 w-[100%] ">
                    <span className="text-lg font-semibold sm:text-[14px]">{work.title}</span>

                    <p className="text-[12px] text-[#4B4B4B] w-[80%] mx-auto sm:text-[10px]">
                      {work.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <Image src={transformationaimright} alt="transformationaimright" className="h-cover self-start my-20 sm:h-[500px] sm:w-[20px]  "/>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationAim;
