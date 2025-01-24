import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="bg-black/85  w-full md:h-[680px] lg:h-[400px] text-white">
        <div className="w-full">
          <div className="max-sm:p-4 w-4/5 xl:mx-auto flex flex-row flex-wrap justify-between p-5 md:w-full">
            <div className="w-80">
              <h3 className="max-sm:text-sm max-sm:m font-bold text-xl py-2 my-8">
                CATEGORIES
              </h3>
              <ul className="flex flex-col gap-y-4 max-sm:gap-y-3 max-sm:text-sm text-white/55">
                <li>Women</li>
                <li>Men</li>
                <li>Shoes</li>
                <li>Watches</li>
              </ul>
            </div>
            <div className="w-80">
              <h3 className="max-sm:text-sm max-sm:m font-bold text-xl py-2 my-8">
                HELP
              </h3>
              <ul className="flex flex-col gap-y-4 max-sm:gap-y-3 max-sm:text-sm text-white/55">
                <li>Track Order</li>
                <li>Return</li>
                <li>Shipping</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="w-80 ">
              <h3 className="max-sm:text-sm max-sm:m font-bold text-xl py-2 my-8">
                GET IN TOUCH
              </h3>
              <p className="flex flex-col gap-y-4 max-sm:gap-y-3 max-sm:text-sm text-white/55">
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
              <div className="flex flex-row justify-around items-center mt-9 max-sm:ml-[-12px] w-[50%] text-white/55 text-2xl">
                
                  <FaFacebookF className=" max-sm:text-md" />
                
               
                  <FaInstagram className=" max-sm:text-md" />
                
               
                  <FaPinterestP className=" max-sm:text-md" />
                
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-80">
              <h3 className="font-bold text-xl py-2 my-8 max-sm:text-[1.2rem]">NEWS LATTER</h3>
              <input
                className="bg-transparent border-none focus:outline-none"
                placeholder="hello@example.com"
                type="email"
              />
              <button
                className="bg-blue-400 rounded-full py-2 my-5 max-sm:py-3 max-sm:px-1"
                type="submit"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center my-3 max-sm:p-5 max-sm:text-sm ">
            <p className="mx-auto max-sm:font-thin ">
              Copyright ©2025 All rights reserved | Made with by{" "}
              <a href="/" className="text-blue-600 max-sm:font-normal">
                Colorlib
              </a>{" "}
              & distributed by{" "}
              <a href="/" className="text-blue-600 max-sm:font-normal">
                ThemeWagon
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
