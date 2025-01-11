import { Search } from 'lucide-react'
import React from 'react'

function Serch() {
  return (
    <div className='h-48 w-full bg-gradient-to-br from-purple-500 to-indigo-600 py-9 flex flex-col gap-6 justify-center items-center'>
      <h1 className='md:text-4xl text-2xl text-white capitalize'>find your next book</h1>
      <div className='bg-white flex   py-2 items-center justify-between px-4 gap-2 rounded-full md:w-1/2 '>
        <input type="text" placeholder='sercher by title or book name ' 
        className='bg-transparent outline-none border-none text-base flex-grow'
        />
        <button className='text-white rounded-3xl bg-blue-600 py-2 px-4 md:px-6 flex gap-2 md:gap-3 items-center hover:bg-blue-500  duration-200 transition-all'><Search size={20}  /> <span>serche</span></button>

      </div>
    </div>
  )
}

export default Serch
