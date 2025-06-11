"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "../../../data/projects";
import { LuExternalLink, LuGithub, LuArrowRight } from "react-icons/lu";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Fragment>
      {projects?.slice(0, 6).map((project, i) => (
        <div
          key={i}
          className={`flex flex-col mt-6 space-y-8 rounded-3xl border border-[#333] bg-[#111111] p-4 md:h-48 md:flex-row md:space-y-0 md:space-x-8 ${
            hoveredIndex === i &&
            "transition-all duration-200 scale-[1.02] cursor-pointer"
          }`}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="overflow-hidden rounded-xl md:w-72">
            <div className="relative h-full w-full transition duration-200 hover:opacity-90 md:w-72">
              <img
                src={project.image}
                alt="image"
                loading="eager"
                className="w-full h-[180px] md:h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-col space-y-2">
              <h2
                className={`sm:text-lg text-white font-medium ${
                  hoveredIndex === i && "underline"
                }`}
              >
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-white/80">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col space-y-3 mt-4 md:mt-0 md:flex-row md:items-center md:space-x-2 md:space-y-0">
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-sm items-center justify-center gap-x-1.5 p-2 rounded-xl bg-[#F4F0E6] text-black transition-all duration-200 hover:-translate-y-1"
                >
                  <LuExternalLink /> View Project
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-sm items-center justify-center gap-x-1.5 p-2 rounded-xl bg-[#F4F0E6] text-black transition-all duration-200 hover:-translate-y-1"
                >
                  <LuGithub /> View Code
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-12">
        <Link
          target="_blank"
          href="https://github.com/PriyanshuPz"
          className="flex items-center justify-center space-x-2 rounded-2xl hover:underline overflow-hidden bg-[#FF3B00] text-white shadow-md cursor-pointer h-fit px-12 py-4"
          onMouseEnter={() => setHoveredIndex(7)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span className="text-sm sm:text-base">View more on Github</span>
          <LuArrowRight
            size={22}
            className={`transition-all duration-300 ${
              hoveredIndex === 7 ? "translate-x-2" : "translate-x-0"
            }`}
          />
        </Link>
      </div>
    </Fragment>
  );
}
