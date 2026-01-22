"use client";

import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuTerminal } from "react-icons/lu";
import Image from "next/image";
import { motion } from "framer-motion";
import works from "@/data/works";
import skills from "@/data/skills";

const ProfessionalSummary = () => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div
        className="p-6 md:p-8 rounded-3xl border border-[#333] bg-[#111111]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-[#FF3B00] p-2 rounded-lg">
            <IoBriefcaseOutline size={20} color="#FFFFFF" />
          </span>
          <h3 className="text-lg font-semibold text-white">Experience</h3>
        </div>
        <div className="space-y-4">
          {works.map((work, i) => (
            <div key={i} className="flex items-start gap-4">
              <Image
                height={40}
                width={40}
                src={work.image}
                alt={work.companyName}
                className={`h-10 w-10 object-cover ${work.imageBg} border border-[#333] p-1.5 rounded-lg flex-shrink-0`}
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-white text-sm">
                  {work.companyName}
                </p>
                <p className="text-sm text-white/70">{work.role}</p>
                <p className="text-xs text-white/50 mt-1">
                  {work.startAt} - {work.endAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="p-6 md:p-8 rounded-3xl border border-[#333] bg-[#111111]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-[#FF3B00] p-2 rounded-lg">
            <LuTerminal size={20} color="#FFFFFF" />
          </span>
          <h3 className="text-lg font-semibold text-white">Skills</h3>
        </div>
        <div className="overflow-hidden space-y-2">
          <div className="flex min-w-full shrink-0 gap-3 py-2 w-max flex-nowrap animate-scroll">
            {skills.slice(0, 8).map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-[#F4F0E6] px-3 py-2 rounded-lg"
              >
                <Image
                  src={skill.image}
                  alt={skill.title}
                  className="w-4 h-4"
                />
                <span className="text-black text-sm">{skill.title}</span>
              </div>
            ))}
          </div>
          <div className="flex min-w-full shrink-0 gap-3 py-2 w-max flex-nowrap animate-scrollReverse">
            {skills.slice(8, 16).map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-[#F4F0E6] px-3 py-2 rounded-lg"
              >
                <Image
                  src={skill.image}
                  alt={skill.title}
                  className="w-4 h-4"
                />
                <span className="text-black text-sm">{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfessionalSummary;
