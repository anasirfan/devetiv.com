import Image from "next/image";
import React from "react";
import whoweare from "../../../public/assets/images/about/whoweare.jpg";

const WhoWeAre = () => {
  return (
    <div className="flex space-x-8  justify-center py-12 sm:py-4 sm:space-x-0 sm:flex-col-reverse">
      <div data-aos="fade-left" className="basis-1/2 flex flex-col justify-center align-middle sm:w-[90%] sm:mx-auto">
        <h4 className="text-black text-[55px] leading-[84px] pb-6 font-normal sm:text-[25px] sm:leading-[36px] md:text-[45px]">
          Who we are
        </h4>
        <p className="text-[#686868] text-[20px] w-[90%] sm:w-[100%] sm:text-[16px] md:text-[18px] md:w-[95%]">
          We are a gang of highly experienced professionals skilled in software
          development and related domains. From front-end development of
          automated ERPs to back-end wireframing of sophisticated purpose- built
          utilities, you can count on us to deliver the features, esthetics, and
          functionality you want. In addition, the websites, mobile apps, BI
          reports, QA processes, and brands we build are driven with industry
          best practices to ensure you get the most value for your money.
        </p>
      </div>
      <div data-aos="fade-right" className="basis-1/2 flex justify-center px-6 py-12 items-center">
        <div className="bg-[url('/assets/images/about/whowearecover.png')] bg-cover  pt-16 pl-10 sm:pl-0 sm:pt-0 sm:bg-none sm:mx-auto md:pt-12 md:pl-6" >
          <Image
            src={whoweare}
            alt="transform-Image"
            className="h-[400px] w-[690px] rounded-l-3xl -mb-2 sm:rounded-3xl sm:h-[250px] sm:w-[100%] md:h-[300px] md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
