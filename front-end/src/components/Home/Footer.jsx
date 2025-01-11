import { BookMarked } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='w-full p-12 grid lg:grid-cols-5 gap-4 md:grid-cols-3 grid-cols-1 text-black  justify-center dark:text-white  '>
        <div className='flex flex-col gap-4 col-span-2  '>
            <div className='text-primary cursor-pointer flex gap-1 items-center text-xl '>
                <BookMarked  />
                <h1 >E-Book</h1>
            </div>
            <p  className='text-gray-500 dark:text-gray-300'>Lorem ipsum dolor sit amet, consectetur  <br />adipisicing elit. Consequuntur <br />fugiat nisi repellat numquam </p>

        </div>
        <div className='flex flex-col gap-4  '>
            <h1 className='text-xl  capitalize '>About</h1>
            <ul className='flex flex-col gap-2 text-gray-500 text-base dark:text-gray-300'>
                <li>Awards</li>
                <li>faqs</li>
                <li>privaty policy</li>
                <li>tems of services</li>
            </ul>
        </div>
        <div className='flex flex-col gap-4 '>
            <h1 className='text-xl capitalize '>Company</h1>
            <ul className='flex flex-col gap-2 text-gray-500 text-base dark:text-gray-300'>
                <li>Awards</li>
                <li>faqs</li>
                <li>privaty policy</li>
                <li>tems of services</li>
            </ul>
        </div>
        <div className='flex flex-col gap-4 '>
            <h1 className='text-xl capitalize '>Contact</h1>
            <ul className='flex flex-col gap-2 text-gray-500 text-basedark:text-gray-300 '>
                <li>Awards</li>
                <li>faqs</li>
                <li>privaty policy</li>
         
            </ul>
        </div>
        <div className='flex flex-col gap-4 '>
            <h1 className='text-2xl capitalize  '>socieal</h1>
            <ul className='flex gap-2 text-primary cursor-pointer text-lg  '>
                <i className="fa-brands fa-facebook " />
                <i className="fa-brands fa-instagram " />
                <i className="fa-brands fa-x-twitter " />
            </ul>

        </div>
      
    </div>
  )
}

export default Footer
