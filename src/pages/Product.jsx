import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'

export default function Product() {
  const { product, addCart } = useContext(productContext);
  const navigator = useNavigate();
  // const MySwal = withReactContent(Swal);
  // console.log(product);
  
  
  // console.log(product);

  const abc = () => {
   navigator('/Cart')
  }
  return (
    <>
    
      <section className="max-sm:mt-4 max-sm:p-4 xl-mt-10 xl:p-10">
        <div className="flex flex-row flex-wrap justify-center items-center max-sm:gap-x-28 md:gap-x-16 md:gap-y-8 md:mx-5 md:justify-start lg:justify-start lg:gap-20 xl:mx-[8rem] xl:p-5">
          {product.map((pro) => {
            return (
              <div
                key={pro.id}
                className="max-sm:w-[100%] max-sm:my-8 md:w-[30%] md:my-5 lg:w-[20%] xl:w-[20%] h-[2/4]">
                <div className="overflow-hidden relative">
                  <img
                    className="object-contain duration-700 hover:scale-110 "
                    src={pro.image}
                    alt=""/>
                  <button onClick={() =>{
                    addCart(pro)
                    abc()
                  }} className="absolute bottom-[5%] left-[25%] max-sm:text-sm max-sm:font-normal max-sm:px-6 max-sm:py-2 md:left-[20%] md:text-sm md:font-normal text-lg font-semibold hover:bg-black hover:text-white rounded-full bg-white px-6 py-2 xl:left-[25%]">
                    Add to Cart
                  </button>
                </div>
                <h2 className="max-sm:text-sm max-sm:my-2 md:text-black/60 text-lg text-black/60">{pro.title}</h2>
                <h3 className="max-sm:text-sm max-sm:text-black/55 md:text-black/55 text-lg text-black/60 font-medium">
                  ${pro.price}
                </h3>
              </div>
            );
          })}

        </div>
          <div className=" my-20 flex flex-row justify-center ">
            <button className="bg-[#E6E6E6] rounded-full px-9 py-4 max-sm:text-md max-sm:px-12 max-sm:py-3 font-medium text-black/70">
              LOAD MORE
            </button>
          </div>
      </section>
    </>
  );
}
