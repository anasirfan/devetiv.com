import React from "react";
import { FaCircle } from "react-icons/fa";
import parse from 'html-react-parser';
const MainBlog = ({post}) => {
  return (
    <div className="w-[90%] sm:w-[100%]">
      <div
        className="h-[650px] flex bg-cover bg-center  mx-3 rounded-3xl custom-md:h-[650px] sm:h-[600px]  "
        style={{ backgroundImage: `url(${post.feature_image})`,  }}
      >
        <div className="flex flex-col self-end mx-8 my-4 space-y-4 sm:space-y-3">
          <div className="flex flex-row items-center justify-center space-x-2 px-2 py-2 w-52 bg-white rounded-full sm:w-48">
            <FaCircle className="text-[#04445F]" />
            <p className="text-black sm:text-sm">Artificial Intelligence</p>
          </div>
          <h4 className="text-4xl tracking-wide font-bold w-[90%] lg:text-3xl custom-md:text-2xl sm:text-xl custom-sm:text-xl sm:w-[100%]" >
            {post.title}
          </h4>
          <div className="flex space-x-3 items-center font-raleway font-light">
            <p>{post.published_at}</p>
            <FaCircle className="h-1 w-1 text-white" />
            <p>10 min read</p>
          </div>
        </div>
        {/* <div className="absolute bottom-0 text-black h-[81px] tracking-[7px] font-[600] px-4 py-4 rounded-t-2xl bg-white right-0 w-[90%]">
            Scroll Down
          </div> */}
      </div>
      <div className="mx-12 flex flex-col space-y-6 my-8 text-black">
        {parse(post.html)}
      </div>
    </div>
  );
};

export default MainBlog;
