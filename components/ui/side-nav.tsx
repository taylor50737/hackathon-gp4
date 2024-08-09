"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AiOutlineHome } from "react-icons/ai";
import { PiStudent } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { LuTestTube2 } from "react-icons/lu";

export default function SideNav() {
  const Menus = [
    { title: "Participants", icon: <PiStudent />, path: "/participants" },
    { title: "Courses", icon: <FaBook />, path: "/course-list" },
  ];

  const pathname = usePathname();

  return (
    <div className="bg-light-violet h-screen pt-12 relative hidden md:flex flex-col items-center">
      <Link
        href="/"
        className={`rounded-2xl hover:bg-light-pink cursor-pointer p-4 ${
          pathname === "/" ? "bg-light-pink" : ""
        }`}
      >
        <AiOutlineHome className="text-3xl" />
      </Link>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <li className="text-center" key={index}>
            <div className="p-4 flex flex-col items-center gap-2">
              <Link
                href={menu.path}
                className={`rounded-full text-2xl hover:bg-light-purple px-4 py-1 ${
                  pathname === menu.path ? "bg-light-purple" : ""
                }`}
              >
                {menu.icon}
              </Link>
              <span className="text-xs">{menu.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
