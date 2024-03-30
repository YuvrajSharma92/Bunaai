import React, { useRef, useState } from 'react';
import Lehenga from './Lehenga'

import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperSlider() {
  return (
    <>
     <h1 className='text-3xl font-serif text-center cursor-pointer'>SHOP BY CATEGORIES</h1>
     <div className='flex justify-center items-center w-full cursor-crosshair h-[300px] bg-red-400'>
        
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 600,
          disableOnInteraction: false,
    
        }}
       
        modules={[Autoplay, Pagination, Navigation]}

        slidesPerView={
            window.screen.width > 768 ? 7 : window.screen.width > 640 ? 5 : 2
        }
        loop ={true}
      >
        <SwiperSlide>

            <div className='w-[200px] rounded-full px-4'>
            <img className='rounded-full' src="https://www.bunaai.com/cdn/shop/files/TANGO_DRAPED_SAREE_WITH_BLOUSE_-min.jpg?v=1694109479&width=180" alt="" />

            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-[200px] rounded-full px-4'>
            <img className='rounded-full' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711539498/indianwearonline-8875_fayitu.webp" alt="" />

            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-[200px] rounded-full px-4'>
            <img className='rounded-full' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711539483/indianwearonline-8459_amxlui.webp" alt="" />

            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[200px] rounded-full px-4'>
            <img className='rounded-full' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453012/buydressesonlineindia-05770_xlevxr.webp" alt="" />

            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-[200px] rounded-full px-4'>
            <img className='rounded-full' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453012/Bunaai5_ajndqj.webp" alt="" />

            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-[200px] rounded-full px-4'>
            <img className='rounded-full' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711452992/Arrivals-bg-3_y0kxty.webp" alt="" />

            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[200px] rounded-full px-4'>
            <img className='rounded-full' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711452992/Arrivals-img-8_kw1zpi.webp" alt="" />

            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-[200px] rounded-full px-4'>
            <img className='rounded-full' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711527441/Indianwearjan24-3303_ewryun.webp" alt="" />
            </div>
        </SwiperSlide>

      </Swiper>
     </div>
     <Lehenga/>
    </>
  );
}
