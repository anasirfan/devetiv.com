import React from "react";
import processbg from "../../../public/assets/images/categories/software-development/processBg.png";
import processBgmb from "../../../public/assets/images/categories/software-development/processBgmb.png";


const Process = ({ process, processDesc }) => {
  return (
    <div className="my-20 sm:mt-20">
      <div className="my-8 sm:my-0">
        <h4
          data-aos="slde-right"
          className="text-black text-5xl font-semibold text-center py-4  sm:text-[32px] sm:leading-[36px]"
        >
          Our Process
        </h4>
        <p
          data-aos="zoom-in"
          className="text-center text-sm mx-auto w-[40%] text-[#4B4B4B] pb-8 sm:text-[12px] sm:leading-[18px] sm:w-[80%]"
        >
          {processDesc}
        </p>
      </div>
      <div
        className="sm:hidden bg-cover bg-center flex  w-[100%] process-300:h-[100px] h-[400px] process-700:bg-contain process-400:bg-cover process-400:h-[120px] process-1400:h-[380px] process-1230:h-[360px] process-1180:h-[340px] process-1070:bg-contain process-1070:h-[350px] process-980:h-[320px] process-880:bg-cover process-880:h-[250px] process-800:h-[220px] "
        style={{ backgroundImage: `url(${processbg.src})` }}
      >
        <div
          data-aos="fade-up"
          className=" flex space-x-4 process-300:-space-x-2 process-400:mx-8 process-400:space-x-0 process-800:mx-5 w-[95%] mx-auto process-1180:space-x-8 process-880:space-x-2 "
        >
          {process.map((each) => (
            <div
              key={each.id}
              className={`${each.class} basis-1/6 text-center`}
            >
              <h4 className="text-black text-[20px] font-semibold process-1400:text-[19px] process-1400:leading-[22px] process-1180:text-[16px] process-980:text-[15px] process-980:leading-[15px] process-880:text-[13px] process-400:text-[10px] process-400:leading-[11px]">
                {each.title}
              </h4>
              <p className="text-[#4B4B4B] w-[90%] process-400:w-[150%]  process-400:text-left mx-auto text-[14px] process-1400:text-[13px] process-1400:w-[95%] process-1400:pt-2 process-1180:text-[12px]  process-980:text-[12px] process-980:leading-[12px]  process-980:[100%] process-880:leading-[13px] process-400:text-[8px] process-400:leading-[9px]">
                {each.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="md:hidden bg-contain bg-no-repeat bg-center flex w-full mx-auto h-[800px] pt-6 "
        style={{ backgroundImage: `url(${processBgmb.src})` }}
      >
        <div
          data-aos="fade-up"
          className=" flex flex-col -space-y-1  mx-auto justify-center items-center px-4"
        >
          {process.map((each,index) => (
            <div
              key={each.id}
              className={`basis-1/6 w-[50%]  ${index % 2 === 0 ? 'mr-auto text-left' : 'ml-auto text-right'} `}
            >
              <h4 className="text-black text-[16px] font-semibold  mx-auto w-[80%] tracking-tight leading-[17px]">
                {each.title}
              </h4>
              <p className="text-[#4B4B4B] mx-auto w-[80%] text-[12px] tracking-tight leading-[14px]">
                {each.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
