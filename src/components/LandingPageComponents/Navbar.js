import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
import { RxCross2 } from "react-icons/rx";




const Navbar = ({ onLoginButton, onSignupHandler }) => {
  const [open, isOpen] = useState(false);
  // const [login, isLogin] = useState(false);
  // const [signup, isSignup] = useState(false);
  // const [resetPassword, isResetpassword] = useState(false);
  // const onClickLogin = () => {
  //   isSignup(!signup);
  //   // isLogin(!login);
  // };

  const onToggleButton = () => {
    isOpen(!open);
  };

  // const onLoginButton = () => {
  //   isLogin(!login);
  // };

  // const onSignupHandler = () => {
  //   isSignup(!signup);
  // };
  // const onResetpasswordHandler = () => {
  //   isLogin(false);
  //   // isResetpassword(true);
  // };
  // const onCancelHandler = () => {
  //   // isLogin(false);
  //   isSignup(false);
  // };

  return (
    <div className="fixed top-0 z-10 w-full bg-white">
      <header className="flex items-center justify-between pt-1 pb-1 border-gray-300 px-25 ">
        <div className="flex flex-row items-center w-full ">
          <div className="mr-6">
            {open ? (
              <RxCross2
                onClick={onToggleButton}
                className="w-[24px] h-[24px] cursor-pointer "
              />
            ) : (
              <GiHamburgerMenu
                onClick={onToggleButton}
                className="w-[24px] h-[24px] cursor-pointer ml-2"
              />
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
                  placeholder="Search products and stores"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <button className="relative px-1 py-6 mx-6 text-base font-medium text-gray-700 bg-transparent border-none cursor-pointer">
            <span
              className="block overflow-hidden whitespace-nowrap overflow-ellipsis"
              onClick={onLoginButton}
            >
              Log in
            </span>
          </button>
          <button className="bg-green-600 text-white border-none rounded-md px-[8px] py-[16px] m-4 cursor-pointer">
            <span
              className="block overflow-hidden whitespace-nowrap overflow-ellipsis"
              onClick={onSignupHandler}
            >
              Sign Up
            </span>
          </button>
        </div>
      </header>
      <Sidebar open={open} onToggleButton={onToggleButton} />
      {/* {login && (
        <Login
          login={login}
          onCancel={onCancelHandler}
          onClickSignup={onClickLogin}
          onResetpasswordHandler={onResetpasswordHandler}
        />
      )} */}
      {/* <Signup
        signup={signup}
        onCancel={onCancelHandler}
        onClickLogin={onClickLogin}
      /> */}
      {/* {resetPassword && <ResetPassword resetPassword={resetPassword} />} */}
    </div>
  );
};

export default Navbar;
