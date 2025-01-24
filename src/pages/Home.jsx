import React from "react";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "animate.css";

function Home() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={true}
     
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper max-sm:h-screen "
    >
      <SwiperSlide className="relative z-[-20]">
       <img className="max-sm:h-full w-full  lg:object-contain" src="imgslides/slide-01.jpg" alt="" />
        <h5 className="absolute max-sm:top-[37%] max-sm:left-[9%] max-sm:text-[1.3rem] lg:top-[37%] lg:left-[12%] lg:text-[1.5rem] animate__animated animate__fadeInDown animate__delay-1s">
          Women Collection 2018
        </h5>
        <h2 className="absolute max-sm:top-[45%] max-sm:left-[7%] max-sm:text-[2.7rem] lg:top-[45%] lg:left-[11.5%] lg:text-6xl animate__animated animate__fadeInUp animate__delay-2s">
          NEW SEASON
        </h2>
        <button className="absolute max-sm:bottom-[30%] max-sm:left-[8%] lg:bottom-[35%] lg:left-[12%] bg-blue-400 text-white rounded-3xl px-10 py-3 font-semibold animate__animated animate__zoomIn animate__delay-3s">
          Shop Now
        </button>
      </SwiperSlide>

      <SwiperSlide>
        <img className="max-sm:h-full w-full lg:object-contain" src="imgslides/slide-02.jpg" alt="" />
        <h5 className="absolute max-sm:top-[37%] max-sm:left-[9%] max-sm:text-[1.3rem] lg:top-[37%] lg:left-[12%] lg:text-[1.8rem] animate__animated animate__rollIn animate__delay-1s">
          Men New-Season
        </h5>
        <h2 className="absolute max-sm:top-[45%] max-sm:left-[7%] max-sm:text-[2.3rem] lg:top-[45%] lg:left-[11.5%] lg:text-6xl animate__animated animate__lightSpeedInRight animate__delay-2s">
          JACKETS & COATS
        </h2>
        <button className="absolute max-sm:bottom-[30%] max-sm:left-[8%] lg:bottom-[35%] lg:left-[12%] bg-blue-400 text-white rounded-3xl px-10 py-3 font-semibold animate__animated animate__fadeInDown animate__delay-3s">
          Shop Now
        </button>
      </SwiperSlide>

      <SwiperSlide>
        <img className="max-sm:h-full w-full lg:object-contain" src="imgslides/slide-03.jpg" alt="" />
        <h5 className="absolute max-sm:top-[37%] max-sm:left-[9%] max-sm:text-[1.3rem] top-[37%] left-[12%] text-[1.5rem] animate__animated animate__rollIn animate__delay-1s">
          Men Collection 2018
        </h5>
        <h2 className="absolute max-sm:top-[45%] max-sm:left-[7%] max-sm:text-[2.3rem] lg:top-[45%] lg:left-[11.5%] lg:text-6xl animate__animated animate__rotateInUpRight animate__delay-2s">
          NEW ARRIVALS
        </h2>
        <button className="absolute max-sm:bottom-[30%] max-sm:left-[8%] lg:bottom-[35%] lg:left-[12%] bg-blue-400 text-white rounded-3xl px-10 py-3 font-semibold animate__animated animate__rotateIn animate__delay-3s ">
          Shop Now
        </button>
      </SwiperSlide>
    </Swiper>
  );
}

export default Home;
