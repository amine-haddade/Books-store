import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {  BookDown, House, LibraryBig, Search, Users } from 'lucide-react'

function Nav() {
  return (
    <div className=' flex h-screen'>
      {/*  sidbare */}
      <div className='flex flex-col py-6 px-3 bg-white w-64 sticky top-0  h-screen overflow-y-auto '>
        <h1 className='text-blue-700 pb-7 text-3xl border-dashed border-gray-500 '>BookWise</h1>
        <div className="border-dashed border-t border-gray-400 mb-2"></div>

        <ul className='flex flex-col gap-1  '>
          <Link className='py-3 transition duration-300 text-black w-full rounded-md px-3 hover:bg-blueadmin hover:text-white text-base flex items-center gap-2 capitalize '><House size={26} className="pr-1 " /><span>home</span></Link>
          <Link className='py-3 transition duration-300 text-black w-full rounded-md px-3 hover:bg-blueadmin hover:text-white text-base flex items-center gap-2   capitalize'><Users size={26}className="pr-1 " /><span>All Users</span></Link>
          <Link className='py-3 transition duration-300 text-black w-full rounded-md px-3 hover:bg-blueadmin hover:text-white text-base flex items-center gap-2   capitalize'><LibraryBig size={26} /><span>All books</span></Link>
          <Link className='py-3 transition duration-300 text-black w-full rounded-md px-3 hover:bg-blueadmin hover:text-white text-base flex items-center gap-2   capitalize'><BookDown size={26} /><span>All requeste</span></Link>
          <Link className='py-3 transition duration-300 text-black w-full rounded-md px-3 hover:bg-blueadmin hover:text-white text-base flex items-center gap-2   capitalize'><House size={26} className="pr-1 " /><span>All Users</span></Link>
          <Link className='py-3 transition duration-300 text-black w-full rounded-md px-3 hover:bg-blueadmin hover:text-white text-base flex items-center gap-2  capitalize  '><House size={26} className="pr-1 " /><span>All Users</span></Link>
         
         
         
         

        </ul>
      </div>
      <div className='bg-bgadmin p-4 w-full overflow-y-auto'>
      {/* navbare */}
          <header className='flex justify-between sticky top-0  items-center mb-4  '>
            <div className=''>
              <h1 className='text-xl  text-black pb-1  '>Welcome Amine</h1>
              <p className='text-sm text-gray-500'>Monitor All Of Your Project And Task here</p>
            </div>
            <div>
              <div className='border-gray-500 px-2  py-2 text-gray-500 w-72 flex gap-2 bg-white rounded-md '>
              <Search className='text-base'  />
                <input className=' text-base text-black outline-none border-none bg-transparent ' placeholder='Serach users ,books By Title Author Or genre' type="text" />
                </div>
            </div>

          </header>

          

          <main>
            <Outlet/>
          </main>
      </div>
    </div>
  )
}

export default Nav
