import React from 'react'
import home from '../assets/back.jpg'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <div className='flex justify-center items-center w-[100vw] h-[40vh]'>
      <img src={home} alt="home image" className='w-[100vw] h-[50vh]' />
    <div className='flex fixed top-0 w-[100vw] bg-[#041030cc]  sm:h-[80px] p-2'>
      <div className='w-[30vw] p-2 sm:w-[15vw] '><img src={logo} alt='logo' /></div>
        <ul className='flex sm:gap-8 gap-2 sm:justify-end justify-center text-white w-full pr-4 items-center font-bold'>
            <li ><a href='/#home'>Home</a></li>
            <li ><a href='/#services'>Services</a></li>
            <li ><a href='/#about'>About</a></li>
            <li ><a href='/#contact'>Contact</a></li>
        </ul>
    </div>

    <div className='text-5xl flex items-center absolute mt-[20vh] text-white uppercase font-bold'>Track Shipment</div>
    </div>
  )
}
