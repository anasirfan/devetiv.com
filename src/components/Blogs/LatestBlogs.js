import Image from "next/image";
import React, { useState } from "react";
import frame from "../../../public/assets/images/blogImageFrame.png";
import aboutBg from "../../../public/assets/images/about/whoweare.jpg";
import SingleBlogDiv from "./SingleBlogDiv";

// const blogs = [
//   {
//     title:
//       "How can I get started with Artificial Intelligence for my business?",
//     date: "19 Feb 2024",
//     author: "andrew",
//     categories: ["AI", "Business"],
//     image: aboutBg,
//     href: "/blog/1",
//   },
//   {
//     title: "The Future of AI: Emerging Trends and Technologies to Watch",
//     date: "19 Feb 2024",
//     author: "andrew",
//     categories: ["AI", "Neural Networks"],
//     image: aboutBg,
//     href: "/blog/2",
//   },
//   {
//     title: "Exploring Deep Learning: Unleashing the Power of Neural Networks",
//     date: "19 Jan 2024",
//     author: "andrew",
//     categories: ["Business", "Technology"],
//     image: aboutBg,
//     href: "/blog/3",
//   },
//   {
//     title: "Exploring Deep Learning: Unleashing the Power of Neural Networks",
//     date: "19 Jan 2024",
//     author: "andrew",
//     categories: ["Business", "Technology"],
//     image: aboutBg,
//     href: "/blog/3",
//   },
//   {
//     title: "Exploring Deep Learning: Unleashing the Power of Neural Networks",
//     date: "19 Jan 2024",
//     author: "andrew",
//     categories: ["Business", "Technology"],
//     image: aboutBg,
//     href: "/blog/3",
//   },
//   {
//     title: "Exploring Deep Learning: Unleashing the Power of Neural Networks",
//     date: "19 Jan 2024",
//     author: "andrew",
//     categories: ["Business", "Technology"],
//     image: aboutBg,
//     href: "/blog/3",
//   },
//   {
//     title: "Exploring Deep Learning: Unleashing the Power of Neural Networks",
//     date: "19 Jan 2024",
//     author: "andrew",
//     categories: ["Business", "Technology"],
//     image: aboutBg,
//     href: "/blog/3",
//   },

//   // Add more blogs here...
// ];


const LatestBlogs = ({posts}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);

  const indexOfLastBlog = Math.min(currentPage * blogsPerPage, posts.length);
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = posts.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex  relative">
        <h4 className="text-4xl text-black font-bold mb-8">Our Latest Blog</h4>
        <div className="flex absolute items-center right-0">
          <p className="mr-4 text-gray-700">Sort By</p>
          <div
            className="relative  rounded-full text-center border border-gray-300 px-8 py-4 shadow-md cursor-pointer"
            onClick={handleClick}
          >
            <span className="text-gray-700 font-medium">Latest Blog</span>
            <span>
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block mx-2"
            >
              <path d="M7.5 13L14.8612 0.25H0.138784L7.5 13Z" fill="#CDAC00" />
            </svg>
            </span>
            {isOpen && (
              <div
                className="absolute top-full left-0 z-10 w-full rounded-md bg-white shadow-md"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#" className="text-gray-700 font-medium">
                      Option 1
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#" className="text-gray-700 font-medium">
                      Option 2
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 custom-md:grid-cols-2 sm:grid-cols-1 gap-6">
        {currentBlogs.map((blog) => (
          <SingleBlogDiv key={blog.title} blog={blog} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <ul className="flex space-x-2">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`px-3 py-2 rounded-md ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestBlogs;
