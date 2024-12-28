import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  { GetUsersData } from '../../Context/AppContext'

function Register() {
  const {setToken} = GetUsersData();

  const [formData,setFormData]=useState({name:"",email:"",role:"",password:"",password_confirmation:""})
  const [errors,setErrors]=useState({})
  const navigate=useNavigate()
    async function  handelSubmit(e){
      e.preventDefault()
      const res=await fetch('/api/createuser',{
        method:"post",
        body:JSON.stringify(formData)
    })
    const data=await res.json()
      if(data.errors){
        setErrors(data.errors)
      }
      else{
        localStorage.setItem("token",data.token)
        setToken(data.token)
        console.log(data)
        navigate('/')
      }
    }
  return (
    <div className='w-full flex items-center justify-center h-[100vh]'>
      <form onSubmit={handelSubmit} className='px-6 py-8 flex flex-col gap-4 border-gray-500 drop-shadow-lg text-black  justify-between bg-white w-full mx-8 md:max-w-[450px]  ' >
      <h1 className='text-center text-3xl'>register</h1>
        <div className='flex flex-col gap-0.5'>
            <label htmlFor="name">name</label>
            <input  
            value={formData.name}
            onChange={(e)=>{setFormData({...formData,name:e.target.value})}}
            className='px-2 py-3 text-sm border-gray-400 border-2 outline-none' 
            type="text" 
            id='name' 
            placeholder='write your name'/>
            {errors.name && <span className='text-red-600 text-sm'>{errors.name[0]}</span>}
        </div> 
        <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input
            value={formData.email}
            onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
            className='px-2 py-3 text-sm border-gray-400 border-2 outline-none' 
            type="email" 
            id='email' 
            placeholder='write your email'/>
            {errors.email && <span className='text-red-600 text-sm'>{errors.email[0]}</span>}
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="role">role</label>
            <input  
            value={formData.role}
            onChange={(e)=>{setFormData({...formData,role:e.target.value})}}
            className='px-2 py-3 text-sm border-gray-400 border-2 outline-none' 
            type="text" 
            id='role' 
            placeholder='write your role'/>
            {errors.role && <span className='text-red-600 text-sm'>{errors.role[0]}</span>}

        </div> 
        <div  className='flex flex-col gap-1'>
            <label htmlFor="password">password</label>
            <input
            value={formData.password}
            onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
            className='px-2 py-3 text-sm border-gray-400 border-2 outline-none' 
            type="password" 
            id='password' 
            placeholder='enter your password'/>
            {errors.password && <span className='text-red-600 text-sm'>{errors.password[0]}</span>}

        </div>
        <div  className='flex flex-col gap-1'>
            <label htmlFor="password confirmation">password confirmation</label>
            <input
            value={formData.password_confirmation}
            onChange={(e)=>{setFormData({...formData,password_confirmation:e.target.value})}}
            className='px-2 py-3 text-sm border-gray-400 border-2 outline-none' 
            type="password" 
            id='password confirmation' 
            placeholder='confirm your password'/>
        </div>
        <div  className='flex flex-col'>
            <p className='text-center'>You  have en account ? <Link to="/login" className='text-primary'>log in</Link></p>        </div>
        <div>
            <button className='py-2.5 text-white border-none bg-primary w-full hover:bg-primaryhover duration-300' >register</button>
        </div>
        
      </form>
    </div>
  )
}

export default Register
