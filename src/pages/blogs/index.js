import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/scroll-to-top";
import React from "react";
import blogBanner from "../../../public/assets/images/blog-banner.png";
import LatestBlogs from "@/components/Blogs/LatestBlogs";
import ConnectUs from "@/components/About/ConnectUs";
import { getPosts } from "@/services/Blogs";
import Link from "next/link";

const blog = ({posts}) => {
  if(!posts) {
    return (
      <>
      <Navbar
        bgColor={"bg-black"}
        urlColors={"text-white"}
        getStartedClr={"text-[#CDAC00]"}
      />
      <div className="h-screen items-center flex justify-center bg-custom-gradient  flex-col space-y-10">


      <h1 className=" text-black">Coming Soon !</h1>
      <Link href={'/blogs/blog1'}>
      
      <button className="py-6 px-4 rounded-full text-white bg-[#CDAC00] hover:text-[#CDAC00] hover:bg-white border hover:border-[#CDAC00]">Learn more about SaaS ... </button>
      </Link>
      </div>
      <ConnectUs />
      <Footer textColor={"!text-black"} gradient={"text-[#353535]"} />
      <ScrollToTop />
      </>
    );
  }
  return (
    <>
      <div data-aos="fade-down" className="bg-cover bg-center bg-customWhite h-[670px] rounded-b-3xl">
         <Navbar
          bgColor={"bg-[#F0F2F4]"}
          urlColors={"text-black"}
          getStartedClr={"text-[#CDAC00]"}
        />
        <div
          className="h-screen bg-cover bg-center w-[95%] mx-auto rounded-b-3xl "
          style={{ backgroundImage: `url(${blogBanner.src})`, height: "550px" }}
        >
          <div className="flex  items-center justify-center flex-col w-[60%] sm:w-[100%] text-center mx-auto h-[553px]  py-16 sm:px-4">
            <h4 className="text-[56px] sm:text-[32px] md:text-[45px]">Our Blogs</h4>
            <p className="w-[95%] mx-auto my-8 text-[22px] sm:text-[16px] sm:w-[85%] md:text-[18px] md:w-[90%]">
              Bringing together a team of passionate creatives and developers
              with a combined experience of decades to deliver digital assets
              and software solutions our clients need.
            </p>
          </div>
         
        </div>
      </div>
      <LatestBlogs posts={posts} />
      <ConnectUs />

      <Footer textColor={"!text-black"} gradient={"text-[#353535]"} />
      <ScrollToTop />
    </>
  );
};

// export async function getServerSideProps(context) {
//     const posts = await getPosts();

//     if (!posts) {
//         return {
//           notFound: true,
//         }
//       }
    
//       return {
//         props: { posts }
//       }
    
// }

export default blog;
