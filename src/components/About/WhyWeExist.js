import React from "react";
import visionImg from "../../../public/assets/images/about/whyweexist/vision.png";
import missionImg from "../../../public/assets/images/about/whyweexist/mission.png";
import valuesImg from "../../../public/assets/images/about/whyweexist/values.png";
import Image from "next/image";
const WhyWeExist = () => {
  const containsHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);
  const data = [
    {
      id: 1,
      img: visionImg,
      heading: "Vision",
      description:
        "To become a reliable provider of technological solutions and services for clients in various niches in many international markets",
    },
    {
      id: 2,
      img: missionImg,
      heading: "Mission",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
    },
    {
      id: 3,
      img: valuesImg,
      heading: "Values",
      description:
        "<ul><li> Deliver wow.</li><li> Put people first.</li><li> Be transparent.</li><li> Practice accountability.</li><li> Do the right thing.</li></ul>",
    },
  ];

  return (
    <div className="mb-20 sm:py-8">
      <h4 data-aos="fade-up" className="text-black text-[45px] leading-[84px] pb-6 font-semibold text-center  sm:text-[25px] sm:leading-[36px] md:text-[45px] md:leading-[50px]">
        Why we exist
      </h4>

      <div className="flex space-x-12 w-[100%] mx-auto sm:flex-col sm:space-x-0 sm:space-y-8 md:space-x-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="px-8 py-12 flex flex-col justify-center items-center text-center space-y-8 basis-1/3 bg-[#F0F2F4] shadow-lg rounded-xl md:px-4 md:py-8"
          >
            <Image
              src={item.img}
              data-aos="zoom-out"
              alt="vision"
              height={80}
              width={80}
              className="md:h-[70px] md:w-[70px]"
            />
            <h4 data-aos="fade-right" className="text-[34px] font-semibold text-black sm:text-[22px] md:text-[28px]">
              {item.heading}
            </h4>

            {containsHTML(item.description) ? (
              <div
              data-aos="zoom-in"
                className="text-[#686868] text-[20px] text-left sm:text-[16px] md:text-[18px] "
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            ) : (
              <p 
              data-aos="zoom-in"
              className="text-[#686868] ">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWeExist;
