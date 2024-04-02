import React from 'react'

export default function Footer() {
  return (
    <>
     <div className='bg-red-100 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-7 p-2 mt-3'>
          <div className='w-[90%] py-4'>
            <h1 className='text-[18px] text-[#7a273a] py-3 font-medium'>CATEGORIES</h1>
              <ul className='text-[#7a273a] cursor-pointer'>
               <a href="http://localhost:5173/Dresses"> <li>Dresses</li></a>
              <a href="http://localhost:5173/Sarees"><li>Sarees</li></a>
                <a href="http://localhost:5173/Juttis"><li>juttis</li></a>
                <a href="http://localhost:5173/Sale"><li>Sale</li></a>
                <a href="http://localhost:5173/Jewellery">Jewellrey</a>
                <li>Kurta & Suit Sets</li>
                <li>New Arrivals</li>
                <li>Lehenga Sets</li>
              </ul>
          </div>
          <div className='w-[90%]'>
            <h1 className='text-[18px] text-[#7a273a] py-3 font-medium'>DISCOVER</h1>
               <ul className='text-[#7a273a] cursor-pointer'>
                  <li>Blog</li>
                  <li>About Us</li>
                  <li>Meet The Founder</li>
                  <li>Celebrities in Bunaai</li>
                  <li>Women Of Bunaai</li>
                  <li>Gift Card</li>
                  <li>Sitemap</li>
                  <li>Refer & Earn</li>
               </ul>
          </div>
          <div className='w-[90%] first-letter:'>
             <h1 className='text-[18px] text-[#7a273a] py-3 font-medium'>INFORMATION</h1>
              <ul className='text-[#7a273a] cursor-pointer'>
                <li>Help</li>
                <li>My Account</li>
                <li>Track Order</li>
                <li>Privacy Policy</li>
                <li>Delivery Information</li>
                <li>Store Locator</li>
                <li>Terms of use</li>
                <li>Refund, Exchanges and Returns</li>
              </ul>
          </div>
          <div className='w-[100%]'>
            <h1 className='text-[18px] text-[#7a273a] py-3 font-medium text-center'>CUSTOMER SERVICE</h1>
            <div className=' flex justify-around'>
             <li className='w-[40px] h-[40px]  rounded-full bg-white list-none'><i className="text-[#7a273a] pl-2 text-[24px]  bi bi-facebook"></i></li>
             <li className='w-[40px] h-[40px] rounded-full bg-white list-none'><i className="bi bi-instagram text-[#7a273a] pl-2 text-[24px]"></i></li>
             <li className='w-[40px] h-[40px] rounded-full bg-white list-none'><i className="bi bi-youtube text-[#7a273a] pl-2 text-[24px]"></i></li>
             <li className='w-[40px] h-[40px] rounded-full bg-white list-none'><i className="bi bi-whatsapp text-[#7a273a] pl-2 text-[24px]"></i></li>
          </div>
          </div>
     </div>
    </>
  )
}
