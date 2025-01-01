import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GetUsersData } from '../../Context/AppContext'

function Login({onClose}) {
  const refmodel=useRef()
  const CloseModel=(e)=>{
    if(refmodel.current===e.target){
        onClose()
    }
  }
  const {setToken}=GetUsersData()
    const [formData,setFormData]=useState({email:"",password:""})
      const [errors,setErrors]=useState({})
      const navigate=useNavigate()
        async function handelSubmit(e){
          e.preventDefault()
          const res=await fetch('/api/login',{
            method:"post",
            body:JSON.stringify(formData)
          })
          const data=await res.json()
          if(data.errors){
            setErrors(data.errors)
          }
          else{
            onClose()
            localStorage.setItem("token",data.token)
            setToken(data.token)
            console.log(data)
            navigate('/')
          }
        }
  return (
        <div  ref={refmodel} onClick={CloseModel} className='fixed inset-0 backdrop-blur-sm drop-shadow-lg bg-white/30 flex justify-center items-center z-50 animate-slide-down '>
          <form onSubmit={handelSubmit} className='px-6 py-8 flex flex-col gap-4 border-gray-500 drop-shadow-xl bg-bglogin text-black  justify-between  w-full mx-8 md:max-w-[400px] z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   ' >
          <h1 className='text-center text-3xl'>Log In</h1>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input 
                    value={formData.email}
                    onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
                    className='px-2 py-3 text-sm border-gray-300 bg-bglogin border-2 outline-none' 
                    type="email" 
                    id='email' 
                    placeholder='write your email'/>
                    {errors.email && <span className='text-red-600 text-sm'>{errors.email[0]}</span>}

                </div>
                <div  className='flex flex-col gap-1'>
                    <label htmlFor="password">password</label>
                    <input
                    value={formData.password}
                    onChange={(e)=>{setFormData({...formData,password:e.target.value})}} 
                    className='px-2 py-3 text-sm border-gray-300 bg-bglogin border-2 outline-none' 
                    type="password" 
                    id='password' 
                    placeholder='enter your password'/>
                    {errors.password && <span className='text-red-600 text-sm'>{errors.password[0]}</span>}

                </div>
                <div  className='flex flex-col'>
                    <p className='text-center'>You dont have en account ? <Link to="/register" className='text-primary'>Sing in</Link></p>
                    <p className='text-center'>You forget your ? <Link className='text-primary'>password</Link></p>
                </div>
                <div>
                    <button  className='py-2.5 text-white border-none bg-primary w-full hover:bg-primaryhover duration-300' >Log In</button>
                </div>
          </form>
        </div>
   
  )
}

export default Login
