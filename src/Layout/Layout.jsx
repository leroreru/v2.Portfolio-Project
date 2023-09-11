import React, { Component, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet,useLocation } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css';


const Layout =()=>  {

   useEffect(()=>{
       Aos.init({
           duration: 800,
           delay: 50,
       });
   }) 
        return (
            <div className='container'>
                <div className='lg:flex lg:mt-16'>
                    <div data-aos="fade-right" data-aos-once='true'  className='lg:w-1/3 '>
                        <Sidebar />
                    </div>
                    <div data-aos="fade-up" className=' w-full mt-10 lg:ml-10 lg:mt-0'>
                        <Outlet  />
                    </div>
                </div>
            </div>
        )
}

export default Layout