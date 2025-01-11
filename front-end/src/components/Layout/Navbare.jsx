import React from 'react'
import { BookMarked ,LogOut,Menu,Moon,Search,Sun,User} from 'lucide-react'
import { Outlet,Link } from 'react-router-dom'
import { useState } from 'react'
import { GetUsersData } from '../../Context/AppContext'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import SidBare from './SidBare'

function Navbare() {
    const [openSidBare,setOpenSidBare]=useState(false)
    const [openModel,setOpenModel]=useState(false)
    const [openModelSingUp,setOpenModelSingUp]=useState(false)
    const {user,handellogout,darkMode,handelLightMode}=GetUsersData()

    

  return (
    <div>
    <header className=' sticky top-0 w-full flex justify-between items-center  backdrop-blur-sm drop-shadow-lg bg-white/30  dark:bg-transparent dark:text-gray-100  px-16 py-6 md-px-40 z-10 '>
            <div className='text-primary cursor-pointer flex gap-1 items-center text-xl '>
                <BookMarked  />
                <h1 >E-Book</h1>
            </div>
            <div className='flex  items-center gap-20 justify-between  sticky top-0'>
                <ul className='hidden list-none xl:flex  items-center gap-10 justify-between text-sm '>
                    <Link to="/" className='cursor-pointer hover:text-primary duration-300 '>Home</Link>
                    <Link  className='cursor-pointer hover:text-primary duration-300 '>categories</Link>
                    <Link className='cursor-pointer hover:text-primary duration-300 '>discount</Link>
                    <Link className='cursor-pointer hover:text-primary duration-300 '>serch</Link>
                    <Link className='cursor-pointer hover:text-primary duration-300 '>subscribe</Link>
                    {!user && (
                        <>                        {/* <Link to="/login"  className='cursor-pointer hover:text-primary duration-300 ' >login</Link> */}
                        </>
                    )}
                    {user && user.role==="admin" ? (
                            <Link to="/list"  className='cursor-pointer hover:text-primary duration-300 '>list</Link>
                
                    ):null}
                </ul>
                <div className='md:flex gap-4 hidden'>
                    <Search  className='hover:text-primary duration-300 cursor-pointer ' />
                    <div className="relative group">  
                        <User
                            className="hover:text-primary duration-300 cursor-pointer"
                            
                        />
                        
                        <div className="absolute right-1/2 transform translate-x-1/2 top-10  w-32  bg-white rounded-md shadow-lg  translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="py-2">

                            {!user && (
                                <>
                                        <li
                                            onClick={() => setOpenModel(!openModel)}
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                                            Login
                                        </li>
                                        <li 
                                            onClick={()=>{setOpenModelSingUp(!openModelSingUp)}}
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                                            Sign Up
                                        </li>
                                </>
                            )}
                            {user && (
                                <form onSubmit={handellogout}>
                                        <button className='w-full text-start'>
                                            <li className='block w-full px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer'>log out </li>
                                        </button>
                                
                                </form>
                            )}
                            </div>
                        </div>
                    </div>
                    {darkMode ? 
                        <Sun onClick={handelLightMode}    className='hover:text-primary duration-300  cursor-pointer transition-all' />:
                        <Moon onClick={handelLightMode}    className='hover:text-primary duration-300  cursor-pointer transition-all'/>
                    }
                    {user &&(
                        <form onSubmit={handellogout}>
                            <button ><LogOut className="hover:text-red-600 cursor-pointer duration-300" /></button>
                            
                        </form>
                    )}
                </div>
                <div className='block xl:hidden  duration-300 cursor-pointer hover:text-primary '>
                    <Menu size={30} onClick={()=>setOpenSidBare(!openSidBare)}/>
                </div>
            </div>
        </header>
        
        <main>
            <Outlet/>
            {
                openModel && <Login onClose={()=>{setOpenModel(false)}} />
            }
            {
                openModelSingUp && <Register onClose={()=>{setOpenModelSingUp(false)}} />
            }
            {
                openSidBare && <SidBare onClose={()=>{setOpenSidBare(false)}} />
            }

           
        </main>
        
        
    </div>
  )
}

export default Navbare
