import React from 'react';
import {BsChatSquareDots} from 'react-icons/bs';

function Foteer() {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
      <div className='flex items-center justify-center m-auto'>
        <BsChatSquareDots size={30} className='text-[var(--color-primary-dark)] mr-2 cursor-pointer'/>
        <h1 className='text-xl font-bold text-gray-700 cursor-pointer active:opacity-95'>Weakaway</h1>
      </div>
    </div>
  )
}

export default Foteer