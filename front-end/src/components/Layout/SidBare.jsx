import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GetUsersData } from '../../Context/AppContext'
import { LogOut, Moon, Search, Sun, User, X } from 'lucide-react'
import Login from '../Auth/Login'
import Register from '../Auth/Register'

function SidBare({onClose}) {
    const [openModel,setOpenModel]=useState(false)
    const [openModelSingUp,setOpenModelSingUp]=useState(false)
  const {user,handellogout,darkMode,handelLightMode}=GetUsersData()
  return (
    <div className='w-full relative transition-all duration-200  dark:text-gray-100 '>
        <div className='  fixed right-0 top-0 inset-0 w-1/2 backdrop-blur-sm drop-shadow-lg  dark:bg-transparent z-20  translate-x-full  duration-300   '>
            <X size={30} className='absolute top-2 right-3 text-4xl cursor-pointer hover:text-red-700 duration-300 '
            onClick={()=>{onClose()}}
            />   
            <ul className=' list-none  flex  items-start gap-6 flex-col p-10 mt-8  '>
                <Link to="/" className='cursor-pointer hover:text-primary duration-300 '>Home</Link>
                <Link  className='cursor-pointer hover:text-primary duration-300 '>Featured</Link>
                <Link className='cursor-pointer hover:text-primary duration-300 '>discount</Link>
                {!user && (
                    <>                        {/* <Link to="/login"  className='cursor-pointer hover:text-primary duration-300 ' >login</Link> */}
                    </>
                )}
                {user && user.role==="admin" ? (
                        <Link to="/list"  className='cursor-pointer hover:text-primary duration-300 '>list</Link>
            
                ):null}
            
            </ul>
            <div className='md:hidden gap-4 items-center pl-10 flex '>
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
                }                {user &&(
                    <form onSubmit={handellogout}>
                        <button ><LogOut className="hover:text-red-600 cursor-pointer duration-300" /></button>
                        
                    </form>
                )}
                
            </div>
                
        </div>
        {
                openModel && <Login onClose={()=>{setOpenModel(false)}} />
            }
            {
                openModelSingUp && <Register onClose={()=>{setOpenModelSingUp(false)}} />
            }
    </div>
    
        
    
  )
}

export default SidBare
