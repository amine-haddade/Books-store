import React from 'react'
import img1 from '../../assets/book1.png'
import { ArrowDownToLine, Eye, Search, Star, StarHalf } from 'lucide-react'
function Books() {
  return (
    <div className='w-full flex flex-col gap-16 py-20 px-10 lg:px-24 md:px-20 text-black items-center justify-center  dark:text-white  '>
       <h1 className='text-3xl text-center'>Books</h1>
       <div className='  grid lg:grid-cols-3 w-full items-center justify-center md:grid-cols-2 grid-cols-1 gap-6'>
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
