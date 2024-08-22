import ConnectUs from "@/components/About/ConnectUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import careerBg from "../../public/assets/images/careers/careersbg.png";
import Jobs from "@/components/careers/Jobs";
import ScrollToTop from "@/components/scroll-to-top";

const Careers = () => {
  return (
    <>
      <div  className="bg-cover bg-center bg-customWhite h-[600px] rounded-b-3xl">
         <Navbar
          bgColor={"bg-[#F0F2F4]"}
          urlColors={"text-black"}
          getStartedClr={"text-[#CDAC00]"}
        />
        <div
        data-aos='fade-down'
          className="h-screen bg-cover mt-[90px] bg-center w-[95%] mx-auto rounded-b-3xl "
          style={{ backgroundImage: `url(${careerBg.src})`, height: "550px" }}
        >
          <div className="flex  items-center justify-center flex-col w-[60%] sm:w-[100%] text-center mx-auto h-[553px]  py-16 sm:px-4">
            <h4 className="text-[56px] sm:text-[32px] md:text-[45px]">
              Careers
            </h4>
            <p className="w-[95%] mx-auto my-8 text-[22px] sm:text-[16px] sm:w-[85%] md:text-[18px] md:w-[90%]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
          {/* <div className="absolute bottom-0 text-black h-[81px] tracking-[7px] font-[600] px-4 py-4 rounded-t-2xl bg-white right-0 w-[90%]">
          Scroll Down
        </div> */}
        </div>
      </div>
        <Jobs />
      <ConnectUs />

      <Footer textColor={"!text-black"} gradient={"text-[#353535]"} />
      <ScrollToTop />
    </>
  );
};

export default Careers;
