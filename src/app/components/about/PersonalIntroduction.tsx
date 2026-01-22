"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundLines } from "../common/BackgroundLines";
import Image from "next/image";

const PersonalIntroduction = () => {
  return (
    <div className="mt-8 md:mt-10">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <BackgroundLines>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/50"></div>
          </div>

          <motion.div
            className="relative z-10 flex flex-col items-center text-center p-8 sm:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/priyanshu.png"
              alt="Priyanshu"
              width={120}
              height={120}
              className="rounded-full object-cover ring-4 ring-white/20"
              priority
            />
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Priyanshu Verma
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              I create technology that helps people to be more productive.
            </p>
            <div className="mt-6 flex gap-4 text-sm text-white/60">
              <span>🧠 Polymath</span>
              <span>•</span>
              <span>🚀 Builder</span>
              <span>•</span>
              <span>📍 India</span>
            </div>
          </motion.div>
        </BackgroundLines>
      </div>
    </div>
  );
};

export default PersonalIntroduction;
