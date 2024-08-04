import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineStars } from "react-icons/md";

import React from "react";
import Link from "next/link";

export default function SideNav() {
  const Menus = [
    { title: "Label", icon: <MdOutlineStars />, path: "/label1" },
    { title: "Label", icon: <MdOutlineStars />, path: "/label2" },
    { title: "Label", icon: <MdOutlineStars />, path: "/label3" },
    { title: "Label", icon: <MdOutlineStars />, path: "/label4" },
  ];

  return (
    <div className="bg-light-violet h-screen p-3 pt-12 relative">
      <div className="rounded-2xl hover:bg-light-pink cursor-pointer p-4">
        <Link href="/"><AiOutlineHome className="text-3xl" /></Link>
      </div>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <li className="text-center" key={index}>
            <Link href={menu.path} className="rounded-2xl hover:bg-light-pink cursor-pointer p-4 flex flex-col items-center gap-2">
              <div className="text-2xl">{menu.icon}</div> <span className="text-xs">{menu.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
