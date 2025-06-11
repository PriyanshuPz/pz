"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { Blog } from "@/data/blogs";

export default function Blogs({ blogs }: { blogs: Blog[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="group relative transition-all duration-200 rounded-3xl bg-[#111111] border border-[#333] p-4"
        >
          <Link
            target="_blank"
            href={blog?.url}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              loading="eager"
              className="rounded-xl hover:opacity-90"
            />
            <p className="font-medium text-white sm:text-lg mt-2">
              {blog.title}
            </p>
            <p className="flex gap-0.5 text-sm mt-2 text-white/80">
              {blog.publishdate}{" "}
              <GoArrowUpRight
                size={21}
                className={`${
                  hoveredIndex === index &&
                  "text-white transition-all duration-200 -translate-y-0.5 translate-x-1"
                }`}
              />
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
