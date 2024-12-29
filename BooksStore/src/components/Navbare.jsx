import React from 'react'
import { BookMarked ,LogOut,Menu,Moon,Search,User} from 'lucide-react'
import { Outlet,Link, Navigate, useNavigate } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import { createPortal } from 'react-dom'
import Login from './Auth/Login'
import { GetUsersData } from '../Context/AppContext'

function Navbare() {
    
    const {user,token,setToken,setUser}=GetUsersData()
    console.log(user)
    const [isOpen,setOpen]=useState(false)
    function openModel(){
        setOpen((prev)=>!prev)
    }
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Nettoyer l'effet
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    async function handellogout(e){
        e.preventDefault()
        const res=await fetch('/api/logout',{
            method:"post",
            headers:{
                Authorization:`Bearer ${token}` 
            }
        })
        const data =await res.json()
        console.log(data)
        if (res.ok){
            setUser(null)
            setToken(null)
            localStorage.removeItem("token")
            Navigate("/")
        }
    }

  return (
    <div>
        <header className=' sticky top-0 w-full flex justify-between items-center  backdrop-blur-sm drop-shadow-lg bg-white/30  px-16 py-6 md-px-40 z-50 '>
            <div className='text-primary cursor-pointer flex gap-1 items-center text-xl'>
                <BookMarked  />
                <h1 >E-Book</h1>
            </div>
            <div className='flex  items-center gap-16 justify-between  sticky top-0'>
                <ul className='hidden list-none xl:flex  items-center gap-6 justify-between '>
                    <Link to="/" className='cursor-pointer hover:text-primary duration-300 '>Home</Link>
                    <Link  className='cursor-pointer hover:text-primary duration-300 '>Featured</Link>
                    <Link className='cursor-pointer hover:text-primary duration-300 '>discount</Link>
                    {!user && (
                        <>
                        <Link to="/register" className='cursor-pointer hover:text-primary duration-300 '>register</Link>
                        <Link to="/login"  className='cursor-pointer hover:text-primary duration-300 ' >login</Link>
                        </>
                    )}
                    {user && user.role==="admin" ? (
                            <Link to="/list"  className='cursor-pointer hover:text-primary duration-300 '>list</Link>
                
                    ):null}
                </ul>
                <div className='md:flex gap-4 hidden'>
                    <Search  className='hover:text-primary duration-300 cursor-pointer ' />
                    <User  onClick={openModel}  className='hover:text-primary duration-300 cursor-pointer '/>
                    <Moon    className='hover:text-primary duration-300  cursor-pointer'/>
                    {user &&(
                        <form onSubmit={handellogout}>
                            <button ><LogOut className="hover:text-red-600 cursor-pointer duration-300" /></button>
                            
                        </form>
                    )}
                </div>
                <div className='block xl:hidden  duration-300 cursor-pointer hover:text-primary '>
                    <Menu size={30}/>
                </div>
            </div>
        </header>
        
        <main>
            <Outlet/>
            {isOpen && (
                <>
                <div
                    id="everly"
                    className="backdrop-blur-sm drop-shadow-lg bg-white/30 fixed top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden"
                    onClick={openModel}
                ></div>
                {createPortal(<Login />, document.body)}
                </>
            )}
        </main>
        
    </div>
  )
}

export default Navbare
