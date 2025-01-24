import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";


export default function Cart() {
  const { cart, removeCart, invoice } = useContext(productContext);
  return (
    <>
      {cart.length > 0 ? (
        <div className="z-20 w-[25%] h-screen absolute top-0 right-0 p-5 bg-white shadow-2xl">
          <div className="flex flex-row justify-around items-center p-3 my-5">
            <h1 className="text-xl font-bold">YOUR CART</h1>
            <RxCross1 className="text-3xl" />
          </div>
          {cart.map((items) => {
            return (
              <div
                key={items.id}
                className="overflow-hidden flex flex-row justify-start items-center p-3"
              >
                <img className="w-[20%]" src={items.image} alt="" />
                <div className="flex flex-col justify-start ml-9">
                  <h2 className="text-lg text-black/60">{items.title}</h2>
                  <h3 className="text-lg text-black/60 font-medium"></h3>
                  {
                    <p className="font-semibold text-black/60">
                      {invoice.count}
                      {invoice.count > 1} X ${items.price}
                    </p>
                  }
                  <button
                    onClick={() => removeCart(items)}
                    className="bg-gray-700 text-white rounded-full py-2 mt-3"
                  >
                    remove Items
                  </button>
                </div>
                <div className="text-2xl absolute bottom-[15%] left-[15%]">
                  Total:{invoice.subTotal}
                </div>
                <div className="text-lg absolute flex flex-row justify-center w-[90%] bottom-[8%]">
                  <div className="bg-black text-white py-2 px-5 rounded-full mr-3">
                    <NavLink to={'/ShopingCart'}><button>VIEW CART</button></NavLink>
                  </div>
                  <div className="bg-black text-white py-2 px-5 rounded-full ">
                    <button>CHECK OUT</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-[25%] z-10 h-full absolute top-0 right-0 p-5 bg-white shadow-2xl">
          <Link to={"/"} className='text-2xl text-black duration-300 bg-[#F3F3F3] hover:bg-[#717FE0] hover:text-white px-6 py-1 my-2 rounded-full'>All Product</Link>
        </div>
      )}
    </>
  );
}
