import React, {  useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  { GetUsersData } from '../../../Provider/Context/AppContext'

function Register({onClose}) {

  const refmodel=useRef()
  const CloseModel=(e)=>{
    if(refmodel.current===e.target){
        onClose()
    }
  }
  const {setToken} = GetUsersData();
  const [formData,setFormData]=useState({name:"",email:"",role:"user",password:"",password_confirmation:""})
  const [errors,setErrors]=useState({})
  const navigate=useNavigate()
    async function  handelSubmit(e){
      e.preventDefault()
      const formData_register=new FormData(e.currentTarget)
      const res=await fetch('/api/createuser',{
        method:"post",
        body:formData_register
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
    <div  ref={refmodel} onClick={CloseModel} className='fixed inset-0 backdrop-blur-sm drop-shadow-lg dark:bg-transparent bg-white/30 flex justify-center items-center z-50 animate-slide-down '>
      <form onSubmit={handelSubmit} className='px-6 py-4  rounded-md  flex flex-col gap-1 dark:bg-bgDarkBook dark:text-white border-gray-500 drop-shadow-lg text-black  justify-between bg-bglogin w-full mx-8 md:max-w-[450px]  ' >
      <h1 className='text-center text-3xl'>register</h1>
        <div className='flex flex-col gap-0.5'>
            <label htmlFor="name">name</label>
            <input
            name='name'  
            value={formData.name}
            onChange={(e)=>{setFormData({...formData,name:e.target.value})}}
            className='dark:bg-bgDarkBook dark:border-gray-500 px-2 py-2 text-sm bg-bglogin border-gray-300 border-2 outline-none' 
            type="text" 
            id='name' 
            placeholder='write your name'/>
            {errors.name && <span className='text-red-600 text-sm'>{errors.name[0]}</span>}
        </div> 
        <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input
            name='email'
            value={formData.email}
            onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
            className='dark:bg-bgDarkBook dark:border-gray-500 px-2 py-2 text-sm bg-bglogin border-gray-300 border-2 outline-none' 
            type="email" 
            id='email' 
            placeholder='write your email'/>
            {errors.email && <span className='text-red-600 text-sm'>{errors.email[0]}</span>}
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="role">role</label>
            <input
            name='role'  
            value={formData.role}
            onChange={(e)=>{setFormData({...formData,role:e.target.value})}}
            className='dark:bg-bgDarkBook dark:border-gray-500 px-2 py-2 text-sm bg-bglogin border-gray-300 border-2 outline-none' 
            type="text" 
            id='role' 
            placeholder='write your role'/>
            {errors.role && <span className='text-red-600 text-sm'>{errors.role[0]}</span>}

        </div> 
        <div  className='flex flex-col gap-1'>
            <label htmlFor="password">password</label>
            <input
            name='password'
            value={formData.password}
            onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
            className='dark:bg-bgDarkBook dark:border-gray-500 px-2 py-2 text-sm bg-bglogin border-gray-300 border-2 outline-none' 
            type="password" 
            id='password' 
            placeholder='enter your password'/>
            {errors.password && <span className='text-red-600 text-sm'>{errors.password[0]}</span>}

        </div>
        <div  className='flex flex-col gap-1'>
            <label htmlFor="password confirmation">password confirmation</label>
            <input
            name='password_confirmation'
            value={formData.password_confirmation}
            onChange={(e)=>{setFormData({...formData,password_confirmation:e.target.value})}}
            className='dark:bg-bgDarkBook dark:border-gray-500 px-2 py-2 text-sm bg-bglogin border-gray-300 border-2 outline-none' 
            type="password" 
            id='password confirmation' 
            placeholder='confirm your password'/>
        </div>
        <div  className='flex flex-col'>
            <p className='text-center'>You  have en account ? <Link to="/login" className='text-primary'>log in</Link></p>        </div>
        <div>
            <button className='py-2 text-white border-none bg-primary w-full hover:bg-primaryhover duration-300' >register</button>
        </div>
        
      </form>
    </div>
  )
}

export default Register
