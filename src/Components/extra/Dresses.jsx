import React from 'react'

export default function Dresses() {
  return (
    <>
      <div>
        <img src="https://www.bunaai.com/cdn/shop/collections/577256121-dresses.jpg?v=1705986991" alt="" />
      </div>
      <div className=' px-5 mt-3'>
        <div className='text-center pt-3 cursor-pointer'>
          <h3 className='text-[24px] font-serif'>Accentuate your style with</h3>
          <h1 className='text-4xl font-semibold text-red-400'>DRESSES</h1>
          <p className='text-[16px]'>Explore a section of breezy fluid silhouettes to flatter your body.</p>
          <h2 className='text-red-500 font-medium text-[20px] underline pt-3'>16 Product-</h2>

        </div>
        <div className='w-full grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5  mx-4 cursor-pointer'>
          <div className='border-solid w-[80%] hidden sm:hidden md:block'>
            <ul className='flex gap-2 justify-center py-1'>
              <li className='bg-red-500 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-green-600 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-blue-500 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-emerald-300 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-sky-800 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-sky-300 w-[25px] h-[25px] rounded-full'></li>
            </ul>

            <ul className='flex gap-2 justify-center py-1'>
              <li className='bg-pink-300 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-orange-400 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-gray-950 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-lime-300 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-indigo-600 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-fuchsia-600 w-[25px] h-[25px] rounded-full'></li>
            </ul>

            <ul className='flex gap-2 justify-center py-1'>
              <li className='bg-blue-300 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-cyan-300 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-blue-950 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-pink-800 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-amber-400 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-red-800 w-[25px] h-[25px] rounded-full'></li>
            </ul>

            <ul className='flex gap-2 justify-center py-1'>
              <li className='bg-red-500 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-green-600 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-blue-500 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-emerald-300 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-sky-800 w-[25px] h-[25px] rounded-full'></li>
              <li className='bg-sky-300 w-[25px] h-[25px] rounded-full'></li>
            </ul>
          </div>

          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg hover:opacity-0 z-0 duration-500' src="https://www.bunaai.com/cdn/shop/products/Sep21-8048.jpg?v=1661784024&width=360" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://www.bunaai.com/cdn/shop/products/Sep21-8035.jpg?v=1661784012&width=360" alt="" />
            </div>
            <h1 className='text-red-600'>SWEETHEART COTTON DRESS</h1>
            <p>₹ 3,600.00</p>
          </div>

          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg  hover:opacity-0 z-0 duration-500' src="https://www.bunaai.com/cdn/shop/files/Bold_Beautiful-7695.jpg?v=1684572918&width=360" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://www.bunaai.com/cdn/shop/files/Bold_Beautiful-7666.jpg?v=1684572918&width=360" alt="" />
            </div>
            <h1 className='text-red-600'>HOT RED COTTON DRESS</h1>
            <p>₹ 3,000.00</p>
          </div>

          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg  hover:opacity-0 z-0 duration-500' src="https://www.bunaai.com/cdn/shop/files/Bold_Beautiful-6414.jpg?v=1684567667&width=360" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://www.bunaai.com/cdn/shop/files/Bold_Beautiful-6359.jpg?v=1684567666&width=360" alt="" />
            </div>
            <h1 className='text-red-600'>MELLOW GREEN WHITE LACE DRESS</h1>
            <p>₹ 3,500.00</p>
          </div>

          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg  hover:opacity-0 z-0 duration-500' src="https://www.bunaai.com/cdn/shop/files/Bold_Beautiful-2861.jpg?v=1684567745&width=360" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://www.bunaai.com/cdn/shop/files/Bold_Beautiful-2879.jpg?v=1684567745&width=360" alt="" />
            </div>
            <h1 className='text-red-600'>CHERRY BLOSSOM EMBROIDERED DRESS</h1>
            <p>₹ 4,310.00</p>
          </div>
        </div>

        <div className='w-full place-content-center cursor-pointer  grid grid-cols-2 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-5 '>

          <div className='rounded-lg w-[90%] py-5 hidden sm:hidden md:block'>
            <h1 className='text-red-500 pt-10 text-2xl'> DISCOUNT</h1>
            <input type="checkbox" name="" id="" /> 0% - 5% (73) (0)<br></br>
            <input type="checkbox" name="" id="" /> 6% - 10% (73) (17)<br></br>
            <input type="checkbox" name="" id="" /> 11% - 15% (7) (0)<br></br>
            <input type="checkbox" name="" id="" /> 21% -25% (6) (0)<br></br>
            <input type="checkbox" name="" id="" /> 36% - 40% (1) (0)<br></br>
          </div>
          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg hover:opacity-0 z-0 duration-500' src="https://www.bunaai.com/cdn/shop/products/indianwearonline-0274.jpg?v=1674903551&width=360" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://www.bunaai.com/cdn/shop/products/indianwearonline-0258.jpg?v=1674903552&width=360" alt="" />
            </div>
            <h1 className='text-red-600'>MINT GREEN SEQUIN MAXI DRESS</h1>
            <p>₹  3,000.00</p>
          </div>
          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg  hover:opacity-0 z-0 duration-500' src="https://www.bunaai.com/cdn/shop/products/buydressesonlineindia-05770.jpg?v=1661756542&width=360" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://www.bunaai.com/cdn/shop/products/buydressesonlineindia-05779.jpg?v=1661756551&width=360" alt="" />
            </div>
            <h1 className='text-red-600'>AMARA BELT COTTON MAXI DRESS</h1>
            <p>₹ 4,380.00</p>
          </div>

          <div className='w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg  hover:opacity-0 z-0 duration-500' src="https://www.bunaai.com/cdn/shop/files/Bold_Beautiful-7097.jpg?v=1684565574&width=360" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 duration-500 z-0 top-0 left-0' src="https://www.bunaai.com/cdn/shop/files/Bold_Beautiful-7021.jpg?v=1684565575&width=360" alt="" />
            </div>
            <h1 className='text-red-600'>PASTEL SHADES COTTON DRESS</h1>
            <p>₹ 3,500.00</p>
          </div>

          <div className='w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg duration-500 hover:opacity-0 z-0' src="https://www.bunaai.com/cdn/shop/products/new-6118.jpg?v=1661810604&width=360" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 duration-500 left-0' src="https://www.bunaai.com/cdn/shop/products/new-6084.jpg?v=1661810578&width=360" alt="" />

            </div>
            <h1 className='text-red-600'>MULTI COLOR COTTON DRESS</h1>
            <p>₹ 4,260.00</p>
          </div>
        </div>
      </div>




      <div className=' px-5 mt-3'>
        <div className='w-full grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 place-content-center cursor-pointer'>
          <div className=' py-5 pt-14 text-gray-500 hidden sm:hidden md:hidden lg:block'>
          </div>
          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg hover:opacity-0 z-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535214/Bold_Beautiful-7305_nvvgcv.webp" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535214/Bold_Beautiful-7264_kcifjb.webp" alt="" />
            </div>
            <h1 className='text-red-600'>MIMOSA MULTICOLOR LACE DRESS</h1>
            <p>₹ 3,600.00</p>
          </div>

          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg  hover:opacity-0 z-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535206/Bold_Beautiful-5989_autz8k.webp" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535206/Bold_Beautiful-6032_hqa84b.webp" alt="" />
            </div>
            <h1 className='text-red-600'>PINK WHITE AQUA COTTON DRESS</h1>
            <p>₹ 3,500.00</p>
          </div>

          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg  hover:opacity-0 z-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535206/Bold_Beautiful-0642_lcr1dh.webp" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535206/Bold_Beautiful-0596_kw4lps.webp" alt="" />
            </div>
            <h1 className='text-red-600'>BLACK RUST TIER COTTON DRESS</h1>
            <p>₹ 3,000.00</p>
          </div>

          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg  hover:opacity-0 z-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535206/Bold_Beautiful-2861_sp1ttg.webp" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535205/Bold_Beautiful-2879_lne7hh.webp" alt="" />
            </div>
            <h1 className='text-red-600'>CHERRY BLOSSOM EMBROIDERED DRESS</h1>
            <p>₹ 4,310.00</p>
          </div>
        </div>

        <div className='w-full place-content-center cursor-pointer  grid grid-cols-2 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-5 '>
          <div className='rounded-lg w-[90%] py-5 hidden sm:hidden md:hidden lg:block'>
          </div>
          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg hover:opacity-0 z-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535205/Bold_Beautiful-0226_i3sdhw.webp" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535205/Bold_Beautiful-0196_cabmad.webp" alt="" />
            </div>
            <h1 className='text-red-600'>PARROT GREEN POMPOM DRESS</h1>
            <p>₹  3,200.00</p>
          </div>
          <div className='rounded-lg w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg  hover:opacity-0 z-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535218/buydressesonlineindia-06120_mtuxag.webp" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 left-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535218/buydressesonlineindia-06077_easze9.webp" alt="" />
            </div>
            <h1 className='text-red-600'>RYLEE COTTON MAXI DRESS</h1>
            <p>₹ 4,380.00</p>
          </div>

          <div className='w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg  hover:opacity-0 z-0 duration-500' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535218/buydressesonlineindia-05668_g9fkvi.webp" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 duration-500 z-0 top-0 left-0' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535215/buydressesonlineindia-05662_z7pthy.webp" alt="" />
            </div>
            <h1 className='text-red-600'>HOT PINK COTTON MAXI DRESS</h1>
            <p>₹ 4,500.00</p>
          </div>

          <div className='w-[90%] py-5'>
            <div className='relative rounded-lg'>
              <img className='rounded-lg duration-500 hover:opacity-0 z-0' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535221/SummerSoiree-4039_uucnm0.webp" alt="" />
              <img className='rounded-lg absolute hover:opacity-0 z-0 top-0 duration-500 left-0' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711535220/SummerSoiree-4016_aifaxs.webp" alt="" />

            </div>
            <h1 className='text-red-600'>BLACK LUREX PANT & CROP TOP</h1>
            <p>₹ 3,260.00</p>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  )
}
