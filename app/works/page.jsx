"use client";

import { dataSlide } from "./(data)/dataSlide";
import "../globals.css";
import Footer from "@/components/Footer/Footer";
import NavSlide from "@/components/WorksComponents/ButtonSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slide from "@/components/WorksComponents/Slide";
import { useEffect } from "react";


const Works = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página até o topo quando a página é carregada
  }, [])

  return (
    <div className="absolute top-[63px] lg:static w-full bg-white mb-4 rounded-b-xl lg:rounded-xl dark:bg-[#111111]">
      <div className=" p-4 lg:p-10" data-aos="fade" data-aos-duration="1200">
        <h2 className="after-effect after:left-36">Works</h2>
        <div className="my-8">
          <Swiper
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-130%", 0, -500],
              },
              next: {
                shadow: true,
                translate: ["130%", 0, -500],
              },
            }}
            className="mySwiper"
            modules={[Pagination, EffectCreative, Autoplay]}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
          >
            {dataSlide.map((item) => (
              <SwiperSlide key={item.id} className="px-3 pb-4">
                <Slide item={item} />
              </SwiperSlide>
            ))}
            <NavSlide />
          </Swiper>
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Works;
