import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperSlider() {
  return (
    <>
    <div className='cursor-crosshair'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
     
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
            <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453028/Slider1_lsl2i4.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711511306/website_banner-min_yj0v3p.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453037/Slider8_xoztj4.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453029/Slider7_zd09pa.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453029/Slider4_e14qot.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453029/Slider6_yfka1u.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453029/Slider5_bxfayy.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453029/Slider3_jdxqzx.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}
