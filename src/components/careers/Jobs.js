import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Jobs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div data-aos="fade-up"  className="my-20 ">
      <div className="w-[85%] mx-auto my-6 flex">
        <h4 className="!text-black text-[55px] leading-[65px] w-[70%] sm:text-[25px] sm:leading-[32px] sm:w-[100%] md:text-[42px] md:leading-[45px] flex items-center">
          Jobs
        </h4>

        <form className="max-w-md mx-auto ">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search ..."
              required
            />
            
          </div>
        </form>
      </div>
      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
        className="w-[95%] mx-auto"
      >
        {accordionItems.map((item, index) => (
          <div key={index}>
            <h4 id={`accordion-flush-heading-${index}`}>
              <button
                type="button"
                className="flex  justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`accordion-flush-body-${index}`}
              >
                <div className="flex justify-between  w-[100%] mx-auto">
                  <span className="!text-[#C2C3C3] text-[18px] font-normal basis-1/5 sm:text-[12px] md:text-[14px]">
                    {item.role}
                  </span>
                  <span className="!text-black text-[25px] font-semibold basis-4/5 sm:text-[18px] md:text-[20px] md:text-left flex justify-start sm:text-left">
                    {item.title}
                  </span>
                </div>
                {activeIndex === index ? (
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0.5H0L12 12.5V0.5Z" fill="black" />
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 12H0L12 0V12Z" fill="black" />
                  </svg>
                )}
              </button>
            </h4>
            <div
              id={`accordion-flush-body-${index}`}
              className={`${
                activeIndex === index ? "block" : "hidden"
              } py-5 border-b border-gray-200 dark:border-gray-700`}
              aria-labelledby={`accordion-flush-heading-${index}`}
            >
              <div className="flex justify-between w-[90%] mx-auto sm:flex-col md:flex-col xl:flex-row 2xl:flex-row sm:justify-center sm:items-center sm:text-center sm:space-y-4  md:items-center md:text-center md:space-y-6 lg:items-center lg:text-center lg:space-y-8  ">
                <p className="mb-2 text-[#686868]">{item.salary} </p>
                <p className="mb-2 text-[#686868] px-12 mx-auto dark:text-gray-400 w-[60%] sm:w-[90%] sm:px-2 md:px-4 md:w-[70%]">
                  {item.content}
                </p>
          <Link href={'/contact-us'}>

                <button
                  className={`rounded-[40px]  hover:bg-[#CDAC00] hover:border-[#CDAC00] font-normal hover:text-black border-[#CDAC00] border-[2px] text-black flex flex-row h-14  justify-center text-center px-[24px] py-[14px] sm:px-[10px] sm:py[6px] focus:outline-none focus:shadow-outline`}
                >
                  Get Started{" "}
                  <BsArrowUpRightCircle className="ml-[8px] my-[2px] h-5 w-5" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const accordionItems = [
  {
    id: "1",
    role: "full time, USA",
    title: "AI Research Scientist",
    salary: "$44-55.000 year",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: "2",
    role: "full time, USA",
    title: "AI Research Scientist",
    salary: "$44-55.000 year",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: "3",
    role: "full time, USA",
    title: "AI Research Scientist",
    salary: "$44-55.000 year",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: "4",
    role: "full time, USA",
    title: "AI Research Scientist",
    salary: "$44-55.000 year",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.",
  },
];

export default Jobs;
