import React, { useContext, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
// import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { productContext } from "../context/productContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { invoice,cart } = useContext(productContext);
  const [cartShow, setcartShow] = useState(false);
  const cartHandlerOpen = () => {
    setcartShow(true);
  };
  const cartHandlerClose = () => {
    setcartShow(false);
  };
  return (
    <header className="p-4 z-10 max-lg:w-full lg:w-full max-xl:hidden">
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
              <NavLink to={""} >
                <MdShoppingCart onClick={cartHandlerOpen} className="z-30 max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl" />
                <div>
                <div
                className={`fixed z-10 w-[80%] xl:w-[20%] top-[0px] right-[0px] bg-white h-screen shadow-2xl ${
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
                    <div className="border">
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
                        </div>
                      );
                    })}
                    </div>
                          <div className="absolute top-[85%] left-[10%]">
                            Total:{invoice.subTotal}
                          </div>
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
                </div>
                {invoice?.count > 0 && (
                  <div className="absolute z-20 top-2 right-[36%] max-sm:right-[20%] w-4 h-4 bg-blue-400 text-white text-lg flex items-center justify-center">
                    {invoice?.count}
                  </div>
                )}
              </NavLink>
            </div>
            <FaRegHeart className=" max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl" />
            {/* <GiHamburgerMenu className=" max-sm:mx-2 md:mx-3 lg:mx-3 focus:text-blue-400 hover:text-blue-400 duration-200 text-2xl lg:hidden" /> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
