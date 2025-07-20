import React, { useRef } from 'react'

import { GetUsersData } from '../../Provider/Context/AppContext'
import axios from 'axios'

function ReserveBook({onClose,bookId}) {
  const {user,token}=GetUsersData()
  const refRserve=useRef()
    const CloseModel=(e)=>{
      if(refRserve.current===e.target){
          onClose()
      }
    }
    async function submitReservation(e) {
      e.preventDefault()
      try {
        // Création de FormData
        const formData = new FormData(e.currentTarget);
        
        formData.append("user_id", user.id);
        formData.append("book_id", bookId);
    
        // Envoi de la requête
        const res = await axios.post("http://127.0.0.1:8000/api/reservation", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Si l'authentification est requise
          },
        });
    
        console.log("Réservation réussie:", res.data);
        console.log(res.data);
        onClose()

      } catch (error) {
        console.error("Erreur lors de la réservation:", error);
        throw error;
      }
    }
    
  return (
    <div  ref={refRserve} onClick={CloseModel} className='fixed inset-0 backdrop-blur-sm drop-shadow-lg bg-white/30 dark:bg-transparent  flex justify-center items-center z-50 animate-slide-down  '>
        <form onSubmit={submitReservation} className='px-6 py-8 flex flex-col gap-4 border-gray-500 dark:border-gray-500 drop-shadow-xl  bg-bglogin dark:bg-bgDarkBook dark:text-white  text-black  justify-between  w-full mx-8 max-w-[400px] z-30     ' >
        <h1 className='text-center text-3xl'>reserverBook</h1>
              <div className='flex flex-col gap-1'>
                  <label htmlFor="satart date">satart date</label>
                  <input 
                  name='start_date'
                  className='px-2 py-3 text-sm border-gray-300  dark:bg-bgDarkBook dark:border-gray-500 bg-bglogin border-2 outline-none' 
                  type="date" 
                  id='satart date' 
                  placeholder='write your satart date'/>

              </div>
              <div  className='flex flex-col gap-1'>
                  <label htmlFor="end date">end date</label>
                  <input
                  name='end_date'
                  className='dark:bg-bgDarkBook dark:border-gray-500  px-2 py-3 text-sm border-gray-300 bg-bglogin border-2 outline-none' 
                  type="date" 
                  id='end date' 
                  placeholder='enter your end date'/>

              </div>
           
              <div>
                  <button  className='py-2.5 text-white border-none bg-primary w-full hover:bg-primaryhover duration-300 capitalize' >reserver  le livre </button>
              </div>
        </form>
      </div>
  )
}

export default ReserveBook
