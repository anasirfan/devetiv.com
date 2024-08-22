import React, { useState } from "react";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div data-aos="fade-down" className="my-20 ">
      <div className="w-[60%] mx-auto my-6 sm:w-[85%]">
        <p className="!text-black text-[22px] font-semibold sm:text-[20px]">Faq</p>
        <h4 className="!text-black text-[55px] leading-[65px] w-[70%] sm:text-[25px] sm:leading-[32px] sm:w-[100%] md:text-[42px] md:leading-[45px]">Everything you need to know about!</h4>
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
                  <span className="!text-black text-[35px] font-semibold basis-1/5 sm:text-[25px] md:text-[30px]">
                    {item.id}
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
              <p className="mb-2 text-[#686868] w-[60%] mx-auto dark:text-gray-400 sm:w-[90%] md:w-[70%]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const accordionItems = [
  {
    id: "01",
    title: "It is a long established fact that a reader?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: "02",

    title:
      "It is a long established fact that a reader will be distracted by the readable content?",
    content:
      "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
  },
  {
    id: "03",
    title: "It is a long established fact that a reader?",
    content:
      "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies: Flowbite Pro and Tailwind UI.",
  },
  {
    id: "04",
    title: "It is a long established fact that a reader Epis eluite?",
    content:
      "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies: Flowbite Pro and Tailwind UI.",
  },
];

export default Accordian;
