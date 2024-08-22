import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/scroll-to-top";
import React from "react";
import educationBg from "../../../public/assets/images/categories/target-industries/healthcare-banner.png";

import { MainHeading, MainDesc, EducationSectorHeading, EducationSectorParagraph, portfolio } from "@/data/target-industries/healthcare";
import CustomerFocus from "@/components/About/CustomerFocus";
import EducationSector from "@/components/targetIndustries/EducationSector";
import Portfolio from "@/components/targetIndustries/Portfolio";
import InquiryForm from "@/components/InquiryForm";
const healthcare = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-customWhite h-[700px] rounded-b-3xl">
         <Navbar
          bgColor={"bg-[#F0F2F4]"}
          urlColors={"text-black"}
          getStartedClr={"text-[#CDAC00]"}
        />
        <div 
          data-aos="fade-down"
          className="h-screen bg-cover bg-center flex items-center w-[100%] mx-auto rounded-b-3xl "
          style={{
            backgroundImage: `url(${educationBg.src})`,
            height: "650px",
          }}
        >
          <div className="flex   h-screen  mt-[90px] justify-center flex-col w-[90%] sm:w-[100%]  mx-auto   py-6 sm:px-4">
            <h4 className="w-[60%] text-[45px] sm:text-[28px] md:text-[36px]">
              {MainHeading}
            </h4>
            <p className=" w-[30%] my-4 text-[18px] sm:text-[12px] sm:w-[50%] custom-md:w-[50%] md:text-[16px] ">
              {MainDesc}
            </p>
          </div>
        </div>
      </div>
      <EducationSector EducationSectorHeading={EducationSectorHeading} EducationSectorParagraph={EducationSectorParagraph} />
      <Portfolio portfolio={portfolio} />
      <CustomerFocus />
      <InquiryForm industry = {'Healthcare'} disableIndustry ={true} />

      <Footer textColor={"!text-black"} gradient={"text-[#353535]"} />
      <ScrollToTop />
    </>
  );
};

export default healthcare;
