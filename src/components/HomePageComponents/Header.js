import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  const [open, isOpen] = useState(false);
  return (
    <div className="fixed top-0 z-10 w-full bg-[#F7F5F0]">
      <header className="flex items-center justify-between pt-1 pb-1 border-gray-300 px-25 ">
        <div className="flex flex-row items-center w-full ">
          <div className="mr-6">
            {open ? (
              <RxCross2 className="w-[24px] h-[24px] cursor-pointer " />
            ) : (
              <GiHamburgerMenu className="w-[24px] h-[24px] cursor-pointer ml-2" />
            )}
          </div>
          <div className="flex items-center gap-24 pr-24 border-r-0">
            <a href="/">
              <img
                src="https://www.instacart.com/image-server/x24/www.instacart.com/assets/beetstrap/brand/2023/logo@2x-8f1d0b7139d724b69d6563dde696887478257f5f741cfc4da7e2c42b49635bd7.png"
                alt="instaCart-logo"
              />
            </a>
            <div className="relative ml-3 w-[100%] ">
              <div className="absolute transform -translate-y-1/2 top-1/2 left-3">
                <CiSearch className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <input
                  type="text"
                  className="pl-10 pr-12 h-[50px] border-2 border-gray-300 rounded-lg text-lg bg-gray-200 text-gray-950 w-[80rem] border-none "
                  placeholder="Search products and stores and recipies"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="items-center cursor-pointer">
            <div className="relative">
              <button className="relative bg-transparent text-[#343538] h-14 cursor-pointer rounded-lg ">
                <span className="grid items-center justify-start w-full grid-cols-3 gap-3">
                  <IoLocationSharp className="w-6 h-6"/>
                  <span className="max-w-full pl-2">94105</span>
                  <RiArrowDropDownLine className="w-6 h-6"/>
                </span>
              </button>
            </div>
          </div>
          <button className="bg-green-600 text-white border-none rounded-md px-[8px] py-[16px] m-4 cursor-pointer">
            <span className="block overflow-hidden whitespace-nowrap overflow-ellipsis">
              Sign Up
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
