"use client";
import Link from "next/link";
import { navigationItems } from "./Navbar";
import Image from "next/image";
import logo from "public/logo.svg";

export function Footer() {
  return (
    <footer className="bg-white rounded-lg  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image
              src={logo}
              width={180}
              height={45}
              alt="logo Mohammed naami"
            />
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:underline me-4 md:me-6">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2025 Mohammed Naami. All Rights reserved.
        </span>
      </div>
    </footer>
  );
}
