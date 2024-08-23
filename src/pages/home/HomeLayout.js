"use client";

import Footer from "@/components/Footer";
import FooterBanner from "@/components/FooterBanner";
import HeadSection from "@/components/HeadSection";
import AboutUs from "@/components/Home/AboutUs";
import Services from "@/components/Home/Services";
import WhyChooseDevetiv from "@/components/Home/WhyChooseDevetiv";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import rectangle from "../../../public/assets/images/home/black-rectangle.png";
import bgImage from "../../../public/assets/images/home/background_shades.png";
import { motion } from "framer-motion";
import yellowBackground from "../../../public/assets/images/home/lang-tags.png";
import logos from "../../../public/assets/images/home/logos.png";
import logo1 from "../../../public/assets/images/home/logo1.png";
import logo2 from "../../../public/assets/images/home/logo2.png";
import logo3 from "../../../public/assets/images/home/logo3.png";
import logo4 from "../../../public/assets/images/home/logo4.png";
import logo5 from "../../../public/assets/images/home/logo5.png";
import logo6 from "../../../public/assets/images/home/logo6.png";
import ScrollToTop from "@/components/scroll-to-top";
import Slider from "react-infinite-logo-slider";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import aboutbg from "../../../public/assets/images/home/background1.png";
import choosebg from "../../../public/assets/images/home/background2.png";

const heading =
  "Get custom software & apps that can help you achieve market leader status.";
const description =
  "With our developers’ vast abilities, transform your software and app ideas into proﬁtable assets. CRMs, ERPs, utilities, mobile apps, websites - whatever you need, we have you covered.";

