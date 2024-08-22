import Image from "next/image";
import React from "react";

const Portfolio = ({ portfolio }) => {
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 data-aos='slide-right' className="text-3xl tracking-wide sm:text-2xl text-center font-bold mb-8 text-black">
        Our Education Industry Portfolio
      </h2>
      <div data-aos='fade-up' className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-0 justify-items-center content-center w-[70%] mx-auto">
        {portfolio.map((each, i) => (
          <div key={i} 
          className={`flex flex-col justify-between space-y-6 h-[500px] sm:my-6  my-12 ${i === 2 ? ' md:mt-12 sm:mt-0' : ''}`}
          >
            
            <Image src={each.img} alt={each.heading} className="basis-3/4" height={450} />
            <div className="flex flex-col justify-end space-y-2">
            <h4 className="text-black text-xl font-semibold">{each.heading}</h4>
            <p className="text-[#6C6C6C] text-sm w80%]">{each.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
