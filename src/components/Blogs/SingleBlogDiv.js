import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
const SingleBlogDiv = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group">
      <div className="relative rounded-3xl bg-white overflow-hidden shadow-3xl border-[1px] border-[#D9D9D9] shadow-transparent flex flex-col h-[600px]">
        <div
          className=""
          style={{
            position: "relative",
            width: "100%" /* Full width of the parent container */,
            height: "370px" /* Adjust the height as needed */,
            overflow: "hidden" /* Hide any overflow */,
            clipPath:
              'path("M156.5 326H0V37C0 16.5655 16.5655 0 37 0H454.5C474.935 0 491.5 16.5655 491.5 37V332.5C491.5 352.935 474.935 369.5 454.5 369.5H193.5C184.663 369.5 177.5 362.337 177.5 353.5V347C177.5 335.402 168.098 326 156.5 326Z")',
          }}
        >
          <Image
            src={blog.feature_image}
            alt={blog.title}
            layout="fill" /* Fill the container */
            objectFit="cover" /* Cover the container while maintaining aspect ratio */
            className="absolute inset-0" /* Position the image absolutely within the container */
          />
        </div>

        <div className=" w-full px-4 space-y-10">
          <p className="text-gray-600 text-[12px] -mt-6">
            {format(new Date(blog.published_at), "dd MMMM yyyy")} / {blog?.authors[0].name}
          </p>
          <h3 className="text-black text-lg font-bold group-hover:text-blue-500">
            {blog.title}
          </h3>
          <p className="text-[#393939] opacity-80 text-sm">{blog.excerpt}</p>
          <p className="text-gray-600 text-sm">
          {blog && blog.tags && blog.tags.map(tag => tag.name).join(" / ")}

          </p>
        </div>
      </div>
    </Link>
  );
};


export default SingleBlogDiv;
