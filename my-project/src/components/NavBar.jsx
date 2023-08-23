import React, {useState, useEffect} from 'react';

import {BsChatSquareDots} from 'react-icons/bs';
import {
    FaFacebookF, 
    FaTwitter, 
    FaInstagram,
    FaBars
} from 'react-icons/fa';

function NavBar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center md:absolute z-10 text-white bg-slate-500'>
        <ul className='hidden sm:flex px-4'>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#Gallery">Gallery</a> 
            </li>
            <li>
                <a href="#Deals">Deals</a>
            </li>
            <li>
                <a href="#Contact">Contact</a>
            </li>
        </ul>
        <div className='flex justify-between'>
            <FaFacebookF className='mx-4 cursor-pointer active:opacity-90' />
            <FaTwitter className='mx-4 cursor-pointer active:opacity-90' />
            <FaInstagram className='mx-4 cursor-pointer active:opacity-90' />
        </div>
        {/*Humberger icons*/}
        <div onClick={handleNav} className='sm:hidden z-10'>
            <FaBars size={20} className='cursor-pointer' />
        </div>
        {/* mobile-icons*/}
        <div
        onClick={handleNav} 
        className={ 
            nav ? 'overflow-y-hidden md:hidden ease-in-out duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 flex flex-col w-full'
            : 'absolute top-0 h-screen left-[-100%] ease-in-out duration-duration-800'
        }>
        <ul className='h-full w-full text-center pt-12 '>
            <li className='text-2xl py-8'>
                <a href="/">Home</a>
            </li>
            <li className='text-2xl py-8'>
                <a href="#Gallery">Gallery</a> 
            </li>
            <li className='text-2xl py-8'>
                <a href="#Deals">Deals</a>
            </li>
            <li className='text-2xl py-8'>
                <a href="#Contact">Contact</a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar;