import React from 'react'
import book1 from '../../assets/book1.png'
function FreeBookSection() {
  return (
    <div className='grid md:grid-cols-2 justify-center items-center gap-6 py-10 px-16 dark:text-white '>
       <div className='flex md:w-1/2  justify-center md:justify-normal     '>
            <img src={book1} alt=""  className='object-cover w-28 md:w-52 h-full translate-x-3   -rotate-6 shadow-xl'/>
            <img src={book1} alt=""  className='object-cover w-28 md:w-52 h-full rotate-6 shadow-lg '/>
       </div>
       <div className='flex flex-col gap-6'>
            <h1 className='  lg:text-4xl text-3xl'>Explore Our Free Books</h1>
            <p className='text-base text-gray-600 pb-4 dark:text-gray-300'>Dive into our collection of free books, available for reading and download. Discover fascinating works by talented authors. Take this opportunity to enrich your knowledge and explore new worlds through our free books</p>
            <button className='py-3 px-4 bg-blue-600 text-white hover:bg-blue-500 self-start   duration-300'>
                explore now
            </button>
       </div>
       
    </div>
  )
}

export default FreeBookSection
