import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

export const CategoryLisitng = ({ ListingDetails }) => {
  return (
    <div>
    {ListingDetails.map((list, index) => (

      <div key={index} className={`flex justify-around ${list.reserve ? 'flex-row' : 'flex-row-reverse'} items-center p-20 sm:flex-col sm:space-y-10 sm:p-10`}>
        <h2 className="basis-1/2 text-center"> {list.heading}</h2>
        <div className="flex flex-col sm:space-y-4 sm:py-10 sm:px-6 space-y-10 custom-md:space-y-4 custom-md:py-16 basis-1/2 rounded-3xl categorylisting px-12 py-32 bg-gradient-to-r from-[#899fa8] to-[#3A869B]">
          <h4 className="text-black">{list.cardHeading}</h4>
          <p className="text-[#1f1e1e] sm:text-sm">
            {list.cardDescription}
          </p>
          <Link data-aos="zoom-out" href={list.href}>
            <div className="flex flex-row text-[#215f7a] hover:text-[#CDAC00]">
              <p className="underline sm:text-sm ">Learn More </p>
              <span>
                <MdOutlineArrowOutward className="h-4 w-4 mt-[3px] mx-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    ))}
    </div>
  );
};
