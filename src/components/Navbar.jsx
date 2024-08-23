import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import logo from "../../public/assets/images/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = ({ bgColor, urlColors, getStartedClr }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      title: "Software Development",
      href: "/software-development",
      links: [
        { href: "/software-development/crm", label: "CRM" },
        { href: "/software-development/erp", label: "ERP" },
        { href: "/software-development/custom-software", label: "Custom" },
        // { href: "#", label: "Project Rescue" },
        {
          href: "/software-development/digital-transformation",
          label: "Digital Transformation",
        },
        {
          href: "/software-development/support-and-management",
          label: "Support & Management",
        },
      ],
    },
    {
      title: "App Development",
      href: "/software-development",

      links: [
        { href: "/app-development/web", label: "Web" },
        { href: "/app-development/mobile-app", label: "Mobile" },
        { href: "/app-development/cloud-app-development", label: "Cloud" },
        // { href: "#", label: "e-Commerce" },
        // { href: "#", label: "App Management" },
      ],
    },
    // {
    //   title: "Website, BI, & more",
    //   href: "/software-development",

    //   links: [
    //     { href: "#", label: "Website" },
    //     { href: "#", label: "Business Intelligence" },
    //     { href: "#", label: "Data Analytics" },
    //     { href: "#", label: "DevOps" },
    //     { href: "#", label: "QA & Testing" },
    //     { href: "#", label: "UI/UX Design" },
    //     { href: "#", label: "Brand Design" },
    //   ],
    // },
    {
      title: "Our Target Industries",
      href: "/target-industries",

      links: [
        { href: "/target-industries/education", label: "Education" },
        { href: "/target-industries/fintech", label: "Fintech" },
        { href: "/target-industries/healthcare", label: "Healthcare" },
        { href: "/target-industries/hospitality", label: "Hospitality" },
        { href: "/target-industries/manufacturing", label: "Manufacturing" },
        { href: "/target-industries/retail", label: "Retail" },
        { href: "/target-industries/saas", label: "SaaS" },
      ],
    },
    {
      title: "About the Company",
      href: "/about",

      links: [
        { href: "/about", label: "About Us" },
        { href: "/contact-us", label: "Contact Us" },
        { href: "/careers", label: "Career" },
        { href: "/blogs", label: "Blog & News" },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-white fixed h-[90px] top-0 w-[100%] z-50    py-4 px-6 ${
        isSticky ? " bg-black" : `${bgColor} `
      }`}
    >
      <div className=" mx-auto flex items-center justify-around ">
        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center  custom-md:w-auto h-[60px] w-auto basis-1/6   ">
            <Link href="/">
              <Image src={logo} alt="logo" height={80} className=" " />
            </Link>
          </div>
        </motion.div>

        <div
          className={`hidden px-8 md:flex  items-center lg:text-[14px] xl:text-[14px] lg:w-[60%] xl:w-[60%]  custom-md:text-[12px]   ${
            isSticky ? "text-white" : urlColors
          }`}
        >
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link href={item.href}>
                  <button className="hover:text-gray-300">{item.title}</button>
                </Link>
                <div className="hidden group-hover:block absolute top-full left-0 w-48 bg-white bg-custom-gradient z-50 text-black shadow-lg rounded-xl py-4">
                  <ul>
                    {item.links.map((link, subIndex) => (
                      <li
                        key={subIndex}
                        className="w-full px-4 py-2 hover:bg-[#04445F] link-underline group"
                      >
                        <Link href={link.href} className=" ">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className={`w-9 h-9 ${isMenuOpen ? "text-black" : urlColors}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed  inset-0 w-full h-full bg-custom-gradient transition-transform duration-300 ease-in-out z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="h-screen flex flex-col justify-around items-start w-[90%] text-left mx-auto space-y-0">
            <ul className="flex flex-col space-y-8 mt-24 px-4 items-start w-full">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group text-left font-semibold flex flex-col space-y-4 text-[#424242] w-full"
                >
                  <button
                    className="hover:text-[#1A83AC] text-left flex items-center justify-between w-full"
                    onClick={() => toggleDropdown(index)}
                  >
                    <p className="text-[20px]">{item.title}</p>
                    <span>
                      {openDropdown === index ? (
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
                    </span>
                  </button>
                  <hr className="border-[#C6C6C6] text-[2px] px-4 w-full" />
                  <div
                    className={`${
                      openDropdown === index ? "block" : "hidden"
                    }  flex flex-col items-start bg-[#f6f6f6] text-gray-500 rounded-md shadow-lg text-sm z-50 w-[100%] py-4 mt-1`}
                  >
                    <ul>
                      {item.links.map((link, idx) => (
                        <li key={idx} className="px-4 py-2 hover:bg-[#04445F]">
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: [null, 1, 1.1] }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Link href={"/contact-us"}>
                <button
                  className={`rounded-[40px]  custom-md:px-[40px] custom-md:py-[2px] custom-md:text-[20px] custom-md:items-center custom-md:w-[35%] bg-[#CDAC00] hover:border-[#CDAC00] font-normal hover:text-black border-[#CDAC00] border-[2px] flex flex-row h-14  justify-center text-center px-[24px] py-[14px] sm:px-[24px] sm:text-[18px]  focus:outline-none focus:shadow-outline`}
                >
                  Get Started{" "}
                  <BsArrowUpRightCircle className="ml-[8px] my-[2px] h-5 w-5 custom-md:self-center" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: [null, 1, 1.1] }}
          transition={{ duration: 0.3 }}
          className="custom-md:flex custom-md:justify-end sm:hidden"
        >
          <Link href={"/contact-us"}>
            <button
              className={`rounded-[40px] custom-md:px-[60px]  custom-md:py-[2px] custom-md:text-[14px] custom-md:items-center custom-md:w-[35%] hover:bg-[#CDAC00] hover:border-[#CDAC00] font-normal hover:text-black border-[#CDAC00] border-[2px] ${getStartedClr} flex flex-row h-14  justify-center text-center px-[24px] py-[14px] sm:px-[10px] sm:py[6px] focus:outline-none focus:shadow-outline`}
            >
              Get Started{" "}
              <BsArrowUpRightCircle className="ml-[8px] my-[2px] h-5 w-5 custom-md:self-center" />
            </button>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