const HomeLayout = () => {
  const [btnHeight, setBtnHeight] = useState(220);
  const revealButtonRef = useRef(null); // Ref for "Reveal More" button
  const serviceDivRef = useRef(null); // Ref for target div in Services

  const updateSvgStyles = () => {
    const btnRect = revealButtonRef?.current?.getBoundingClientRect();
    setBtnHeight(btnRect.height + 80);
  };
  useEffect(() => {
    updateSvgStyles();
  }, []);
  return (
    <div>
      <Head>
        <style>
          {`
            h1, h2, h5 {
              background: linear-gradient(90deg, rgba(26, 131, 172, 1) 0%, rgba(255, 255, 255, 1) 42%, rgba(255, 255, 255, 1) 59%, rgba(26, 131, 172, 1) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          `}
        </style>
      </Head>
      <div
        className="h-screen bg-cover bg-center sm:h-[600px]"
        // style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <Image
          src={bgImage}
          alt="bgImage"
          layout="fill" // Make the image cover the entire div
          objectFit="cover" // Ensure the image covers the div without stretching
          className="z-0"
        />
        <div className="relative z-20">
          <Navbar bgColor={"none"} urlColors={"text-white"} />
          <HeadSection heading={heading} description={description} />
        </div>
      </div>

      <div className="relative ">
        <div className="absolute inset-0 z-0">
          <Image
            src={aboutbg}
            alt="bgImage"
            objectFit="cover"
            layout="fill" // Ensures the image fills the entire div
            className="z-0"
          />
        </div>
        <div className="relative z-10">
          <AboutUs revealButtonRef={revealButtonRef} />
          <div className="relative py-12 md:py-0 sm:py-0 ">
            <svg
              className="sm:hidden absolute animate-pulse"
              viewBox="-50 0 1387 735"
              width="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              style={{ height: "1024px", marginTop: `-${btnHeight}px` }}
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                opacity="0.8"
                d="M57.502 732H48.502C23.0969 732 2.50195 711.405 2.50195 686V315C2.50195 289.595 23.0969 269 48.502 269H1238C1263.41 269 1284 248.405 1284 223V49C1284 23.5949 1263.41 3 1238 3H1221.5"
                stroke="#1A83AC"
                strokeWidth="5"
                filter="url(#glow)"
                strokeDashoffset="3500"
              >
                <animate
                  attributeName="strokeDashoffset"
                  from="1000"
                  to="0"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>

            <Services serviceDivRef={serviceDivRef} />
          </div>
        </div>
      </div>
      <div className=" relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={choosebg}
            alt="choosebg"
            objectFit="cover"
            layout="fill" // Ensures the image fills the entire div
            className="z-0"
          />
        </div>
        <div className="relative z-10">
          <svg
            className="px-20 -mt-[50px] sm:hidden  absolute lineadjustchoose animate-pulse"
            width="100%"
            // height="auto"
            viewBox="0 0 1287 524"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ height: "724px" }}
          >
            <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            <path
              opacity="0.8"
              d="M1232 521.5H1238C1263.41 521.5 1284 500.905 1284 475.5V355C1284 329.595 1263.41 309 1238 309H49C23.5949 309 3 288.405 3 263V108C3 82.5949 23.5949 62 49 62H894C919.405 62 940 41.4051 940 16V0"
              stroke="#1A83AC"
      
              strokeWidth="5"
              filter="url(#glow)"
              strokeDasharray="0"
              strokeDashoffset="0"
            />
            <animate
              attributeName="strokeDashoffset"
              from="1000"
              to="0"
              dur="12s"
              repeatCount="indefinite"
            />
          </svg>
          <div
            data-aos="fade-in"
            className="relative pb-[350px] sm:pb-4 md:pb-14" 
          >
            <Image
              className="w-full py-20 absolute z-10"
              src={rectangle}
              alt="bg"
            />
            {/* <div className="w-full py-20 absolute z-10">
            <Image src={yellowBackground} alt="Yellow Background" className="w-screen" />
          </div> */}
            <div
              className="absolute  none custom-sm:mt-[60px] mt-[80px] 2xl:h-[250px] xl:h-[200px]  lg:h-[180px] custom-md:h-[140px] custom-tab:h-[100px] custom-sm:h-[80px] custom-md:pt[120px] z-20 flex items-center justify-center  bg-cover "
              style={{
                width: "100%",

                backgroundImage: `url(${yellowBackground.src})`,
              }}
            >
              <div
                style={{
                  transform: "rotate(2deg)", // Apply rotation here
                  transformOrigin: "center center",
                }}
              >
                <Slider
                  duration={40}
                  pauseOnHover={true}
                  blurBorders={false}
                  blurBoderColor={"#fff"}
                  className="flex items-center justify-center  "
                >
                  <Slider.Slide
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={logo1}
                      alt="Logos"
                      className="sm:h-6 w-full  md:h-10   2xl:h-16   mx-12 2xl:mx-20"
                    />
                  </Slider.Slide>
                  <Slider.Slide
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={logo2}
                      alt="Logos"
                      className="sm:h-6 w-full  md:h-10   2xl:mx-20 2xl:h-16   mx-7 "
                    />
                  </Slider.Slide>
                  <Slider.Slide
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={logo3}
                      alt="Logos"
                      className="sm:h-6 w-full  md:h-10   2xl:mx-20 2xl:h-16   mx-7"
                    />
                  </Slider.Slide>
                  <Slider.Slide
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={logo4}
                      alt="Logos"
                      className="sm:h-6 w-full  md:h-10   2xl:mx-20 2xl:h-16   mx-7"
                    />
                  </Slider.Slide>
                  <Slider.Slide
                    style={{
                      display: "flex",

                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={logo5}
                      alt="Logos"
                      className="sm:h-6 w-full  md:h-10   2xl:mx-20 2xl:h-16   mx-7"
                    />
                  </Slider.Slide>
                  <Slider.Slide
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={logo6}
                      alt="Logos"
                      className="sm:h-6 w-full  md:h-10   2xl:mx-20 2xl:h-16   mx-7"
                    />
                  </Slider.Slide>
                </Slider>
              </div>
            </div>
          </div>
          <WhyChooseDevetiv />
        </div>
      </div>

      <div className="relative bg-cover pt-20 sm:pt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src={choosebg}
            alt="choosebg"
            objectFit="cover"
            layout="fill" // Ensures the image fills the entire div
            className="z-0"
          />
        </div>
        <div className="relative z-10">
          <FooterBanner />
          <Footer textColor={"!text-white"} gradient={"gradient-color"} />
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
