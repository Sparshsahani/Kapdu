import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function ShopingCart() {
  const { cart, removeCart, invoice, addCart } = useContext(productContext);
  console.log(cart);

  return (
    <>
      <Navbar />
      <Sidebar />
      <section className="h-full w-full flex flex-row max-sm:flex-wrap md:flex-wrap xl:flex-nowrap justify-center">
        <div className="xl:w-[50%] h-full border p-5 m-3 max-sm:w-[90%] max-sm:px-0 md:w-full">
          <div className=" max-sm:overflow-y-auto max-sm:w-full">
            <table className="w-full  max-sm:min-w-[900px] max-sm:min-h-[220px]">
              <thead className="font-medium text-black/75">
                <tr className="w-full flex flex-row  justify-around mb-3 snap-start scroll-m-6">
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <hr />
              <tbody>
                {cart.length > 0 ? (
                  cart.map((items) => {
                    return (
                      <tr
                        key={items.id}
                        className="flex flex-row justify-around max-sm:flex-wrap items-center p-8"
                      >
                        <td className="w-[25%]">
                          <div className="flex flex-row justify-around items-center">
                            <div className="w-[80%] max-sm:w-[50%]">
                              <img
                                className="w-full p-3"
                                src={items.image}
                                alt=""
                              />
                            </div>
                            <div>{items.title}</div>
                          </div>
                        </td>
                        <td className="w-[25%] flex flex-row max-sm:flex-wrap justify-around items-center">
                          {items.price}
                        </td>
                        <td className="w-[25%] ">
                          <div className="flex flex-row justify-between p-2">
                            <div className="border rounded-sm w-[35%] p-1 flex flex-row justify-center items-center">
                              <button onClick={() => removeCart(items)}>
                                <RiSubtractFill />
                              </button>
                            </div>
                            <div className="border w-[35%] bg-[#F3F3F3] p-1 flex flex-row justify-center items-center">
                              <h3>{invoice.count}</h3>
                            </div>
                            <div className="border rounded-sm w-[35%] p-1 flex flex-row justify-center items-center">
                              <button onClick={() => addCart(items)}>
                                <IoMdAdd />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="w-[25%] flex flex-row justify-around items-center">
                          {invoice.subTotal}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl my-5">This is a checking!!!</h1>
                    <NavLink
                      to={"/"}
                      className="text-2xl text-black duration-300 bg-[#F3F3F3] hover:bg-[#717FE0] hover:text-white px-6 py-1 my-2 rounded-full"
                    >
                      All Product
                    </NavLink>
                  </div>
                )}
              </tbody>
            </table>
          </div>
          <hr />
          <div className="flex flex-row justify-between max-sm:flex-wrap items-center">
            <div className="flex flex-row justify-around p-5 w-[50%] max-sm:justify-start max-sm:p-0 max-sm:my-5 max-sm:flex-wrap max-sm:w-full md:w-[70%]">
              <input
                className="border p-3 rounded-full"
                type="text"
                placeholder="Coupen Code"
              />
              <button className="bg-[#F3F3F3] px-6 py-3 font-semibold rounded-full max-sm:my-3">
                APPLY COUPON
              </button>
            </div>
            <div>
              <button className="bg-[#F3F3F3] px-6 py-3 font-semibold rounded-full">
                UPDATE CART
              </button>
            </div>
          </div>
        </div>
        <div className="xl:w-[27%] h-full border p-5 m-3 max-sm:w-[90%] max-sm:p-2 md:w-[80%]">
          <div className="p-2">
            <h2 className="text-2xl font-bold p-6 max-sm:p-0 max-sm:text-xl">
              CART TOTAL
            </h2>
            <div className="flex flex-row justify-around items-center w-[40%]">
              <h3 className="text-xl p-3 m-1 max-sm:pt-8 max-sm:px-0 max-sm:text-[1rem]">
                Subtotal:
              </h3>
              <p className="text-xl text-black/80 p-3 m-1 max-sm:pt-8">$45</p>
            </div>
            <hr />
          </div>
          <div className="flex flex-row justify-around max-sm:flex-wrap max-sm:justify-start max-sm:w-full">
            <div className="p-2">
              <h3 className="text-xl my-2 ml-1 max-sm:text-[1rem] max-sm:my-0">
                Shipping:
              </h3>
            </div>
            <div className="xl:w-[68%] max-sm:w-full p-2">
              <p className="my-2 text-black/60 max-sm:my-[0px]">
                There are no shipping methods available. Please double check
                your address, or contact us if you need any help.
              </p>
              <h4 className="font-semibold text-black/65 max-sm:my-5 max-sm:text-[1rem] max-sm:font-normal">
                CALCULATE SHIPPING
              </h4>
              <select className="my-2 p-2 outline-none text-black/45 border max-sm:p-2 max-sm:w-full md:w-full" name="fruits">
                <option value="" disabled selected>
                  Select a Country...
                </option>
                <option value="apple">INDIA</option>
                <option value="banana">USA</option>
                <option value="cherry">RUSSIA</option>
              </select>

              <input
                className="my-2 outline-none border p-2 max-sm:w-full md:w-full"
                type="text"
                placeholder="State/Country..."
              />
              <input
                className="my-2 outline-none border p-2 max-sm:w-full md:w-full"
                type="text"
                placeholder="Pincode/Zip"
              />
              <button className="block px-8 py-3 text-lg text-black/70 hover:bg-[#717FE0] hover:text-white duration-300 font-medium rounded-full my-4 bg-[#F3F3F3]">
                UPDATE TOTALS
              </button>
            </div>
          </div>
          <hr />
          <div>
            <div>
              <div className="flex flex-row justify-around w-[40%]">
                <h2 className="text-xl p-3 m-1">Total:</h2>
                <p className="text-xl text-black/80 p-3 m-1">$65</p>
              </div>
              <div className="flex flex-row justify-center">
                <button className="px-12 py-3 text-lg text-white hover:bg-[#717FE0] hover:text-white duration-300 font-medium rounded-full my-4 bg-black max-sm:py-3 max-sm:text-sm">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
