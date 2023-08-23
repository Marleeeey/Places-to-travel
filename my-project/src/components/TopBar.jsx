import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
import {BsChatSquareDots} from 'react-icons/bs';

function TopBar() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
            <BsChatSquareDots size={30} className='cursor-pointer text-[var(--color-primary-dark)] mr-2'/>
            <h1 className='text-xl font-bold text-gray-700 cursor-pointer active:opacity-90 '>WEAKAWAY</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle className='mr-1.5 text-[var(--color-primary-dark)] cursor-pointer active:opacity-90'/>
                <p className='text-sm text-gray-700'>9AM - 5PM</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='mr-1.5 text-[var(--color-primary-dark)] cursor-pointer active:opacity-90'/>
                <p className='text-sm text-gray-700'>+212 635223234</p>
            </div>
            <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md active:opacity-90'>Get a free Quote</button>
        </div>
    </div>
  )
}

export default TopBar