import React from 'react'

function Form() {
  return (
    <div id='Contact' className='max-w-[1140px] m-auto w-full p-4 py-15'>
        <h1 className='text-center text-gray-700 font-bold'>Send us a message</h1>
        <p className='text-center text-gray-700'>We're Standing by!</p>
        <div className='grid md:grid-cols-2'>
            <img src="./Images/third.jpg" alt="contact-pic"
              className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
            />
            <form>
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2' type="text" placeholder='First'/>
                    <input className='border m-2 p-2' type="text" placeholder='Last'/>
                    <input className='border m-2 p-2' type="text" placeholder='Email'/>
                    <input className='border m-2 p-2' type="text" placeholder='phone'/>
                    <input className='border col-span-2 p-2 m-2' type="text" placeholder='address'/>
                    <textarea className='border col-span-2 p-2 m-2' cols="15" rows="10" placeholder='Text...'></textarea>
                    <button className='col-span-2 m-2 rounded-xl active:bg-violet-100 focus:outline-none focus:ring focus:ring-violet-100'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form