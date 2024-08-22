import React from "react";
import Testimonials from "./Testimonials";

const CustomerFocus = () => {
  return (
    <div data-aos="fade-up" className="my-12 rounded-3xl bg-[#04445F] flex items-center py-20">
      <div className="w-[90%] mx-auto ">
        <h3 className="text-[40px] font-semibold tracking-wide py-4 sm:text-[25px] md:text-[32px]">
          Our Focus on Customers
        </h3>
        <p className="w-[60%] sm:w-[95%] ">
          CX is the driving force behind everything we do at Devetiv. To
          understand and deliver what you need, what you want, what you yearn
          for - that’s what we wake up for every morning.{" "}
        </p>
        <Testimonials />
      </div>
    </div>
  );
};

export default CustomerFocus;
