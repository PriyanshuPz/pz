"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";

const currentProject = {
  title: "Building Handwar 🕹️",
  description:
    "A simple game of war, where you can play against the computer or challenge your friends online.",
  link: "https://handwar.p8labs.tech",
  linkText: "Handwar -> P8' labs",
  image:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1755349577/anim_cjg7xg.gif",
  video:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1755349577/anim_cjg7xg.gif",
};

export default function OverviewSection() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadClick = () => {
    const cvUrl = "./resources/Priyanshu-Verma-CV.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = cvUrl;
    downloadLink.download = "Priyanshu-Verma-CV.pdf";
    downloadLink.click();
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="p-6 sm:p-8 border border-[#333] rounded-3xl bg-[#111111] text-white shadow-2xl flex flex-col"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-white uppercase tracking-wider flex gap-2 items-center text-sm sm:text-base">
            <span className="bg-[#FF3B00] p-1.5 rounded-md">
              <VscVscode size={20} color="#FFFFFF" />
            </span>
            My Studio
          </div>
          <div className="mt-4 flex-grow">
            <p className="text-base sm:text-lg tracking-wide leading-relaxed mb-4">
              Namaste!🙏 This is more than a portfolio; it's a window into my
              world, where passion meets purpose. Discover my work.
            </p>
          </div>
          <motion.button
            className="text-sm sm:text-base mt-4 bg-[#1a1a1a] border border-[#333] px-6 py-3 rounded-full hover:bg-[#111111A0] transition-colors duration-300"
            onClick={handleDownloadClick}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>
        <motion.div
          className="p-4 sm:p-6 md:p-8 border min-h-[300px] border-[#333] bg-[#111111] rounded-3xl relative overflow-hidden shadow-2xl"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0">
            {!isVideoLoaded && (
              <Image
                layout="fill"
                objectFit="cover"
                src={currentProject.image}
                alt="Video placeholder"
              />
            )}
            <video
              ref={videoRef}
              src={currentProject.video}
              autoPlay
              loop
              muted
              playsInline
              className={`object-cover w-full h-full ${
                isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadedData={handleVideoLoad}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-1 text-shadow-lg">
              {currentProject.title}
            </h3>
            <p className="text-sm sm:text-base text-shadow-md mb-2">
              {currentProject.description}
            </p>
            <motion.a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentProject.linkText}{" "}
              <LuExternalLink className="ml-1 w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
