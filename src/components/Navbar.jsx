import React from 'react'
import { Link } from 'react-router-dom'
import home from '../assets/back.jpg'
import logo from '../assets/logo.png'

export default function Navbar(props) {
  return (
    <div className='flex justify-center items-center w-full h-[40vh]'>
      <img src={home} alt="home image" className='w-full h-[50vh]' />
    <div className='flex fixed top-0 w-[98vw] bg-[#041030aa]  sm:h-[80px] p-2'>
      <div className='w-[30vw] p-2 sm:w-[15vw] '><img src={logo} alt='logo' /></div>
        <ul className='flex sm:gap-8 gap-2 sm:justify-end justify-center text-white w-full pr-4 items-center font-bold'>
            <li ><Link to='/'>Home</Link></li>
            <li ><Link to='/services'>Services</Link></li>
            <li ><Link to='/about'>About</Link></li>
            <li ><Link to='/contact'>Contact</Link></li>
        </ul>
    </div>

    <div className='text-5xl font-mono shadow-lg bg-[#041030cc] p-5 pl-10 pr-10  flex items-center absolute mt-[20vh] text-white uppercase font-bold'>{props.title}</div>
    </div>
  )
}
