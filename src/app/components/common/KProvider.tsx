"use client";

import React from "react";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
import { useRouter } from "next/navigation";
import {
  LuSearch,
  LuBook,
  LuUser,
  LuTarget,
  LuLayoutDashboard,
} from "react-icons/lu";
import socialLinks from "@/data/socialLinks";
import KResults from "./KResults";

export default function KProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const actions = [
    {
      id: "blog",
      name: "blog",
      keywords: "blogs",
      shortcut: ["b"],
      perform: () => router.push("/blog"),
      section: "Pages",
      icon: <LuLayoutDashboard size={20} />,
    },
    {
      id: "projects",
      name: "Projects",
      keywords: "projects creations apps repositories",
      shortcut: ["p"],
      perform: () => router.push("/projects"),
      section: "Pages",
      icon: <LuTarget size={19} />,
    },
    {
      id: "guestbook",
      name: "Guestbook",
      keywords: "guestbook comments community wall",
      shortcut: ["g"],
      perform: () => router.push("/guestbook"),
      section: "Pages",
      icon: <LuBook size={20} />,
    },
    {
      id: "about",
      name: "About",
      keywords: "about",
      shortcut: ["a"],
      perform: () => router.push("/"),
      section: "Pages",
      icon: <LuUser size={20} />,
    },
  ];

  socialLinks.map((social) => {
    actions.push({
      keywords: social.name,
      shortcut: [social.id],
      id: social.id,
      name: social.name,
      perform: () => window.open(social.url),
      section: "Socials",
      icon: social.icon,
    });
  });

  return (
    <div>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner className="z-30 backdrop-blur-md backdrop-filter">
            <KBarAnimator className="mx-auto w-[32rem] overflow-hidden rounded-3xl border-[1px] border-[#333] border-tertiary bg-[#111111] drop-shadow-2xl ">
              <div className="flex items-center justify-between border-b border-[#333] p-4">
                <span>
                  <LuSearch className="mr-2 mb-0.5 h-5 w-5" />
                </span>
                <KBarSearch className="w-full rounded-md border-none outline-none bg-transparent placeholder:text-white/50" />
                <div className="bg-[#333] border border-[#333] bg-opacity-30 px-2 py-0.5 text-sm rounded-md transition duration-200">
                  esc
                </div>
              </div>
              <KResults />
              <div className="h-4" />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    </div>
  );
}
