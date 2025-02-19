import React from "react";
import { VscMail } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
export default function Contact() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
      <section className="w-full">
        <div className="bg-blue-200 w-screen h-[200px] bg-[url('images/imgBack/bg-01.jpg')] bg-center bg-cover relative">
          <h2 className="absolute top-[45%] xl:right-[45%] max-sm:right-[23%] md:right-[37%] lg:right-[40%] text-5xl text-white font-extrabold">
            Contact
          </h2>
        </div>
      </section>
      <section className="w-full my-20 max-sm:my-0 ">
        <div className="flex flex-row xl:mx-28 max-sm:mx-0 h-full max-sm:flex-wrap md:mx-0 lg:justify-center">
          <div className="border flex flex-col p-8 justify-center items-center w-[50%] md:w-[380px] max-sm:w-[100%] max-sm:my-1 max-sm:mx-4 max-sm:px-3 lg:w-[45%]">
            <div className="flex flex-col justify-center w-[80%] max-sm:w-[90%] md:w-full">
              <h3 className="text-2xl max-sm:text-2xl my-5 max-sm:mt-12 text-black/70 mx-auto">
                Send Us A Message
              </h3>
              <div className="flex flex-row justify-center items-center border max-sm:my-1">
                <VscMail className="text-3xl mx-5 text-black/60" />
                <input
                  className="focus:outline-none my-5 max-sm:my-3 w-full"
                  type="text"
                  placeholder="Your Email Address"
                />
              </div>
              <textarea
                className="border my-5 w-full p-3 outline-none"
                rows={"10"}
                cols={"25"}
                placeholder=" How Can We Help?"
              ></textarea>
              <button className="my-3 bg-black text-white hover:bg-[#E6E6E6] rounded-full hover:text-black duration-300 py-3 w-full ">
                SUBMIT
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[50%] max-sm:w-[100%] justify-start max-sm:px-4 lg:w-[45%]">
            <div className="border flex flex-col justify-center items-center md:h-[590px]">
            <div className=" w-full p-8 max-sm:p-0 md:p-12">
              <div className="flex flex-row justify-start m-16 max-sm:mx-0 max-sm:w-[100%] max-sm:p-3 md:m-0 ">
                <div className="mx-4">
                  <IoLocationOutline className="text-2xl text-black/60" />
                </div>
                <div className="xl:w-[40%] max-sm:w-full md:w-full">
                  <h3 className="mx-auto text-xl text-black/80">Address</h3>
                  <p className="mt-3 text-black/55">
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start m-16 max-sm:mx-0 max-sm:p-3 md:mx-0">
                <div className="mx-4">
                  <BsTelephone className="text-2xl text-black/60" />
                </div>
                <div className="xl:w-[40%] max-sm:w-full md:w-full">
                  <h3 className="mx-auto text-xl text-black/80">Lets Talk</h3>
                  <p className="mt-3">
                    <a className="text-blue-400" href="/">
                      +1 800 1236879
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start m-16 max-sm:mx-0 max-sm:p-3 md:mx-0">
                <div className="mx-4">
                  <CiMail className="text-2xl text-black/60" />
                </div>
                <div className=" xl:w-[40%] max-sm:full md:w-full">
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
      <Footer/>
    </>
  );
}
