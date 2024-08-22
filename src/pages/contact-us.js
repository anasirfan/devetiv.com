import Navbar from '@/components/Navbar'
import React from 'react'
import contactusBg from "../../public/assets/images/contactus-banner.jpg";
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/scroll-to-top';

const ContactUs = () => {
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
            backgroundImage: `url(${contactusBg.src})`,
            height: "650px",
          }}
        >
            <div className="flex  items-center justify-center flex-col w-[60%] sm:w-[100%] text-center mx-auto h-[553px]  py-16 sm:px-4">
            <h4 className="text-[56px] sm:text-[32px] md:text-[45px]">Contact Us</h4>
            <p className="w-[95%] mx-auto my-8 text-[22px] sm:text-[16px] sm:w-[85%] md:text-[18px] md:w-[90%]">
            Feel free to send us your project inquiries. We are here to assist you!

            </p>
          </div>
          
        </div>
      </div>

      <InquiryForm />
      <Footer textColor={"!text-black"} gradient={"text-[#353535]"} />
      <ScrollToTop />
    </>
  )
}

export default ContactUs
