import React from "react";
import logo from "../assets/img/chicken-grilled-logo.png";
import avatar from "../assets/img/avatar-img.png";
import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-screen fixed z-50 p-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex h-full w-full items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 object-cover" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </div>
        <div className="flex items-center gap-8">
          {/* menu */}
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out">
              Service
            </li>
          </ul>
          {/* cart img */}
          <div className="relative flex justify-center items-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">1</p>
            </div>
          </div>
          {/* avatar img */}
          <img
            src={avatar}
            alt="profile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="flex w-full h-full md:hidden"></div>
    </header>
  );
};

export default Header;
