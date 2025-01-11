import React from 'react'
import cover from '../../assets/cover3.png'
function Subscribe() {
  return (
    <div className='my-9 w-full h-64 py-8  bg-black flex flex-col gap-4 justify-center items-center text-white bg-cover'
    style={{ backgroundImage: `url(${cover})` }}>
       <h1 className='text-3xl text-center capitalize'>subscribe to receive <br /> the latest updates </h1>
       <form  className='w-64'>
            <input type="text" className='text-lg  text-black outline-none p-2 w-full' placeholder='enter email'/>
            <button className='w-full py-3 px-4 mt-4 bg-blue-600 text-white hover:bg-blue-500    duration-300'>
                 subscribe
            </button>
       </form>
    </div>
  )
}

export default Subscribe
