// pages/about.js
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import aboutBg from "../../public/assets/images/about/about-banner.jpg";
import Transform from "@/components/About/Transform";
import WhoWeAre from "@/components/About/WhoWeAre";
import WhyWeExist from "@/components/About/WhyWeExist";
import Team from "@/components/About/Team";
import Founders from "@/components/About/Founders";
import CustomerFocus from "@/components/About/CustomerFocus";
import Accordian from "@/components/About/Accordian";
import ConnectUs from "@/components/About/ConnectUs";
import ScrollToTop from "@/components/scroll-to-top";
const About = () => {
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
          className="h-screen bg-cover mt-[90px] bg-center w-[95%] mx-auto rounded-b-3xl "
          style={{ backgroundImage: `url(${aboutBg.src})`, height: "550px" }}
        >
          <div className="flex  items-center justify-center flex-col w-[60%] sm:w-[100%] text-center mx-auto h-[553px]  py-16 sm:px-4">
            <h4 className="text-[56px] sm:text-[32px] md:text-[45px]">About Us</h4>
            <p className="w-[95%] mx-auto my-8 text-[22px] sm:text-[16px] sm:w-[85%] md:text-[18px] md:w-[90%]">
              Bringing together a team of passionate creatives and developers
              with a combined experience of decades to deliver digital assets
              and software solutions our clients need.
            </p>
          </div>
          {/* <div className="absolute bottom-0 text-black h-[81px] tracking-[7px] font-[600] px-4 py-4 rounded-t-2xl bg-white right-0 w-[90%]">
            Scroll Down
          </div> */}
        </div>
      </div>
      <div className="w-[75%] mx-auto md:w-[90%]">
        <Transform />
        <WhoWeAre />
        <WhyWeExist />
      </div>
      <Team />
      <Founders />
      <CustomerFocus />
      <Accordian />
      <ConnectUs />

      <Footer textColor={"!text-black"} gradient={"text-[#353535]"} />
      <ScrollToTop />
    </>
  );
};

export default About;
