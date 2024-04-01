import React from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [phoneNav, setPhoneNav] = useState(false);

  const closeNav = () => {
    setPhoneNav(false);
  };

  const openNav = () => {
    setPhoneNav(true);
  };

  return (
    <nav className="flex items-center justify-between py-3 px-5 shadow-md shadow-n-1/45 overflow-x-hidden">
      <div className="flex items-center gap-2 cursor-pointer">
        <img width={50} src={logo} alt="Vigor Sip" />
        <h3 className="font-bold text-xl">Vigor Sip</h3>
      </div>

      {/* Links */}
      <ul
        className={`${
          phoneNav ? "flex" : "hidden"
        } absolute right-0 top-0 py-8 px-20 bg-black/90 text-white flex-col lg:flex lg:flex-row lg:text-black lg:bg-transparent lg:relative lg:right-0 lg:left-0 lg:p-0 lg:translate-x-0 duration-700 items-center gap-6 lg:gap-9 capitalize z-50`}
      >
        {/* Close Button for NavBar */}
        <li
          onClick={closeNav}
          className="block cursor-pointer text-4xl font-bold lg:hidden"
        >
          <IoMdClose />
        </li>
        <li className="hover:text-n-1 duration-200 font-medium">
          <a href="/">home</a>
        </li>
        <li className="hover:text-n-1 duration-200 font-medium">
          <a href="/">menu</a>
        </li>
        <li className="hover:text-n-1 duration-200 font-medium">
          <a href="/">services</a>
        </li>
        <li className="hover:text-n-1 pb-16 lg:p-0 duration-200 font-medium">
          <a href="/">shop</a>
        </li>
      </ul>

      {/* Call to action Button */}
      <div className="hidden lg:block">
        <Button className="border px-12 py-4 border-black/90 ">Delivery</Button>
      </div>

      {/* Hamburger Menu */}
      <div className="block lg:hidden">
        <span
          onClick={openNav}
          className="text-black/80 text-3xl font-bold cursor-pointer"
        >
          <IoMenu />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
