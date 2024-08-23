import React from "react";
import SectionImage from "../../public/assets/images/about/whoweare.jpg";
import Image from "next/image";
const CategorySection = ({ categoryDetails }) => {
  return (
    <div className="flex justify-around w-[90%] mx-auto items-center space-x-20 sm:flex-col my-10 custom-md:space-x-0 lg:space-x-10 sm:space-x-0 sm:justify-center">
      <div className=" basis-1/2 p-20 custom-md:p-4">
        <Image src={SectionImage} alt="section Image" className="rounded-full animate-pulse " />
      </div>
      <div className="basis-1/2 space-y-8 custom-md:space-y-4 custom-md:basis-1/3 custom-md:py-12">
        <h2>{categoryDetails.heading}</h2>
        <p className="w-[80%] text-lg sm:text-sm custom-md:text-sm custom-md:w-[100%] sm:w-[95%]" dangerouslySetInnerHTML={{ __html: categoryDetails.paragraph }}></p>
      </div>
    </div>
  );
};

export default CategorySection;
