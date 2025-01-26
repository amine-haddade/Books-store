import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {  BookDown, BookOpenCheck, House, LibraryBig, LogOut, Search, Users } from 'lucide-react'
import UserProfil from'../../assets/Enemy.jpg'

function AdminHome() {

  return (
    <div className=' flex h-screen'>
      {/*  sidbare */}
      <div className='flex py-6 px-3 flex-col  bg-white w-72 sticky top-0  h-screen overflow-y-auto '>
        <div className='flex gap-2 items-center '>
            <div className='flex items-center justify-center w-9 h-9 mb-7  rounded-full bg-blueadmin'>
              <BookOpenCheck size={24} color="#ffffff" />
            </div>
            <h1 className='text-blueadmin text-3xl pb-7  border-dashed border-gray-500 '>BookWise</h1>
        </div>
        <div className="border-dashed border-t border-gray-400 mb-2"></div>

        <ul className='flex flex-col gap-1 relative  '>
          <NavLink to="/Home"  className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><House size={24} className="pr-1 text-gray-400" /><span>home</span></NavLink>
          <NavLink  to='/AllUsers' className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><Users size={24} className="pr-1 text-gray-400" /><span>All Users</span></NavLink>
          <NavLink to='/AllBooks' className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><LibraryBig size={24}  className="pr-1 text-gray-400"/><span>All books</span></NavLink>
          <NavLink to='/AllRequest' className={({ isActive }) =>   `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}` }><BookDown size={24}  className="pr-1 text-gray-400" /><span>All requeste</span></NavLink>
          {/* <NavLink className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><House size={24} className="pr-1  text-gray-400 " /><span>All Users</span></NavLink> */}
          <Link className='  p-1 transition duration-300 text-black w-full rounded-3xl border border-gray-100 shadow-sm     flex items-center   capitalize  absolute  top-96    '>
              <div><img className='rounded-full object-cover w-8 h-8 mr-2 relative'  src={UserProfil} alt="" /> <div className='absolute w-3 h-3 rounded-full bg-green-500 left-6 top-7'></div></div>
            <div className='flex   flex-col relative mr-6 '>
              <span className='text-[14px] font-medium text-black '>amine haddade</span>
              <span className='text-[10px] text-gray-500 font-medium '>amine@gmail.com</span>

            </div>
            <LogOut size={28} color="#ff0000" className=''/>            
          </Link>

        </ul>
      </div>
      <div className='bg-bgadmin  w-full overflow-y-auto'>
      {/* navbare */}
          <header className='flex justify-between sticky top-0  items-center mb-4 backdrop-blur-sm drop-shadow-lg bg-white/15 p-4'>
            <div className=''>
              <h1 className='text-xl  text-black pb-1  '>Welcome Amine</h1>
              <p className='text-sm text-gray-500'>Monitor All Of Your Project And Task here</p>
            </div>
            <div>
              <div className='border-gray-500 px-2  py-2 text-gray-500 w-80 flex gap-2 bg-white rounded-md '>
              <Search className='text-base'  />
                <input className=' text-base w-full text-black outline-none border-none bg-transparent ' placeholder='Serach users ,books By Title Author Or genre' type="text" />
                </div>
            </div>

          </header>

          

          <div className="h-[200vh] p-4">
      
            Home content
          
          </div>
      </div>
    </div>

 
           

    
  );
}

export default AdminHome;
