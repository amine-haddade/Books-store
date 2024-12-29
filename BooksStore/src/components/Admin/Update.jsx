import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GetUsersData } from '../../Context/AppContext';

function Update() {
  const {id}=useParams()
    const {token}=GetUsersData()
    const [formData,setFormData]=useState({title:"",description:""})
    const [errors,setErrors]=useState({})
    const navigate=useNavigate()
    async function getBooks(){
      const res =await fetch(`/api/books/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      const data=await res.json();
      if(res.ok){
        setFormData({title:data.book.title,description:data.book.description})
      }
      else{
        console.log(data)
      }
    }
      async function  handelSubmit(e){
        e.preventDefault()
        const res=await fetch(`/api/books/${id}`,{
          method:"put",
          body:JSON.stringify(formData),
          headers:{
            Authorization:`Bearer ${token}`
          }
      })
      const data=await res.json()
        if(data.errors){
          setErrors(data.errors)
        }
        else{
          console.log(data)
          navigate('/list')
        }
      }
      useEffect(()=>{
          getBooks()
      },[])
    return (
      <div className='w-full flex items-center justify-center h-[100vh]'>
        <form onSubmit={handelSubmit} className='px-6 py-8 flex flex-col gap-4 border-gray-500 drop-shadow-lg text-black  justify-between bg-white w-full mx-8 md:max-w-[450px] rounded-md  ' >
        <h1 className='text-center text-3xl'>create book</h1>
          <div className='flex flex-col gap-0.5'>
              <label htmlFor="name">title</label>
              <input  
              value={formData.title}
              onChange={(e)=>{setFormData({...formData,title:e.target.value})}}
              className='px-2 py-3 text-sm border-gray-400 border-2 outline-none' 
              type="text" 
              id='title' 
              placeholder='title of book'/>
              {errors.title && <span className='text-red-600 text-sm'>{errors.title[0]}</span>}
          </div> 
          
          <div className='flex flex-col gap-1'>
              <label htmlFor="role">description</label>
              <textarea  
              value={formData.description}
              onChange={(e)=>{setFormData({...formData,description:e.target.value})}}
              className='px-2 py-3 text-sm border-gray-400 border-2 outline-none' 
              type="text" 
              id='description'
              rows={10} 
              placeholder='write your description'/>
              {errors.description && <span className='text-red-600 text-sm'>{errors.description[0]}</span>}
  
          </div> 
          
          <div>
              <button className='py-2.5 text-white border-none bg-primary w-full hover:bg-primaryhover duration-300' >update book</button>
          </div>
          
        </form>
      </div>
    )
}

export default Update
