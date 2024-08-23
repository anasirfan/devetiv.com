import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";

const Footer = ({ textColor, gradient }) => {

  const FooterLinks = [
    {
      heading: 'Software Development',
      subcategory: [
        { name: 'CRM', href: '/software-development/crm' },
        { name: 'ERP', href: '/software-development/erp' },
        { name: 'Custom Software', href: '/software-development/custom-software' },
        // { name: 'Project Rescue', href: '#' },
        { name: 'Digital Transformation', href: '/software-development/digital-transformation' },
        { name: 'Support & Management', href: '/software-development/support-and-management' },
      ],
    },
    {
      heading: 'App Development',
      subcategory: [
        { name: 'Web', href: '/app-development/web' },
        { name: 'Mobile', href: '/app-development/mobile-app' },
        { name: 'Cloud', href: '/app-development/cloud-app-development' },
        // { name: 'e-Commerce', href: '#' },
        // { name: 'App Management', href: '#' },
      ],
    },
    // {
    //   heading: 'Website, BI, & more',
    //   subcategory: [
    //     { name: 'Website', href: '#' },
    //     { name: 'Business Intelligence', href: '#' },
    //     { name: 'Data Analytics', href: '#' },
    //     { name: 'DevOps', href: '#' },
    //     { name: 'QA & Testing', href: '#' },
    //     { name: 'UI/UX Design', href: '#' },
    //     { name: 'Brand Design', href: '#' },
    //   ],
    // },
    {
      heading: 'Our Target Industries',
      subcategory: [
        { name: 'Education', href: '/target-industries/education' },
        { name: 'Fintech', href: '/target-industries/fintech' },
        { name: 'Healthcare', href: '/target-industries/healthcare' },
        { name: 'Hospitality', href: '/target-industries/hospitality' },
        { name: 'Manufacturing', href: '/target-industries/manufacturing' },
        { name: 'Retail', href: '/target-industries/retail' },
        { name: 'SaaS', href: '/target-industries/saas' },
      ],
    },
    {
      heading: 'About the Company',
      subcategory: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'Career', href: '/careers' },
        { name: 'Blog & News', href: '/blogs' },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-16 justify-center mx-auto  w-[95%] my-6 ">
        <div data-aos="fade-in-right" className="flex flex-col items-center">
          <Image
            src={logo}
            alt="logo"
            height={100}
            className="sm:w-auto sm:h-[100px] sm:mx-auto sm:pb-4"
          />
          <p className={`w-[80%]  ${gradient} text-center`}>
            {" "}
            Companies that can help you in developing your company for the
            future!
          </p>
        </div>
        <div className="w-[95%] mx-auto px-4 sm:w-[100%] sm:px-1">
          <div className="grid grid-cols-4 sm:grid-cols-2 custom-md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FooterLinks.map((section, index) => (
              <div key={index}>
                <p className={`text-lg font-semibold mb-4 ${textColor} `}>{section.heading}</p>
                <ul>
                  {section.subcategory.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className={`py-2 link-underline ${textColor} opacity-65`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div
        // data-aos="fade-in"
        className={`flex overflow-hidden justify-between w-[75%] sm:flex-wrap sm:space-x-5 sm:items-center sm:text-center sm:justify-center sm:w-[100%] sm:space-y-8 sm:px-6 mx-auto py-7 ${textColor}`}
      >
        <div>
          <p className={`${textColor}`}>© 2024 Devetiv. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <Link className={`link-underline ${textColor}`} href={"#"}>
            Privacy Policy
          </Link>
          <Link className={`link-underline ${textColor}`} href={"#"}>
            Terms of Service
          </Link>
          <Link className={`link-underline ${textColor}`} href={"#"}>
            Cookie Policy
          </Link>
        </div>
        <div className="flex space-x-6 md:px-4">
          <FaInstagram className={`${textColor} h-7 w-7`} />
          <FaWhatsapp className={`${textColor} h-7 w-7`} />
          <FaLinkedinIn className={`${textColor} h-7 w-7`} />
          <FaTwitter className={`${textColor} h-7 w-7`} />
        </div>
      </div>
    </>
  );
};

export default Footer;
