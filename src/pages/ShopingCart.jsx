import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

export default function ShopingCart() {
  const { cart, removeCart, invoice,addCart } = useContext(productContext);
  console.log(cart);

  return (
    <>
      <section className="h-full w-full flex flex-row justify-center">
        <div className="w-[50%] h-full border p-5 m-3">
          <table className="w-full">
            <thead className="font-medium text-black/75">
              <tr className="w-full flex flex-row justify-around mb-3">
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
                      className="flex flex-row justify-around items-center p-8"
                    >
                      <td className="w-[25%]">
                        <div className="flex flex-row justify-around items-center">
                        <div className="w-[80%]">
                          <img
                            className="w-full p-3"
                            src={items.image}
                            alt=""
                          />
                        </div>
                        <div>
                          {items.title}
                        </div>
                        </div>
                        
                      </td>
                      <td className="w-[25%] flex flex-row justify-around items-center">{items.price}</td>
                      <td className="w-[25%] ">
                        <div className="flex flex-row justify-between p-2">
                          <div className="border rounded-sm w-[35%] p-1 flex flex-row justify-center items-center">
                            <button onClick={(()=>removeCart(items))}>
                              <RiSubtractFill />
                            </button>
                          </div>
                          <div className="border w-[35%] bg-[#F3F3F3] p-1 flex flex-row justify-center items-center">
                            <h3>{invoice.count}</h3>
                          </div>
                          <div className="border rounded-sm w-[35%] p-1 flex flex-row justify-center items-center">
                            <button onClick={(()=>addCart(items))}>
                              <IoMdAdd />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="w-[25%] flex flex-row justify-around items-center">{invoice.subTotal}</td>
                    </tr>
                  );
                })
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-3xl my-5">This is a checking!!!</h1>
                  <NavLink to={"/"} className='text-2xl text-black duration-300 bg-[#F3F3F3] hover:bg-[#717FE0] hover:text-white px-6 py-1 my-2 rounded-full'>All Product</NavLink>
                </div>
              )}
            </tbody>
          </table>
          <hr />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-around p-5 w-[50%]">
              <input
                className="border p-3 rounded-full"
                type="text"
                placeholder="Coupen Code"
              />
              <button className="bg-[#F3F3F3] px-6 py-3 font-semibold rounded-full">
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
        <div className="w-[27%] h-full border p-5 m-3">
          <div className="p-2">
            <h2 className="text-2xl font-bold p-6">CART TOTAL</h2>
            <div className="flex flex-row justify-around w-[40%]">
              <h3 className="text-xl p-3 m-1">Subtotal:</h3>
              <p className="text-xl text-black/80 p-3 m-1">$45</p>
            </div>
            <hr />
          </div>
          <div className="flex flex-row justify-around ">
            <div className="p-2">
              <h3 className="text-xl my-2 ml-1">Shipping:</h3>
            </div>
            <div className="w-[68%] p-2">
              <p className="my-2  text-black/60">
                There are no shipping methods available. Please double check
                your address, or contact us if you need any help.
              </p>
              <h4 className="font-semibold text-black/65">
                CALCULATE SHIPPING
              </h4>
              <input
                className="my-2 border p-2"
                type="text"
                placeholder="here"
              />
              <input
                className="my-2 border p-2"
                type="text"
                placeholder="here"
              />
              <input
                className="my-2 border p-2"
                type="text"
                placeholder="here"
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
                <button className="px-12 py-3 text-lg text-white hover:bg-[#717FE0] hover:text-white duration-300 font-medium rounded-full my-4 bg-black">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
