import React from 'react'
import { ChevronRight,BookCheck, Clock4, Brain } from 'lucide-react'
function Collection() {
  return (
    <div className='flex flex-col gap-5 items-center justify-center pb-14 dark:text-white '>
      <h1 className='md:text-5xl text-3xl text-center '>Special Collections</h1>
      <p className='text-base text-gray-500 mb-10 text-center dark:text-gray-300 '>Discover our carefully selected collections to meet your specific needs</p>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-10 gap-8 text-white'>
            <div className='flex flex-col p-10 rounded-2xl shadow-md bg-gradient-to-br from-purple-500 to-indigo-600  gap-4'>
                <BookCheck size={36} />
                <h1 className='capitalize text-2xl font-bold '>Timeless Classics</h1>
                <p className='text-base text-gray-100'> A selection of the greatest classics of world literature</p>
                <div className='flex gap-1 group items-center cursor-pointer'>
                    <span>Explorer</span>
                    <ChevronRight size={20} className='group-hover:translate-x-1  transition-all duration-200' />
                </div>
            </div>
            <div className='flex flex-col p-10 rounded-2xl shadow-md bg-gradient-to-br from-blue-500 to-cyan-600  gap-4'>
                <Brain size={36} />
                <h1 className='capitalize text-2xl font-bold '> Personal development </h1>
                <p className='text-base text-gray-100 '>Tools for your personal and professional growth</p>
                <div className='flex gap-1 group items-center cursor-pointer'>
                    <span>Explorer</span>
                    <ChevronRight size={20} className='group-hover:translate-x-1  transition-all duration-200' />
                </div>
            </div>
            <div className='flex flex-col p-10 rounded-2xl shadow-md bg-gradient-to-br from-amber-500 to-orange-600  gap-4'>
                <Clock4 size={36} />
                <h1 className='capitalize text-2xl font-bold '>Nouveautés</h1>
                <p className='text-base text-gray-100 '> Les dernières additions à notre bibliothèque numérique</p>
                <div className='flex gap-1 group items-center cursor-pointer'>
                    <span>Explorer</span>
                    <ChevronRight size={20} className='group-hover:translate-x-1  transition-all duration-200' />
                </div>
            </div>
      </div>
    </div>
  )
}

export default Collection
