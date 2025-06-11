"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuGlobe, LuRocket } from "react-icons/lu";
import { BackgroundLines } from "../common/BackgroundLines";

const PersonalIntroduction = () => {
  return (
    <div className="mt-8 md:mt-10">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <BackgroundLines>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
          </div>

          <div className="relative z-10 flex flex-col p-6 sm:p-8">
            <div className="text-white max-w-xl">
              <motion.h2
                className="font-medium uppercase tracking-wider flex items-center text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <LuGlobe className="mr-2" size={18} />
                About me
              </motion.h2>
              <motion.h1
                className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                hey, I'm Priyanshu
                <span className="animate-wave inline-block ml-2">👋</span>
              </motion.h1>
              <motion.p
                className="mt-4 sm:mt-6 text-base sm:text-lg font-light leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Passionate Techie from India, push myself to be better every
                day. I love building things, wrting tech blogs, and sharing
                knowledge with the community.
              </motion.p>
            </div>

            <div className="w-full flex justify-end">
              <motion.div
                className="mt-auto pt-8 sm:pt-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 text-white">
                  <h2 className="font-medium uppercase tracking-wider flex items-center text-sm sm:text-base">
                    <LuRocket className="mr-2" size={18} />
                    My Mission
                  </h2>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg font-light leading-relaxed">
                    I build tools, systems, games, and stories that connect
                    ideas to people. I explore, I write, I contribute — because
                    building is how I think.
                  </p>
                  <p className="mt-4 sm:mt-6 text-base sm:text-lg italic">
                    The ship is the story. The build is the journey. 🚀
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </BackgroundLines>
      </div>
    </div>
  );
};

export default PersonalIntroduction;
