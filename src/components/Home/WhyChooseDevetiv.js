import Image from "next/image";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import mask from "../../../public/assets/images/home/whychoosedevetiv/Rectangle 67.png";
import expteam from "../../../public/assets/images/home/whychoosedevetiv/Mask group.png";
import innovative from "../../../public/assets/images/home/whychoosedevetiv/innovative.png";
import num1 from "../../../public/assets/images/home/whychoosedevetiv/num1.png";
import num2 from "../../../public/assets/images/home/whychoosedevetiv/num2.png";
import num3 from "../../../public/assets/images/home/whychoosedevetiv/num3.png";
import num4 from "../../../public/assets/images/home/whychoosedevetiv/num4.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

import Link from "next/link";
const WhyChooseDevetiv = () => {
  const reasons = [
    {
      id: "01",
      title: "Experienced Team",
      description1: "Combined experience spanning decades at your disposal",
      description2:
        "We bring years of expertise and a proven track record in software development.",
      img1: num1,
      img2: expteam,
      line: true,
    },
    {
      id: "02",
      title: "Innovative Solutions",
      description1:
        "Innovation-oriented philosophy helping you build eﬀective digital assets",
      description2:
        "We are committed to delivering cutting-edge solutions that leverage the latest technologies and industry best practices.",
      img1: num2,
      img2: innovative,
      line: true,

    },
    {
      id: "03",
      title: "Client-Centric Approach",
      description1: "Expect royal treatment every day",
      description2:
        "Our priority is understanding your unique needs and delivering tailored solutions.",
      img1: num3,
      img2: expteam,
      line: false,

    },
    {
      id: "04",
      title: "Reliability & Support",
      description1: "Experts you can rely on through your projects and beyond",
      description2:
        "We provide reliable support before, during, and after project delivery.",
      img1: num4,
      img2: innovative,
      line: false,

    },
  ];
  return (
    <div className="chooserespo xl:py-20 2xl:py-24 sm:py-12">
      <div className="mx-auto w-[84%] mt-12  h-[450px] py-28 flex flex-row sm:flex-col sm:items-center sm:text-center padding-1024 xl:w-[90%]">
        <div>
          <h2 data-aos="fade-in-left">Why choose Devetiv</h2>
          <p data-aos="zoom-in-up" className="my-6 w-[64%] sm:w-[90%] sm:mx-auto">
            At Devetiv, we are all about you and your needs. Our decisions
            revolve around what you expect from us. In addition, expert UX
            designers and interface developers - equally skilled in logic and
            esthetics - undertake your projects.
          </p>
        </div>
        
        <div className="flex items-end 2xl:justify-end justify-end custom-md:items-center custom-md:w-[140%] lg:w-[100%] get-btn-1280 xl:items-end xl:justify-end xl:w-[50%] xl:h-[120%] 2xl:w-[40%]">
        <motion.div
          whileHover={{ scale: [null, 1, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <Link href={'/contact-us'}>
          
       <button data-aos="zoom-out" className="relative  mx-auto rounded-[40px] bg-[#CDAC00] hover:bg-[transparent] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:border-[#CDAC00] text-black border-[#CDAC00] border-[2px] hover:text-white flex flex-row h-14 justify-center text-center px-[4px] py-[14px] w-[220px]  focus:outline-none focus:shadow-outline">
            Get started{" "}
            <BsArrowUpRightCircle className="ml-[8px] my-[2px] h-5 w-5" />
          </button>
          </Link>
        </motion.div>
          
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-[80%] mx-auto">
        {reasons.map((reason) => (
          <div key={reason.id} className="flex flex-col">
            <div className="xl:flex custom-md:flex-col custom-sm:flex-col custom-sm:justify-between custom-md:justify-between custom-inset-shadow 2xl:flex sm:flex lg:flex custom-md:flex bg-custom-gradient rounded-3xl xl:h-[250px] 2xl:h-[250px] lg:h-[200px]  custom-sm:h-[350px] custom-md:h-[350px] ">
              <div className="flex   xl:flex-col 2xl:flex-col 2xl:px-4 lg:flex-col lg:px-4 lg:py-8 xl:px-4 xl:py-8 2xl:py-8 2xl:space-y-4 xl:space-y-4   sm:flex-col sm:px-4 sm:py-8 sm:space-y-4 custom-md:flex-col custom-md:px-4 custom-md:py-8   custom-md:space-y-2 custom-sm:space-y-2">
                
                  <Image data-aos="slide-right"
                    src={reason.img1}
                    alt={reason.title}
               
                    className=""
                  />
                  <span data-aos="slide-right" className="xl:text-[22px] 2xl:text-[22px] text-black lg:text-[20px] custom-md:text-[18px] custom-sm:text-[18px]">{reason.title}</span>
               
                <p data-aos="zoom-in-up" className="text-gray-600 xl:mb-4 2xl:mb-4 xl:text-[14px] w-[80%] lg:text-[12px] lg:w-[90%] custom-md:w-[90%] custom-md:text-[12px] custom-sm:w-[95%] custom-sm:text-[11px]">{reason.description1}</p>
              </div>

              <Image
              data-aos="zoom-in"
                src={reason.img2}
                alt={reason.title}
           
                className="self-end ml-auto  custom-md:self-end rounded-br-3xl"
              />
            </div>
            <div className="py-6 h-[150px]  custom-md:mb-12">
              <h3 data-aos="slide-up" className="py-2 custom-md:w-[90%]">{reason.title}</h3>
              <p data-aos="slide-up" className="opacity-75 custom-md:w-[90%]">{reason.description2}</p>
            </div>
         {reason.line && (
          <hr className="solid mt-5 sm:hidden custom-md:w-[80%] custom-md:mt-[14px] xl:mt-[2px]"></hr>
         )}   
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default WhyChooseDevetiv;
