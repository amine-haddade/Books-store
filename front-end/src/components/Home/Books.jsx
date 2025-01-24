import React, { useEffect, useState } from 'react'
import img1 from '../../assets/book1.png'
import { ArrowDownToLine, Eye, Search, Star, StarHalf, TrainFrontTunnel } from 'lucide-react'
import { GetUsersData } from '../../Provider/Context/AppContext'
import { Skeleton } from '@mui/material';
function Books() {
    const {token,listBooks}=GetUsersData()
    //load image 
    const [loadImage,setloadImage]=useState(false)

    // update lengt de title 
    function updateTitle(title){
        const words=title.split(' ')// chnger le title vers une tableuaux
        if (words.length>2){
            return words.slice(0,2).join(' ')+'...'
        }
        return title
    }
    async function handelRead(id) {
        const res=await fetch(`api/books/${id}/read`,{
            method:"get",
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        if(res.ok){
            const blob=await res.blob()
            const url=window.URL.createObjectURL(blob);
            window.open(url,"_blank")
            console.log("view pdf")
        }
        else{
            const data=await res.json()
            console.log(data)
        }
        
    }
    async function handelDownload(id,tit) {
        console.log(tit)
        const res=await fetch(`api/books/${id}/download`,{
            method:"get",
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        if(res.ok){
            const blob=await res.blob()
            const url=window.URL.createObjectURL(blob);
            // crèe une lien a et lien pour download
            const a= document.createElement("a")
            a.href=url
            a.download=tit+".pdf"
            document.body.appendChild(a)
            a.click()
            a.remove()
            window.URL.revokeObjectURL(url)
        }
        else{
            const data=await res.json()
            console.log(data)
        }
        
    }
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (listBooks && listBooks.length > 0) {
        setLoading(false); // Les données sont chargées
        }
    }, [listBooks]);

    
  return (
    <div className='w-full flex flex-col gap-16 py-20 px-10 lg:px-24 md:px-20 text-black items-center justify-center  dark:text-white  '>
       <h1 className='text-3xl text-center'>Books</h1>
       <div className='grid lg:grid-cols-3 w-full items-center justify-center md:grid-cols-2 grid-cols-1 gap-6'>
            {loading ? (
                Array(6).fill().map((_, index) => (
                    <div key={index} className='w-[280px] group relative flex gap-4 items-center py-3 px-4 bg-bglogin dark:bg-bgDarkBook border-2 border-gray-300 dark:border-gray-500 shadow-md md:min-w-full mx-auto cursor-pointer overflow-hidden hover:border-gray-400 dark:hover:border-gray-200 transition-all duration-300'>
                        <div className='absolute top-6 right-4  transition-all duration-200 flex flex-col gap-2 '>
                            <Skeleton width={20} height={20} variant='circular' className='dark:bg-gray-400'  />
                            <Skeleton  width={20} height={20} variant='circular' className='dark:bg-gray-400' />
                            <Skeleton  width={20} height={20} variant='circular' className='dark:bg-gray-400' />
                        </div>
                        <Skeleton variant="rectangular" height={176} className='w-28 h-44 shadow-lg min-w-28 dark:bg-gray-400' />
                        <div className='flex flex-col gap-2 w-full'>
                            <Skeleton variant="text" className='w-1/2 dark:bg-gray-400' />
                            <Skeleton variant="text" className='w-1/3 dark:bg-gray-400'/>
                            <Skeleton variant="rectangular" className='w-3/4 h-6 dark:bg-gray-400' />
                        </div>
                    </div>
                ))
            ) : (
                listBooks.map((ele, index) => (
                    <div key={index} className='group relative flex gap-4 items-center py-3 px-4 bg-bglogin dark:bg-bgDarkBook border-2 border-gray-300 dark:border-gray-500 shadow-md md:min-w-full mx-auto cursor-pointer overflow-hidden hover:border-gray-400 dark:hover:border-gray-200 transition-all duration-300'>
                        <div className='absolute top-6 group-hover:right-4 -right-7 transition-all duration-200 flex flex-col gap-2'>
                            <Search size={20} className='text-blue-500' />
                            <Eye onClick={() => { handelRead(ele.id) }} size={20} className='text-blue-500' />
                            <ArrowDownToLine onClick={() => { handelDownload(ele.id, ele.title) }} size={20} className='text-blue-500' />
                        </div>


                        {/*animation de image loader */}
                        {
                            !loadImage ? (
                                <Skeleton variant="rectangular" height={176} className='w-28 h-44 shadow-lg min-w-28 dark:bg-gray-400' />
                            ):null
                            
                        }
                        <img src={`http://localhost:8000/storage/${ele.image}`} className={`w-28 h-44 shadow-lg min-w-28 ${!loadImage ? 'hidden' : ''}`} alt="" onLoad={()=>setloadImage(true)}onError={()=>setloadImage(true)} />


                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl text-wrap'>{updateTitle(ele.title)}</h1>
                            <p className='text-base text-gray-600'>{ele.category.libelle}</p>
                            <div className='flex gap-1'>
                                <Star size={20} className='text-purple-600' />
                                <Star size={20} className='text-purple-600' />
                                <Star size={20} className='text-purple-600' />
                                <Star size={20} className='text-purple-600' />
                                <StarHalf size={20} className="text-purple-600" />
                            </div>
                        </div>
                    </div>
                ))
            )}

            
            <div className=' group relative flex gap-4 items-center py-3 px-4 bg-bglogin dark:bg-bgDarkBook border-2 border-gray-300 dark:border-gray-500 shadow-md md:min-w-full  mx-auto cursor-pointer overflow-hidden hover:border-gray-400 dark:hover:border-gray-200 transition-all duration-300'>
                <div className='absolute top-6 group-hover:right-4 -right-7 transition-all duration-200 flex flex-col gap-2  '>
                    <Search size={20} className='text-blue-500' />
                    <Eye size={20} className='text-blue-500' />
                    <ArrowDownToLine size={20} className='text-blue-500' />

                </div>
                <img src={img1} className='w-28 h-full shadow-lg ' alt="" />
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl'>new Book</h1>
                    <p className='text-base text-gray-600'>categorie</p>
                    <div className='flex gap-1 '>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <StarHalf size={20} className="text-purple-600" />
                    </div>
                </div>
            </div>
            <div className=' group relative flex gap-4 items-center py-3 px-4 bg-bglogin dark:bg-bgDarkBook border-2 border-gray-300 dark:border-gray-500 shadow-md md:min-w-full  mx-auto cursor-pointer overflow-hidden hover:border-gray-400 dark:hover:border-gray-200 transition-all duration-300'>
                <div className='absolute top-6 group-hover:right-4 -right-7 transition-all duration-200 flex flex-col gap-2  '>
                    <Search size={20} className='text-blue-500' />
                    <Eye size={20} className='text-blue-500' />
                    <ArrowDownToLine size={20} className='text-blue-500' />

                </div>
                <img src={img1} className='w-28 h-full shadow-lg ' alt="" />
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl'>new Book</h1>
                    <p className='text-base text-gray-600'>categorie</p>
                    <div className='flex gap-1 '>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <StarHalf size={20} className="text-purple-600" />
                    </div>
                </div>
            </div>
            <div className=' group relative flex gap-4 items-center py-3 px-4 bg-bglogin dark:bg-bgDarkBook border-2 border-gray-300 dark:border-gray-500 shadow-md md:min-w-full  mx-auto cursor-pointer overflow-hidden hover:border-gray-400 dark:hover:border-gray-200 transition-all duration-300'>
                <div className='absolute top-6 group-hover:right-4 -right-7 transition-all duration-200 flex flex-col gap-2  '>
                    <Search size={20} className='text-blue-500' />
                    <Eye size={20} className='text-blue-500' />
                    <ArrowDownToLine size={20} className='text-blue-500' />

                </div>
                <img src={img1} className='w-28 h-full shadow-lg ' alt="" />
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl'>new Book</h1>
                    <p className='text-base text-gray-600'>categorie</p>
                    <div className='flex gap-1 '>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <StarHalf size={20} className="text-purple-600" />
                    </div>
                </div>
            </div>
            <div className=' group relative flex gap-4 items-center py-3 px-4 bg-bglogin dark:bg-bgDarkBook border-2 border-gray-300 dark:border-gray-500 shadow-md md:min-w-full  mx-auto cursor-pointer overflow-hidden hover:border-gray-400 dark:hover:border-gray-200 transition-all duration-300'>
                <div className='absolute top-6 group-hover:right-4 -right-7 transition-all duration-200 flex flex-col gap-2  '>
                    <Search size={20} className='text-blue-500' />
                    <Eye size={20} className='text-blue-500' />
                    <ArrowDownToLine size={20} className='text-blue-500' />

                </div>
                <img src={img1} className='w-28 h-full shadow-lg ' alt="" />
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl'>new Book</h1>
                    <p className='text-base text-gray-600'>categorie</p>
                    <div className='flex gap-1 '>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <StarHalf size={20} className="text-purple-600" />
                    </div>
                </div>
            </div>
            <div className=' group relative flex gap-4 items-center py-3 px-4 bg-bglogin dark:bg-bgDarkBook border-2 border-gray-300 dark:border-gray-500 shadow-md md:min-w-full  mx-auto cursor-pointer overflow-hidden hover:border-gray-400 dark:hover:border-gray-200 transition-all duration-300'>
                <div className='absolute top-6 group-hover:right-4 -right-7 transition-all duration-200 flex flex-col gap-2  '>
                    <Search size={20} className='text-blue-500' />
                    <Eye size={20} className='text-blue-500' />
                    <ArrowDownToLine size={20} className='text-blue-500' />

                </div>
                <img src={img1} className='w-28 h-full shadow-lg ' alt="" />
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl'>new Book</h1>
                    <p className='text-base text-gray-600'>categorie</p>
                    <div className='flex gap-1 '>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <StarHalf size={20} className="text-purple-600" />
                    </div>
                </div>
            </div>
            <div className=' group relative flex gap-4 items-center py-3 px-4 bg-bglogin dark:bg-bgDarkBook border-2 border-gray-300 dark:border-gray-500 shadow-md md:min-w-full  mx-auto cursor-pointer overflow-hidden hover:border-gray-400 dark:hover:border-gray-200 transition-all duration-300'>
                <div className='absolute top-6 group-hover:right-4 -right-7 transition-all duration-200 flex flex-col gap-2  '>
                    <Search size={20} className='text-blue-500' />
                    <Eye size={20} className='text-blue-500' />
                    <ArrowDownToLine size={20} className='text-blue-500' />

                </div>
                <img src={img1} className='w-28 h-full shadow-lg ' alt="" />
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl'>new Book</h1>
                    <p className='text-base text-gray-600'>categorie</p>
                    <div className='flex gap-1 '>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <StarHalf size={20} className="text-purple-600" />
                    </div>
                </div>
            </div>
            <div className=' group relative flex gap-4 items-center py-3 px-4 bg-bglogin dark:bg-bgDarkBook border-2 border-gray-300 dark:border-gray-500 shadow-md md:min-w-full  mx-auto cursor-pointer overflow-hidden hover:border-gray-400 dark:hover:border-gray-200 transition-all duration-300'>
                <div className='absolute top-6 group-hover:right-4 -right-7 transition-all duration-200 flex flex-col gap-2  '>
                    <Search size={20} className='text-blue-500' />
                    <Eye size={20} className='text-blue-500' />
                    <ArrowDownToLine size={20} className='text-blue-500' />

                </div>
                <img src={img1} className='w-28 h-full shadow-lg ' alt="" />
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl'>new Book</h1>
                    <p className='text-base text-gray-600'>categorie</p>
                    <div className='flex gap-1 '>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <Star size={20} className='text-purple-600'/>
                        <StarHalf size={20} className="text-purple-600" />
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Books
