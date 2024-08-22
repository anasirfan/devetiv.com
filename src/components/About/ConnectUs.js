import React from "react";
import connectbg from "../../../public/assets/images/about/connectbg.png"; // Ensure this path is correct
import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

const ConnectUs = () => {
  return (
    <div
      data-aos="zoom-in"
      className="relative h-[600px] my-16 sm:h-[330px] sm:my-0"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover  bg-no-repeat rounded-3xl h-[500px] sm:h-auto"
        style={{ backgroundImage: `url(${connectbg.src})`, zIndex: 1 }}
      >
        <div className="relative z-10 flex items-end justify-start  h-[93%] w-[50%] mx-auto sm:flex-col sm:justify-center">
          <div className="flex flex-col space-y-8 sm:pb-8 sm:items-center ">
            <h4 className="!text-white text-[50px] tracking-[1px] sm:text-[25px] md:text-[40px] ">
              Connect With Us
            </h4>
            <p className="w-[90%] text-[20px] sm:text-[12px] sm:w-[100%] sm:text-center md:text-[16px]">
              We are all set to join hands with you on your next software, app,
              website, analytics project and more. It’s time you picked a team
              you can count on. Let’s go!
            </p>
          </div>
          <Link href={"/contact-us"} className="w-full">
                <button
                  className={`rounded-[40px]  custom-md:px-[40px] custom-md:py-[2px] custom-md:text-[20px] custom-md:items-center custom-md:w-[35%] bg-[#CDAC00] hover:border-[#CDAC00] font-normal hover:text-black border-[#CDAC00] border-[2px] flex flex-row h-14  justify-center text-center px-[24px] py-[14px] sm:px-[24px] sm:text-[18px]  focus:outline-none focus:shadow-outline`}
                >
                  Get Started{" "}
                  <BsArrowUpRightCircle className="ml-[8px] my-[2px] h-5 w-5 custom-md:self-center" />
                </button>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
