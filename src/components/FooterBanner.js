import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const FooterBanner = () => {
  return (
    <div className="flex py-20 sm:flex-col sm:py-2  w-[75%] mx-auto justify-between sm:w-[100%] sm:items-center sm:text-center md:py-8">
      <div className="basis-2/3 w-[40%] sm:w-[100%] sm:px-4">
        <h2 className="w-[70%] sm:w-[100%] sm:mt-8 md:w-[85%]">
          Ready to build impeccable software & apps?
        </h2>
        <p className="my-8 w-[55%] sm:w-[100%] md:w-[70%] ">
          Invest your time and money on a team that will bring your dream apps
          and software to life just the way you envision them.
        </p>
      </div>

      <div data-aos="zoom-out" className="flex items-center">
        <motion.div
          whileHover={{ scale: [null, 1, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <Link href={"/contact-us"}>
            <button className="  mx-auto rounded-[40px] bg-[#CDAC00] hover:bg-[transparent] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:border-[#CDAC00] text-black border-[#CDAC00] border-[2px] hover:text-white flex flex-row h-14 justify-center text-center px-[4px] py-[14px] w-[220px]  focus:outline-none focus:shadow-outline">
              Get Started
              <BsArrowUpRightCircle className="ml-[8px] my-[2px] h-5 w-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FooterBanner;
