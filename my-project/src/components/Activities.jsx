import React from 'react'

function Activities() {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-80px]'>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold cursor-pointer'>Resorts</h3>
        <img src="./Images/second.jpg" alt="the-second-one" className='w-full h-full object-cover reltive border-4 border-white cursor-pointer drop-shadow-2xl' />
      </div>
      { /*                                           Another Pic                                            */}
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold cursor-pointer'>Resorts</h3>
        <img src="./Images/third.jpg" alt="the-second-one" className='w-full h-full object-cover reltive border-4 border-white cursor-pointer drop-shadow-2xl ' />
      </div>
      { /*                                           Another Pic                                            */}
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold cursor-pointer'>Resorts</h3>
        <img src="./Images/friends.jpg" alt="the-second-one" className='w-full h-full object-cover reltive border-4 border-white cursor-pointer drop-shadow-2xl ' />
      </div>
    </div>
  )
}

export default Activities;