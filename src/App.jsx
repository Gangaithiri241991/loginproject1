import { useState } from 'react'
import Navbar from './component/navbar'
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from './component/home'
import Login from './component/login'
import SignUp from './component/signup';
import Product from './component/product';
import Pricing from './component/pricing';
import Contact from './component/contact';
import LandingPage from './component/landingpage'
import './App.css'
//import Login1 from './component/login1'
function App() {
 

  return (
    <>
       <div className='hom'>
        <Navbar/>
        <Routes>
          <Route exact path="/" element ={<Home/>}/>
          <Route  path="/login" element ={<Login/>}/>
          <Route  path="/signup" element ={<SignUp/>}/>
          <Route  path="/product" element ={<Product/>}/>
          <Route  path="/pricing" element ={<Pricing/>}/>
          <Route  path="/contact" element ={<Contact/>}/>
          <Route  path="/joinus" element ={<SignUp/>}/>
          <Route  path="/land" element ={<LandingPage/>}/>
         
          </Routes>
      
        </div>
    </>
  )
}

export default App
