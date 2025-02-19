import React, { useContext, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { productContext } from "../context/productContext";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { invoice, cart, removeCart } = useContext(productContext);
  const [hide, sethide] = useState(false);
  const [cartShow, setcartShow] = useState(false);
  const toggleButtonOpen = () => {
    sethide(true);
  };
  const toggleButtonClose = () => {
    sethide(false);
  };

  const cartHandlerOpen = () => {
    setcartShow(true);
  };
  const cartHandlerClose = () => {
    setcartShow(false);
  };
  return (
    <header className="p-4 z-10 max-lg:w-full lg:w-full xl:hidden">
      <nav className="min-w-0 ">
        <div className="flex flex-row justify-between mx-auto lg:w-4/5">
          <div className="flex flex-row justify-between items-center">
            <div className="lg:p-2 relative">
              <h1 className="max-sm:text-lg md:text-xl lg:font-semibold lg:text-xl ">
                <span className="max-sm:font-semibold md:text-2xl md:font-bold lg:font-bold lg:text-lg">
                  KAPDU
                </span>{" "}
                STORE
              </h1>
              <div
                onClick={toggleButtonOpen}
                className={`absolute z-10 w-screen top-[160%] left-[-16px] flex flex-col justify-center max-sm:justify-center bg-[#212121] text-white/60 p-3 ${
                  hide ? "block" : "hidden"
                }`}
              >
                <p className="text-[0.7rem] mx-auto">
                  Free shipping for standard order over $100
                </p>
                <hr className="my-1 border-white/25" />
                <div className="flex flex-row justify-center">
                  <span className="text-[0.7rem] hover:text-[#717FE0] duration-150 border-x-[1px] px-3 border-white/50">
                    Help & FAQs
                  </span>
                  <span className="text-[0.7rem] hover:text-[#717FE0] duration-150 border-r-[1px] px-3 border-white/50">
                    My Account
                  </span>
                  <span className="text-[0.7rem] hover:text-[#717FE0] duration-150 border-r-[1px] px-3 border-white/50">
                    EN
                  </span>
                  <span className="text-[0.7rem] hover:text-[#717FE0] duration-150 border-r-[1px] px-3 border-white/50">
                    USD
                  </span>
                </div>
              </div>
            </div>
            <ul
              onClick={toggleButtonOpen}
              className={`flex flex-col p-3 z-10 absolute bg-[#717FE0] text-white w-full top-[18%] left-0  ${
                hide ? "block" : "hidden"
              }`}
            >
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
          <div className="flex flex-row items-center ">
            <IoMdSearch className=" max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl" />
            <div className="text-3xl ">
              <MdShoppingCart 
                onClick={cartHandlerOpen}
                className={`max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl animate-ping`}
              />
              <div
                className={`fixed z-10 xl:w-[80%] md:w-[40%] lg:w-[30%] top-[0px] right-[0px] bg-white h-screen shadow-2xl ${
                  cartShow ? "block" : "hidden"
                }`}
              >
                {cart.length > 0 ? (
                  <div className="">
                    <div className="flex flex-row justify-between items-center p-3 my-5">
                      <h1 className="text-xl font-bold ">YOUR CART</h1>
                      <RxCross1
                        onClick={cartHandlerClose}
                        className={`text-3xl`}
                      />
                    </div>
                    {cart.map((items) => {
                      return (
                        <div
                          key={items.id}
                          className={`flex flex-col justify-start items-center `}
                        >
                          <div
                            className={`overflow-hidden flex flex-row justify-start items-center p-3 ${
                              cartShow ? "block" : "hidden"
                            }`}
                          >
                            <img className="w-[30%]" src={items.image} alt="" />
                            <div className="flex flex-col justify-start ml-9">
                              <h2 className="text-sm text-black/60">
                                {items.title}
                              </h2>
                              <h3 className="text-lg text-black/60 font-medium"></h3>
                              {
                                <p className="font-semibold text-[0.9rem] text-black/60">
                                  {invoice.count}
                                  {invoice.count > 1} X ${items.price}
                                </p>
                              }
                              <button
                                onClick={() => removeCart(items)}
                                className="bg-gray-700 text-white text-sm rounded-full py-2 mt-2"
                              >
                                remove Items
                              </button>
                            </div>
                          </div>
                          <div>
                            Total:{invoice.subTotal}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    <div className="w-full flex flex-row justify-end pr-5 pt-5">
                    <RxCross1
                      onClick={cartHandlerClose}
                      className={`text-3xl `}
                    />
                    </div>
                    <div className="flex flex-col items-center justify-center h-[200px]">
                    <p className="text-2xl font-semibold my-5">Cart is Empty!</p>
                    <Link
                      to={"/allproducts"}
                      className={`${cartShow ? "block" : "hidden"} text-[1.1rem] border rounded-full bg-[#9059fffd] p-2 text-white`}
                    >
                    Go to Product
                    </Link>
                    </div>
                  </div>
                )}
              </div>
              {invoice?.count > 0 && (
                <div className="absolute top-2 lg:top-[2%] right-[30%] max-sm:right-[29%] md:right-[15%] lg:right-[16%] w-4 h-4 bg-blue-400 text-white text-sm flex items-center justify-center">
                  {invoice?.count}
                </div>
              )}
            </div>
            <FaRegHeart className=" max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl" />
            <GiHamburgerMenu
              onClick={toggleButtonOpen}
              className={`max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl lg:hidden ${
                hide ? "hidden" : "block"
              }`}
            />
            <RxCross2
              onClick={toggleButtonClose}
              className={` max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl lg:hidden ${
                hide ? "block" : "hidden"
              }`}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
