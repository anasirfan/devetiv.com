import React, { useEffect, useRef } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutUs = ({ revealButtonRef }) => {
  return (
    <div className="mx-auto w-[83.5%] justify-between py-28 flex sm:flex-col sm:text-center flex-row">
      <div>
        <h2 data-aos="slide-right">About us:</h2>
        <h2 data-aos="fade-in-up">The philosophy behind the magic</h2>
        <p
          data-aos="zoom-in-up"
          className="my-6 w-[72%] sm:w-[100%] custom-md:w-[110%] sm:mx-auto lg:w-[97%] "
        >
          We are a group of passionate creatives and canny developers with a
          unified goal: delivering value-rich custom software development
          experiences for our clients. With our unrelenting focus on streamlined
          workflows and efficient processes, clients get their software programs
          and apps built fast and with precision. From a design point of view,
          we visualize UIs based on clients’ brand esthetics and app features
          rooted in industry best practices. Thanks to our inspired developers,
          clients get efficiently built digital assets that help them achieve
          their performance, productivity, sales, and other business goals.
        </p>
      </div>
      <div
        className="flex svgReveal md:items-start lg:items-start large-device-reveal sm:justify-center"
        ref={revealButtonRef}
      >

        <Link href={"/about"}>
          <motion.div
            whileHover={{ scale: [null, 1, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            <button
              data-aos="zoom-out"
              className="relative z-50   mx-auto rounded-[40px] bg-[#CDAC00] hover:bg-[transparent] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:border-[#CDAC00] text-black border-[#CDAC00] border-[2px] hover:text-white flex flex-row justify-center text-center px-[4px] py-[14px] w-[220px]  focus:outline-none focus:shadow-outline"
            >
              Reveal more{" "}
              <BsArrowUpRightCircle className="ml-[8px] my-[2px] h-5 w-5" />
            </button>
          </motion.div>
        </Link>
      </div>  
    </div>
  );
};

export default AboutUs;
