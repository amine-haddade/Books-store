import { BookOpen, Brain, BriefcaseBusiness, Cpu, TestTubeDiagonal, Users } from 'lucide-react'
import React from 'react'

function Categorys() {
  return (
    <div className='dark:text-white '>
        <h1 className='text-4xl font-bold text-center pb-4 pt-7'>Explore Categories</h1>
        <p className='text-md text-gray-500  text-center dark:text-gray-300'>Discover our extensive collection of books across various categories  carefully curated for your<br /> reading pleasure</p>
        <div className='grid lg:grid-cols-6 grid-cols-2 md:grid-cols-4 lg:gap-2 gap-4 justify-center items-center rounded-lg py-24 sm:px-12 px-1'>
            <div className=' group flex items-center justify-center rounded-lg drop-shadow-md py-6 cursor-pointer overflow-hidden   bg-purple-50  text-purple-600 '>
                    <div className='flex flex-col gap-2 group-hover:scale-105 transition-all duration-300  items-center  '>
                        <div className=' py-2 px-4 mb-4 rounded-lg bg-white flex items-center justify-center max-w-16'>
                            <BookOpen size={32} />
                        </div>
                        <h3 className='text-xl text-black capitalize'>Fiction</h3>
                        <p className='text-gray-600'>245 book</p>          
                    </div>
            </div>
            <div className=' group flex items-center justify-center rounded-lg drop-shadow-md py-6 cursor-pointer overflow-hidden bg-blue-50 text-blue-600 '>
                    <div className='flex flex-col gap-2 group-hover:scale-105 transition-all duration-300 items-center  '>
                        <div className=' py-2 px-4 mb-4 rounded-lg bg-white flex items-center justify-center max-w-16'>
                            <BriefcaseBusiness size={32} />
                        </div>
                        <h3 className='text-xl text-black capitalize'>business</h3>
                        <p className='text-gray-600'>24 book</p>          
                    </div>
            </div>
            <div className=' group flex items-center justify-center rounded-lg drop-shadow-md py-6 cursor-pointer overflow-hidden   bg-green-50 text-green-600 '>
                    <div className='flex flex-col gap-2 group-hover:scale-105 transition-all duration-300   '>
                        <div className=' py-2 px-4 mb-4 rounded-lg bg-white flex items-center justify-center max-w-16'>
                            <TestTubeDiagonal size={32} />
                        </div>
                        <h3 className='text-xl text-black capitalize'>scince</h3>
                        <p className='text-gray-600'>895 book</p>          
                    </div>
            </div>
            <div className=' group flex items-center justify-center rounded-lg drop-shadow-md py-6 cursor-pointer overflow-hidden   bg-indigo-50 text-indigo-600 '>
                    <div className='flex flex-col gap-2 group-hover:scale-105 transition-all duration-300 items-center '>
                        <div className=' py-2 px-4 mb-4 rounded-lg bg-white flex items-center justify-center max-w-16'>
                            <Cpu size={32} />
                        </div>
                        <h3 className='text-xl text-black capitalize'>technologie</h3>
                        <p className='text-gray-600'>125 book</p>          
                    </div>
            </div>
            <div className=' group flex items-center justify-center rounded-lg drop-shadow-md py-6 cursor-pointer overflow-hidden   bg-pink-50 text-pink-600 '>
                    <div className='flex flex-col gap-2 group-hover:scale-105 transition-all duration-300  items-center'>
                        <div className=' py-2 px-4 mb-4 rounded-lg bg-white flex items-center justify-center max-w-16'>
                            <Brain size={32} />
                        </div>
                        <h3 className='text-xl text-black capitalize'>Self-Help</h3>
                        <p className='text-gray-600'>105 book</p>          
                    </div>
            </div>
            <div className=' group flex items-center justify-center rounded-lg drop-shadow-md py-6 cursor-pointer overflow-hidden   bg-orange-50 text-orange-600'>
                    <div className='flex flex-col gap-2 group-hover:scale-105 transition-all duration-300  items-center '>
                        <div className=' py-2 px-4 mb-4 rounded-lg bg-white flex items-center justify-center max-w-16'>
                                <Users size={32} />
                        </div>
                        <h3 className='text-xl text-black capitalize'>Biography </h3>
                        <p className='text-gray-600'>245 book</p>          
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default Categorys
