"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoPersonCircleOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { GoGear } from "react-icons/go";

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

        {/* <div className="bg-light-gray border border-transparent focus-within:border-blue-500 focus-within:bg-transparent flex px-3 rounded-full h-10 lg:w-2/4 mx-auto">
          <input
            type="text"
            placeholder="Search Course or Student Name"
            className="w-full outline-none bg-transparent text-light-black font-normal text-[15px] text-center"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-light-black"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </div> */}

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
