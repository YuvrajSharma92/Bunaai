import React, { useState } from 'react'
// import Codes from ""
import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function NavBar() {
    const [open, setOpen] = useState(false)
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const [change, setChange] = useState()


    const updateflag = (e) => {
        const currcode = e.value;
        const counutryCode = counutryList[currcode]
        const newSrc = `https://flagsapi.com/${counutryCode}/flat/64.png`;
        const img = e.parentElement.querySelector("img");
        img.src = newSrc;
    }

    const handleChange = (e) => {
        setChange(e.targer.value)
        // console.log(handleChange);
    }

    const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json"
    const dropdowns = document.querySelectorAll("#dropdowns select")


    for (let select of dropdowns) {
        for (currcode in CountryList) {
            // console.log(code);
            let newOption = document.createElement("option");
            newOption.innerText = currcode;
            newOption.value = currcode;

            if (select.name === "from" && currcode === "INR") {
                newOption.selected = "selected"
            }

            select.append(newOption)
        }
    }
    return (
        <>

            {/*  */}
            <div className='sticky top-0 z-[4]'>
                <div className='bg-red-400 w-full h-[60px] flex items-center justify-center'>
                    <div className='w-[90%] sm:w-[30%] bg-white rounded-md'>
                        <input className='w-[80%]  h-[40px] rounded-md outline-none pl-2' type="search" name="" id="" />
                        <i className="text-[20px] pl-3 bi bi-search"></i>
                    </div>

                </div>
                {/*  */}
                {/*  */}
                <nav className="bg-[#f0f4f7] py-2 ">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1711453039/web_logo_kywb81.avif" className="" alt="" />
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
                            <ul className="flex flex-col font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row pr-3 text-[19px]">
                                <Link to={"/"} className={`block py-2 px-3 md:p-0 hover:underline ${location == "/" ? "text-blue-600" : "text-blue-600"
                                    }`}>HOME
                                </Link>
                                <Link to={"/About"}
                                    className={`block py-2 px-3 md:p-0 hover:underline ${location == "/About" ? "text-blue-600" : "text-black"
                                        }`}>ABOUT
                                </Link>
                                <Link to={"/Dresses"}
                                    className={`block py-2 px-3 md:p-0 hover:underline ${location == "/Dresses" ? "text-blue-600" : "text-black"
                                        }`}>DRESSES
                                </Link>
                                <Link to={"/Sarees"}
                                    className={`block py-2 px-3 md:p-0 hover:underline ${location == "/Sarees" ? "text-blue-600" : "text-black"
                                        }`}>SAREES
                                </Link>
                                <Link to={"/Juttis"}
                                    className={`block py-2 px-3 md:p-0 hover:underline ${location == "/Juttis" ? "text-blue-600" : "text-black"
                                        }`}>JUTTIS
                                </Link>
                                <Link to={"/Jewellery"}
                                    className={`block py-2 px-3 md:p-0 hover:underline ${location == "/Jewellery" ? "text-blue-600" : "text-black"
                                        }`}>JEWELLERY
                                </Link>
                                <Link to={"/Sale"}
                                    className={`block py-2 px-3 md:p-0 hover:underline ${location == "/Sale" ? "text-blue-600" : "text-blue-600"
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
                        <div className=' items-center justify-around flex pr-2 ' id='dropdowns'>
                            <img className='w-[30%] ' src="https://flagsapi.com/IN/flat/64.png" alt="" />
                            <select onClick={() => {
                                setChange(!change)
                            }} name="from" className='flex'>
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="AUD">AUD</option>
                            </select>




                            {/* <ul className='flex gap-4 pr-6'>
                            <li> <i className="text-[16px] sm:text-[20px] bi bi-cart"></i></li>
                            <li><i className=" text-[16px] sm:text-[23px] bi bi-person-plus"></i></li>
                        </ul> */}
                        </div>
                    </div>
                </nav>
            </div>
            <script src="Codes.js"></script>
        </>
    )
}
