import React from 'react'
import Book1 from '../../assets/Enemy.jpg'
function HeroSection() {
  return (
    <div className='grid  md:gap-2 md:items-center grid-cols-1 md:grid-cols-2 px-8 md:px-20 py-9 dark:text-white'>
      <div className=' flex flex-col gap-6 items-start mb-8 md:mb-10 md:items-start  '>
        <h1 className='text-4xl  md:text-5xl '>
            browser & <br /> select E-Books
        </h1>
        <p className='text-sm text-gray-600 dark:text-gray-300 ' style={{wordSpacing:'2px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laboriosam amet quo soluta eum iusto omnis ullam velit tempora totam, ipsam dicta fugiat numquam eius dignissimos mollitia reprehenderit hic ab molestias
        </p>
        <button className='py-3 px-4 bg-blue-600 text-white hover:bg-blue-500    duration-300'>
            explore now
        </button>
      </div>
      <div  className='flex items-center justify-center'>
        <img src={Book1} alt="image" className='rounded-md shadow-lg '  width={276}  height={420}/>
      </div>
    </div>
  )
}

export default HeroSection
