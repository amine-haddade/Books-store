import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {  ArrowUpDown, BookDown, BookOpenCheck, House, LibraryBig, LogOut, Plus, Search, FilePenLine, Trash2, Users } from 'lucide-react'
import UserProfil from'../../assets/Enemy.jpg'
import Nav from '../library/dashboard/Layout/Nav';

function AllBooks() {
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
              <Link className='  p-1 transition duration-300 text-black w-full rounded-3xl border border-gray-100 shadow-sm     flex items-center   capitalize  absolute  top-96  justify-between '>
                <img className='rounded-full object-cover w-8 h-8 '  src={UserProfil} alt="" />
                <div className='flex   flex-col  '>
                  <span className='text-[14px] text-black '>amine haddade</span>
                  <span className='text-[10px] text-gray-500  '>amine@gmail.com</span>
    
                </div>
                <LogOut size={28} color="#ff0000" />            
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


              {/*  content */}
          <div className=" p-4">
              <div className='w-full flex flex-col bg-white p-3 gap-3 rounded-xl shadow-xl'>
                <div className='flex justify-between px-3 '>
                  <h1 className='text-lg'>All Books</h1>
                  <div className='flex gap-6  '>
                    <h2 className='flex  gap-1 items-center text-base'>A-Z  <ArrowUpDown size={20} className='text-gray-600'/></h2>
                    <NavLink to='/AddBook' className='flex  gap-1 items-center cursor-pointer  hover:bg-blue-500 transition-all duration-300 text-white py-2 px-4 text-base capitalize bg-blue-700 rounded-md '><Plus size={24}/>add new book  </NavLink>
                  </div>
                </div>
                <div className='w-full p-2 flex flex-col justify-between   '>
                  <div  className='grid  justify-between items-center bg-bgadmin grid-cols-[3fr_1fr_1fr_1fr_1fr] rounded-lg px-3 py-3'>
                    <span className='capitalize text-gray-700 text-[13px]'>title</span>
                    <span className='capitalize text-gray-700 text-[13px]'>author</span>
                    <span className='capitalize text-gray-700 text-[13px]'>gategorie</span>
                    <span className='capitalize text-gray-700 text-[13px]'>date created</span>
                    <span className='capitalize text-gray-700 text-[13px] mx-auto'>action</span>
                  </div>

                {/* list books */}
              
                  <div  className='grid  justify-between items-center bg-white grid-cols-[3fr_1fr_1fr_1fr_1fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={UserProfil} alt="" className='w-8 h-12 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                      <span className='capitalize text-gray-700 text-sm '>smull tack</span>
                      <div className='capitalize text-gray-700 text-sm    '>fantasia</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                        <FilePenLine size={18} color="#00b36e" />
                        <Trash2 size={18} color="#ff0000" />
                      </span>
                  </div>
                  <div  className='grid  justify-between items-center bg-white grid-cols-[3fr_1fr_1fr_1fr_1fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={UserProfil} alt="" className='w-8 h-12 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                      <span className='capitalize text-gray-700 text-sm '>smull tack</span>
                      <div className='capitalize text-gray-700 text-sm    '>fantasia</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                        <FilePenLine size={18} color="#00b36e" />
                        <Trash2 size={18} color="#ff0000" />
                      </span>
                  </div>
                  <div  className='grid  justify-between items-center bg-white grid-cols-[3fr_1fr_1fr_1fr_1fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={UserProfil} alt="" className='w-8 h-12 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                      <span className='capitalize text-gray-700 text-sm '>smull tack</span>
                      <div className='capitalize text-gray-700 text-sm    '>fantasia</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                        <FilePenLine size={18} color="#00b36e" />
                        <Trash2 size={18} color="#ff0000" />
                      </span>
                  </div>
                  <div  className='grid  justify-between items-center bg-white grid-cols-[3fr_1fr_1fr_1fr_1fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={UserProfil} alt="" className='w-8 h-12 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                      <span className='capitalize text-gray-700 text-sm '>smull tack</span>
                      <div className='capitalize text-gray-700 text-sm    '>fantasia</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                        <FilePenLine size={18} color="#00b36e" />
                        <Trash2 size={18} color="#ff0000" />
                      </span>
                  </div>
                  <div  className='grid  justify-between items-center bg-white grid-cols-[3fr_1fr_1fr_1fr_1fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={UserProfil} alt="" className='w-8 h-12 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                      <span className='capitalize text-gray-700 text-sm '>smull tack</span>
                      <div className='capitalize text-gray-700 text-sm    '>fantasia</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                        <FilePenLine size={18} color="#00b36e" />
                        <Trash2 size={18} color="#ff0000" />
                      </span>
                  </div>
                  <div  className='grid  justify-between items-center bg-white grid-cols-[3fr_1fr_1fr_1fr_1fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={UserProfil} alt="" className='w-8 h-12 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                      <span className='capitalize text-gray-700 text-sm '>smull tack</span>
                      <div className='capitalize text-gray-700 text-sm    '>fantasia</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                        <FilePenLine size={18} color="#00b36e" />
                        <Trash2 size={18} color="#ff0000" />
                      </span>
                  </div>
                  <div  className='grid  justify-between items-center bg-white grid-cols-[3fr_1fr_1fr_1fr_1fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={UserProfil} alt="" className='w-8 h-12 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                      <span className='capitalize text-gray-700 text-sm '>smull tack</span>
                      <div className='capitalize text-gray-700 text-sm    '>fantasia</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                        <FilePenLine size={18} color="#00b36e" />
                        <Trash2 size={18} color="#ff0000" />
                      </span>
                  </div>
                  <div  className='grid  justify-between items-center bg-white grid-cols-[3fr_1fr_1fr_1fr_1fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={UserProfil} alt="" className='w-8 h-12 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                      <span className='capitalize text-gray-700 text-sm '>smull tack</span>
                      <div className='capitalize text-gray-700 text-sm    '>fantasia</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                        <FilePenLine size={18} color="#00b36e" />
                        <Trash2 size={18} color="#ff0000" />
                      </span>
                  </div>
                  <div  className='grid  justify-between items-center bg-white grid-cols-[3fr_1fr_1fr_1fr_1fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={UserProfil} alt="" className='w-8 h-12 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                      <span className='capitalize text-gray-700 text-sm '>smull tack</span>
                      <div className='capitalize text-gray-700 text-sm    '>fantasia</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                        <FilePenLine size={18} color="#00b36e" />
                        <Trash2 size={18} color="#ff0000" />
                      </span>
                  </div>
                  <div  className='grid  justify-between items-center bg-white grid-cols-[3fr_1fr_1fr_1fr_1fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={UserProfil} alt="" className='w-8 h-12 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                      <span className='capitalize text-gray-700 text-sm '>smull tack</span>
                      <div className='capitalize text-gray-700 text-sm    '>fantasia</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                        <FilePenLine size={18} color="#00b36e" />
                        <Trash2 size={18} color="#ff0000" />
                      </span>
                  </div>
            
                      
            
                      
                </div>
            </div>
          </div>
        </div>
    
     
      </div>
      );
}

export default AllBooks
