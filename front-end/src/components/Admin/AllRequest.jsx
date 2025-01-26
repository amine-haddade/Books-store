import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {  ArrowUpDown, BookDown, BookOpenCheck, House, LibraryBig, LogOut, Plus, Search, FilePenLine, Trash2, Users, CircleX, X } from 'lucide-react'
import UserProfil from'../../assets/Enemy.jpg'
import book from'../../assets/atomic.png'
function AllRequest() {
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
              {/* <NavLink  className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><House size={24} className="pr-1 text-gray-400" /><span>home</span></NavLink> */}
              <NavLink  to='/Home' className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><House size={24} className="pr-1 text-gray-400" /><span>Home</span></NavLink>
              <NavLink to='/AllUsers' className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><Users size={24}  className="pr-1 text-gray-400"/><span>All users</span></NavLink>
              <NavLink to='/AllBooks' className={({ isActive }) =>   `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}` }><LibraryBig size={24}  className="pr-1 text-gray-400" /><span>All books</span></NavLink>
              <NavLink to="/AllRequest" className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><BookDown size={24} className="pr-1  text-gray-400 " /><span>All request</span></NavLink>
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
    
              {/*content */}



              <div className=" p-4">
              <div className='w-full flex flex-col bg-white p-3 gap-3 rounded-xl shadow-xl'>
                <div className='flex justify-between px-3 '>
                  <h1 className='text-lg'>All reservation request</h1>
                  <div className='flex gap-4  '>
                    <h2 className='flex  gap-1 items-center text-base'>A-Z  <ArrowUpDown size={20} className='text-gray-600'/></h2>
                    <button className='flex  gap-1 items-center cursor-pointer   transition-all duration-300 text-white py-2 px-2 text-sm capitalize bg-green-500 rounded-md '><Plus size={18}/>accept all </button>
                    <button className='flex  gap-1 items-center cursor-pointer   transition-all duration-300 text-white py-2 px-2 text-sm capitalize bg-red-500 rounded-md '><X  size={18}/>camcel all </button>
                  </div>
                </div>
                <div className='w-full p-2 flex flex-col justify-between   '>
                  <div  className='grid  justify-between items-center bg-bgadmin grid-cols-[2fr_2fr_1fr_1fr_1fr_2fr] rounded-lg px-3 py-3'>
                    <span className='capitalize text-gray-700 text-[13px]'>book</span>
                    <span className='capitalize text-gray-700 text-[13px]'>user requested</span>
                    <span className='capitalize text-gray-700 text-[13px]'>status</span>
                    <span className='capitalize text-gray-700 text-[13px]'>start date</span>
                    <span className='capitalize text-gray-700 text-[13px]'>due date</span>
                    <span className='capitalize text-gray-700 text-[13px] mx-auto'>action</span>
                  </div>

                {/* list request */}
              
                  <div  className='grid  justify-between items-center bg-white grid-cols-[2fr_2fr_1fr_1fr_1fr_2fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={book} alt="" className='w-10 h-14 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                       <div className='flex items-center gap-2 pt-1'>
                          <img src={UserProfil} alt="" className='w-10 h-10 rounded-full object-cover ' />
                          <div className='flex flex-col '>
                            <h1 className='capitalize text-sm leading-[0.8] '>Amine Haddade</h1>
                            <span className='text-[12px] text-gray-400 font-normal'>amine@gmail.com</span>
                          </div>
                       </div>
                       <div className='capitalize text-yellow-800   text-[12px] font-medium py-[1px]  rounded-3xl bg-yellow-200 max-w-[80px] flex items-center justify-center  '><span>pending</span></div>
                      <div className='capitalize text-gray-700 text-sm    '>dec 19 2024</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                          <div className='capitalize text-green-800 hover:bg-green-300  text-sm font-medium py-1  rounded-3xl bg-green-50 w-[140px] flex items-center justify-center transition-all duration-200  '>
                            <span>approved request</span>
                          </div>
                          <div className='text-red-600 rounded-full w-8 h-8 flex items-center justify-center bg-red-50 hover:bg-red-200 transition-all duration-200'>

                            <CircleX  size={18} color="#ff0000" />
                          </div>
                      </span>
                  </div>
                  <div  className='grid  justify-between items-center bg-white grid-cols-[2fr_2fr_1fr_1fr_1fr_2fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={book} alt="" className='w-10 h-14 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                       <div className='flex items-center gap-2 pt-1'>
                          <img src={UserProfil} alt="" className='w-10 h-10 rounded-full object-cover ' />
                          <div className='flex flex-col '>
                            <h1 className='capitalize text-sm leading-[0.8] '>Amine Haddade</h1>
                            <span className='text-[12px] text-gray-400 font-normal'>amine@gmail.com</span>
                          </div>
                       </div>
                       <div className='capitalize text-red-800   text-[12px] font-medium py-[1px]  rounded-3xl bg-red-200 max-w-[80px] flex items-center justify-center  '><span>cancled</span></div>
                      <div className='capitalize text-gray-700 text-sm    '>dec 19 2024</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                          <div className='capitalize text-green-800 hover:bg-green-300  text-sm font-medium py-1  rounded-3xl bg-green-50 w-[140px] flex items-center justify-center transition-all duration-200  '>
                            <span>approved request</span>
                          </div>
                          <div className='text-red-600 rounded-full w-8 h-8 flex items-center justify-center bg-red-50 hover:bg-red-200 transition-all duration-200'>

                            <CircleX  size={18} color="#ff0000" />
                          </div>
                      </span>
                  </div>
                  <div  className='grid  justify-between items-center bg-white grid-cols-[2fr_2fr_1fr_1fr_1fr_2fr] rounded-lg px-3 py-3'>
                      <div className='flex items-center gap-2 pt-1'>
                        <img src={book} alt="" className='w-10 h-14 object-cover rounded-sm ' />
                         <h1 className='capitalize text-gray-700 text-sm  '>Amine Haddade</h1>
                      </div>
                       <div className='flex items-center gap-2 pt-1'>
                          <img src={UserProfil} alt="" className='w-10 h-10 rounded-full object-cover ' />
                          <div className='flex flex-col '>
                            <h1 className='capitalize text-sm leading-[0.8] '>Amine Haddade</h1>
                            <span className='text-[12px] text-gray-400 font-normal'>amine@gmail.com</span>
                          </div>
                       </div>
                       <div className='capitalize text-green-800   text-[12px] font-medium py-[1px]   rounded-3xl bg-green-200 max-w-[80px] flex items-center justify-center  '><span>approved</span></div>
                      <div className='capitalize text-gray-700 text-sm    '>dec 19 2024</div>
                      <span className='capitalize text-gray-700 text-sm '>dec 19 2024</span>
                      <span className='capitalize text-gray-700 text-[13px] cursor-pointer text-center mx-auto flex items-center gap-3' >
                          <div className='capitalize text-green-800 hover:bg-green-300  text-sm font-medium py-1  rounded-3xl bg-green-50 w-[140px] flex items-center justify-center transition-all duration-200  '>
                            <span>approved request</span>
                          </div>
                          <div className='text-red-600 rounded-full w-8 h-8 flex items-center justify-center bg-red-50 hover:bg-red-200 transition-all duration-200'>

                            <CircleX  size={18} color="#ff0000" />
                          </div>
                      </span>
                  </div>
              </div>
              
              </div>
          </div>
        </div>
        </div>
    
     
               
    
        
      );
}

export default AllRequest
