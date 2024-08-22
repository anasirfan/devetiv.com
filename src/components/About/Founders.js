import Image from "next/image";
import React, { useState } from "react";
import img1 from "../../../public/assets/images/about/founders/img1.png";
import img2 from "../../../public/assets/images/about/founders/img2.png";
import img3 from "../../../public/assets/images/about/founders/img3.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Founders = () => {
  const [share1, setShare1] = useState(false);
  const [share2, setShare2] = useState(false);
  const [share3, setShare3] = useState(false);
  return (
    <div>
      <h4  data-aos="fade-up" className="text-black text-[45px] leading-[84px] pb-16 font-semibold text-center sm:text-[25px] sm:leading-[32px] custom-md:text-[35px] custom-md:leading-[40px] custom-md:pb-0 ">
        Our Founders
      </h4>
 
      <div className="flex space-x-20 justify-between w-[90%] mx-auto  h-[850px] sm:flex-col sm:h-auto sm:space-x-0 sm:space-y-20 custom-md:space-x-4">
        <div data-aos="fade-down" className=" basis-1/3 flex flex-col-reverse sm:w-[80%]">
          <div className="border border-[#E3E3E3] shadow-xl  rounded-2xl ">
            <Image   src={img1} alt="img1" className="w-full" />
            {!share1 && (
              <div className="absolute w-[190px] flex justify-center mx-auto -mt-[50px] sm:w-[50%] sm:h-[8%] sm:-mt-[35px] custom-md:w-[49.5%] custom-tab:w-[100%] lg:w-[50%] custom-md:-mt-[40px] ">
                <button
                  className="rounded-full px-6 py-6 bg-[#333333] sm:px-4 sm:py-4 custom-md:px-4 custom-md:py-4 custom-tab:p-6"
                  onClick={() => setShare1(true)}
                >
                  <FaShareAlt className="text-white h-6 w-6 sm:h-4 sm:w-4 custom-md:h-5 custom-md:w-5 2xl:h-10 2xl:w-10" />
                </button>
              </div>
            )}
            {share1 && (
              <div className="absolute w-[190px] flex justify-center mx-auto -mt-[230px] sm:w-[50%] sm:-mt-[35px] custom-md:w-[49.5%] lg:w-[50%]  custom-md:-mt-[190px] ">
                <div className="flex flex-col space-y-6 justify-between align-middle items-center rounded-full px-6 py-10 bg-[#333333] sm:px-3 sm:py-3 sm:space-x-6 sm:space-y-0 sm:flex-row custom-md:px-4 custom-md:py-4 ">
                  <FaFacebookF className="text-white h-6 w-6 sm:h-3 sm:w-3" />
                  <a
                    href="https://www.linkedin.com/in/saifuddin778/"
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Recommended for security reasons
                  >
                    <FaLinkedinIn className="text-white h-6 w-6 sm:h-3 sm:w-3" />
                  </a>{" "}
                  <FaInstagram className="text-white h-6 w-6 sm:h-3 sm:w-3" />
                  <RxCross2
                    onClick={() => setShare1(false)}
                    className="text-white h-6 w-6 sm:h-3 sm:w-3"
                  />
                </div>
              </div>
            )}
            <div className="w-[80%] mx-auto py-12 flex flex-col space-y-4 sm:space-y-2">
              <h4 className="text-black font-semibold mt-2 sm:text-[16px] custom-md:text-[20px]">
                Saifuddin Abdullah - CTO
              </h4>
              <p className="text-[#C4C4C4] sm:text-[12px] custom-md:text-[14px]">
                With a robust background in software back-end development,
                Saifuddin drives our technological innovation. His expertise
                ensures that our digital solutions are not only cutting-edge but
                also scalable and reliable.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className=" basis-1/3 flex flex-col sm:w-[80%] self-center">
          <div className="border border-[#E3E3E3] shadow-xl  rounded-2xl ">
            <div className="relative">
              <Image src={img2} alt="img1" className="w-full" />
              {/* <div className="absolute inset-0 bg-founders-gradient opacity-40"></div> */}
            </div>
            {!share2 && (
              <div className="absolute w-[190px] flex justify-center mx-auto -mt-[50px] sm:w-[50%] sm:h-[8%] sm:-mt-[35px] custom-md:w-[49.5%] lg:w-[50%]  custom-md:-mt-[40px]">
                <button
                  className="rounded-full px-6 py-6 bg-[#333333] sm:px-3 sm:py-3 custom-md:px-4 custom-md:py-4"
                  onClick={() => setShare2(true)}
                >
                  <FaShareAlt className="text-white h-6 w-6 sm:h-4 sm:w-4 custom-md:h-5 custom-md:w-5" />
                </button>
              </div>
            )}
            {share2 && (
              <div className="absolute w-[190px] flex justify-center mx-auto -mt-[230px] sm:w-[50%] sm:-mt-[35px] custom-md:w-[49.5%] lg:w-[50%]  custom-md:-mt-[190px]">
                <div className="flex flex-col space-y-6 justify-between align-middle items-center rounded-full px-6 py-10 bg-[#333333] sm:px-3 sm:py-3 sm:space-x-6 sm:space-y-0 sm:flex-row custom-md:px-4 custom-md:py-4 ">
                  <a
                    href="#"
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Recommended for security reasons
                  >
                    <FaFacebookF className="text-white h-6 w-6 sm:h-3 sm:w-3" />{" "}
                  </a>
                  <FaLinkedinIn className="text-white h-6 w-6 sm:h-3 sm:w-3" />
                  <FaInstagram className="text-white h-6 w-6 sm:h-3 sm:w-3" />
                  <RxCross2
                    onClick={() => setShare2(false)}
                    className="text-white h-6 w-6 sm:h-3 sm:w-3"
                  />
                </div>
              </div>
            )}
            <div className="w-[80%] mx-auto py-12 flex flex-col space-y-4 sm:space-y-2">
              <h4 className="text-black font-semibold mt-2 sm:text-[16px]  custom-md:text-[20px]">
                Junaid Ali - CFO
              </h4>
              <p className="text-[#C4C4C4] sm:text-[12px] custom-md:text-[14px]">
                Junaid brings years of experience from managing his successful
                imports business to oversee Devetiv&apos;s financial health. His
                strategic insight and meticulous management ensure our
                operations are both efficient and sustainable.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className=" basis-1/3 flex flex-col-reverse sm:w-[80%]">
          <div className="border border-[#E3E3E3] shadow-xl  rounded-2xl ">
            <Image src={img3} alt="img1" className="w-full"/>
            {!share3 && (
              <div className="absolute w-[190px] flex justify-center mx-auto -mt-[50px] sm:w-[50%] sm:h-[8%] sm:-mt-[35px] custom-md:w-[49.5%] lg:w-[50%]  custom-md:-mt-[40px] ">
                <button
                  className="rounded-full px-6 py-6 bg-[#333333] sm:px-3 sm:py-3  custom-md:px-4 custom-md:py-4"
                  onClick={() => setShare3(true)}
                >
                  <FaShareAlt className="text-white h-6 w-6 sm:h-4 sm:w-4 custom-md:h-5 custom-md:w-5" />
                </button>
              </div>
            )}
            {share3 && (
              <div className="absolute w-[190px] flex justify-center mx-auto -mt-[230px]  sm:w-[50%] sm:-mt-[35px] custom-md:w-[49.5%] lg:w-[50%]  custom-md:-mt-[190px] ">
                <div className="flex flex-col space-y-6 justify-between align-middle items-center rounded-full px-6 py-10 bg-[#333333] sm:px-3 sm:py-3 sm:space-x-6 sm:space-y-0 sm:flex-row custom-md:px-4 custom-md:py-4">
                  <FaFacebookF className="text-white h-6 w-6 sm:h-3 sm:w-3" />
                  <a
                    href="https://www.linkedin.com/in/hussainsa/"
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Recommended for security reasons
                  >
                    <FaLinkedinIn className="text-white h-6 w-6 sm:h-3 sm:w-3" />
                  </a>
                  <FaInstagram className="text-white h-6 w-6 sm:h-3 sm:w-3" />
                  <RxCross2
                    onClick={() => setShare3(false)}
                    className="text-white h-6 w-6 sm:h-3 sm:w-3"
                  />
                </div>
              </div>
            )}
            <div className="w-[80%] mx-auto py-12 flex flex-col space-y-4 sm:space-y-2">
              <h4 className="text-black font-semibold mt-2 sm:text-[16px]  custom-md:text-[20px]">
                Saqib Hussain - CMO
              </h4>
              <p className="text-[#C4C4C4] sm:text-[12px] custom-md:text-[14px]">
                Saqib&apos;s extensive career in digital marketing and content
                development propels our marketing efforts. His vision and
                creativity help shape compelling narratives that resonate with
                our target audience, driving engagement and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
