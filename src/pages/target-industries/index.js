"use client";

import Footer from "@/components/Footer";
import FooterBanner from "@/components/FooterBanner";
import HeadSection from "@/components/HeadSection";
import Image from "next/image";
import React from "react";
import bgImage from "../../../public/assets/images/home/background_shades.png";
import ScrollToTop from "@/components/scroll-to-top";
import Slider from "react-infinite-logo-slider";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import aboutbg from "../../../public/assets/images/home/background1.png";
import choosebg from "../../../public/assets/images/home/background2.png";
import { CategoryLisitng } from "@/components/CategoryLisitng";
import CategorySection from "@/components/CategorySection";

import {heading, description, categoryDetails , ListingDetails } from "../../data/target-industries"
const AppDevelopment = () => {
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

      <div className="relative -mt-10 ">
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
            <CategorySection categoryDetails={categoryDetails} />
            <CategoryLisitng ListingDetails={ListingDetails} />
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

export default AppDevelopment;
