import React from "react";
import { VscMail } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
export default function Contact() {
  return (
    <>
      <section className="w-full">
        <div className="bg-blue-200 relative">
          <img className="w-full" src="/imgBack/bg-01.jpg" alt="" />
          <h2 className="absolute top-[45%] right-[45%] text-5xl text-white font-extrabold">
            Contact
          </h2>
        </div>
      </section>
      <section className="w-full my-20 ">
        <div className="flex flex-row mx-48 h-full">
          <div className="border flex flex-col p-8 justify-center items-center w-[50%]">
            <div className="flex flex-col justify-center w-[80%]">
              <h3 className="text-2xl my-5 text-black/70 mx-auto">
                Send Us A Message
              </h3>
              <div className="flex flex-row justify-center items-center border">
                <VscMail className="text-3xl mx-5 text-black/60" />
                <input
                  className="focus:outline-none my-5 w-full"
                  type="text"
                  placeholder="Your Email Address"
                />
              </div>
              <textarea
                className="border my-5 w-full p-3"
                name=""
                id=""
                rows={"10"}
                cols={"25"}
                placeholder=" How Can We Help?"
              ></textarea>
              <button className="my-3 bg-black text-white hover:bg-[#E6E6E6] rounded-full hover:text-black duration-300 py-3 w-full">
                SUBMIT
              </button>
            </div>
          </div>
          <div className="border flex flex-col w-[50%] justify-start">
            <div className="w-full p-8">
              <div className="flex flex-row justify-start mx-16 my-16">
                <div className="mx-4">
                  <IoLocationOutline className="text-2xl text-black/60" />
                </div>
                <div className="w-[40%]">
                  <h3 className="mx-auto text-xl text-black/80">Address</h3>
                  <p className="mt-3 text-black/55">
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start mx-16 my-16">
                <div className="mx-4">
                  <BsTelephone className="text-2xl text-black/60" />
                </div>
                <div className="w-[40%]">
                  <h3 className="mx-auto text-xl text-black/80">Lets Talk</h3>
                  <p className="mt-3">
                    <a className="text-blue-400" href="/">
                      +1 800 1236879
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start mx-16 my-16">
                <div className="mx-4">
                  <CiMail className="text-2xl text-black/60" />
                </div>
                <div className="w-[40%]">
                  <h3 className="mx-auto text-xl text-black/80">
                    Sales Support
                  </h3>
                  <p className="mt-3">
                    <a className="text-blue-400" href="/">
                      Example@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full full">
        <iframe
          className="w-full h-[400px]"
          frameborder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>
    </>
  );
}
