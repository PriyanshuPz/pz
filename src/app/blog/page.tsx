import React from "react";
import { FiLayout } from "react-icons/fi";
import Blogs from "../components/blog/Blogs";
import { fetchBlogs } from "../../data/blogs";

export const metadata = {
  title: "Blog",
  description:
    "Read insightful articles and updates from Priyanshu Verma on software engineering, technology trends, and more.",
};

export default async function Blogpage() {
  const blogs = await fetchBlogs();

  return (
    <div className="max-w-5xl mx-auto px-4 pt-16 md:pt-18 lg:pt-20">
      <div className="mt-6 sm:mt-10">
        <div className="mt-4 mb-2 sm:mb-4 md:mb-6 flex space-x-3 items-center">
          <div className="bg-[#FF3B00] p-2 rounded-lg">
            <FiLayout size={22} color="#FFFFFF" />
          </div>
          <h2 className="sm:text-lg md:text-xl lg:text-2xl font-medium leading-4 md:leading-6 lg:leading-8 tracking-wide">
            Blog Posts
          </h2>
        </div>
        <p className="text-sm sm:text-lg text-white leading-relaxed">
          Check out my latest blog posts where I share insights, tips, and
          experiences. Feel free to drop by, read, and leave your thoughts in
          the comments!
        </p>
      </div>
      <Blogs blogs={blogs} />
    </div>
  );
}
