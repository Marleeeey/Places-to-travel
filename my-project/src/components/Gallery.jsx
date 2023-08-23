import React from 'react';

function Gallery() {
  return (
    <div id='Gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-6 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img src="./Images/spaa.jpg" alt="our-clients" className='w-full h-full object-cover'/>
            </div>
            <div>
                <img src="./Images/tsaaa.jpg" alt="our-clients" className='w-full h-full object-cover'/>
            </div>
            <div>
                <img src="./Images/view-1.jpg" alt="our-clients" className='w-full h-full object-cover'/>
            </div>
            <div>
                <img src="./Images/view-2.jpg" alt="our-clients" className='w-full h-full object-cover'/>
            </div>
            <div>
                <img src="./Images/view-3.jpg" alt="our-clients" className='w-full h-full object-cover'/>
            </div>
            <div>
                <img src="./Images/tsaaa.jpg" alt="our-clients" className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Gallery