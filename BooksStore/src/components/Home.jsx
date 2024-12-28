import React from 'react'
import { GetUsersData } from '../Context/AppContext'

function Home() {
  const {user}=GetUsersData()
  return (
    <div className='h-[100vh]'>
      {user&&(
        <h1 className='text-center text-3xl'>je suis {user.name}</h1>

      )}
    </div>
  )
}

export default Home
