import ConnectUs from "@/components/About/ConnectUs";
import MainBlog from "@/components/Blogs/MainBlog";
import Sidebar from "@/components/Blogs/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/scroll-to-top";
import { getPosts, getSinglePost } from "@/services/Blogs";
import React from "react";

const SinglePosts = ({post}) => {

  if(!post) {
    return (
      <>
      <Navbar
        bgColor={"none"}
        urlColors={"text-black"}
        getStartedClr={"text-[#CDAC00]"}
      />
      <h1>Coming Soon !</h1>
      <ConnectUs />
      <Footer textColor={"!text-black"} gradient={"text-[#353535]"} />
      <ScrollToTop />
      </>
    );
  }
  return (
    <div>
      <Navbar
        bgColor={"none"}
        urlColors={"text-black"}
        getStartedClr={"text-[#CDAC00]"}
      />
      <div className="flex my-6 sm:flex-col">
        <MainBlog post={post} />
        <Sidebar  />
      </div>
      <ConnectUs />
      <Footer textColor={"!text-black"} gradient={"text-[#353535]"} />
      <ScrollToTop />
    </div>
  );
};

// export async function getStaticPaths() {
//     const posts = await getPosts();
      
//     // Get the paths we want to create based on posts
//     const paths = posts.map((post) => ({
//       params: { slug: post.slug },
//     }));
  
//     // { fallback: false } means posts not found should 404.
//     return { paths, fallback: false };
//   }
  
  
//   export async function getStaticProps(context) {
//     const post = await getSinglePost(context.params.slug);
  
//     if (!post) {
//       return {
//         notFound: true,
//       };
//     }
  
//     return {
//       props: { post },
//     };
//   }

export default SinglePosts;
