import React, { useState } from "react";
import sidebar from "../../../public/assets/images/blog-sidebar.png";
import sideimage from "../../../public/assets/images/sideimage.png";
import Image from "next/image";
import { ImLinkedin } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const inArticle = [
    {
      paragraph: "Exploring Generative AI in Content Creation",
    },
    {
      paragraph: "Steering Clear of Common AI Writing Pitfalls",
    },
    {
      paragraph: "Understanding ChatGPT Capabilities - Define Your Style",
    },
    {
      paragraph: "Understand Your Readers",
    },
    {
      paragraph: "Creating Quality AI-powered Blogs that Stand Out",
    },
    {
      paragraph: "Conclusion: Embracing AI in Blog Creation",
    },
    {
      paragraph: "Afterword: The AI Behind This Article",
    },
  ];
  return (
    <div className="w-[35%] sm:w-[100%]">
      <div className="flex flex-col space-y-4 h-[650px]">
        <div
          className="h-screen flex bg-cover bg-center mx-3 rounded-3xl "
          style={{ backgroundImage: `url(${sidebar.src})` }}
        >
          <div className="flex flex-col space-y-4 w-[85%]  mx-auto justify-center">
            <div className="flex space-x-6 items-end">
              <Image src={sideimage} alt="side" />
              <ImLinkedin className="text-[#0077B5] bg-white rounded-xl border-white border-[1px] h-10 w-10 mb-2" />
            </div>
            <div className="flex flex-col space-y-1">
              <h4 className="lg:text-lg font-semibold tracking-wide  custom-md:text-[20px]">Tamás Hám-Szabó</h4>
              <p className="text-md leading-5 lg:text-[15px] custom-md:text-[15px]">
                Founder of SAAS First - the Best AI and Data-Driven Customer
                Engagement Tool
              </p>
              <hr className="my-2 opacity-25"></hr>
            </div>
            <div className="text-sm custom-md:text-[13px]">
              With 11 years in SaaS, I ve built MillionVerifier and SAAS First.
              Passionate about SaaS, data, and AI. Lets connect if you share the
              same drive for success!
            </div>
          </div>
        </div>
        <div
          className=" flex bg-cover bg-center mx-3  rounded-3xl "
          style={{ backgroundImage: `url(${sidebar.src})` }}
        >
          <div className="flex flex-col space-y-2 w-[85%] py-8  mx-auto">
            <h4 className="text-lg custom-md:text-[15px]"> Share with your community!</h4>
            <div className="flex space-x-5 items-center">
              <FaFacebookSquare className="bg-[#04445F] text-white  rounded-lg h-10 w-10 mb-2" />
              <FaSquareXTwitter className="bg-[#04445F] text-white  rounded-lg h-10 w-10 mb-2" />
              <ImLinkedin className="bg-[#04445F] text-white  rounded-lg h-9 w-10 mb-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-12 mx-2 sm:mx-4">
        <h4 className="text-xl font-semibold text-black">In this article</h4>
        <div className="flex flex-col space-y-4 my-4">
          {inArticle.map((article, i) => (
            <div
              key={i}
              className="flex space-x-4 items-center w-[90%] cursor-pointer"
              onClick={() => handleSelect(i)}
            >
              <div
                className={`w-[1%] mx-auto h-[60px] sm:h-[40px] ${
                  selectedIndex === i ? "bg-[#04445F]" : "bg-transparent"
                } basis-1/9`}
              ></div>
              <p
                className={`text-lg sm:text-sm text-black basis-5/6 ${
                  selectedIndex === i ? "font-bold" : "font-normal"
                }`}
              >
                {article.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
