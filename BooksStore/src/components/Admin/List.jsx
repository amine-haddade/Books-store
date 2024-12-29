import { Book, Plus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { GetUsersData } from '../../Context/AppContext'

function List() {
  const {listBooks,token}=GetUsersData()
  function updatedescription(desc) {
    const words = desc.split(' ').map(word => 
        word.length > 15 ? word.slice(0, 15) + '...' : word
    );

    if (words.length > 5) {
        return words.slice(0, 5).join(' ') + '...';
    }

    return words;
}

  function  updatetitle(title){
    const words=title.split(' ')
    if(words.length>2){
      return words.slice(0,2).join(' ')+'...'
    }
    return title

  }

  async function deleteBook(IdBook){
    const res=await fetch(`/api/books/${IdBook}`,{
      method:"DELETE",
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    const data=await res.json()
    if (res.ok){
      console.log("post is delted ")
    }
    else{
      console.log(data)
    }

  }
  return (
    <div className='min-h-[100vh] flex items-start justify-between rounded-md overflow-hidden' >
      <div className='flex flex-col mx-2 md:mx-28 xl:mx-48  mt-8 w-full  gap-8  '>
          <div className='flex justify-between items-center '>
            <h1 className='font-bold text-3xl  bg-gradient-to-r  from-violet-600 to-indigo-600 bg-clip-text text-transparent'>Books List</h1>
            <Link to="/create" className='bg-gradient-to-r  from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg  py-1 px-2 rounded-md flex items-center gap-1 text-lg   text-white ' ><Plus/><span>add book</span></Link>
          </div>

            <table className='w-full rounded-md overflow-hidden  '>
              <thead className='rounded-t-md '>
                <tr className='bg-gradient-to-r  from-blue-500 to-purple-600 '>
                  <th className='px-6 py-4 text-left text-white font-semibold '>title</th>
                  <th className='px-6 py-4 text-center text-white font-semibold'>description</th>
                  <th className='px-6 py-4 text-right text-white font-semibold'>action</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {listBooks ? listBooks.map((ele)=>(
                  <tr className='border-b border-gray-200' key={ele.id}>
                    <td className='px-6 py-4'  >
                      <div className='flex items-center gap-1 text-left font-medium text-gray-800 ' >
                        <Book className='text-primary'/>
                        <h1 className='' >{updatetitle(ele.title)}</h1>
                      </div>
                    </td>
                    <td className='text-sm text-gray-600 text-center '>{updatedescription(ele.description)}</td>
                    <td className='text-right'>
                      <div className='flex items-center gap-2 justify-end pr-6'>
                        <Link onClick={()=>{deleteBook(ele.id)}} className='text-white bg-red-600 rounded-md py-1 px-4 hover:bg-red-500 duration-300 ' >delete</Link>
                        <Link to={`/books/update/${ele.id}`} className='text-white bg-green-600 rounded-md py-1 px-4 hover:bg-green-500  duration-300'>update</Link>
                      </div>
                    </td>
                </tr>
                )):null }
                
              </tbody>

            </table>
          </div>
         
          
    
      
    </div>
  )
}

export default List
