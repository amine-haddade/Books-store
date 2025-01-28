import React, { useRef, useState } from 'react'
import { data, Link, NavLink, useNavigate } from 'react-router-dom'
import {  BookDown, BookOpenCheck, FileText, House, ImageDown, ImageUp, LibraryBig, LogOut, MoveLeft, Search, Users, X, FileDown } from 'lucide-react'
import UserProfil from'../../assets/Enemy.jpg'
import { GetUsersData } from '../../Provider/Context/AppContext'
import axios from 'axios'

function AddBook() {
  const Navigate=useNavigate()
  const {token,listCategory}=GetUsersData()
  console.log(" la liste est ",listCategory)

    const [fileName,setFileName]=useState()
    const [errors,setErrors]=useState({})
    const imageRef=useRef('')
    const pdfRef=useRef('')

    const handleCHngeFile=(e)=>{
            const file=e.target.files[0]
            if(file){
                setFileName(file.name)
            }
    }
    const [pdfName,setpdfName]=useState()

    const handleCHngepdf=(e)=>{
            const pdf=e.target.files[0]
            if(pdf){
                setpdfName(pdf.name)
            }
    }

    // function store user

    const handelSubmit=async (e)=>{
      e.preventDefault()
      const Data=new FormData(e.currentTarget)
      if (imageRef.current.files[0]) {
        Data.append("image", imageRef.current.files[0]);
      }
      if (pdfRef.current.files[0]) {
        Data.append("pdf", pdfRef.current.files[0]);
      }
    

      try{
      const response= await axios
      .post('http://127.0.0.1:8000/api/books',Data,{
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
      
      
     
        console.log(response.data)
        Navigate('/Home')
      
      }

      catch(error){
        if(error.response){
          setErrors(error.response.data.errors)
        }
        else{
          console.log(error)
        }
        
      } 
      
    }

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
          <NavLink to="/Home"  className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><House size={24} className="pr-1 text-gray-400" /><span>home</span></NavLink>
          <NavLink  to='/AllUsers' className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><Users size={24} className="pr-1 text-gray-400" /><span>All Users</span></NavLink>
          <NavLink to='/AllBooks' className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><LibraryBig size={24}  className="pr-1 text-gray-400"/><span>All books</span></NavLink>
          <NavLink to='/AllRequest' className={({ isActive }) =>   `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}` }><BookDown size={24}  className="pr-1 text-gray-400" /><span>All requeste</span></NavLink>
          {/* <NavLink className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><House size={24} className="pr-1  text-gray-400 " /><span>All Users</span></NavLink> */}
          <Link className='  p-1 transition duration-300 text-black w-full rounded-3xl border border-gray-100 shadow-sm     flex items-center   capitalize  absolute  top-96    '>
              <div><img className='rounded-full object-cover w-8 h-8 mr-2 relative'  src={UserProfil} alt="" /> <div className='absolute w-3 h-3 rounded-full bg-green-500 left-6 top-7'></div></div>
            <div className='flex   flex-col relative mr-6 '>
              <span className='text-[14px] font-medium text-black '>amine haddade</span>
              <span className='text-[10px] text-gray-500 font-medium '>amine@gmail.com</span>

            </div>
            <LogOut size={28} color="#ff0000" className=''/>            
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



          {/* conten add book */}

          <div className='p-6  '>
            <Link  to="/AllBooks"  className="  text-base bg-white px-4 py-2 rounded-md text-gray-700 shadow inline-flex items-center gap-2"><MoveLeft  />  Go Back</Link>

            {/*   form add book  */}

            <form className='w-3/4 mt-11 flex flex-col gap-6' encType='multipart/form-data' onSubmit={handelSubmit}>
                <div className='inline-flex flex-col gap-2 text-base w-full capitalize '>
                    <label htmlFor="Book Title">Book Title</label>
                    <input name='title' type="text" id='Book Title' placeholder='Ecrire le titre de livres' className='outline-none rounded-md bg-white  text-black border border-gray-200 py-2 px-4'  />
                    {errors.title && <span className='text-red-600 text-sm'>{errors.title[0]}</span>}
                </div>
                <div className='inline-flex flex-col gap-2 text-base w-full capitalize'>
                    <label htmlFor="author">author</label>
                    <input name='author' type="text" id='author' placeholder='Ecrire le titre de livres' className='outline-none rounded-md bg-white  text-black border border-gray-200 py-2 px-4'  />
                    {errors.author && <span className='text-red-600 text-sm'>{errors.author[0]}</span>}

                </div>
                <div className='inline-flex flex-col gap-2 text-base w-full capitalize'>
                    <label htmlFor="count">count</label>
                    <input name='count' type="text" id='count' placeholder='Ecrire le nombres des livres' className='outline-none rounded-md bg-white  text-black border border-gray-200 py-2 px-4'  />
                    {errors.count && <span className='text-red-600 text-sm'>{errors.count[0]}</span>}

                </div>
                <div className='inline-flex flex-col gap-2 text-base w-full capitalize'>
                    <label htmlFor="author">category</label>
                    <select name='category_id'  id='author'  className='outline-none rounded-md bg-white  text-black border border-gray-200 py-2 px-4'  >
                        <option value="">chosir une category</option>
                        {listCategory.map(ele=>{
                          return(
                            <option key={ele.id} value={ele.id}>{ele.libelle}</option>
                          )
                        })}
                        
                    </select>
                    {errors.category_id && <span className='text-red-600 text-sm'>{errors.category_id[0]}</span>}
                </div>
                <div className='inline-flex flex-col gap-2 text-base w-full capitalize'>
                    <label htmlFor="image">image</label>
                    <label htmlFor="image"  className='outline-none rounded-md bg-white  text-gray-600 border border-gray-200 py-2 px-4  flex items-center justify-center cursor-pointer  '>{fileName ? <div className='px-4 bg-blue-100 text-blue-600 text-base rounded-md flex justify-between gap-3 items-center' ><ImageDown size={18}  />{fileName}<X size={18} /></div> :<ImageUp  />}</label>
                    <input ref={imageRef} onChange={handleCHngeFile} name='image' type="file" id='image' placeholder='Ecrire le titre de livres' className='outline-none rounded-md bg-white  text-black border border-gray-200 py-2 px-4 hidden'  />
                    {errors.image && <span className='text-red-600 text-sm'>{errors.image[0]}</span>}
                </div>
                <div className='inline-flex flex-col gap-1 text-base w-full capitalize'>
                    <label htmlFor="pdf">pdf</label>
                    <label htmlFor="pdf"  className='outline-none rounded-md bg-white  text-gray-600 border border-gray-200 py-2 px-4  flex items-center justify-center cursor-pointer  '>{pdfName ? <div className='px-4 bg-blue-100 text-blue-600 text-base rounded-md flex justify-between gap-3 items-center mb-1' ><FileDown  size={18}  />{pdfName}<X size={18} /></div> :<FileText />}</label>
                    <input ref={pdfRef} onChange={handleCHngepdf} name='pdf' type="file" id='pdf' placeholder='Ecrire le titre de livres' className='outline-none rounded-md bg-white  text-black border border-gray-200 py-2 px-4 hidden'  />
                    {errors.pdf && <span className='text-red-600 text-sm'>{errors.pdf[0]}</span>}

                </div>
                <div className='inline-flex flex-col gap-1 text-base w-full capitalize'>
                    <label htmlFor="description">description</label>
                    <textarea name='description' rows={5} type="text" id='description' placeholder='Ecrire le description de livres' className='outline-none rounded-md bg-white  text-black border border-gray-200 py-2 px-4 mb-1'  />
                    {errors.description && <span className='text-red-600 text-sm'>{errors.description[0]}</span>}
                </div>
                
                    
                <button className='bg-blueadmin rounded-lg text-white text-lg text-center py-2 capitalize  hover:bg-blue-600 duration-300 transition-all ' >add book</button>
                
            </form>
          </div>
      </div>
    </div>

 
           

    
  );
}

export default AddBook;
