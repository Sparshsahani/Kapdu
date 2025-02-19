import React from "react";

function Banner() {
  return (
    <>
    
      <section  className="py-12 flex flex-row justify-center max-sm:gap-y-10 max-sm:flex-wrap max-sm:p-4 md:gap-y-10 md:gap-x-8 md:flex-wrap lg:gap-x-10">
        <div className="max-sm:h-full max-sm:w-full md:w-[45%] xl:w-1/4 border-solid border-2 relative hover:before:w-full hover:before:h-full hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:bg-[rgba(113,127,224,0.7)] before:duration-300 hover:text-white" >
          <h2 className="absolute max-sm:font-bold max-sm:text-3xl max-sm:text-black/80 max-sm:p-4 md:font-bold md:text-3xl md:p-8">Women</h2>
          <p className="absolute max-sm:top-[30%] max-sm:left-[6%] max-sm:text-black/60 md:top-[20%] md:left-[5%] md:p-3 md:my-1">Spring 2018</p>
          <img className="lg:h-full" src="images/imgslides/banner-01.jpg" alt="" />
        </div>
        <div className="max-sm:h-full max-sm:w-full md:w-[45%] xl:w-1/4 border-solid  border-2 relative hover:before:h-full hover:before:w-full hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:bg-[rgba(113,127,224,0.7)] before:duration-300 hover:text-white">
          <h2 className="absolute max-sm:font-bold max-sm:text-3xl max-sm:text-black/80 max-sm:p-4 md:font-bold md:text-3xl md:p-8">Men</h2>
          <p className="absolute max-sm:top-[30%] max-sm:left-[6%] max-sm:text-black/60 md:top-[20%] md:left-[5%] md:p-3 md:my-1">Spring 2018</p>
          <img className="lg:h-full" src="images/imgslides/banner-02.jpg" alt="" />
        </div>
        <div className="max-sm:h-full max-sm:w-full md:w-[45%] xl:w-1/4 border-solid  border-2 relative hover:before:h-full hover:before:w-full hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:bg-[rgba(113,127,224,0.7)] before:duration-300 hover:text-white">
          <h2 className="absolute max-sm:font-bold max-sm:text-3xl max-sm:text-black/80 max-sm:p-4 md:font-bold md:text-3xl md:p-8 ">Accessories</h2>
          <p className="absolute max-sm:top-[30%] max-sm:left-[6%] max-sm:text-black/60 md:top-[20%] md:left-[5%] md:p-3 md:my-1">New Trends</p>
          <img className="lg:h-full" src="images/imgslides/banner-03.jpg" alt="" />
        </div>
      </section>
    </>
  );
}

export default Banner;
