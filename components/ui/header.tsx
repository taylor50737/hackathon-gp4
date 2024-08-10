"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { IoPersonCircleOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import SearchInput from "./search-input";
import { Suspense } from "react";
import Image from "next/image";
import logoImg from "public/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const HeaderMenus = [
    { icon: <IoPersonCircleOutline />, path: "/" },
    { icon: <BsBell />, path: "/" },
    { icon: <GoGear />, path: "/" },
  ];

  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="flex flex-row items-center justify-between mx-auto px-5 pt-3">
        <Link href="/" className="font-bold text-3xl">
          <div className="md:shrink-0">
            <Image
              alt="CICS Logo"
              src={logoImg}
              width={64}
              height={64}
              layout="fixed" 
              className="h-12 w-full" 
            />
          </div>
        </Link>

        <div className="hidden md:flex focus-within:bg-transparent px-3 rounded-full h-10 md:w-2/4 mx-auto">
          <Suspense>
            <SearchInput />
          </Suspense>
        </div>

        <div className="hidden md:flex items-center md:order-2">
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
        </div>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transform transition-all duration-700 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col px-5 py-4 gap-2 bg-light-violet">
          <li>
            <Suspense>
              <SearchInput />
            </Suspense>
          </li>
          <li>
            <Link
              href="/"
              className="block py-2 pr-4 pl-3 text-lg border-b rounded border-gray-100  hover:bg-light-gray"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/participants"
              className="block py-2 pr-4 pl-3 text-lg border-b rounded border-gray-100  hover:bg-light-gray"
            >
              Participants
            </Link>
          </li>
          <li>
            <Link
              href="/course-list"
              className="block py-2 pr-4 pl-3 text-lg border-b rounded border-gray-100  hover:bg-light-gray"
            >
              Courses
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
