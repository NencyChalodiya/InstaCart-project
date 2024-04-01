import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-100 ">
      <header className="bg-white flex justify-between px-25 pt-1 items-center  pb-2 border-b border-gray-300 ">
        <div className="flex flex-row items-center w-full   ">
          <div className="mr-6">
            <GiHamburgerMenu className="w-[24px] h-[24px] cursor-pointer" />
          </div>
          <div className="pr-24 border-r-0 flex items-center gap-24">
            <a href="/">
              <img
                src="https://www.instacart.com/image-server/x24/www.instacart.com/assets/beetstrap/brand/2023/logo@2x-8f1d0b7139d724b69d6563dde696887478257f5f741cfc4da7e2c42b49635bd7.png"
                alt="instaCart-logo"
              />
            </a>
            <div className="relative ml-3 w-[100%] ">
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                <CiSearch className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <input
                  type="text"
                  className="pl-10 pr-12 h-[50px] border-2 border-gray-300 rounded-lg text-lg bg-gray-200 text-gray-950 w-[80rem] border-none "
                  placeholder="Search products and stores"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <button className="border-none cursor-pointer  relative  text-base font-medium bg-transparent px-1 py-6 mx-6 text-gray-700">
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis block">
              Log in
            </span>
          </button>
          <button className="bg-green-600 text-white border-none rounded-md px-[8px] py-[16px] m-4 cursor-pointer">
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis block">
              Sign Up
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
