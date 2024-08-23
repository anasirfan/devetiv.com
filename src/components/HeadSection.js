import React from "react";
import Navbar from "./Navbar";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const HeadSection = ({heading, description}) => {
  return ( 
    <>

      <div data-aos="fade-down" className=" flex items-center justify-center flex-col w-[60%] sm:w-[100%] text-center mx-auto h-screen sm:h-[553px] sm:px-4">
        <h1 >
          {heading}
        </h1>
        <p className="w-[80%] mx-auto my-8">
          {description}
        </p>
        <motion.div
          whileHover={{ scale: [null, 1, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <Link href={'/contact-us'}>

          <button className=" mx-auto rounded-[40px] bg-[#CDAC00] hover:bg-[transparent] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:border-[#CDAC00] text-black border-[#CDAC00] border-[2px] hover:text-white flex flex-row h-14 justify-center text-center px-[24px] py-[14px]  focus:outline-none focus:shadow-outline">
            Get A Free Quote{" "}
            <BsArrowUpRightCircle className="ml-[8px] my-[2px] h-5 w-5" />
          </button>
          </Link>
        </motion.div>

        {/* <Image
              className="mx-auto text-white my-8"
              src={scrollImage}
              height={150}
              width={150}
              alt="scroll down"
            /> */}
      </div>

    </>
  );
};

export default HeadSection;
