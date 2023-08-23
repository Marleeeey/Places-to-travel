import React from 'react';

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
      <img src="./Images/first.jpg" alt="The-Forest" className='w-full h-full object-cover' />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-v-[600px] h-full flex-col text-white p-4 text-green-400'>
        <h1 className='font-bold text-4xl text-green-300'>Find Your Special Trip</h1>
          <h2 className='text-4xl py-4 italic text-green-300'>with Weakaway</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illo, dicta consectetur voluptas voluptate temporibus modi sapiente voluptatem ducimus amet necessitatibus explicabo non, reprehenderit ipsam. Perspiciatis delectus beatae cum tempora?</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;