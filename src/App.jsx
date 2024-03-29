import React from 'react'
import Home from './Components/Home/Home'
import Sarees from './Components/extra/Sarees'
import Dresses from './Components/extra/Dresses'
import Juttis from './Components/extra/Juttis'
import About from './Components/extra/About'
import Jewellery from './Components/extra/Jewellery'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


export default function App() {
  return (
    <>
     <BrowserRouter>
    <NavBar/>
    <Routes>
       <Route exact path ="/" element ={<Home/>}/>
       <Route exact path ="/Dresses" element ={<Dresses/>}/>
       <Route exact path ="/Sarees" element ={<Sarees/>}/>
       <Route exact path ="/Juttis" element ={<Juttis/>}/>
       <Route exact path ="/About" element ={<About/>}/>
       <Route exact path ="/Jewellery" element ={<Jewellery/>}/>

    </Routes>
   </BrowserRouter>
    <Footer/>
    </>
  )
}
