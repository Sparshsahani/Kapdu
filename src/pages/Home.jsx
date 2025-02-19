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
      className="mySwiper max-sm:h-screen md:h-screen xl:h-screen"
    >
      <SwiperSlide  className="relative z-[-20] bg-[url('images/imgslides/slide-01.jpg')] bg-center bg-cover">
        <h5 className="absolute max-sm:top-[30%] max-sm:left-[5%] max-sm:text-[1.3rem]  md:top-[30%] md:left-[8%] md:text-2xl lg:top-[37%] lg:left-[12%] lg:text-[1.5rem] animate__animated animate__fadeInDown animate__delay-1s">
          Women Collection 2018
        </h5>
        <h2 id="banner_title" className="absolute max-sm:top-[38%] max-sm:left-[5%] max-sm:text-5xl max-sm:font-semibold max-sm:text-[#333434] md:top-[40%] md:left-[8%] md:text-6xl md:text-semibold lg:top-[45%] lg:left-[11.5%] lg:text-6xl animate__animated animate__fadeInUp animate__delay-2s">
          NEW SEASON
        </h2>
        <button className="absolute max-sm:bottom-[35%] max-sm:left-[4%] md:bottom-[38%] md:left-[8%] lg:bottom-[35%] lg:left-[12%] bg-[#7A86E1] text-white rounded-3xl px-10 py-3 font-semibold animate__animated animate__zoomIn animate__delay-3s">
          Shop Now
        </button>
      </SwiperSlide>

      <SwiperSlide className="relative bg-[url('images/imgslides/slide-02.jpg')] bg-center bg-cover">
        <h5  className="absolute max-sm:top-[26%] max-sm:left-[6%] max-sm:text-[1.3rem]  md:top-[30%] md:left-[8%] md:text-2xl lg:top-[37%] lg:left-[12%] lg:text-[1.8rem] animate__animated animate__rollIn animate__delay-1s">
          Men New-Season
        </h5>
        <h2 id="banner_title" className="absolute max-sm:top-[35%] max-sm:left-[6%] max-sm:text-5xl max-sm:font-semibold md:top-[40%] md:left-[8%] md:text-6xl md:text-semibold lg:top-[45%] lg:left-[11.5%] lg:text-6xl animate__animated animate__lightSpeedInRight animate__delay-2s">
          JACKETS & COATS
        </h2>
        <button className="absolute max-sm:bottom-[32%] max-sm:left-[5%] lg:bottom-[35%] md:bottom-[38%] md:left-[8%] lg:left-[12%] bg-[#7A86E1] text-white rounded-3xl px-10 py-3 font-semibold animate__animated animate__fadeInDown animate__delay-3s">
          Shop Now
        </button>
      </SwiperSlide>

      <SwiperSlide className="relative bg-[url('images/imgslides/slide-03.jpg')] bg-center bg-cover">
        <h5 className="absolute max-sm:top-[27%] max-sm:left-[5%] max-sm:text-[1.3rem] md:top-[30%] md:left-[8%] md:text-2xl xl:top-[37%] xl:left-[12%] text-[1.5rem] animate__animated animate__rollIn animate__delay-1s">
          Men Collection 2018
        </h5>
        <h2 id="banner_title" className="absolute max-sm:top-[35%] max-sm:left-[5%] max-sm:text-5xl max-sm:font-semibold md:top-[40%] md:left-[8%] md:text-6xl md:text-semibold lg:top-[45%] lg:left-[11.5%] lg:text-6xl animate__animated animate__rotateInUpRight animate__delay-2s">
          NEW ARRIVALS
        </h2>
        <button className="absolute max-sm:bottom-[32%] max-sm:left-[4%] md:bottom-[38%] md:left-[8%] lg:bottom-[35%] lg:left-[12%] bg-[#7A86E1] text-white rounded-3xl px-10 py-3 font-semibold animate__animated animate__rotateIn animate__delay-3s ">
          Shop Now
        </button>
      </SwiperSlide>
    </Swiper>
  );
}

export default Home;
