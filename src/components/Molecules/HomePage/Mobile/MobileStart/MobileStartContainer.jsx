import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MobileStart from "./MobileStart";

const MobileStartContainer = () => {
  return (
    <>
      <Swiper loop="true">
        <SwiperSlide>
          <MobileStart />
        </SwiperSlide>
        <SwiperSlide>
          <MobileStart />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MobileStartContainer;
