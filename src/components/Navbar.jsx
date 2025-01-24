import React, { useContext } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { productContext } from "../context/productContext";

function Navbar() {
  const { invoice } = useContext(productContext);
  return (
    <header className="p-4 z-10 max-lg:w-full lg:w-full">
      <nav className="min-w-0 ">
        <div className="flex flex-row justify-between mx-auto lg:w-4/5">
          <div className="flex flex-row justify-between items-center">
            <div className="lg:p-2">
              <h1 className="max-sm:text-lg md:text-xl lg:font-semibold lg:text-xl ">
                <span className="max-sm:font-medium md:text-2xl md:font-bold lg:font-bold lg:text-lg">
                  Kapdu
                </span>{" "}
                Store
              </h1>
            </div>

            <ul className="flex flex-row mx-4 p-3 max-lg:hidden ">
              <li className="mx-2 p-1">
                <a
                  href="/"
                  className="mx-1 font-semibold focus:text-blue-400 hover:text-blue-400 duration-200"
                >
                  Home
                </a>
              </li>
              <li className="mx-2 p-1">
                <a
                  href="/"
                  className="mx-1 font-semibold focus:text-blue-400 hover:text-blue-400 duration-200"
                >
                  Shop
                </a>
              </li>
              <li className="mx-2 p-1">
                <a
                  href="/"
                  className="mx-1 font-semibold focus:text-blue-400 hover:text-blue-400 duration-200"
                >
                  Feature
                </a>
              </li>
              <li className="mx-2 p-1">
                <a
                  href="/"
                  className="mx-1 font-semibold focus:text-blue-400 hover:text-blue-400 duration-200"
                >
                  Blog
                </a>
              </li>
              <li className="mx-2 p-1">
                <a
                  href="/"
                  className="mx-1 font-semibold focus:text-blue-400 hover:text-blue-400 duration-200"
                >
                  About
                </a>
              </li>
              <li className="mx-2 p-1">
                <NavLink
                  to={"/Contact"}
                  className="mx-1 font-semibold focus:text-blue-400 hover:text-blue-400 duration-200"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center relative">
            <IoMdSearch className=" max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl" />
            <div className="text-3xl">
              <NavLink to={"/Cart"} >
                <MdShoppingCart className=" max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl" />
                {invoice?.count > 0 && (
                  <div className="absolute top-2 right-[36%] w-4 h-4 bg-blue-400 text-white text-lg flex items-center justify-center">
                    {invoice?.count}
                  </div>
                )}
              </NavLink>
            </div>
            <FaRegHeart className=" max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl" />
            <GiHamburgerMenu className=" max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl lg:hidden" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
