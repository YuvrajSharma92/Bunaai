import React from 'react'
import SwiperSlider from '../Layout/Swiper'
import NewArrivals from './NewArrivals'

export default function Home() {
  return (
    <>
    <SwiperSlider/>
    <div className='my-6'>
        <div className='flex items-center justify-center gap-4 mx-10 cursor-crosshair'>
             <div className='overflow-hidden'>
                <img className='hover:scale-105 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453010/Bunaai1_xzkppi.webp" alt="" />
             </div>
             <div className='overflow-hidden'>
               <img className='hover:scale-105 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453010/Bunaai2_sidavf.webp" alt="" />
             </div>
             <div className='overflow-hidden'>
               <img className='hover:scale-105 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453011/Bunaai3_jb84as.webp" alt="" />
             </div>
        </div>
        <div className='flex justify-center gap-4 mx-10 cursor-crosshair mt-3'>
             <div className='w-[35%] overflow-hidden'>
               <img className='hover:scale-105 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453011/Bunaai4_vriict.webp" alt="" />
             </div>
             <div className='w-[35%] overflow-hidden'>
                <img className='hover:scale-105 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453012/Bunaai5_ajndqj.webp" alt="" />
             </div>
        </div>
    </div>
    <NewArrivals/>
    </>
  )
}
