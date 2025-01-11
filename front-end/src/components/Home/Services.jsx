import React from 'react'
import  { ArrowDownToLine ,SearchCheck,LibraryBig,} from 'lucide-react'
function Services() {
  return (
    <div className='w-full flex justify-center items-center py-16 dark:text-white'>
        <div className=' flex flex-col md:gap-20 gap-10 sm:flex-row'>
            <div className='flex flex-col gap-2   items-center'>
                <LibraryBig size={32} className='text-blue-600' />
                <h3>Accès Illimité</h3>
                <p className='text-sm text-gray-500 dark:text-gray-300'>Explorez sans limite</p>
            </div>
            <div  className='flex flex-col gap-2  items-center'>
                <ArrowDownToLine size={32}   className='text-blue-600' />
                <h3>Lecture & Téléchargement</h3>
                <p className='text-sm text-gray-500 dark:text-gray-300' >Lisez ou téléchargez</p>
            </div>
            <div  className='flex flex-col gap-2  items-center'>
                <SearchCheck size={32}  className='text-blue-600'  />
                <h3>Recherche Rapide</h3>
                <p className='text-sm text-gray-500 dark:text-gray-300' > Trouvez instantanément</p>
            </div>
        </div>
    </div>
  )
}

export default Services
