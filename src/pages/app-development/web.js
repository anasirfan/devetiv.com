import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/scroll-to-top";
import React from "react";
import webBanner from "../../../public/assets/images/categories/app-development/web.png";
import ChooseUs from "@/components/softwareDev/ChooseUs";
import Process from "@/components/softwareDev/Process";
import Build from "@/components/softwareDev/Build";
import buildbanner from "../../../public/assets/images/categories/software-development/buildbanner.png";


import {
    webHeading,
    webDescription,
  webWorking,
  chooseUs,
  choosUsDesc,
  process,
  buildHeading,
  buildDesc,
  processDesc,
  MainHeading,
  MainDesc
} from "@/data/app-development/web";
import CustomDev from "@/components/softwareDev/CustomDev";
import WebApp from "@/components/AppDev/WebApp";
import InquiryForm from "@/components/InquiryForm";
const Web = () => {
  return (
    <>
      <div  className="bg-cover bg-center bg-customWhite h-[600px] rounded-b-3xl">
         <Navbar
          bgColor={"bg-[#F0F2F4]"}
          urlColors={"text-black"}
          getStartedClr={"text-[#CDAC00]"}
        />
        <div
        data-aos="fade-down"
          className="h-screen bg-cover  mt-[90px] bg-center flex items-start w-[95%] mx-auto rounded-b-3xl "
          style={{ backgroundImage: `url(${webBanner.src})`, height: "550px" }}
        >
          <div className="flex   h-screen justify-start items-center text-center flex-col w-[90%] sm:w-[100%]  mx-auto   my-16 sm:px-4 ">
            <h4 className="w-[60%] text-[45px] sm:text-[28px] md:text-[36px]">
              {MainHeading}
            </h4>
            <p className=" w-[60%] my-4 text-[18px] sm:text-[14px] sm:w-[85%] md:text-[16px] opacity-85   ">
             {MainDesc}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[75%] mx-auto md:w-[90%]">
      <WebApp webHeading={webHeading} webDescription={webDescription} webWorking={webWorking} />
      </div>
      <ChooseUs chooseUs={chooseUs} choosUsDesc={choosUsDesc} />
      <Process process={process} processDesc={processDesc} />
      <Build
        buildHeading={buildHeading}
        buildDesc={buildDesc}
        buildbanner={buildbanner}
      />
     <InquiryForm  parentCategory= {'App Development'} childcategory ={'Web App'} disableCatgory ={true} /> 

      <Footer textColor={"!text-black"} gradient={"text-[#353535]"} />
      <ScrollToTop />
    </>
  );
};

export default Web;
