import React, { useEffect, useRef, useState } from "react";

import { BsArrowUpRightCircle } from "react-icons/bs";
import worldIcon from "../../../public/assets/images/home/service_tab/softwaredevIcon.png";
import appIcon from "../../../public/assets/images/home/service_tab/appDevIcon.png";
import BiIcon from "../../../public/assets/images/home/service_tab/BiIcon.png";
import IndustriesIcon from "../../../public/assets/images/home/service_tab/IndustriesIcon.png";
import softdevImage from "../../../public/assets/images/home/service_tab/softdevImg.png";
import appDevImage from "../../../public/assets/images/home/service_tab/appDevImage.png";
import BiImage from "../../../public/assets/images/home/service_tab/BiImage.png";
import IndustriesImage from "../../../public/assets/images/home/service_tab/IndustriesImage.png";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import anime from "animejs";
const  Services = () => {

 

 
  const services = [
    {
      id: 1,
      title: "Sofware Development",
      desc: "Satisfy all your software development needs with our expert teams’ help.",
      icon: worldIcon,
      img: softdevImage,
      href: '/software-development',
      linkDesc: "Learn more about our custom software development services",
      className: "bg-[#04445F] col-span-4 sm:col-span-1 ",
    },
    {
      id: 2,
      title: "App Development",
      desc: "Get reliable app development for your products as well as your clients’.",
      icon: appIcon,
      img: appDevImage,
      href: '/app-development',
      linkDesc: "Learn more about our app development solutions",

      className: "basis-1/3 shadow-sm shadow-[#04445F] col-span-3 sm:col-span-1 sm:bg-[#04445F]",
    },
    {
      id: 3,
      title: "Websites, BI, & More",
      desc: "Want something else? Maybe BI support, a website, or even DevOps help?",
      icon: BiIcon,
      img: BiImage,
      href: '/contact-us',
      linkDesc: "Learn more about how to websites,bi and more",

      className: "basis-4/7 shadow-sm shadow-[#04445F]  col-span-3 sm:col-span-1 sm:bg-[#04445F] ",
    },
    {
      id: 4,
      title: "Our Target Industries",
      desc: "From healthcare and ﬁntech to education and SaaS, we are ready to help a range of industries.",
      icon: IndustriesIcon,
      img: IndustriesImage,
      href: '/target-industries',
      linkDesc: "Learn more about the industries we serve",

      
      className: "bg-[#04445F]  basis-2/3 col-span-4 sm:col-span-1",
    },
  ];
  return (
    <>
      
        <div className="mx-auto svgService w-[83.5%] -mt-4 h-[450px] py-28  sm:-mt-[140px] sm:h-auto flex flex-row sm:flex-col md:py-0 sm:my-4">
          <div className="sm:text-center">
            <h2 data-aos="slide-right">Our service domains</h2>
            <p data-aos="zoom-in-up" className="my-6 w-[64%] sm:mx-auto sm:w-[80%]">
              We happen to create and build a vast range of digital assets. With
              our team in your corner, you never have to worry about finding
              another for your design and development needs (and more). With an
              arsenal of design and development skills, we are confident we can
              help clients like you meet just about all of your design,
              development, and related needs.
            </p>
          </div>
          {/* <div className="flex items-center sm:justify-center">
            <motion.div
              whileHover={{ scale: [null, 1, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <button data-aos='zoom-out' className="relative  mx-auto rounded-[40px] bg-[#CDAC00] hover:bg-[transparent] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:border-[#CDAC00]  text-black border-[#CDAC00] border-[2px] hover:text-white flex flex-row h-14 justify-center text-center px-[4px] py-[14px] w-[220px]  focus:outline-none focus:shadow-outline">
                View All Services{" "}
                <BsArrowUpRightCircle className="ml-[8px] my-[2px] h-5 w-5" />
              </button>
            </motion.div>

          </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-7  gap-8 sm:gap-6 w-[84.5%]  mx-auto -mt-[80px] lg:-mt-[70px]"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className={`xl:flex 2xl:flex overflow-hidden ${service.className} custom-inset-shadow sm:flex lg:flex custom-md:flex  rounded-3xl 2xl:h-[350px] xl:h-[350px] lg:h-[250px] sm:h-[300px] custom-md:h-[300px] `}
            >
              <div className="flex xl:flex-col 2xl:flex-col lg:flex-col lg:px-4 lg:py-8 xl:px-8 xl:justify-center xl:py-8 xl:space-y-4  2xl:px-8 2xl:justify-center 2xl:py-8 2xl:space-y-4  sm:flex-col sm:px-4 sm:py-8 sm:space-y-4 custom-md:flex-col custom-md:px-4 custom-md:py-8   custom-md:space-y-2 custom-sm:space-y-2">
                <Image data-aps="slide-down"
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className=""
                />
                <span data-aos="fade-in-left" className="xl:text-[22px] 2xl:text-[22px] text-white lg:text-[20px] custom-md:text-[18px] custom-sm:text-[18px]">
                  {service.title}
                </span>

                <p data-aos="zoom-in-up" className="text-white xl:mb-4 xl:text-[14px] 2xl:mb-4 2xl:text-[14px] lg:text-[12px] lg:w-[90%] custom-md:w-[90%] custom-md:text-[12px] custom-sm:w-[95%] custom-sm:text-[11px]">
                  {service.desc}
                </p>
                <Link data-aos="zoom-out" href={service.href} title={service.linkDesc}>
                  <div className="flex flex-row hover:text-[#CDAC00]">
                    <p className="underline">Learn More </p>
                    <span>
                      <MdOutlineArrowOutward className="h-4 w-4 mt-[3px] mx-2" />
                    </span>
                  </div>
                </Link>
              </div>

              <Image
              data-aos="zoom-out-right"
                src={service.img}
                alt={service.title}
   
                className="self-end rounded-br-2xl ml-auto  "
              />
            </div>
          ))}
        </div>

      
    </>
  );
};

export default Services;
