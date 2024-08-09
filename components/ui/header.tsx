"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoPersonCircleOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import SearchInput from "./search-input";

export default function Header() {
  const HeaderMenus = [
    { icon: <IoPersonCircleOutline />, path: "/" },
    { icon: <BsBell />, path: "/" },
    { icon: <GoGear />, path: "/" },
  ];

  const pathname = usePathname();

  return (
    <div>
      <nav className="flex flex-row items-center justify-between mx-auto px-5 pt-3">
        <Link href="/" className="font-bond text-3xl">
          CICS
        </Link>

        <div className="focus-within:bg-transparent flex px-3 rounded-full h-10 lg:w-2/4 mx-auto">
          <SearchInput />
        </div>

        <ul className="gap-1 text-2xl flex">
          {HeaderMenus.map((menu, index) => (
            <li
              className={`rounded-lg p-2 hover:bg-light-gray cursor-pointer`}
              key={index}
            >
              <Link href={menu.path}>{menu.icon}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
