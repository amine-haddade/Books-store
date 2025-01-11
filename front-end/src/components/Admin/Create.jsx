import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GetUsersData } from '../../Context/AppContext';

function Create() {
    const {token,listCategory}=GetUsersData()
    const [formData,setFormData]=useState({title:"",description:"",category_id:"1"})
    const [errors,setErrors]=useState({})
    const navigate=useNavigate()
    const title_ref=useRef()
    const description_ref=useRef()
    const category_id_ref=useRef(1)
    const photRef=useRef()
    const pdfRef=useRef()
    
      const  handelSubmit=async(e)=>{
        e.preventDefault()
        const formData_old=new FormData(e.currentTarget)
        formData_old.append("image",photRef.current.files[0]);
        formData_old.append("pdf",pdfRef.current.files[0]);

        const res=await fetch('/api/books',{
          method:"post",
          body:formData_old,
          headers:{
            Authorization:`Bearer ${token}`,
            
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
    return (
      <div className='w-full flex items-center justify-center min-h-[100vh]'>
        <form encType='multipart/form-data'  onSubmit={handelSubmit} className='my-10 px-6 py-8 flex flex-col gap-4 border-gray-500 drop-shadow-lg text-black  justify-between bg-white w-full mx-8 md:max-w-[450px] rounded-md  ' >
        <h1 className='text-center text-3xl'>create book</h1>
          <div className='flex flex-col gap-0.5'>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">title</label>
              <input 
              name='title' 
              ref={title_ref} 
              value={formData.title}
              onChange={(e)=>setFormData({...formData,title:e.target.value})}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              id='title' 
              placeholder='title of book'/>
              {errors.title && <span className='text-red-600 text-sm'>{errors.title[0]}</span>}
          </div> 
          
          <div className='flex flex-col gap-1'>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">description</label>
              <textarea  
              ref={description_ref}
              value={formData.description}
              onChange={(e)=>{setFormData({...formData,description:e.target.value})}}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text" 
              id='description'
              name='description'
              rows={10} 
              placeholder='write your description'/>
              {errors.description && <span className='text-red-600 text-sm'>{errors.description[0]}</span>}
  
          </div>
          <div className='flex flex-col gap-1'>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">Catégories</label>
                  <select
                  name='category_id'
                    id="category"
                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.category_id}
                    ref={category_id_ref}
                    onChange={(e) =>
                      setFormData({ ...formData, category_id: e.target.value })
                    }
                  >
                    {listCategory.map((ele) => (
                      <option
                        key={ele.id}
                        value={ele.id}
                        className="text-gray-600 bg-gray-50 hover:bg-gray-100"
                      >
                        {ele.libelle}
                      </option>
                    ))}
                  </select>

                  {errors.category_id && <span className='text-red-600 text-sm'>{errors.category_id[0]}</span>}
              
          </div>
          <div className='flex flex-col gap-1'>
              <label htmlFor="image">image</label>
              <input
              ref={photRef}  
              accept="image/*"
              className='px-2 py-3 text-sm border-gray-400 border-2 outline-none' 
              type="file" 
              id='image'
            
              />
              {errors.image && <span className='text-red-600 text-sm'>{errors.image[0]}</span>}
  
          </div>
          <div className='flex flex-col gap-1'>
              <label htmlFor="pdf">pdf</label>
              <input  
              
              className='px-2 py-3 text-sm border-gray-400 border-2 outline-none' 
              type="file" 
              id='pdf'
              ref={pdfRef}
              />
              {errors.pdf && <span className='text-red-600 text-sm'>{errors.pdf[0]}</span>}
  
          </div>
          
          <div>
              <button className='py-2.5 text-white border-none bg-primary w-full hover:bg-primaryhover duration-300' >add book</button>
          </div>
          
        </form>
      </div>
    )
}

export default Create
