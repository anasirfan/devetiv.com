import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/scroll-to-top";
import React from "react";

import crmBg from "../../../public/assets/images/categories/software-development/banners/crm-banner.jpg";
import Working from "@/components/softwareDev/Working";
import ChooseUs from "@/components/softwareDev/ChooseUs";
import Process from "@/components/softwareDev/Process";
import Build from "@/components/softwareDev/Build";
import buildbanner from "../../../public/assets/images/categories/software-development/buildbanner.png";

import {
  working,
  heading,
  description,
  chooseUs,
  choosUsDesc,
  process,
  buildHeading,
  buildDesc,
  processDesc,
  MainHeading,
  MainDesc
} from "@/data/software-development/crm";
import InquiryForm from "@/components/InquiryForm";
const crm = () => {
  return (
    <>
      <div   className="bg-cover bg-center bg-customWhite h-[600px] rounded-b-3xl">
         <Navbar
          bgColor={"bg-[#F0F2F4]"}
          urlColors={"text-black"}
          getStartedClr={"text-[#CDAC00]"}
        />
        <div 
        data-aos="fade-down"
          className="h-screen mt-[90px]  mt-[90px] bg-cover bg-center flex items-end w-[95%] mx-auto rounded-b-3xl "
          style={{ backgroundImage: `url(${crmBg.src})`, height: "550px" }}
        >
          <div className="flex   h-screen justify-end flex-col w-[90%] sm:w-[100%]  mx-auto   py-6 sm:px-4">
            <h4 className="w-[60%] text-[45px] sm:text-[28px] md:text-[36px]">
              {MainHeading}
            </h4>
            <p className=" w-[60%] my-4 text-[18px] sm:text-[14px] sm:w-[85%] md:text-[16px] ">
             {MainDesc}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[75%] mx-auto md:w-[90%]">
        <Working
          working={working}
          heading={heading}
          description={description}
        />
      </div>
      <ChooseUs chooseUs={chooseUs} choosUsDesc={choosUsDesc} />
      <Process process={process} processDesc={processDesc} />
      <Build
        buildHeading={buildHeading}
        buildDesc={buildDesc}
        buildbanner={buildbanner}
      />
     <InquiryForm  parentCategory= {'Software Development'} childcategory ={'CRM'} disableCatgory ={true} /> 

      <Footer textColor={"!text-black"} gradient={"text-[#353535]"} />
      <ScrollToTop />
    </>
  );
};

export default crm;
