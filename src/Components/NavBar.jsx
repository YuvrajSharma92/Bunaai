import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function NavBar() {
    const [open, setOpen] = useState(false)
    const location = useLocation().pathname;
    const navigate = useNavigate();
    return (
        <>

            {/*  */}
            <div className='sticky top-0 z-[4]'>
            <div className='bg-red-400 w-full h-[60px] flex items-center justify-around'>
                <div className='w-[90%] sm:w-[30%] bg-white rounded-md'>
                   <input className='w-[80%]  h-[40px] rounded-md outline-none pl-2' type="search" name="" id="" />  
                   <i className="text-[20px] pl-3 bi bi-search"></i>
                </div>
            </div>
            {/*  */}
            {/*  */}
            <nav className="bg-[#f0f4f7] py-2 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453039/web_logo_kywb81.avif" className="pl-7" alt="" />
                    <button
                        onClick={() => {
                            setOpen(!open)
                        }}
                    >

                        <i className={`md:hidden text-[34px] pr-5 bi bi-${open ? "x" : "list"
                            }`}>

                        </i>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul className="flex flex-col font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row">
                            <Link to={"/"} className={`block py-2 px-3 md:p-0 ${location == "/" ? "text-blue-600" : "text-blue-600"
                                }`}>HOME
                            </Link>
                            <Link to={"/About"}
                                className={`block py-2 px-3 md:p-0 ${location == "/About" ? "text-blue-600" : "text-black"
                                    }`}>ABOUT
                            </Link>
                            <Link to={"/Dresses"}
                                className={`block py-2 px-3 md:p-0 ${location == "/Dresses" ? "text-blue-600" : "text-black"
                                    }`}>DRESSES
                            </Link>
                            <Link to={"/Sarees"}
                                className={`block py-2 px-3 md:p-0 ${location == "/Sarees" ? "text-blue-600" : "text-black"
                                    }`}>SAREES
                            </Link>
                            <Link to={"/Juttis"}
                                className={`block py-2 px-3 md:p-0 ${location == "/Juttis" ? "text-blue-600" : "text-black"
                                    }`}>JUTTIS
                            </Link>
                            <Link to={"/Jewellery"}
                                className={`block py-2 px-3 md:p-0 ${location == "/Jewellery" ? "text-blue-600" : "text-black"
                                    }`}>JEWELLERY
                            </Link>
                            <Link to={"/Sale"}
                                className={`block py-2 px-3 md:p-0 ${location == "/Sale" ? "text-blue-600" : "text-blue-600"
                                    }`}>SALE
                            </Link>
                        </ul>
                    </div>

                    <div className={`w-full ${open ? "block" : "hidden"}`}>
                        <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row">
                            <Link to={"/"}
                                className={`block py-2 px-3 md:p-0 ${location == "/" ? "text-blue-600" : "text-black"
                                    }`}>HOME
                            </Link>
                            <Link to={"/About"}
                                className={`block py-2 px-3 md:p-0 ${location == "/About" ? "text-blue-600" : "text-black"
                                    }`}>ABOUT
                            </Link>
                            <Link to={"/Dresses"}
                                className={`block py-2 px-3 md:p-0 ${location == "/Dresses" ? "text-blue-600" : "text-black"
                                    }`}>DRESSES
                            </Link>
                            <Link to={"/Sarees"}
                                className={`block py-2 px-3 md:p-0 ${location == "/Sarees" ? "text-blue-600" : "text-black"
                                    }`}>SAREES
                            </Link>
                            <Link to={"/Juttis"}
                                className={`block py-2 px-3 md:p-0 ${location == "/Juttis" ? "text-blue-600" : "text-black"
                                    }`}>JUTTIS
                            </Link>
                            <Link to={"/Jewellery"}
                                className={`block py-2 px-3 md:p-0 ${location == "/Jewellery" ? "text-blue-600" : "text-black"
                                    }`}>JEWELLERY
                            </Link>
                            <Link to={"/Sale"}
                                className={`block py-2 px-3 md:p-0 ${location == "/Sale" ? "text-blue-600" : "text-blue-600"
                                    }`}>SALE
                            </Link>
                        </ul>
                    </div>
                    <div className='flex items-center justify-around w-[10%] h-[50px]'>
                    <i className="text-[16px] sm:text-[20px] bi bi-cart"></i>
                    <i className=" text-[16px] sm:text-[23px] bi bi-person-plus"></i>
                </div>
                </div>
            </nav>
            </div>
        </>
    )
}
