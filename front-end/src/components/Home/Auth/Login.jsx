import React, {  useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GetUsersData } from '../../../Provider/Context/AppContext'

function Login({onClose}) {
    const refmodel=useRef()
    const [errors,setErrors]=useState({})
    const {setToken}=GetUsersData()
    const navigate=useNavigate()



    // function validation form 
    function LoginVlaidation(Objects){
      const email=Objects.get("email")
      const password=Objects.get("password")
      const NewErrors={}
      if(!email){
        NewErrors.email=email="l'email est required"
      }
      if(!password){
        NewErrors.password="l'password est required"
      }
      setErrors(NewErrors)

    }

    //open model login form function
    const CloseModel=(e)=>{
      if(refmodel.current===e.target){
          onClose()
      }
    }
    
    

    // post request to laravel login methode 
    async function handelSubmit(e){
        const formData_logn=new FormData(e.currentTarget)
        
      e.preventDefault()
      const res=await fetch('/api/login',{
        method:"post",
        body:formData_logn,
      })
      const data=await res.json()
      if(data.errors){
        setErrors('')
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
    // end logi methode 
        
return (
      <div  ref={refmodel} onClick={CloseModel} className='fixed inset-0 backdrop-blur-sm drop-shadow-lg bg-white/30 dark:bg-transparent  flex justify-center items-center z-50 animate-slide-down  '>
        <form onSubmit={handelSubmit} className='px-6 py-8 flex flex-col gap-4 border-gray-500 dark:border-gray-500 drop-shadow-xl  bg-bglogin dark:bg-bgDarkBook dark:text-white  text-black  justify-between  w-full mx-8 max-w-[400px] z-30     ' >
        <h1 className='text-center text-3xl'>Log In</h1>
              <div className='flex flex-col gap-1'>
                  <label htmlFor="email">Email</label>
                  <input 
                  name='email'
                  className='px-2 py-3 text-sm border-gray-300  dark:bg-bgDarkBook dark:border-gray-500 bg-bglogin border-2 outline-none' 
                  type="email" 
                  id='email' 
                  placeholder='write your email'/>
                  {errors.email && <span className='text-red-600 text-sm'>{errors.email[0]}</span>}

              </div>
              <div  className='flex flex-col gap-1'>
                  <label htmlFor="password">password</label>
                  <input
                  name='password'
                  className='dark:bg-bgDarkBook dark:border-gray-500  px-2 py-3 text-sm border-gray-300 bg-bglogin border-2 outline-none' 
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
